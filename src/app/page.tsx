import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhatWeDo } from "@/components/what-we-do";
import { WhyScoutLabs } from "@/components/why-scout-labs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <WhyScoutLabs />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
