'use client';
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sparkles, Home, User, Settings, Contact, Briefcase, BrainCircuit } from "lucide-react";
import Link from 'next/link';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Services", href: "#services", icon: Settings },
    { name: "Work", href: "#work", icon: Briefcase },
    { name: "Insights", href: "#insights", icon: BrainCircuit },
    { name: "Contact", href: "#contact", icon: Contact }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Modern Navigation Bar */}
      <div className="max-w-4xl mx-auto mt-4 px-4">
        <motion.div 
          className="relative bg-slate-950/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl overflow-hidden"
          transition={{ duration: 0.3 }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/10 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <div className="relative z-10 flex items-center justify-between px-8 py-3">
            {/* Enhanced Logo */}
            <Link href="#home" passHref legacyBehavior>
              <motion.a
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 15 }}
                >
                  <Sparkles className="w-8 h-8 text-accent drop-shadow-[0_0_8px_hsl(var(--accent))]" />
                  <motion.div
                    className="absolute inset-0 w-8 h-8 bg-accent rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"
                    animate={{
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                <motion.div className="text-xl font-bold text-white drop-shadow-lg">
                  Amna Ali
                </motion.div>
              </motion.a>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    passHref
                    legacyBehavior>
                    <motion.a
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="group relative px-4 py-2 rounded-full transition-all duration-300 text-white/70 hover:text-white"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Hover Background */}
                      <motion.div
                        className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }} 
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center space-x-2">
                        <IconComponent className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {item.name}
                        </span>
                      </div>
                      
                      {/* Active Indicator */}
                      <motion.div
                        className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-1/2"
                        transition={{ duration: 0.3, ease: "easeOut" }} 
                      />
                    </motion.a>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          variants={{
            open: { opacity: 1, height: "auto", y: 0, transition: { staggerChildren: 0.05, when: "beforeChildren" } },
            closed: { opacity: 0, height: 0, y: -10 }
          }}
          animate={isOpen ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden mt-2"
        >
          <div className="bg-slate-900/90 backdrop-blur-2xl rounded-2xl border border-white/10 p-4 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  passHref
                  legacyBehavior>
                  <motion.a
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: -20, opacity: 0 }
                    }}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-white/80 hover:text-white hover:bg-white/10 transition-all py-3 px-4 rounded-xl font-medium"
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.name}</span>
                  </motion.a>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
