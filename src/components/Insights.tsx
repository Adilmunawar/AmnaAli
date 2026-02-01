
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, BrainCircuit } from 'lucide-react';
import articles from '@/lib/articles.json';
import placeholderImages from '@/lib/placeholder-images.json';
import Link from 'next/link';

export const Insights = () => {
  return (
    <section id="insights" className="py-24 sm:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Insights</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            From the Front Lines of Modern HR
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-300">
            Thoughts on strategy, talent, and the future of work. This is where experience translates into actionable advice.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {articles.map((article, index) => {
            const image = placeholderImages.find(p => p.id === article.imageId);
            return (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
              >
                <Link href={`/insights/${article.id}`} passHref>
                  <div className="group relative flex flex-col md:flex-row items-center gap-8 rounded-2xl bg-slate-900/50 border border-white/10 p-6 shadow-lg transition-all duration-300 hover:shadow-accent/20 hover:border-accent/30 hover:-translate-y-2">
                    <div className="relative h-56 w-full md:w-56 md:h-40 flex-shrink-0 rounded-xl overflow-hidden">
                      {image && (
                        <Image
                          src={image.src}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          data-ai-hint={image.hint}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      )}
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-accent flex items-center gap-2">
                        <BrainCircuit className="w-4 h-4"/>
                        {article.category}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white leading-tight">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-400">
                        {article.excerpt}
                      </p>
                       <div className="mt-4 flex items-center text-sm font-semibold text-accent">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
