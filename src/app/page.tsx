'use client';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        <Hero />
        {/* We will build the new sections here */}
      </main>
      <Footer />
    </>
  );
};

export default Index;
