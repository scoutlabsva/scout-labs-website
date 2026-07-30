import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HiddenWork } from "@/components/hidden-work";
import { HowWeWork } from "@/components/how-we-work";
import { Outcomes } from "@/components/outcomes";
import { Problems } from "@/components/problems";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HiddenWork />
        <Outcomes />
        <Problems />
        <Services />
        <HowWeWork />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
