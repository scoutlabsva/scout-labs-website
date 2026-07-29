import { services } from "@/lib/content";
import { SectionIntro } from "@/components/section-intro";
import { StepNode } from "@/components/step-node";

export function Services() {
  return (
    <section
      id="services"
      className="border-t border-border/60 bg-surface px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <SectionIntro
          eyebrow={services.eyebrow}
          headline={services.headline}
          description={services.description}
          className="max-w-2xl"
        />

        <ol className="relative mt-20 flex flex-col gap-10 lg:flex-row lg:gap-8">
          <div
            aria-hidden
            className="absolute inset-x-0 top-5 hidden h-px bg-border lg:block"
          />

          {services.items.map((item, index) => (
            <li
              key={item.title}
              className="relative flex flex-1 gap-5 lg:flex-col lg:gap-6"
            >
              <StepNode
                index={index}
                isDestination={index === services.items.length - 1}
              />
              <div>
                <h3 className="heading-card text-xl">{item.title}</h3>
                <p className="copy mt-2 max-w-xs">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
