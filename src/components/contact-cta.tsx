"use client";

import { useRef, useState, type ReactNode } from "react";
import { assessmentForm, contact } from "@/lib/content";
import { SectionIntro } from "@/components/section-intro";
import { AssessmentForm } from "@/components/assessment-form";
import { ContactDetails } from "@/components/contact-details";

/**
 * The assessment form with its introduction. Used inline on the homepage
 * (id "contact") and as the main content of /assessment, where `intro`
 * and `aside` supply page-specific copy.
 */
export function ContactCTA({
  id = "contact",
  intro = contact,
  aside,
}: {
  id?: string;
  intro?: { eyebrow: string; headline: string; description: string; note?: string };
  aside?: ReactNode;
}) {
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  function handleSubmitted() {
    setSubmitted(true);
    requestAnimationFrame(() => {
      successRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-border/60 bg-warm-subtle px-6 py-16 sm:py-20 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {submitted ? (
          <div
            ref={successRef}
            role="status"
            className="mx-auto max-w-xl rounded-lg border border-border bg-background p-6 text-center shadow-soft"
          >
            <p className="heading-card">{assessmentForm.successHeading}</p>
            <p className="copy mt-2 text-sm">{assessmentForm.successBody}</p>
          </div>
        ) : (
          // DOM order is intro → form → extras so the form comes right after
          // the intro on phones; on large screens the extras sit beneath the
          // intro in the left column, beside the form.
          <div className="grid gap-10 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12 lg:gap-y-0">
            <SectionIntro
              eyebrow={intro.eyebrow}
              headline={intro.headline}
              description={intro.description}
              className="lg:col-span-5 lg:row-start-1"
            />

            <div className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
              <AssessmentForm onSubmitted={handleSubmitted} />
            </div>

            <div className="lg:col-span-5 lg:row-start-2">
              {aside}
              {intro.note && <p className="copy mt-6 text-sm">{intro.note}</p>}
              <div className="mt-6 border-t border-border-strong/60 pt-5">
                <p className="text-sm font-medium text-foreground">Prefer to talk first?</p>
                <ContactDetails className="mt-2" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
