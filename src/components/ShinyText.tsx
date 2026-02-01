'use client';

import { motion } from 'framer-motion';

interface ShinyTextProps {
  text: string;
  speed?: number;
}

const ShinyText = ({ text, speed = 5 }: ShinyTextProps) => {
  return (
    <div className="relative overflow-hidden">
      <span className="relative">{text}</span>
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['-200% center', '200% center'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: 'linear-gradient(to right, transparent 20%, white 50%, transparent 80%)',
          backgroundSize: '200% 100%',
          WebkitMaskImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='100%25' font-weight='bold' fill='black'%3e${text}%3c/text%3e%3c/svg%3e")`,
           maskImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='100%25' font-weight='bold' fill='black'%3e${text}%3c/text%3e%3c/svg%3e")`,
           maskRepeat: 'no-repeat',
           maskPosition: 'center',
        }}
      />
    </div>
  );
};

export default ShinyText;
