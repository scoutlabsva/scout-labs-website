import { outcomes } from "@/lib/content";
import { ScoutDiamond } from "@/components/scout-diamond";

export function Outcomes() {
  return (
    <section className="border-t border-border/60 bg-surface px-6 py-14 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <p className="eyebrow shrink-0">{outcomes.eyebrow}</p>
          <h2 className="heading-card max-w-xl">{outcomes.headline}</h2>
        </div>

        <ul className="mt-10 flex flex-col divide-y divide-border sm:flex-row sm:divide-y-0">
          {outcomes.items.map((item, index) => (
            <li
              key={item.label}
              className={`py-6 sm:flex-1 sm:py-0 sm:pr-8 ${
                index === 0 ? "" : "sm:border-l sm:border-border sm:pl-8"
              }`}
            >
              <div className="flex items-center gap-2">
                <ScoutDiamond className="h-3 w-3 shrink-0" />
                <p className="font-medium text-foreground">{item.label}</p>
              </div>
              <p className="copy mt-1.5 text-sm">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
