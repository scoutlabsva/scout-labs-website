"use client";

import { useState } from "react";
import Link from "next/link";
import { hero, navLinks } from "@/lib/content";
import { ScoutMark } from "@/components/scout-mark";
import { ScoutWordmark } from "@/components/scout-wordmark";
import { ShareButton } from "@/components/share-button";
import { trackEvent } from "@/lib/analytics";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={() => setMenuOpen(false)}
        >
          <ScoutMark className="h-7 w-7" />
          <ScoutWordmark className="text-lg" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={hero.primaryCta.href}
            onClick={() => trackEvent("primary_cta_clicked", "header")}
            className="btn btn-sm btn-primary hidden whitespace-nowrap sm:inline-flex"
          >
            {hero.primaryCta.label}
          </a>

          <button
            type="button"
            className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              ) : (
                <path d="M3 6 H17 M3 10 H17 M3 14 H17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-border/60 bg-background px-6 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-sm py-3 text-base text-muted outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-2 border-t border-border/60 pt-3">
            <ShareButton className="py-2 text-base text-muted hover:text-foreground" location="mobile_menu" />
          </div>
        </nav>
      )}
    </header>
  );
}
