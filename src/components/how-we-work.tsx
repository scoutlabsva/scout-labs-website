import { process } from "@/lib/content";
import { SectionIntro } from "@/components/section-intro";
import { StepNode } from "@/components/step-node";

export function HowWeWork() {
  return (
    <section id="process" className="px-6 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow={process.eyebrow}
          headline={process.headline}
          description={process.description}
          className="max-w-2xl"
        />

        <ol className="relative mt-16 max-w-2xl">
          <div
            aria-hidden
            className="absolute bottom-5 left-5 top-5 w-px bg-border"
          />

          {process.steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex gap-6 pb-12 last:pb-0"
            >
              <StepNode
                index={index}
                isDestination={index === process.steps.length - 1}
              />
              <div className="pt-1.5">
                <h3 className="heading-card">{step.title}</h3>
                <p className="copy mt-2">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
