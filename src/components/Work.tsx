'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Lightbulb, TrendingUp, Briefcase } from 'lucide-react';
import caseStudies from '@/lib/case-studies.json';
import placeholderImages from '@/lib/placeholder-images.json';

const icons: { [key: string]: React.ReactNode } = {
  Challenge: <Target className="h-6 w-6 text-accent" />,
  Solution: <Lightbulb className="h-6 w-6 text-accent" />,
  Result: <TrendingUp className="h-6 w-6 text-accent" />,
};

export const Work = () => {
  return (
    <section id="work" className="py-24 sm:py-32 bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Case Studies</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Proven Strategies, Measurable Results
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-300">
            I don't just advise; I implement. Here's a look at how my strategic approach has driven tangible outcomes for my clients.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          {caseStudies.map((study, index) => {
            const image = placeholderImages.find(p => p.id === study.imageId);
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
                className="flex flex-col overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-accent/20 hover:border-accent/30 hover:-translate-y-2"
              >
                <div className="relative h-56 w-full">
                  {image && (
                    <Image
                      src={image.src}
                      alt={study.title}
                      fill
                      className="object-cover"
                      data-ai-hint={image.hint}
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                </div>
                
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-accent flex items-center gap-2">
                      <Briefcase className="w-4 h-4"/>
                      {study.company}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{study.title}</h3>
                    
                    <div className="mt-6 space-y-5">
                      {['Challenge', 'Solution', 'Result'].map(section => (
                        <div key={section} className="flex gap-x-4">
                          <div className="flex-shrink-0 pt-1">{icons[section]}</div>
                          <div>
                            <p className="text-sm font-semibold text-white">{section}</p>
                            <p className="mt-1 text-sm text-slate-400">{study[section.toLowerCase() as keyof typeof study]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
