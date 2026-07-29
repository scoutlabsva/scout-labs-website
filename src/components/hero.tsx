import { hero } from "@/lib/content";
import { CarbonCopyStack } from "@/components/carbon-copy-stack";
import { ScoutChevron } from "@/components/scout-chevron";

export function Hero() {
  return (
    <section className="border-b border-border/60 px-6 pb-14 pt-6 lg:px-8 lg:pb-16 lg:pt-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[52fr_48fr] lg:gap-8">
        <div>
          <p className="eyebrow mb-6">{hero.eyebrow}</p>

          <h1 className="heading-display">{hero.headline}</h1>

          <p className="copy mt-6 max-w-sm text-lg lg:max-w-md">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={hero.primaryCta.href}
              className="btn btn-lg btn-primary sm:min-w-60"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="btn btn-lg btn-secondary group sm:min-w-60"
            >
              {hero.secondaryCta.label}
              <ScoutChevron className="ml-2 h-3 w-2.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <CarbonCopyStack />
        </div>
      </div>
    </section>
  );
}
