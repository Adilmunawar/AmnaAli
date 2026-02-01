'use client';

import { motion } from "framer-motion";
import { Sparkles, Heart, ArrowUp, Linkedin, Instagram, Facebook, Users, Phone, Mail } from "lucide-react";
import React from "react";
import Link from 'next/link';

export const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/amnama", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/kashf.e.haal", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/amna.ali.93176", label: "Facebook" },
    { icon: Users, href: "https://threads.com/@kashf.e.haal", label: "Threads" }
  ];

  const footerNavItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Work", href: "/work" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Adjust for fixed header
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <footer className="bg-slate-950/20 backdrop-blur-md pt-24 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand & Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Link href="/" className="flex items-center space-x-3 group">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-10 h-10 text-accent group-hover:scale-110 transition-transform" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white">Amna Ali</h3>
              </Link>
            </div>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
              Let's connect and build something extraordinary together.
            </p>

            <div className="space-y-4">
              <a href="mailto:amna1.ali@outlook.com" className="flex items-center space-x-3 text-slate-300 hover:text-accent transition-colors">
                <Mail className="w-5 h-5 text-accent/80" />
                <span>amna1.ali@outlook.com</span>
              </a>
              <a href="tel:+923248406582" className="flex items-center space-x-3 text-slate-300 hover:text-accent transition-colors">
                <Phone className="w-5 h-5 text-accent/80" />
                <span>+92 324 8406582</span>
              </a>
            </div>
          </motion.div>

          {/* Navigation & Socials */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">Navigate</h4>
              <nav className="space-y-3">
                {footerNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="group relative block text-slate-300 hover:text-white transition-colors duration-300 w-fit"
                  >
                    <span>{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
              <h4 className="text-xl font-semibold text-white mb-6">Connect</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="group flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-accent/20 hover:border-accent/50"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-slate-400 text-sm flex items-center gap-1.5">
                © {new Date().getFullYear()} Amna Ali. Proudly developed with <Heart className="w-4 h-4 text-red-400 inline" /> by Adil Munawar
              </p>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 transition-all duration-300 hover:bg-accent"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5 text-white" />
              </motion.button>
            </div>
        </div>
      </div>
    </footer>
  );
};
