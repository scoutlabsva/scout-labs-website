"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { trackEvent, type EventName } from "@/lib/analytics";

/**
 * An internal link that records an anonymous click event. Lets server
 * components (page heroes, CTA bands) keep CTA tracking without becoming
 * client components themselves. Event values must be allowlisted in
 * src/worker/allowlist.ts.
 */
export function TrackedLink({
  href,
  event,
  value = "",
  className,
  children,
}: {
  href: string;
  event: EventName;
  value?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} onClick={() => trackEvent(event, value)} className={className}>
      {children}
    </Link>
  );
}
