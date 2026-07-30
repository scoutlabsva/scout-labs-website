import { hero } from "@/lib/content";
import { WorkflowDiagnosis } from "@/components/workflow-diagnosis";
import { ScoutChevron } from "@/components/scout-chevron";

export function Hero() {
  return (
    <section className="border-b border-border/60 px-6 pb-14 pt-6 lg:px-8 lg:pb-16 lg:pt-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[44fr_56fr] lg:gap-6">
        <div>
          <p className="eyebrow mb-3">{hero.eyebrow}</p>

          <h1 className="heading-display text-balance lg:text-6xl">
            {hero.headlineLines.map((line, i) => (
              <span key={line}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}
          </h1>

          <p className="copy leading-normal mt-3 max-w-md text-xl lg:max-w-lg">
            {hero.subhead}
          </p>

          <p className="mt-4 max-w-xs border-l-2 border-border-strong pl-3 font-mono text-sm leading-snug text-muted-subtle lg:max-w-sm">
            {hero.principle}
          </p>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={hero.primaryCta.href}
              className="btn btn-lg btn-primary whitespace-nowrap sm:min-w-60"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="btn btn-lg btn-secondary group whitespace-nowrap"
            >
              {hero.secondaryCta.label}
              <ScoutChevron className="ml-2 h-3 w-2.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:items-start lg:-ml-6 lg:-mt-8">
          <WorkflowDiagnosis />
        </div>
      </div>
    </section>
  );
}
