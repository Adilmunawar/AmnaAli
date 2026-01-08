
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code, Palette, TrendingUp, ChevronRight, Star, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import ShinyText from "./ShinyText";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const floatingIcons = [
    {
      icon: Code,
      delay: 0,
      position: { x: "10%", y: "20%" }
    },
    {
      icon: Palette,
      delay: 1,
      position: { x: "85%", y: "30%" }
    },
    {
      icon: TrendingUp,
      delay: 2,
      position: { x: "15%", y: "70%" }
    },
    {
      icon: Sparkles,
      delay: 1.5,
      position: { x: "80%", y: "75%" }
    }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute text-purple-400/30"
            style={{
              left: item.position.x,
              top: item.position.y
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 360],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut"
            }}
          >
            <IconComponent className="w-8 h-8" />
          </motion.div>
        );
      })}

      {/* Enhanced Cursor Trail */}
      <motion.div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-60"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Enhanced Logo Animation */}
          <motion.div
            className="inline-block mb-8 relative"
            animate={{ rotate: [0, 360] }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <div className="relative">
              <Sparkles className="w-20 h-20 text-cyan-400 filter drop-shadow-2xl" />
              <motion.div
                className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-xl opacity-30"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
          
          {/* Enhanced Title with better typography */}
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-black mb-8 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent filter drop-shadow-lg">
              Amna Ali
            </span>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl -z-10"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.h1>
          
          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8"
          >
            <div className="inline-block bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-8 py-4 mb-8">
              <h2 className="text-2xl md:text-3xl text-transparent bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text font-semibold">
                Creative Professional & Brand Strategist
              </h2>
            </div>
            
            {/* Enhanced Role Tags */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                {
                  text: "Creative Director",
                  gradient: "from-cyan-500 to-blue-600",
                  icon: Palette
                },
                {
                  text: "Brand Designer",
                  gradient: "from-purple-500 to-pink-600",
                  icon: Star
                },
                {
                  text: "Growth Strategist",
                  gradient: "from-emerald-500 to-teal-600",
                  icon: TrendingUp
                }
              ].map((role, index) => {
                const IconComponent = role.icon;
                return (
                  <motion.div
                    key={role.text}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${role.gradient} rounded-full text-white text-sm font-medium`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {role.text}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Crafting digital experiences that transcend expectations through 
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold"> innovative design</span> and 
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold"> strategic brilliance</span>
          </motion.p>

          {/* Enhanced CTA Buttons with ShinyText */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl text-white font-bold text-lg shadow-2xl border border-white/20 backdrop-blur-sm overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <ShinyText text="View My Work" speed={3} />
                <ChevronRight className="w-5 h-5" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-white/10 border-2 border-white/30 rounded-2xl text-white font-bold text-lg shadow-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 overflow-hidden"
            >
              <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                <ShinyText text="Get In Touch" speed={4} />
                <Sparkles className="w-5 h-5" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};
