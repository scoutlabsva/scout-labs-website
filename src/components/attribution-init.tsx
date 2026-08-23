"use client";

import { useEffect } from "react";
import { initAttribution } from "@/lib/analytics";

/** Captures first-touch marketing attribution once, as early as possible. Renders nothing. */
export function AttributionInit() {
  useEffect(() => {
    initAttribution();
  }, []);

  return null;
}
