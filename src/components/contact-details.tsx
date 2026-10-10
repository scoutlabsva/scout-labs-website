"use client";

import { site } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

/**
 * Phone and email as real links, so visitors who'd rather call or write
 * than fill in a form can do it in one tap. Clicks are counted anonymously.
 */
export function ContactDetails({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-col gap-1.5 text-sm ${className}`}>
      <li>
        <span className="text-muted">Call </span>
        <a
          href={`tel:${site.phoneE164}`}
          onClick={() => trackEvent("phone_clicked")}
          className="nav-link text-sm font-medium text-foreground"
        >
          {site.phone}
        </a>
      </li>
      <li>
        <span className="text-muted">Email </span>
        <a
          href={`mailto:${site.email}`}
          onClick={() => trackEvent("email_clicked")}
          className="nav-link text-sm font-medium text-foreground"
        >
          {site.email}
        </a>
      </li>
    </ul>
  );
}
