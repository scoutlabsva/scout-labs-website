import type { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

/**
 * Shared shell for long-form legal content (Terms of Service, Privacy
 * Policy). Renders the standard header/footer and a constrained-measure
 * reading column; section structure and copy live in each page.
 */
export function LegalPage({
  eyebrow,
  title,
  effectiveDate,
  children,
}: {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main>
        <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="heading-section mt-4">{title}</h1>
            <p className="copy mt-3 text-sm">Effective date: {effectiveDate}</p>

            <div className="legal-copy mt-10">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
