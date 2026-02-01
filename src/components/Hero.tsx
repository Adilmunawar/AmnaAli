'use client';
import { motion } from "framer-motion";
import { ArrowDown, ChevronRight, Award, Briefcase, Users, TrendingUp } from "lucide-react";
import Link from 'next/link';

export const Hero = () => {

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 150 }}
            className="inline-block mb-6"
          >
            <div className="relative inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-slate-200">Decade of HR Excellence</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-6 relative text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            Building High-Performance Teams
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            I partner with organizations to build data-driven HR strategies that attract top-tier talent and foster sustainable growth.
          </motion.p>
        
          {/* Service Tags */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, staggerChildren: 0.1 }}
          >
              {[
                { icon: Briefcase, text: "Strategic Recruitment" },
                { icon: Users, text: "Operations & Compliance" },
                { icon: TrendingUp, text: "Employer Branding" },
              ].map((role, index) => (
                  <motion.div
                    key={role.text}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 border border-white/10 rounded-full text-slate-300 text-sm font-medium"
                  >
                    <role.icon className="w-4 h-4 text-accent"/>
                    {role.text}
                  </motion.div>
                ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3, boxShadow: '0 10px 20px rgba(16, 185, 129, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('work')}
              className="group relative px-7 py-3 bg-accent rounded-xl text-white font-bold text-base shadow-lg border border-transparent transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Case Studies
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3, backgroundColor: 'hsla(0,0%,100%,0.1)', borderColor: 'hsla(0,0%,100%,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollTo('contact')}
              className="group relative px-7 py-3 bg-white/5 border-2 border-white/20 rounded-xl text-white font-bold text-base shadow-lg backdrop-blur-sm transition-all duration-300"
            >
              <span className="relative z-10">
                Get In Touch
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollTo('about')}
        >
          <span className="text-sm text-white/50 mb-2">Discover More</span>
          <ArrowDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
