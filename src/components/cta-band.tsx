import { ctaBand, primaryCtaLabel, routes } from "@/lib/content";
import { ContactDetails } from "@/components/contact-details";
import { ScoutChevron } from "@/components/scout-chevron";
import { TrackedLink } from "@/components/tracked-link";

/**
 * Closing call to action for inner pages: the assessment CTA, an optional
 * secondary path, and direct phone/email for people who'd rather not use
 * a form.
 */
export function CtaBand({
  headline = ctaBand.headline,
  description = ctaBand.description,
  secondaryCta = { label: ctaBand.secondaryLabel, href: routes.examples },
}: {
  headline?: string;
  description?: string;
  secondaryCta?: { label: string; href: string } | null;
}) {
  return (
    <section className="border-t border-border/60 bg-warm-subtle px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
        <div className="lg:col-span-7">
          <h2 className="heading-section">{headline}</h2>
          <p className="body-copy mt-6">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <TrackedLink
              href={routes.assessment}
              event="primary_cta_clicked"
              value="cta_band"
              className="btn btn-lg btn-primary"
            >
              {primaryCtaLabel}
            </TrackedLink>
            {secondaryCta && (
              <TrackedLink
                href={secondaryCta.href}
                event="secondary_cta_clicked"
                value="cta_band"
                className="btn btn-lg btn-secondary group"
              >
                {secondaryCta.label}
                <ScoutChevron className="ml-2 h-3 w-2.5 transition-transform group-hover:translate-x-0.5" />
              </TrackedLink>
            )}
          </div>
        </div>

        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-foreground">Prefer to talk first?</p>
          <ContactDetails className="mt-2" />
          <p className="mt-3 text-sm text-muted">
            Based in Forest, VA. Meeting in person across the Lynchburg area.
          </p>
        </div>
      </div>
    </section>
  );
}
