import { localPresence, site } from "@/lib/content";
import { SectionIntro } from "@/components/section-intro";
import { TextLink } from "@/components/text-link";
import { ContactDetails } from "@/components/contact-details";

export function LocalPresence() {
  return (
    <section
      id="local"
      className="scroll-mt-20 border-t border-border/60 bg-surface px-6 py-16 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <SectionIntro
            eyebrow={localPresence.eyebrow}
            headline={localPresence.headline}
            description={localPresence.description}
          />
          <p className="copy mt-4 max-w-2xl">{localPresence.remote}</p>
          <TextLink href={localPresence.link.href} className="mt-8">
            {localPresence.link.label}
          </TextLink>
        </div>

        <div className="lg:col-span-5 lg:pt-12">
          <div className="rounded-lg border border-border bg-background p-6 shadow-soft">
            <p className="eyebrow">Service area</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-foreground"
                >
                  {area}
                </li>
              ))}
              <li className="rounded-full border border-dashed border-border-strong px-3 py-1.5 text-sm text-muted">
                Remote, nationwide
              </li>
            </ul>
            <div className="mt-6 border-t border-border pt-5">
              <ContactDetails />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
