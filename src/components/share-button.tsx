"use client";

import { useState } from "react";
import { share, site } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "copied" | "manual";

const shareData = {
  title: share.title,
  text: share.text,
  url: site.url,
};

export function ShareButton({
  className = "",
  location,
}: {
  className?: string;
  location: "footer" | "mobile_menu";
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function copyLink() {
    try {
      if (typeof navigator === "undefined" || !navigator.clipboard) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(shareData.url);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("manual");
    }
  }

  async function handleShare() {
    trackEvent("share_clicked", location);
    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;
        await copyLink();
      }
      return;
    }
    await copyLink();
  }

  return (
    <div className="inline-flex flex-col">
      <button
        type="button"
        onClick={handleShare}
        aria-label={status === "copied" ? "Link copied" : share.label}
        className={`outline-none inline-flex items-center gap-1.5 rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`}
      >
        <ShareIcon className="h-3.5 w-3.5 shrink-0" />
        <span>{status === "copied" ? "Link copied." : share.label}</span>
      </button>

      <span className="sr-only" role="status" aria-live="polite">
        {status === "copied" ? "Link copied." : ""}
      </span>

      {status === "manual" && (
        <input
          type="text"
          readOnly
          value={shareData.url}
          onFocus={(e) => e.currentTarget.select()}
          aria-label="Scout Labs website link"
          className="mt-2 w-full max-w-xs rounded-sm border border-border bg-background px-2 py-1.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent"
        />
      )}
    </div>
  );
}

function ShareIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={className} fill="none">
      <path
        d="M8 1.5 V10 M4.5 5 L8 1.5 L11.5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 9 V13.5 H13.5 V9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
