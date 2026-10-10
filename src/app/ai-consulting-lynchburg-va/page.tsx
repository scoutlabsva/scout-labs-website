import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HowItWorks } from "@/components/how-it-works";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { SectionIntro } from "@/components/section-intro";
import { TextLink } from "@/components/text-link";
import { lynchburgPage as page } from "@/lib/pages/lynchburg";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...page.meta, path: page.path });

export default function LynchburgPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "AI consulting and business automation",
            description: page.meta.description,
            path: page.path,
            areaServed: "Lynchburg, VA",
          }),
          breadcrumbSchema(page.breadcrumb, page.path),
        ]}
      />
      <Header />
      <main>
        <PageHero
          eyebrow={page.hero.eyebrow}
          title={page.hero.title}
          lead={page.hero.lead}
          secondaryCta={page.hero.secondaryCta}
        />

        <Section tone="surface">
          <SectionIntro
            eyebrow={page.problems.eyebrow}
            headline={page.problems.headline}
            description={page.problems.description}
            className="max-w-2xl"
          />
          <ul className="mt-12 grid gap-x-12 gap-y-5 sm:grid-cols-2">
            {page.problems.items.map((item) => (
              <li key={item} className="flex gap-3 text-lg leading-snug text-foreground">
                <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-scout-green" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <SectionIntro
            eyebrow={page.solutions.eyebrow}
            headline={page.solutions.headline}
            description={page.solutions.description}
            className="max-w-2xl"
          />
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {page.solutions.items.map((item) => (
              <li key={item.title} className="border-t-2 border-border-strong pt-5">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                <p className="copy mt-2">{item.description}</p>
              </li>
            ))}
          </ul>
          <TextLink href={page.solutions.link.href} className="mt-10">
            {page.solutions.link.label}
          </TextLink>
        </Section>

        <Section tone="surface">
          <SectionIntro
            eyebrow={page.workflows.eyebrow}
            headline={page.workflows.headline}
            description={page.workflows.description}
            className="max-w-2xl"
          />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {page.workflows.items.map((item) => (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="group block h-full rounded-lg border border-border bg-background p-6 shadow-soft outline-none transition-shadow hover:shadow-soft-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="copy mt-2 text-sm">{item.description}</p>
                </a>
              </li>
            ))}
          </ul>
          <TextLink href={page.workflows.link.href} className="mt-10">
            {page.workflows.link.label}
          </TextLink>
        </Section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <SectionIntro
              eyebrow={page.industries.eyebrow}
              headline={page.industries.headline}
              description={page.industries.description}
              className="lg:col-span-6"
            />
            <ul className="flex flex-wrap content-start gap-2 lg:col-span-6 lg:pt-12">
              {page.industries.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section tone="surface">
          <HowItWorks />
        </Section>

        <Section>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">{page.serviceArea.eyebrow}</p>
              <h2 className="heading-section mt-4">{page.serviceArea.headline}</h2>
              {page.serviceArea.paragraphs.map((paragraph) => (
                <p key={paragraph} className="body-copy mt-6">
                  {paragraph}
                </p>
              ))}
            </div>
            <aside className="lg:col-span-5 lg:pt-12">
              <div className="rounded-lg border border-border bg-surface p-6">
                <h3 className="heading-card text-xl">{page.serviceArea.founder.heading}</h3>
                <p className="copy mt-3">{page.serviceArea.founder.body}</p>
              </div>
            </aside>
          </div>
        </Section>

        <Section tone="surface">
          <Faq eyebrow={page.faq.eyebrow} headline={page.faq.headline} items={page.faq.items} />
        </Section>

        <CtaBand headline={page.cta.headline} description={page.cta.description} />
      </main>
      <Footer />
    </>
  );
}
