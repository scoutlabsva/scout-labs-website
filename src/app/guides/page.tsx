import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Section } from "@/components/section";
import { ScoutChevron } from "@/components/scout-chevron";
import { formatGuideDate, getGuides, guidesPage as page } from "@/lib/guides";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...page.meta, path: page.path });

export default function GuidesPage() {
  const guides = getGuides();

  return (
    <>
      <JsonLd data={breadcrumbSchema(page.breadcrumb, page.path)} />
      <Header />
      <main>
        <PageHero eyebrow={page.hero.eyebrow} title={page.hero.title} lead={page.hero.lead} />

        <Section tone="surface">
          {guides.length === 0 ? (
            <p className="copy">{page.empty}</p>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2">
              {guides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={guide.path}
                    className="group flex h-full flex-col rounded-lg border border-border bg-background p-6 shadow-soft outline-none transition-colors hover:border-accent/40 focus-visible:ring-2 focus-visible:ring-accent sm:p-8"
                  >
                    <time dateTime={guide.date} className="text-sm text-muted-subtle">
                      {formatGuideDate(guide.date)}
                    </time>
                    <h2 className="heading-card mt-3 text-balance">{guide.title}</h2>
                    <p className="copy mt-3 flex-1">{guide.description}</p>
                    <span className="mt-6 inline-flex items-center text-base font-medium text-accent">
                      Read the guide
                      <ScoutChevron className="ml-2 h-3 w-2.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Section>

        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
