# Visitor research tracking

Internal reference for the first-party, privacy-conscious tracking added to
the Scout Labs site. No cookies, no third-party analytics, no fingerprinting.

## How it fits together

- **Anonymous behavioral events** → Cloudflare **Analytics Engine** (dataset
  `scout_labs_events`), written by the Worker at `/api/events`.
- **Voluntary visitor responses** (the assessment form) → Cloudflare **D1**
  (database `scout-labs-assessments`), written by the Worker at
  `/api/assessment`.
- **Marketing attribution** (UTM params, referrer, landing page) is captured
  client-side into `sessionStorage` on first landing, and attached only to
  assessment submissions — never to anonymous events beyond the referring
  hostname.

The client-side library is `src/lib/analytics.ts`. The server-side Worker is
`src/worker/index.ts`, with the event/value allowlist in
`src/worker/allowlist.ts` and input validation in `src/worker/validate.ts`.

## Tracked events

Every event carries only: event name, an allowlisted value, page pathname,
referring hostname (bare hostname only), an anonymous per-session ID, a
coarse device category (`mobile`/`tablet`/`desktop`), and a server-generated
timestamp. Nothing else — no IP address, no user-agent string, no personal
data, ever.

| Event | Allowed values | Answers |
|---|---|---|
| `assessment_started` | (none) | Where do visitors begin the assessment? |
| `assessment_step_completed` | `step_1`, `step_2` | Where do visitors stop before completing? |
| `assessment_submitted` | `initial_recommendation`, `schedule_conversation`, `still_exploring` | Which inquiries complete, and what do they want next? |
| `assessment_error` | `validation_error`, `network_error`, `server_error` | Where does the form fail? |
| `phone_clicked` | (none) | Not currently wired — no phone link exists on the site yet. Ready if one is added. |
| `email_clicked` | (none) | Not currently wired — the former mailto CTA is now the assessment form. Ready if a standalone email link is added. |
| `calendar_opened` | (none) | Not currently wired — no calendar link exists on the site yet. |
| `share_clicked` | `footer`, `mobile_menu` | Which share entry point gets used? |
| `primary_cta_clicked` | `header`, `hero` | Which "Get a free assessment" CTA gets used? |
| `secondary_cta_clicked` | `hero` | Does "See what's possible" get used? |

The event and value allowlists are enforced **server-side** in
`src/worker/allowlist.ts` — this is the actual security boundary, not the
client. Requests with an unrecognized event, value, or pathname are rejected
with `400`.

## Where to view or query the data

**Assessment submissions (D1):**
```
npx wrangler d1 execute scout-labs-assessments --remote \
  --command "SELECT created_at, name, email, preferred_next_step FROM assessments ORDER BY created_at DESC LIMIT 20"
```
Or via the Cloudflare dashboard: **Storage & Databases → D1 → scout-labs-assessments → Console**.

The `additional_context` column (step 2's optional "Is there anything else
you'd like to share or ask?" field, added in
`migrations/0002_add_additional_context.sql`) follows the same rule as
`frustration`: stored in D1 only on submission, truncated server-side to
1,500 characters, and never sent to the anonymous Analytics Engine event
stream.

The `sms_consent` column (added in `migrations/0003_add_sms_consent.sql`,
`INTEGER`, `1`/`0`) is the durable record of whether a submitter checked the
SMS opt-in checkbox next to the Phone field on step 2 — the consent language
and the link to `/terms` (which documents the SMS program) live right there
at the point of collection, as Twilio's campaign/toll-free verification
requires. `validateAssessment()` in `src/worker/index.ts` re-derives it
server-side rather than trusting the client: it's only ever written as `1`
when both the checkbox was checked *and* a phone number was submitted, so a
consent record never exists without a number to text. Note that this column
only records consent — it does not yet trigger anything. Nothing currently
texts leads back; the only outbound SMS the Worker sends is the internal
notification in `notifyBySms()` below, to the business owner. If an
outbound texting flow to leads is built later, `sms_consent` is the gate to
check before sending.

**Anonymous events (Analytics Engine):** query via the SQL API (Analytics
Engine has no dashboard browsing UI — it's query-only):
```bash
curl "https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/analytics_engine/sql" \
  --header "Authorization: Bearer <API_TOKEN_WITH_ANALYTICS_READ>" \
  --data "SELECT blob1 AS event, blob2 AS value, count() AS n FROM scout_labs_events WHERE timestamp > NOW() - INTERVAL '7' DAY GROUP BY blob1, blob2 ORDER BY n DESC"
```
Column mapping for `scout_labs_events`: `blob1`=event, `blob2`=value,
`blob3`=pathname, `blob4`=referring hostname, `blob5`=session id,
`blob6`=device category. `index1`=session id (for per-session grouping).

## How assessment attribution is preserved

1. On first page load, `initAttribution()` (`src/lib/analytics.ts`) reads
   `utm_source`/`utm_medium`/`utm_campaign`/`utm_content`/`utm_term` from the
   URL, `document.referrer`'s hostname, and the landing pathname — once.
2. It's written to `sessionStorage` under `sl_attribution` **only if that key
   doesn't already exist**, which is what makes it "first-touch": later
   pages or anchor navigation within the same tab session never overwrite it.
3. When the assessment form is submitted, `AssessmentForm` reads the stored
   attribution and sends it alongside the form fields to `/api/assessment`.
4. The Worker independently re-validates and length-caps every attribution
   field before writing to D1 (see `validateAssessment()` in
   `src/worker/index.ts`) — the client is never trusted.
5. Attribution is never displayed to visitors. On `localhost`/`127.0.0.1`
   only, it's exposed at `window.__scoutLabsAttribution` for debugging.

## Creating tagged campaign URLs

Append UTM parameters to `https://getscoutlabs.com/`. Only `utm_source` and
`utm_medium` are required for the link to be useful; add `utm_campaign` for
anything you'll want to compare over time.

| Channel | Example URL |
|---|---|
| LinkedIn post | `https://getscoutlabs.com/?utm_source=linkedin&utm_medium=social&utm_campaign=2026_launch` |
| Email signature | `https://getscoutlabs.com/?utm_source=email_signature&utm_medium=email&utm_campaign=always_on` |
| Local networking (business card, talk) | `https://getscoutlabs.com/?utm_source=networking&utm_medium=in_person&utm_campaign=lynchburg_chamber` |
| Printed QR code | `https://getscoutlabs.com/?utm_source=qr_code&utm_medium=print&utm_campaign=<flyer_name>` |
| Referral partner | `https://getscoutlabs.com/?utm_source=<partner_name>&utm_medium=referral` |

## Disabling research tracking

- **Turn off anonymous events only:** remove `<AttributionInit />` and
  `trackEvent(...)` calls, or simply stop calling `/api/events` by deleting
  the `analytics_engine_datasets` binding from `wrangler.jsonc` and
  redeploying — the client fails silently and nothing breaks.
- **Turn off the assessment form's server delivery:** the form itself is
  core functionality (it's how leads reach you), not "research tracking" —
  don't remove it. If you want to stop D1 writes specifically, that
  requires code changes to `AssessmentForm`/the Worker, not a config toggle.
- **Full rollback:** revert the commit(s) that introduced
  `src/worker/`, `src/lib/analytics.ts`, and the `wrangler.jsonc` bindings,
  then redeploy. The D1 database and Analytics Engine dataset can be left in
  place harmlessly (no writes without the code) or deleted via
  `npx wrangler d1 delete scout-labs-assessments`.

## Email notification on submission

`notifyByEmail()` in `src/worker/index.ts` sends a notification to
`hello@getscoutlabs.com` (reply-to set to the submitter) after every
successful D1 write in `handleAssessment`, via `ctx.waitUntil(...)` so it
never blocks or fails the visitor's response.

It uses **Resend**, not Cloudflare Email Sending — Cloudflare's own Email
Sending product requires the Workers Paid plan, and this site runs on
Workers Free. Resend is called directly over `fetch()` from the Worker, so
no paid Cloudflare product or binding is needed.

Setup (already done for `getscoutlabs.com`, documented here for
reference/rotation):

1. Resend dashboard → **Domains → Add Domain** → `notify.getscoutlabs.com`
   (a subdomain, kept separate from the root domain's existing email
   routing/DMARC so nothing about `hello@getscoutlabs.com` receiving mail is
   affected).
2. Add the DKIM (TXT) and SPF (MX + TXT) records Resend provides to the
   `getscoutlabs.com` Cloudflare DNS zone, scoped to the `notify` subdomain.
   Click **Enable Sending** once DKIM verifies.
3. Create a Resend API key (Sending permission, scoped to the domain) and
   store it with `npx wrangler secret put RESEND_API_KEY` — it's a Workers
   secret, not a `wrangler.jsonc` binding, so it never appears in source
   control.
4. Redeploy (`npm run deploy`). The Worker checks
   `if (env.RESEND_API_KEY)` and is a no-op until the secret is set.

If Cloudflare Email Sending later becomes available on Workers Free (or the
account moves to Workers Paid), swapping back to the native binding just
means restoring the old `env.EMAIL.send()` call and adding
`"send_email": [{ "name": "EMAIL" }]` to `wrangler.jsonc` — no other logic
changes.

Either way, D1 remains the durable record of every submission — a failed or
delayed email notification never loses data.

## SMS notification on submission

`notifyBySms()` in `src/worker/index.ts` sends a short text (name, business,
email, and what they want to improve) to a single number after every
successful D1 write, via `ctx.waitUntil(...)` alongside `notifyByEmail()`.

It uses **Twilio**, called directly over `fetch()` from the Worker — same
pattern as Resend, no Cloudflare binding involved.

Setup (already done, documented here for reference/rotation):

1. Twilio Console → buy an SMS-capable number (the "from" number).
2. Grab the Account SID and Auth Token from the Twilio Console dashboard.
3. Store four values as Workers secrets (`npx wrangler secret put <NAME>`):
   `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_FROM_NUMBER` (the
   Twilio number), and `NOTIFY_SMS_TO_NUMBER` (the destination cell number)
   — all in E.164 format (e.g. `+15551234567`). None of these are
   `wrangler.jsonc` bindings, so none appear in source control.
4. Redeploy (`npm run deploy`). The Worker checks that all four are present
   and is a no-op otherwise.

To change the destination number later, just re-run
`wrangler secret put NOTIFY_SMS_TO_NUMBER` with the new value and redeploy
— no code change needed.
