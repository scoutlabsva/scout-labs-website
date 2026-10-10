import { processSteps } from "@/lib/content";
import { ProcessSteps } from "@/components/process-steps";
import { SectionIntro } from "@/components/section-intro";

export function HowItWorks({ id = "how-it-works" }: { id?: string }) {
  return (
    <div id={id} className="scroll-mt-20">
      <SectionIntro
        eyebrow={processSteps.eyebrow}
        headline={processSteps.headline}
        className="max-w-2xl"
      />
      <ProcessSteps steps={processSteps.steps} />
    </div>
  );
}
