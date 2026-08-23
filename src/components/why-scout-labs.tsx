import { whyScoutLabs } from "@/lib/content";
import { SectionIntro } from "@/components/section-intro";

export function WhyScoutLabs() {
  return (
    <section
      id="why-scout-labs"
      className="border-t border-border/60 px-6 py-16 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow={whyScoutLabs.eyebrow}
          headline={whyScoutLabs.headline}
          description={whyScoutLabs.description}
          className="max-w-2xl"
        />
      </div>
    </section>
  );
}
