import { StepNode } from "@/components/step-node";

/**
 * Numbered steps on a connecting line: stacked on mobile, a horizontal row
 * on large screens. Same layout as the homepage "What We Do" outcomes.
 */
export function ProcessSteps({
  steps,
}: {
  steps: ReadonlyArray<{ title: string; description: string }>;
}) {
  return (
    <ol className="relative mt-12 flex flex-col gap-10 sm:mt-16 lg:flex-row lg:gap-8">
      <div aria-hidden className="absolute inset-x-0 top-5 hidden h-px bg-border lg:block" />
      {steps.map((step, index) => (
        <li key={step.title} className="relative flex flex-1 gap-5 lg:flex-col lg:gap-6">
          <StepNode index={index} />
          <div>
            <h3 className="heading-card text-xl">{step.title}</h3>
            <p className="copy mt-2 max-w-sm">{step.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
