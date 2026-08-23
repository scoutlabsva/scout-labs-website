"use client";

import { useEffect } from "react";

/**
 * Cloudflare's automatic Web Analytics injection is enabled on the zone but
 * does not reach responses served by this Worker (confirmed empirically —
 * the beacon never appears in the served HTML), so the snippet is injected
 * manually instead. Gated to the production hostname so it never fires from
 * localhost, the workers.dev preview, or any other environment. Injected
 * imperatively (rather than declaratively rendered) so this component is
 * always a no-op during server/static rendering, with no hydration branch.
 */
const PRODUCTION_HOSTNAMES = new Set(["getscoutlabs.com", "www.getscoutlabs.com"]);
const CF_BEACON_TOKEN = "c2212782b80742188761ba5bc4ef7abd";

export function WebAnalytics() {
  useEffect(() => {
    if (!PRODUCTION_HOSTNAMES.has(window.location.hostname)) return;
    if (document.querySelector("script[data-cf-beacon]")) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.setAttribute("data-cf-beacon", JSON.stringify({ token: CF_BEACON_TOKEN }));
    document.body.appendChild(script);
  }, []);

  return null;
}
