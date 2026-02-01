'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, Facebook, Users } from 'lucide-react';

const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/amnama", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/kashf.e.haal", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/amna.ali.93176", label: "Facebook" },
    { icon: Users, href: "https://threads.com/@kashf.e.haal", label: "Threads" }
];

export const Contact = () => {
    return (
        <section id="contact" className="py-24 sm:py-32 bg-slate-950/20">
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
                    className="mt-16 p-8 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Contact Details */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white">Contact Details</h3>
                            <a href="mailto:contact@arsltd.com" className="group flex items-center gap-4 text-lg">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <Mail className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Email</p>
                                    <p className="text-white font-semibold group-hover:text-accent transition-colors">contact@arsltd.com</p>
                                </div>
                            </a>
                            <a href="tel:+923248406582" className="group flex items-center gap-4 text-lg">
                                <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent transition-colors">
                                    <Phone className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <p className="text-slate-400 text-sm">Phone</p>
                                    <p className="text-white font-semibold group-hover:text-accent transition-colors">+92 324 8406582</p>
                                </div>
                            </a>
                        </div>
                        
                        {/* Social Links */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-semibold text-white">Follow Me</h3>
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => (
                                     <motion.a
                                     key={social.label}
                                     href={social.href}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     aria-label={social.label}
                                     initial={{ opacity: 0, scale: 0.8 }}
                                     whileInView={{ opacity: 1, scale: 1 }}
                                     transition={{ duration: 0.4, delay: index * 0.1 }}
                                     viewport={{ once: true }}
                                     whileHover={{ scale: 1.1, y: -3 }}
                                     className="group flex items-center justify-center w-14 h-14 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-accent/20 hover:border-accent/50"
                                   >
                                     <social.icon className="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" />
                                   </motion.a>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
