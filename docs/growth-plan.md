# Growth plan: local SEO and inbound leads

A low-maintenance plan for turning the site into a steady source of
qualified leads from Lynchburg-area small businesses. Written to run
alongside a full-time job: roughly 2–4 hours a month.

## What the site now does

| Page | Search intent | Job |
|---|---|---|
| `/` | Brand searches; "AI consultant Central Virginia" | Explain Scout Labs, show local presence, capture the assessment inline |
| `/ai-consulting-lynchburg-va` | "AI consulting Lynchburg", "business automation Lynchburg VA" | The main local landing page |
| `/business-process-automation` | "automate business processes small business" | Explain the service in plain language |
| `/automation-examples` | "automation examples for [industry]" | Help visitors picture what could be built |
| `/assessment` | Direct / CTA traffic | Convert: the free assessment form |

Every page ends with the assessment CTA plus phone and email.

## One-time setup (do these first)

1. **Deploy** (`npm run deploy`) and spot-check every page on a phone.
2. **Google Search Console** (free): verify `getscoutlabs.com` using a DNS
   record in Cloudflare, then submit `https://getscoutlabs.com/sitemap.xml`.
   Use URL Inspection → "Request indexing" on the four new pages.
3. **Google Business Profile**: keep the name, phone (`(540) 783-7004`),
   website, and service areas identical to the site. Set the website link
   to the homepage. List services matching the site's language (AI
   consulting, business process automation, workflow assessment). Hide
   the street address (service-area business).
4. **Bing Webmaster Tools** (free): import from Search Console in one click.
5. **Founder photo**: add a real photo of Michael to the About section and
   the Lynchburg page. A face builds more trust than any copy change.
6. **Local citations** (free, one afternoon): Lynchburg Regional Chamber,
   Bedford and Amherst chambers, Apple Maps (Business Connect), Bing
   Places, and LinkedIn company page, all with identical name, phone, and
   website.

## Content: one useful article a month

Write from real questions owners ask. Aim for specific, honest answers
(800–1,500 words) that end with a natural link to `/assessment`. Suggested
order:

1. **What business processes should you automate first?** Evergreen,
   links naturally to the examples page.
2. **How much does small business automation cost?** High intent. Explain
   what drives cost honestly; ranges only if you're comfortable with them.
3. **How to automate customer follow-ups** (step by step, with a
   spreadsheet-level option and a CRM-level option).
4. **Can AI process customer emails automatically?** Show what works
   today and where a person still needs to review.
5. **Is AI automation worth it for a small business?** Include when the
   answer is no.
6. **Five tasks Lynchburg-area businesses can automate this year**: local
   angle, good to share with the chamber and on LinkedIn.

Articles go in `content/guides/` as Markdown files and publish at
`/guides/<filename>` (see "Writing a guide" in the README). The first one,
"What to automate first in a small service business," covers topic 1.
After publishing, share a short summary on LinkedIn and the Google
Business Profile with a link back to the article.

**Biggest lever over time:** replace illustrative examples with real case
studies (`kind: "case-study"`) as soon as a client agrees, and ask every
happy client for a Google review. Reviews drive Maps rankings more than
anything on the website.

## Measurement: a 15-minute monthly check

| What | Where |
|---|---|
| Search impressions, clicks, queries, top pages | Google Search Console → Performance |
| Visits by page | Cloudflare Web Analytics (already installed) |
| CTA clicks by page, phone/email taps | Analytics Engine query in `docs/research-tracking.md` (`primary_cta_clicked`, `phone_clicked`, `email_clicked`) |
| Assessment submissions + landing page / source | D1 query in `docs/research-tracking.md` (`landing_pathname`, `referrer_hostname`) |
| Calls | Twilio call logs for (540) 783-7004 |
| GBP views, calls, website clicks | Google Business Profile → Performance |

Keep a simple spreadsheet with one row per month: impressions, clicks,
assessments, calls, discovery calls held, proposals sent, clients signed.
The bottom four rows are the ones that matter.
