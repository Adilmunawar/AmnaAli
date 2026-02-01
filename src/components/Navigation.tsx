'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Work", href: "/work" },
    { name: "Insights", href: "/insights" },
    { name: "Contact", href: "/#contact" },
  ];

  const getActiveTab = () => {
    if (pathname === '/') return 'Home';
    if (pathname.startsWith('/work')) return 'Work';
    if (pathname.startsWith('/insights')) return 'Insights';
    // Add other conditions for other pages if needed
    return ''; // Default to no active tab for hash links or other pages
  };
  
  const [activeTab, setActiveTab] = useState(getActiveTab());

  useEffect(() => {
    setActiveTab(getActiveTab());
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      setIsOpen(false);
      const targetId = href.substring(2);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Offset by the height of the fixed navigation bar
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
      // Temporarily set active tab for hash links for visual feedback
      const clickedItem = navItems.find(item => item.href === href);
      if(clickedItem) setActiveTab(clickedItem.name);
    } else {
       const clickedItem = navItems.find(item => item.href === href);
       if (clickedItem) {
          setActiveTab(clickedItem.name);
          setIsOpen(false);
       }
    }
  };


  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-4xl mx-auto mt-4 px-4">
        <div 
          className="relative bg-slate-950/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
        >
          <div className="flex items-center justify-between px-6 py-2">
            <Link href="/" className="flex items-center space-x-3 cursor-pointer group" onClick={(e) => handleNavClick(e, '/')}>
                <motion.div 
                  className="relative"
                  whileHover={{ rotate: 15 }}
                >
                  <Sparkles className="w-8 h-8 text-accent drop-shadow-[0_0_8px_hsl(var(--accent))]" />
                </motion.div>
                <div className="text-xl font-bold text-white drop-shadow-lg">
                  Amna Ali
                </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 bg-black/10 rounded-full">
              {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative px-5 py-2.5 rounded-full transition-colors duration-300 text-white/70 hover:text-white"
                  >
                    {activeTab === item.name && (
                      <motion.div
                        layoutId="active-pill-desktop"
                        className="absolute inset-0 bg-white/10"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span 
                      className="relative z-10 font-medium text-sm"
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white bg-white/10 border border-white/20 rounded-full"
              aria-label="Toggle Menu"
            >
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={isOpen ? "x" : "menu"}
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden mt-2"
            >
              <nav className="bg-slate-900/90 backdrop-blur-2xl rounded-2xl border border-white/10 p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="relative block text-white/80 hover:text-white bg-transparent hover:bg-white/10 transition-all py-3 px-4 rounded-xl font-medium"
                    >
                      {activeTab === item.name && (
                        <motion.div
                          layoutId="active-pill-mobile"
                          className="absolute inset-0 bg-white/10"
                          style={{ borderRadius: 12 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                       <span className="relative z-10">{item.name}</span>
                    </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
