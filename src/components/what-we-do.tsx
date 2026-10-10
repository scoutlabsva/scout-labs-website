import { whatWeDo } from "@/lib/content";
import { ProcessSteps } from "@/components/process-steps";
import { TextLink } from "@/components/text-link";

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="scroll-mt-20 border-t border-border/60 bg-surface px-6 py-16 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">{whatWeDo.eyebrow}</p>
          <h2 className="heading-section mt-4">{whatWeDo.headline}</h2>
        </div>

        <ProcessSteps steps={whatWeDo.items} />

        <p className="mt-10 max-w-2xl border-l-2 border-border-strong pl-3 font-mono text-sm leading-snug text-muted-subtle sm:mt-16">
          {whatWeDo.closing}
        </p>

        <TextLink href={whatWeDo.link.href} className="mt-8">
          {whatWeDo.link.label}
        </TextLink>
      </div>
    </section>
  );
}
