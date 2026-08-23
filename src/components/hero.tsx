"use client";

import { hero } from "@/lib/content";
import { ScoutChevron } from "@/components/scout-chevron";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="border-b border-border/60 px-6 pb-6 pt-4 sm:pb-14 lg:px-8 lg:pb-16 lg:pt-6">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow mb-1.5 sm:mb-3">{hero.eyebrow}</p>

        <h1 className="heading-display break-words text-balance text-[clamp(2.75rem,4vw_+_2rem,3rem)] leading-[1] sm:text-6xl sm:leading-[1.08] lg:text-6xl">
          {hero.headlineLines.map((line, i) => (
            <span
              key={line}
              className={
                i > 0
                  ? "text-muted text-[clamp(2.25rem,3.2vw_+_1.7rem,2.5rem)] leading-[1] sm:text-6xl sm:leading-[1.08] lg:text-6xl"
                  : undefined
              }
            >
              {i > 0 && <br />}
              {/* A non-breaking space before the last word keeps it glued to its
                  neighbor, so narrow phones can never strand a single word alone. */}
              {line.replace(/ (\S+)$/, " $1")}
            </span>
          ))}
        </h1>

        <p className="copy leading-snug mt-1.5 max-w-md text-xl sm:mt-3 lg:max-w-lg">{hero.subhead}</p>

        <p className="mt-1.5 max-w-xs border-l-2 border-accent pl-3 font-mono text-sm font-medium leading-snug text-foreground sm:mt-3 lg:max-w-sm">
          {hero.principle}
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:mt-4 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={hero.primaryCta.href}
            onClick={() => trackEvent("primary_cta_clicked", "hero")}
            className="btn btn-lg h-11 btn-primary whitespace-nowrap sm:h-12 sm:min-w-60"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            onClick={() => trackEvent("secondary_cta_clicked", "hero")}
            className="btn btn-lg h-11 btn-secondary group whitespace-nowrap sm:h-12"
          >
            {hero.secondaryCta.label}
            <ScoutChevron className="ml-2 h-3 w-2.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
