"use client";

import { useRef, useState } from "react";
import { assessmentForm, contact } from "@/lib/content";
import { SectionIntro } from "@/components/section-intro";
import { AssessmentForm } from "@/components/assessment-form";

export function ContactCTA() {
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
      id="contact"
      className="border-t border-border/60 bg-warm-subtle px-6 py-16 sm:py-20 lg:px-8 lg:py-32"
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
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <SectionIntro
                eyebrow={contact.eyebrow}
                headline={contact.headline}
                description={contact.description}
              />
              <p className="copy mt-6 text-sm">{contact.note}</p>
            </div>

            <div className="lg:col-span-7">
              <AssessmentForm onSubmitted={handleSubmitted} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
