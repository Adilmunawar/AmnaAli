
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load Spline for better performance
const Spline = lazy(() => import('@splinetool/react-spline'));

const SplineLoader = () => (
  <div className="w-full h-full flex items-center justify-center bg-transparent rounded-3xl">
    <div className="w-16 h-16 border-4 border-gray-300 border-t-transparent rounded-full animate-spin" />
  </div>
);

// UFO Component to hide watermark
const UFOWatermarkHider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 1.2, 
        delay: 1,
        type: "spring",
        stiffness: 80,
        damping: 20
      }}
      className="absolute -bottom-14 -right-6 z-50 pointer-events-none"
    >
      {/* UFO Container with hover animation */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative"
      >
        {/* Main UFO Image */}
        <img 
          src="/lovable-uploads/735abcc8-6cb4-432c-9ec1-5f0433ff5e19.png"
          alt="UFO"
          className="w-60 h-60 md:w-64 md:h-64 object-contain"
          style={{
            filter: 'drop-shadow(0 0 20px rgba(236,72,153,0.4))',
          }}
        />
        
        {/* Glowing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.6) 0%, transparent 70%)',
            filter: 'blur(10px)'
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Pulsing light beam effect */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-pink-400/80 to-transparent"
          style={{ height: '60px' }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scaleX: [1, 1.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export const SplineRobotModel = () => {
  return (
    <div className="relative w-full h-[450px] md:h-[550px]">
      {/* Spline container with strategic positioning to hide watermark */}
      <div className="relative w-full h-full overflow-hidden rounded-3xl">
        <Suspense fallback={<SplineLoader />}>
          {/* Spline viewport with full visibility for the robot */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{
              height: '100%',
              width: '100%'
            }}
          >
            <Spline 
              scene="https://prod.spline.design/R38OhL5fGW5DocGh/scene.splinecode"
              style={{ 
                width: '100%', 
                height: '100%',
                background: 'transparent',
                pointerEvents: 'auto'
              }}
            />
          </div>
        </Suspense>
        
        {/* UFO element to hide watermark */}
        <UFOWatermarkHider />
      </div>
    </div>
  );
};
