
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from "lucide-react";
import CircularGallery from "./CircularGallery";

export const Gallery = () => {
  const galleryItems = [
    {
      image: "https://picsum.photos/seed/2/800/600?grayscale",
      text: "Adil test run",
    },
    {
      image: "https://picsum.photos/seed/3/800/600?grayscale",
      text: "Adil test run",
    },
    {
      image: "https://picsum.photos/seed/4/800/600?grayscale",
      text: "Adil test run",
    },
    {
      image: "https://picsum.photos/seed/5/800/600?grayscale",
      text: "Adil test run",
    },
    {
      image: "https://picsum.photos/seed/16/800/600?grayscale",
      text: "Adil test run",
    },
    {
      image: "https://picsum.photos/seed/17/800/600?grayscale",
      text: "Adil test run",
    },
    {
      image: "https://picsum.photos/seed/8/800/600?grayscale",
      text: "Adil test run",
    },
    {
      image: "https://picsum.photos/seed/9/800/600?grayscale",
      text: "Adil test run",
    },
    {
      image: "https://picsum.photos/seed/10/800/600?grayscale",
      text: "Adil test run",
    },
    {
      image: "https://picsum.photos/seed/21/800/600?grayscale",
      text: "Adil test run",
    },
    {
      image: "https://picsum.photos/seed/12/800/600?grayscale",
      text: "Adil test run",
    },
  ];

  return (
    <section id="gallery" className="py-32 bg-gradient-to-br from-indigo-950/40 via-purple-950/50 to-slate-900/60 relative overflow-hidden">
      {/* Bluish Purple Gradient Aura Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-purple-950/30 to-slate-900/40" />
        
        {/* Animated Mesh Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10" 
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }} 
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }} 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 l -60 0 l 0 -60 z' fill='none' stroke='%236366f1' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`,
            backgroundSize: "60px 60px"
          }} 
        />

        {/* Bluish Purple Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={`gallery-orb-${i}`} 
            className="absolute rounded-full blur-2xl" 
            style={{
              background: `linear-gradient(45deg, 
                ${i % 2 === 0 ? '#4338ca, #5b21b6' : '#6366f1, #3730a3'})`,
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              opacity: 0.15
            }} 
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            }} 
            animate={{
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              scale: [1, 1.5, 1],
              rotate: [0, 360]
            }} 
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }} 
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text">
              Creative Gallery
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore my creative journey through an interactive gallery showcasing diverse projects and inspirations
          </motion.p>
        </motion.div>

        {/* Gallery Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="h-[600px] w-full glass rounded-3xl overflow-hidden border border-indigo-500/20">
            <CircularGallery
              items={galleryItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              font="bold 24px Inter"
            />
          </div>
          
          {/* Gradient overlay for better integration */}
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-3xl pointer-events-none" />
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-lg">
            Click and drag to explore • Scroll to navigate through the gallery
          </p>
        </motion.div>
      </div>
    </section>
  );
};
