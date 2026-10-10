import { whyScoutLabs } from "@/lib/content";
import { SectionIntro } from "@/components/section-intro";

export function WhyScoutLabs() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border/60 px-6 py-16 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
        <SectionIntro
          eyebrow={whyScoutLabs.eyebrow}
          headline={whyScoutLabs.headline}
          description={whyScoutLabs.description}
          className="lg:col-span-7"
        />

        <ul className="flex flex-col gap-6 lg:col-span-5 lg:pt-12">
          {whyScoutLabs.principles.map((principle) => (
            <li key={principle.title} className="border-l-2 border-scout-green pl-4">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{principle.title}</h3>
              <p className="copy mt-1">{principle.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
