'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import placeholderImages from "@/lib/placeholder-images.json";

const aboutImage = placeholderImages.find(p => p.id === "about-amna");

const coreSolutions = [
  {
    title: "Strategic Recruitment",
    description: "End-to-end talent acquisition for domestic and international markets.",
  },
  {
    title: "Operations & Compliance",
    description: "Streamlining payroll, attendance, and policy for 1,000+ employee organizations.",
  },
];

const growthSolutions = [
    {
        title: "Employer Branding",
        description: "Designing company profiles and job kits that attract top 1% talent.",
      },
      {
        title: "Recruitment Marketing",
        description: "Targeted digital campaigns to find passive candidates online.",
      },
];

export const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {aboutImage && (
              <Image
                src={aboutImage.src}
                alt="Amna Ali, HR Consultant"
                fill
                className="object-cover"
                data-ai-hint={aboutImage.hint}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white">Amna Ali</h3>
              <p className="text-teal-300">Transforming Workplaces</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-12 lg:mt-0"
          >
            <h2 className="text-base font-semibold leading-7 text-accent">Problem-Solvers First</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              From Talent Acquisition to Full-Spectrum HR Operations
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              My approach combines over a decade of hands-on experience with a modern, strategic mindset. I don't just fill roles; I build the operational and cultural foundation for long-term success, ensuring your business attracts and retains top-tier talent.
            </p>
            
            <div className="mt-10 space-y-8">
                {/* Core HR Solutions */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">HR Solutions (The Core)</h3>
                    <div className="space-y-4">
                    {coreSolutions.map((solution) => (
                        <div key={solution.title} className="flex gap-x-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-none text-accent" aria-hidden="true" />
                        <div>
                            <p className="font-semibold text-white">{solution.title}</p>
                            <p className="text-slate-400">{solution.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Growth Solutions */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Growth Solutions (The "Modern Edge")</h3>
                    <div className="space-y-4">
                    {growthSolutions.map((solution) => (
                        <div key={solution.title} className="flex gap-x-3">
                        <CheckCircle className="mt-1 h-5 w-5 flex-none text-accent" aria-hidden="true" />
                        <div>
                            <p className="font-semibold text-white">{solution.title}</p>
                            <p className="text-slate-400">{solution.description}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
