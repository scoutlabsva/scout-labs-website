import type { ReactNode } from "react";
import { primaryCtaLabel, routes } from "@/lib/content";
import { ScoutChevron } from "@/components/scout-chevron";
import { TrackedLink } from "@/components/tracked-link";

/**
 * Hero for the inner marketing pages: eyebrow, the page's single H1, a
 * lead paragraph, and the primary assessment CTA above the fold.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  secondaryCta,
  showPrimaryCta = true,
  children,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  secondaryCta?: { label: string; href: string };
  showPrimaryCta?: boolean;
  children?: ReactNode;
}) {
  return (
    <section className="px-6 pb-14 pt-10 sm:pb-16 sm:pt-14 lg:px-8 lg:pb-20 lg:pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="heading-display mt-4 text-balance text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="body-copy mt-6">{lead}</p>

          {(showPrimaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              {showPrimaryCta && (
                <TrackedLink
                  href={routes.assessment}
                  event="primary_cta_clicked"
                  value="page_hero"
                  className="btn btn-lg btn-primary"
                >
                  {primaryCtaLabel}
                </TrackedLink>
              )}
              {secondaryCta && (
                <TrackedLink
                  href={secondaryCta.href}
                  event="secondary_cta_clicked"
                  value="page_hero"
                  className="btn btn-lg btn-secondary group"
                >
                  {secondaryCta.label}
                  <ScoutChevron className="ml-2 h-3 w-2.5 transition-transform group-hover:translate-x-0.5" />
                </TrackedLink>
              )}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
