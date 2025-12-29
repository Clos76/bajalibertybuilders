import Header from "@/src/components/layout/Header";
import Hero from "@/src/components/sections/Hero";
import TrustBar from "@/src/components/sections/TrustBar";
import Portfolio from "@/src/components/sections/Portfolio";
import Lifestyle from "@/src/components/sections/Lifestyle";
import ForeignBuyers from "@/src/components/sections/ForeignBuyers";
import Process from "@/src/components/sections/Process";
import LeadMagnet from "@/src/components/sections/LeadMagnet";
import Testimonials from "@/src/components/sections/Testimonials";
import FAQ from "@/src/components/sections/FAQ";
import FinalCTA from "@/src/components/sections/FinalCTA";
import Footer from "@/src/components/layout/Footer";
import AboutSection from "@/src/components/sections/AboutSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <AboutSection />
        <Portfolio />
        <Lifestyle />
        <ForeignBuyers />
        <Process />
        <LeadMagnet />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
