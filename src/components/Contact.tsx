import { motion } from "framer-motion";
import { useState, Suspense } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink, Linkedin, Instagram, Facebook, Users, Star, Sparkles, Heart } from "lucide-react";
import { SplineRobotModel } from "./SplineRobotModel";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/amnama",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900",
      description: "Professional Network",
      gradient: "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/kashf.e.haal",
      icon: Instagram,
      color: "from-purple-600 to-indigo-700",
      hoverColor: "hover:from-purple-700 hover:to-indigo-800",
      description: "Creative Showcase",
      gradient: "bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/amna.ali.93176",
      icon: Facebook,
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:from-blue-700 hover:to-blue-900",
      description: "Social Updates",
      gradient: "bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"
    },
    {
      name: "Threads",
      url: "https://threads.com/@kashf.e.haal",
      icon: Users,
      color: "from-gray-700 to-black",
      hoverColor: "hover:from-gray-800 hover:to-gray-900",
      description: "Community",
      gradient: "bg-gradient-to-br from-gray-800 via-black to-gray-900"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+923248406582",
      icon: Phone,
      color: "from-green-500 to-green-700",
      hoverColor: "hover:from-green-600 hover:to-green-800",
      description: "Direct Message",
      gradient: "bg-gradient-to-br from-green-500 via-green-600 to-green-700"
    }
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+92 324 8406582" },
    { icon: Mail, label: "Email", value: "contact@arsltd.com" },
    { icon: MapPin, label: "Location", value: "Pakistan" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-indigo-950/40 via-purple-950/50 to-slate-900/60 relative overflow-hidden">
      {/* Advanced Bluish Purple Gradient Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/40 via-purple-950/30 to-slate-900/40" />
        
        {/* Animated Mesh Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-20" 
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"]
          }} 
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }} 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3e%3cpath d='m 40 0 l 0 40 l -40 0 l 0 -40 z' fill='none' stroke='%236366f1' stroke-width='0.5'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`,
            backgroundSize: "40px 40px"
          }} 
        />

        {/* Bluish Purple Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={`contact-orb-${i}`} 
            className="absolute rounded-full blur-2xl" 
            style={{
              background: `linear-gradient(45deg, 
                ${i % 2 === 0 ? '#4338ca, #5b21b6' : '#6366f1, #3730a3'})`,
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              opacity: 0.1
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

      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to bring your vision to life? Let's discuss how we can create something amazing together.
          </motion.p>
        </motion.div>

        {/* Updated grid layout with Spline robotic model */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Spline Robot Model Section with Updated UFO */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative w-full h-[450px] md:h-[550px]">
              {/* Updated UFO with blue effects instead of pink */}
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
                      filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.4))',
                    }}
                  />
                  
                  {/* Updated glowing ring effect with blue colors */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)',
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
                  
                  {/* Updated pulsing light beam effect with blue color */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400/80 to-transparent"
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

              <SplineRobotModel />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            {/* Glowing Container */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Send className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white mb-3 font-semibold flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    Name
                  </label>
                  <motion.input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    whileFocus={{ 
                      scale: 1.02, 
                      boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)",
                      borderColor: "rgba(99, 102, 241, 0.6)"
                    }}
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your amazing name..."
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white mb-3 font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    Email
                  </label>
                  <motion.input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    whileFocus={{ 
                      scale: 1.02, 
                      boxShadow: "0 0 30px rgba(6, 182, 212, 0.4)",
                      borderColor: "rgba(6, 182, 212, 0.6)"
                    }}
                    type="email"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 backdrop-blur-sm"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white mb-3 font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    Subject
                  </label>
                  <motion.input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    whileFocus={{ 
                      scale: 1.02, 
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
                      borderColor: "rgba(59, 130, 246, 0.6)"
                    }}
                    type="text"
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300 backdrop-blur-sm"
                    placeholder="What's your project about?"
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white mb-3 font-semibold flex items-center gap-2">
                    <Heart className="w-4 h-4 text-purple-400" />
                    Message
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    whileFocus={{ 
                      scale: 1.02, 
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
                      borderColor: "rgba(168, 85, 247, 0.6)"
                    }}
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your amazing project ideas..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 25px 50px rgba(99, 102, 241, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <Send className="w-5 h-5" />
                    Send Message
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Contact Info & Social Links */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Advanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <motion.div
                className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Phone className="w-6 h-6 text-white" />
              </motion.div>
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center gap-6 p-6 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl hover:from-indigo-500/20 hover:via-purple-500/20 hover:to-blue-500/20 transition-all duration-300 border border-white/10"
                  >
                    <motion.div 
                      className="relative p-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.8 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-2xl"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium mb-1">{info.label}</p>
                      <p className="text-white font-bold text-lg">{info.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Ultra Advanced Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <motion.div
                className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 text-white" />
              </motion.div>
              Connect With Me
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -8,
                      rotateY: 10,
                      boxShadow: "0 30px 60px rgba(99, 102, 241, 0.4)"
                    }}
                    className="relative group overflow-hidden rounded-3xl p-6 text-white transition-all duration-500 cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, ${social.gradient.replace('bg-gradient-to-br', '').split(' ').join(', ')})`
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      animate={{
                        background: [
                          "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "linear-gradient(225deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "linear-gradient(315deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                          "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%)"
                        ]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    
                    {/* Floating Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white/40 rounded-full"
                          initial={{ 
                            x: Math.random() * 300,
                            y: Math.random() * 80,
                            opacity: 0
                          }}
                          animate={{
                            y: [null, -30, 100],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: Math.random() * 4 + 2,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                            ease: "easeInOut"
                          }}
                        />
                      ))}
                    </div>

                    {/* Ripple Effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 rounded-3xl"
                      animate={{
                        scale: [1, 1.5, 2],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />

                    <div className="relative z-10 flex items-center gap-6">
                      {/* Ultra Advanced Icon with Multiple Animations */}
                      <motion.div
                        className="relative"
                        whileHover={{ 
                          rotate: [0, -15, 15, -10, 10, 0],
                          scale: [1, 1.3, 1.2, 1.3, 1.1]
                        }}
                        transition={{ duration: 1 }}
                      >
                        {/* Glowing Ring */}
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-2xl blur-lg"
                          animate={{ 
                            scale: [1, 1.4, 1],
                            opacity: [0.3, 0.8, 0.3],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        {/* Icon Container */}
                        <motion.div 
                          className="relative p-4 bg-white/15 backdrop-blur-sm rounded-2xl border border-white/30"
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(255,255,255,0.3)",
                              "0 0 40px rgba(255,255,255,0.6)",
                              "0 0 20px rgba(255,255,255,0.3)"
                            ],
                            borderColor: [
                              "rgba(255,255,255,0.3)",
                              "rgba(255,255,255,0.7)",
                              "rgba(255,255,255,0.3)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                      </motion.div>

                      <div className="flex-1">
                        <motion.h4 
                          className="font-bold text-xl mb-1"
                          whileHover={{ x: 8, scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {social.name}
                        </motion.h4>
                        <motion.p 
                          className="text-sm opacity-90"
                          initial={{ opacity: 0.7 }}
                          whileHover={{ opacity: 1, x: 5 }}
                        >
                          {social.description}
                        </motion.p>
                      </div>

                      <motion.div
                        whileHover={{ 
                          rotate: 45, 
                          scale: 1.4,
                          x: 8,
                          y: -4
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative"
                      >
                        <ExternalLink className="w-6 h-6 opacity-70" />
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded-full blur-md"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0, 0.5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
