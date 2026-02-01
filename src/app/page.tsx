'use client';
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Aurora from "@/components/Aurora";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Aurora
        colorStops={["#0F172A", "#0D9488", "#10B981"]}
        blend={0.7}
        amplitude={1.2}
        speed={0.8}
      />
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        <main className="min-h-[calc(100vh-200px)] flex items-center justify-center">
          {/* We will build the new sections here */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
