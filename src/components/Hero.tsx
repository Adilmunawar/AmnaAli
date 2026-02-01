'use client';
import { motion } from "framer-motion";
import { ArrowDown, Users, Briefcase, TrendingUp, ChevronRight, Award } from "lucide-react";

export const Hero = () => {

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
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 relative text-white"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            Amna Ali
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-3 mb-6">
              <h2 className="text-xl md:text-2xl text-slate-200 font-semibold">
                Expert HR Consultant & Growth Strategist
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { text: "Strategic Recruitment" },
                { text: "Operations & Compliance" },
                { text: "Employer Branding" },
              ].map((role, index) => (
                  <motion.div
                    key={role.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm font-medium"
                  >
                    {role.text}
                  </motion.div>
                ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Partnering with organizations to build high-performing teams through data-driven HR strategies that attract top-tier talent and foster sustainable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3, boxShadow: '0 10px 20px rgba(16, 185, 129, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-7 py-3 bg-accent rounded-xl text-white font-bold text-base shadow-lg border border-transparent transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Case Studies
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3, backgroundColor: 'hsla(0,0%,100%,0.1)', borderColor: 'hsla(0,0%,100%,0.3)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-7 py-3 bg-white/5 border-2 border-white/20 rounded-xl text-white font-bold text-base shadow-lg backdrop-blur-sm transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm text-white/50 mb-2">Discover More</span>
          <ArrowDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
