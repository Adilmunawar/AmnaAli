
'use client';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Insights } from "@/components/Insights";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <Work />
        <Insights />
      </main>
      <Footer />
    </>
  );
};

export default Index;
