import {
  ALLOWED_PATHNAMES,
  BUSINESS_AREA_VALUES,
  DEVICE_CATEGORIES,
  EVENT_VALUES,
  IMPROVE_FOCUS_VALUES,
  PREFERRED_NEXT_STEP_VALUES,
  TEAM_SIZE_VALUES,
} from "./allowlist";
import {
  cleanHostname,
  cleanPathname,
  cleanString,
  isOneOf,
  isValidEmail,
  isValidSessionId,
  truncateString,
} from "./validate";

export interface Env {
  EVENTS: AnalyticsEngineDataset;
  ASSESSMENTS_DB: D1Database;
  EVENTS_RATE_LIMITER: RateLimit;
  ASSESSMENT_RATE_LIMITER: RateLimit;
  /**
   * Resend API key (see docs/research-tracking.md). Set via
   * `wrangler secret put RESEND_API_KEY` — not a wrangler.jsonc binding.
   * Cloudflare's own Email Sending product requires the Workers Paid plan,
   * so notifications are sent via Resend instead (works on Workers Free),
   * from the `notify.getscoutlabs.com` subdomain. Until this secret is set,
   * notifyByEmail() is a no-op — the D1 write is what makes a submission
   * durable, this is a best-effort convenience on top of it.
   */
  RESEND_API_KEY?: string;
  /**
   * Twilio credentials for SMS notifications (see docs/research-tracking.md).
   * Set via `wrangler secret put TWILIO_ACCOUNT_SID` and
   * `wrangler secret put TWILIO_AUTH_TOKEN`. TWILIO_FROM_NUMBER and
   * NOTIFY_SMS_TO_NUMBER are plain (non-secret) values in E.164 format
   * (e.g. "+15551234567"), also set as secrets for simplicity/consistency.
   * Until all four are set, notifyBySms() is a no-op.
   */
  TWILIO_ACCOUNT_SID?: string;
  TWILIO_AUTH_TOKEN?: string;
  TWILIO_FROM_NUMBER?: string;
  NOTIFY_SMS_TO_NUMBER?: string;
}

const MAX_BODY_BYTES = 4096;
const JSON_HEADERS = { "content-type": "application/json" };

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("Origin");
  if (!origin) return false;
  try {
    return new URL(origin).host === new URL(request.url).host;
  } catch {
    return false;
  }
}

async function readBoundedJson(request: Request): Promise<Record<string, unknown> | null> {
  const raw = await request.text();
  if (raw.length === 0 || raw.length > MAX_BODY_BYTES) return null;
  try {
    const parsed = JSON.parse(raw);
    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) return null;
    return parsed as Record<string, unknown>;
  } catch {
    return null;
  }
}

async function handleEvents(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  if (!isSameOrigin(request)) return json({ error: "forbidden" }, 403);

  const clientIp = request.headers.get("CF-Connecting-IP") ?? "unknown";
  const { success: withinLimit } = await env.EVENTS_RATE_LIMITER.limit({ key: clientIp });
  if (!withinLimit) return json({ error: "rate_limited" }, 429);

  const body = await readBoundedJson(request);
  if (!body) return json({ error: "malformed_payload" }, 400);

  const eventName = typeof body.event === "string" ? body.event : "";
  const allowedValues = EVENT_VALUES[eventName];
  if (!allowedValues) return json({ error: "unknown_event" }, 400);

  const value = typeof body.value === "string" ? body.value : "";
  if (!allowedValues.includes(value)) return json({ error: "unknown_value" }, 400);

  const pathname = cleanPathname(body.pathname);
  if (!ALLOWED_PATHNAMES.has(pathname)) return json({ error: "unknown_pathname" }, 400);

  if (!isValidSessionId(body.sessionId)) return json({ error: "invalid_session" }, 400);
  const sessionId = body.sessionId as string;

  const deviceCategory = cleanString(body.deviceCategory, 20);
  if (!DEVICE_CATEGORIES.has(deviceCategory)) return json({ error: "invalid_device_category" }, 400);

  // Referring hostname is optional first-touch attribution, hostname-only.
  const referrerHostname = cleanHostname(body.referrerHostname);

  ctx.waitUntil(
    (async () => {
      try {
        env.EVENTS.writeDataPoint({
          blobs: [eventName, value, pathname, referrerHostname, sessionId, deviceCategory],
          doubles: [],
          indexes: [sessionId],
        });
      } catch {
        // Analytics failures must never surface to the visitor.
      }
    })(),
  );

  return json({ success: true });
}

interface AssessmentSubmission {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  smsConsent: boolean;
  preferredNextStep: string;
  improveFocus: string;
  businessArea: string;
  teamSize: string;
  frustration: string;
  additionalContext: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  referrerHostname: string;
  landingPathname: string;
}

function validateAssessment(body: Record<string, unknown>): AssessmentSubmission | null {
  if (!isOneOf(body.improveFocus, IMPROVE_FOCUS_VALUES)) return null;
  if (!isOneOf(body.businessArea, BUSINESS_AREA_VALUES)) return null;
  if (!isOneOf(body.teamSize, TEAM_SIZE_VALUES)) return null;
  if (!isOneOf(body.preferredNextStep, PREFERRED_NEXT_STEP_VALUES)) return null;

  const name = cleanString(body.name, 200);
  if (!name) return null;

  if (!isValidEmail(body.email)) return null;

  const phone = cleanString(body.phone, 30);
  // Consent is only meaningful alongside a phone number to text — never
  // record it as true without one, regardless of what the client sent.
  const smsConsent = body.smsConsent === true && phone.length > 0;

  return {
    name,
    businessName: cleanString(body.businessName, 200),
    email: body.email,
    phone,
    smsConsent,
    preferredNextStep: body.preferredNextStep,
    improveFocus: body.improveFocus,
    businessArea: body.businessArea,
    teamSize: body.teamSize,
    frustration: truncateString(body.frustration, 1000),
    additionalContext: truncateString(body.additionalContext, 1500),
    utmSource: cleanString(body.utmSource, 100),
    utmMedium: cleanString(body.utmMedium, 100),
    utmCampaign: cleanString(body.utmCampaign, 100),
    utmContent: cleanString(body.utmContent, 100),
    utmTerm: cleanString(body.utmTerm, 100),
    referrerHostname: cleanHostname(body.referrerHostname),
    landingPathname: cleanPathname(body.landingPathname),
  };
}

async function notifyByEmail(env: Env, submission: AssessmentSubmission): Promise<void> {
  if (!env.RESEND_API_KEY) return;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: "Scout Labs Website <notify@notify.getscoutlabs.com>",
        to: "hello@getscoutlabs.com",
        reply_to: submission.email,
        subject: `New assessment request — ${submission.name}`,
        text: [
          `Name: ${submission.name}`,
          `Business: ${submission.businessName || "(not provided)"}`,
          `Email: ${submission.email}`,
          `Phone: ${submission.phone || "(not provided)"}`,
          submission.phone ? `SMS consent: ${submission.smsConsent ? "yes" : "no"}` : "",
          `Preferred next step: ${submission.preferredNextStep}`,
          "",
          `Most wants to improve: ${submission.improveFocus}`,
          `Business area: ${submission.businessArea}`,
          `Team size: ${submission.teamSize}`,
          submission.frustration ? `Frustration to remove: ${submission.frustration}` : "",
          submission.additionalContext
            ? `Additional context or questions: ${submission.additionalContext}`
            : "",
          "",
          submission.utmSource || submission.referrerHostname
            ? `Source: ${submission.utmSource || submission.referrerHostname}`
            : "",
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });
    if (!response.ok) {
      console.error(`Resend notification failed: ${response.status} ${await response.text()}`);
    }
  } catch (err) {
    // Best-effort notification only — the D1 row is the durable record.
    console.error("Resend notification threw", err);
  }
}

async function notifyBySms(env: Env, submission: AssessmentSubmission): Promise<void> {
  if (
    !env.TWILIO_ACCOUNT_SID ||
    !env.TWILIO_AUTH_TOKEN ||
    !env.TWILIO_FROM_NUMBER ||
    !env.NOTIFY_SMS_TO_NUMBER
  ) {
    return;
  }
  try {
    const body = new URLSearchParams({
      From: env.TWILIO_FROM_NUMBER,
      To: env.NOTIFY_SMS_TO_NUMBER,
      Body: `New assessment request from ${submission.name}${
        submission.businessName ? ` (${submission.businessName})` : ""
      } — ${submission.email}. Wants: ${submission.improveFocus}.`,
    });
    const response = await fetch(
      `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`)}`,
          "content-type": "application/x-www-form-urlencoded",
        },
        body,
      },
    );
    const responseText = await response.text();
    if (!response.ok) {
      console.error(`Twilio notification failed: ${response.status} ${responseText}`);
    } else {
      // Temporary: log the accepted message's sid/status so a "no text
      // arrived" report can be cross-referenced against Twilio's own
      // delivery status (e.g. carrier filtering) rather than assumed to be
      // a Worker-side failure. Remove once SMS delivery is confirmed stable.
      console.log(`Twilio accepted message: ${responseText}`);
    }
  } catch (err) {
    // Best-effort notification only — the D1 row is the durable record.
    console.error("Twilio notification threw", err);
  }
}

async function handleAssessment(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  if (!isSameOrigin(request)) return json({ error: "forbidden" }, 403);

  const clientIp = request.headers.get("CF-Connecting-IP") ?? "unknown";
  const { success: withinLimit } = await env.ASSESSMENT_RATE_LIMITER.limit({ key: clientIp });
  if (!withinLimit) return json({ error: "rate_limited" }, 429);

  const body = await readBoundedJson(request);
  if (!body) return json({ error: "malformed_payload" }, 400);

  const submission = validateAssessment(body);
  if (!submission) return json({ error: "validation_error" }, 400);

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();

  try {
    await env.ASSESSMENTS_DB.prepare(
      `INSERT INTO assessments (
        id, created_at, name, business_name, email, phone, sms_consent, preferred_next_step,
        improve_focus, business_area, team_size, frustration, additional_context,
        utm_source, utm_medium, utm_campaign, utm_content, utm_term,
        referrer_hostname, landing_pathname
      ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    )
      .bind(
        id,
        createdAt,
        submission.name,
        submission.businessName || null,
        submission.email,
        submission.phone || null,
        submission.smsConsent ? 1 : 0,
        submission.preferredNextStep,
        submission.improveFocus,
        submission.businessArea,
        submission.teamSize,
        submission.frustration || null,
        submission.additionalContext || null,
        submission.utmSource || null,
        submission.utmMedium || null,
        submission.utmCampaign || null,
        submission.utmContent || null,
        submission.utmTerm || null,
        submission.referrerHostname || null,
        submission.landingPathname || null,
      )
      .run();
  } catch {
    return json({ error: "server_error" }, 500);
  }

  ctx.waitUntil(notifyByEmail(env, submission));
  ctx.waitUntil(notifyBySms(env, submission));

  return json({ success: true });
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === "POST" && url.pathname === "/api/events") {
      return handleEvents(request, env, ctx);
    }

    if (request.method === "POST" && url.pathname === "/api/assessment") {
      return handleAssessment(request, env, ctx);
    }

    return new Response("Not found", { status: 404 });
  },
};

export default worker;
