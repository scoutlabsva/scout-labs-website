import type { Metadata } from "next";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { LocalPresence } from "@/components/local-presence";
import { ProblemsWeSolve } from "@/components/problems-we-solve";
import { Section } from "@/components/section";
import { WhatWeDo } from "@/components/what-we-do";
import { WhyScoutLabs } from "@/components/why-scout-labs";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Scout Labs | Practical AI & Automation in Central Virginia",
  description:
    "Practical AI and automation for small businesses in Lynchburg, Forest, Bedford, and Central Virginia. Cut repetitive work. Get a free automation assessment.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemsWeSolve />
        <WhatWeDo />
        <Section>
          <HowItWorks />
        </Section>
        <LocalPresence />
        <WhyScoutLabs />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
