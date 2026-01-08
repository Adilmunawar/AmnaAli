import AboutSection from "@/components/landing/about-section";
import ContactSection from "@/components/landing/contact-section";
import HeroSection from "@/components/landing/hero-section";
import ProjectsSection from "@/components/landing/projects-section";
import SkillsSection from "@/components/landing/skills-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <div id="content" className="container px-4 md:px-6 flex flex-col">
        <AboutSection />
        <Separator className="my-16 md:my-24 bg-border/40" />
        <SkillsSection />
        <Separator className="my-16 md:my-24 bg-border/40" />
        <ProjectsSection />
        <Separator className="my-16 md:my-24 bg-border/40" />
        <TestimonialsSection />
        <Separator className="my-16 md:my-24 bg-border/40" />
        <ContactSection />
      </div>
    </div>
  );
}
