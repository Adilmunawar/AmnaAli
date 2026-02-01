'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contact" className="py-24 sm:py-32">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center"
                >
                    <h2 className="text-base font-semibold leading-7 text-accent">Get In Touch</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Let's Build Your Future, Together
                    </p>
                    <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-300">
                        Whether you're looking to fill a critical role, optimize your HR operations, or build a winning employer brand, I'm here to help. Reach out to start the conversation.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="mt-16 max-w-2xl mx-auto"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <a href="mailto:amna1.ali@outlook.com" className="group flex items-center gap-4 text-lg p-6 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-accent/50 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                                <Mail className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm">Email</p>
                                <p className="text-white font-semibold">amna1.ali@outlook.com</p>
                            </div>
                        </a>
                        <a href="tel:+923248406582" className="group flex items-center gap-4 text-lg p-6 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-accent/50 hover:-translate-y-1 transition-all duration-300">
                            <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                                <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm">Phone</p>
                                <p className="text-white font-semibold">+92 324 8406582</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
