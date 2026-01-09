'use client';
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Tools } from "@/components/Tools";
import { Gallery } from "@/components/Gallery";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Tools />
          <Gallery />
          <Portfolio />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
