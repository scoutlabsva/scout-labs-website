import { whatWeDo } from "@/lib/content";
import { StepNode } from "@/components/step-node";

export function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className="border-t border-border/60 bg-surface px-6 py-16 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">{whatWeDo.eyebrow}</p>
          <h2 className="heading-section mt-4">{whatWeDo.headline}</h2>
        </div>

        <ol className="relative mt-12 flex flex-col gap-10 sm:mt-20 lg:flex-row lg:gap-8">
          <div
            aria-hidden
            className="absolute inset-x-0 top-5 hidden h-px bg-border lg:block"
          />

          {whatWeDo.items.map((item, index) => (
            <li
              key={item.title}
              className="relative flex flex-1 gap-5 lg:flex-col lg:gap-6"
            >
              <StepNode index={index} />
              <div>
                <h3 className="heading-card text-xl">{item.title}</h3>
                <p className="copy mt-2 max-w-xs">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl border-l-2 border-border-strong pl-3 font-mono text-sm leading-snug text-muted-subtle sm:mt-16">
          {whatWeDo.closing}
        </p>
      </div>
    </section>
  );
}
