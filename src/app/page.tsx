
'use client';
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Work } from "@/components/Work";
import { Insights } from "@/components/Insights";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="flex-grow pt-20">
      <Hero />
      <About />
      <Work />
      <Insights />
      <Contact />
    </main>
  );
};

export default Index;
