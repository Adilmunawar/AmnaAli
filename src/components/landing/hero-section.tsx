import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="w-full py-24 md:py-32 lg:py-40 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Amna Ali
            </h1>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Creative Digital Marketer & Graphic Designer
            </p>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Crafting engaging brand stories and driving digital growth.
            </p>
          </div>
          <div className="space-x-4 pt-6">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="#contact">Hire Me</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
