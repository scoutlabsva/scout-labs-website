import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
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
