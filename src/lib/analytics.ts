"use client";

/**
 * First-party, privacy-conscious event tracking and marketing attribution.
 * No cookies, no fingerprinting, no third-party requests — everything here
 * talks only to this site's own same-origin /api/events endpoint. See
 * docs/research-tracking.md for the full event reference.
 */

const SESSION_ID_KEY = "sl_session_id";
const ATTRIBUTION_KEY = "sl_attribution";
const LOCAL_HOSTNAMES = new Set(["localhost", "127.0.0.1"]);

export type EventName =
  | "problem_selected"
  | "intervention_viewed"
  | "assessment_started"
  | "assessment_step_completed"
  | "assessment_submitted"
  | "assessment_error"
  | "phone_clicked"
  | "email_clicked"
  | "calendar_opened"
  | "share_clicked"
  | "primary_cta_clicked"
  | "secondary_cta_clicked";

export interface Attribution {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  referrerHostname: string;
  landingPathname: string;
}

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function getSessionId(): string {
  if (!isBrowser()) return "";
  try {
    let id = window.sessionStorage.getItem(SESSION_ID_KEY);
    if (!id) {
      id = crypto.randomUUID();
      window.sessionStorage.setItem(SESSION_ID_KEY, id);
    }
    return id;
  } catch {
    // sessionStorage unavailable (private mode, disabled storage, etc.) — degrade silently.
    return "";
  }
}

function getDeviceCategory(): "mobile" | "tablet" | "desktop" {
  if (!isBrowser()) return "desktop";
  const width = window.innerWidth;
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

/**
 * Captures first-touch marketing attribution exactly once per browser
 * session. Call on initial app load. Never overwrites an existing value —
 * that's what makes it "first touch" across any later internal navigation.
 */
export function initAttribution(): void {
  if (!isBrowser()) return;
  try {
    if (window.sessionStorage.getItem(ATTRIBUTION_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    let referrerHostname = "";
    if (document.referrer) {
      try {
        referrerHostname = new URL(document.referrer).hostname;
      } catch {
        referrerHostname = "";
      }
    }

    const attribution: Attribution = {
      utmSource: params.get("utm_source") ?? "",
      utmMedium: params.get("utm_medium") ?? "",
      utmCampaign: params.get("utm_campaign") ?? "",
      utmContent: params.get("utm_content") ?? "",
      utmTerm: params.get("utm_term") ?? "",
      referrerHostname,
      landingPathname: window.location.pathname,
    };

    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));

    if (LOCAL_HOSTNAMES.has(window.location.hostname)) {
      // Debug visibility only on localhost — never shown to real visitors.
      (window as unknown as { __scoutLabsAttribution?: Attribution }).__scoutLabsAttribution = attribution;
    }
  } catch {
    // sessionStorage unavailable — attribution simply won't be captured this session.
  }
}

export function getAttribution(): Attribution {
  const empty: Attribution = {
    utmSource: "",
    utmMedium: "",
    utmCampaign: "",
    utmContent: "",
    utmTerm: "",
    referrerHostname: "",
    landingPathname: "",
  };
  if (!isBrowser()) return empty;
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

/**
 * Fire-and-forget anonymous event. Never throws, never blocks UI, and
 * failures are invisible to the visitor. Only event name, pathname,
 * referring hostname, session id, and device category are sent — no
 * personal data ever passes through here.
 */
export function trackEvent(event: EventName, value = ""): void {
  if (!isBrowser()) return;

  const payload = {
    event,
    value,
    pathname: window.location.pathname,
    sessionId: getSessionId(),
    deviceCategory: getDeviceCategory(),
    referrerHostname: getAttribution().referrerHostname,
  };

  try {
    const body = JSON.stringify(payload);
    if (navigator.sendBeacon) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon("/api/events", blob);
      return;
    }
    void fetch("/api/events", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Never let analytics break a real user interaction.
  }
}
