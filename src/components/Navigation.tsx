
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sparkles, Home, User, Settings, Contact, Briefcase, Wrench } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Tools", href: "#tools", icon: Wrench },
    { name: "Portfolio", href: "#portfolio", icon: Briefcase },
    { name: "Services", href: "#services", icon: Settings },
    { name: "Contact", href: "#contact", icon: Contact }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Modern Navigation Bar */}
      <div className="max-w-4xl mx-auto mt-4 px-4">
        <motion.div 
          className="relative bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient Background Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-slate-500/20 opacity-0 hover:opacity-100"
            transition={{ duration: 0.6 }}
          />
          
          <div className="relative z-10 flex items-center justify-between px-8 py-4">
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <motion.div className="relative">
                <Sparkles className="w-8 h-8 text-white drop-shadow-lg" />
                <motion.div
                  className="absolute inset-0 w-8 h-8 bg-blue-400 rounded-full blur-lg opacity-40"
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
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative px-4 py-2 rounded-full transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Hover Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-blue-500/30 to-slate-500/30 rounded-full opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-2">
                      <IconComponent className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </div>
                    
                    {/* Centered Active Indicator */}
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400 group-hover:w-3/4"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden mt-2"
        >
          <div className="bg-black/90 backdrop-blur-2xl rounded-2xl border border-white/10 p-4 space-y-2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-white/80 hover:text-white hover:bg-white/10 transition-all py-3 px-4 rounded-xl font-medium"
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.name}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
