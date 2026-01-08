
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const CreativeCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('a, button, [role="button"], input, textarea, select') ||
                           target.closest('a, button, [role="button"], input, textarea, select');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          scale: { duration: 0.15 }
        }}
      >
        <motion.div
          className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </motion.div>

      {/* Trailing cursor */}
      <motion.div
        className="fixed w-4 h-4 pointer-events-none z-[9998] bg-cyan-400 rounded-full opacity-60"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20
        }}
      />

      {/* Cursor particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-purple-300 rounded-full pointer-events-none z-[9997]"
          animate={{
            x: mousePosition.x + Math.cos(i * 60 * (Math.PI / 180)) * 20,
            y: mousePosition.y + Math.sin(i * 60 * (Math.PI / 180)) * 20,
            scale: [0, 1, 0],
          }}
          transition={{
            x: { type: "spring", stiffness: 100, damping: 20 },
            y: { type: "spring", stiffness: 100, damping: 20 },
            scale: { 
              duration: 1, 
              repeat: Infinity, 
              delay: i * 0.1,
              ease: "easeInOut"
            }
          }}
        />
      ))}

      {/* Hover effect overlay */}
      {isHovering && (
        <motion.div
          className="fixed w-12 h-12 border-2 border-purple-400 rounded-full pointer-events-none z-[9996]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
        />
      )}
    </>
  );
};
