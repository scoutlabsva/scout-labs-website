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
import { routes } from "@/lib/content";
import { automationPage as page } from "@/lib/pages/automation";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...page.meta, path: page.path });

const labels = { problem: "The problem", solution: "The solution", benefit: "The benefit" } as const;

export default function BusinessProcessAutomationPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Business process automation",
            description: page.meta.description,
            path: page.path,
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
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <SectionIntro
              eyebrow={page.explainer.eyebrow}
              headline={page.explainer.headline}
              className="lg:col-span-5"
            />
            <div className="lg:col-span-7 lg:pt-12">
              {page.explainer.paragraphs.map((paragraph, i) => (
                <p key={paragraph} className={`body-copy ${i > 0 ? "mt-6" : ""}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <SectionIntro
            eyebrow={page.areas.eyebrow}
            headline={page.areas.headline}
            className="max-w-2xl"
          />
          <div className="mt-12 flex flex-col gap-6">
            {page.areas.items.map((area, index) => (
              <article
                key={area.id}
                id={area.id}
                className="scroll-mt-20 rounded-lg border border-border bg-background p-6 shadow-soft sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="step-node">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="heading-card">{area.title}</h3>
                </div>
                <dl className="mt-6 grid gap-6 md:grid-cols-3">
                  {(["problem", "solution", "benefit"] as const).map((key) => (
                    <div key={key}>
                      <dt className="text-xs font-medium uppercase tracking-wide text-muted-subtle">
                        {labels[key]}
                      </dt>
                      <dd className={`mt-2 leading-relaxed ${key === "benefit" ? "text-foreground" : "text-muted"}`}>
                        {area[key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <TextLink href={routes.examples} className="mt-10">
            See step-by-step automation examples
          </TextLink>
        </Section>

        <Section tone="surface">
          <SectionIntro
            eyebrow={page.approach.eyebrow}
            headline={page.approach.headline}
            className="max-w-2xl"
          />
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {page.approach.items.map((item) => (
              <li key={item.title} className="border-l-2 border-scout-green pl-4">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
                <p className="copy mt-1">{item.description}</p>
              </li>
            ))}
          </ul>
        </Section>

        <Section>
          <HowItWorks />
          <p className="copy mt-12 max-w-2xl">
            Based in Forest, Virginia, we work in person with businesses across the Lynchburg area and remotely
            with clients nationwide.{" "}
            <TextLink href={routes.lynchburg} className="text-base">
              AI consulting in Lynchburg, VA
            </TextLink>
          </p>
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
