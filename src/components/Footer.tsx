'use client';

import { motion } from "framer-motion";
import { Sparkles, Heart, ArrowUp, Linkedin, Instagram, Facebook, Users, Phone, Mail } from "lucide-react";
import React from "react";

export const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/amnama", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com/kashf.e.haal", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/amna.ali.93176", label: "Facebook" },
    { icon: Users, href: "https://threads.com/@kashf.e.haal", label: "Threads" }
  ];

  const footerNavItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-transparent backdrop-blur-md pt-16 mt-auto">
      <div className="relative z-20">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <Sparkles className="w-10 h-10 text-accent" />
                  <motion.div
                    className="absolute inset-0 w-10 h-10 bg-accent rounded-full blur-xl opacity-30"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <h3 className="text-3xl font-bold text-white">Amna Ali</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                Crafting exceptional digital experiences through innovative design and strategic thinking. 
                Let's create something extraordinary together.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-accent" />
                  <span>contact@arsltd.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-accent" />
                  <span>+92 324 8406582</span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Links with Enhanced Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">Navigation</h4>
              <nav className="space-y-3">
                {footerNavItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative block text-gray-300 hover:text-white transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg opacity-0 group-hover:opacity-100 -m-2 p-2"
                      transition={{ duration: 0.3 }}
                    />
                    
                    <span className="relative z-10 flex items-center">
                      {item.name}
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-secondary group-hover:w-full"
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-white mb-6">Connect</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className="group relative flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-accent/20 hover:to-secondary/20"
                    >
                      <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                      
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 flex items-center gap-2"
              >
                © {new Date().getFullYear()} Amna Ali. Proudly developed with <Heart className="w-4 h-4 text-red-400" /> by Adil Munawar
              </motion.p>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-14 h-14 rounded-full bg-gradient-to-r from-secondary via-accent to-secondary flex items-center justify-center shadow-xl transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary via-accent to-secondary opacity-0 group-hover:opacity-100 blur-lg"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/30"
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
                
                <ArrowUp className="w-6 h-6 text-white group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
