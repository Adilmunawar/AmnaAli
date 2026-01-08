import Image from "next/image";
import { about } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="w-full pt-16 md:pt-24">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
        <div className="flex justify-center">
          <Image
            src={about.image.imageUrl}
            alt={about.image.description}
            width={400}
            height={400}
            className="rounded-full object-cover shadow-lg aspect-square"
            data-ai-hint={about.image.imageHint}
          />
        </div>
        <div className="space-y-4">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
            About Me
          </h2>
          <p className="text-foreground/80 text-lg leading-relaxed">
            {about.bio}
          </p>
        </div>
      </div>
    </section>
  );
}
