
import { motion } from "framer-motion";
import { Award, Zap, Target, Users, Palette, TrendingUp, Brain, Rocket, Lightbulb } from "lucide-react";
import ProfileCard from "./ProfileCard";

export const About = () => {
  const skills = [{
    name: "Creative Design",
    level: 98,
    color: "from-violet-500 via-fuchsia-500 to-pink-500",
    icon: Palette,
    description: "Transforming visions into stunning visual narratives"
  }, {
    name: "Strategic Marketing",
    level: 95,
    color: "from-cyan-500 via-blue-500 to-indigo-500",
    icon: TrendingUp,
    description: "Data-driven campaigns that deliver exponential growth"
  }, {
    name: "Brand Innovation",
    level: 97,
    color: "from-emerald-500 via-teal-500 to-green-500",
    icon: Lightbulb,
    description: "Pioneering brand strategies that disrupt markets"
  }, {
    name: "Digital Excellence",
    level: 94,
    color: "from-orange-500 via-amber-500 to-yellow-500",
    icon: Rocket,
    description: "Cutting-edge digital solutions for modern challenges"
  }];
  const achievements = [
    {
      icon: Award,
      number: "250+",
      label: "Premium Projects",
      color: "from-violet-400 to-purple-600"
    }, {
      icon: Users,
      number: "50+",
      label: "Global Clients",
      color: "from-cyan-400 to-blue-600"
    }, {
      icon: Target,
      number: "99%",
      label: "Success Rate",
      color: "from-emerald-400 to-green-600"
    }, {
      icon: Brain,
      number: "4+",
      label: "Years Mastery",
      color: "from-fuchsia-400 to-pink-600"
    }
  ];
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent" />
        
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
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 l -60 0 l 0 -60 z' fill='none' stroke='%23a855f7' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`,
            backgroundSize: "60px 60px"
          }} 
        />

        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={`orb-${i}`} 
            className="absolute rounded-full blur-2xl" 
            style={{
              background: `linear-gradient(45deg, 
                ${i % 2 === 0 ? '#8b5cf6, #06b6d4' : '#ec4899, #10b981'})`,
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* New Layout with Profile Card on Left and Header Text on Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          {/* Profile Card Section - Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-center"
          >
            <div className="transform scale-[2.0]">
              <ProfileCard
                avatarUrl="/lovable-uploads/43fd4e87-d6c9-42fa-a776-492777f17353.png"
                miniAvatarUrl="/lovable-uploads/43fd4e87-d6c9-42fa-a776-492777f17353.png"
                name="Amna Ali"
                title="Creative Marketer"
                handle="AmnaAli"
                status="Online"
                contactText="Contact Me"
                showUserInfo={true}
                enableTilt={true}
                onContactClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
          </motion.div>

          {/* Header Text Section - Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, type: "spring", stiffness: 80 }} 
            viewport={{ once: true }} 
            className="text-left"
          >
            <motion.h2 
              className="text-6xl md:text-7xl font-black mb-8 relative" 
              whileInView={{ scale: [0.8, 1.05, 1] }} 
              transition={{ duration: 1.5 }} 
              viewport={{ once: true }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent blur-sm">
                About Me
              </span>
              <span className="relative bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed" 
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, delay: 0.3 }} 
              viewport={{ once: true }}
            >
              "Pioneering the future of digital experiences through innovative design thinking and strategic excellence"
            </motion.p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Profile Section */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, type: "spring", stiffness: 80 }} 
            viewport={{ once: true }} 
            className="space-y-8"
          >
            <motion.div 
              className="relative bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-10 border border-white/10 group overflow-hidden" 
              whileHover={{
                scale: 1.02,
                boxShadow: "0 40px 80px -20px rgba(139, 92, 246, 0.3)"
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100" 
                transition={{ duration: 0.8 }} 
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent" 
                  whileHover={{ scale: 1.05 }}
                >
                  Visionary Creative Leader
                </motion.h3>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    As the visionary founder of <span className="text-violet-400 font-semibold">ARS Ltd.</span>, 
                    I've revolutionized the intersection of creativity and strategic business growth. My expertise 
                    encompasses cutting-edge design methodologies, data-driven marketing strategies, and 
                    breakthrough brand innovation.
                  </p>
                  
                  <p className="text-lg">
                    Every project is an opportunity to push the boundaries of what's possible, delivering 
                    transformative results that redefine industry standards and drive unprecedented success.
                  </p>
                </div>

                {/* Decorative Elements */}
                <motion.div 
                  className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-r from-violet-400/20 to-cyan-400/20 blur-xl" 
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }} 
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }} 
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1.2, type: "spring", stiffness: 80 }} 
            viewport={{ once: true }} 
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <motion.div 
                  key={achievement.label} 
                  initial={{ opacity: 0, scale: 0.5, rotate: -180 }} 
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
                  transition={{ duration: 1, delay: index * 0.2, type: "spring", stiffness: 200 }} 
                  viewport={{ once: true }} 
                  whileHover={{ scale: 1.05, y: -10, rotateY: 10 }} 
                  className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-2xl rounded-3xl p-8 border border-white/20 text-center group overflow-hidden"
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10`} 
                    transition={{ duration: 0.6 }} 
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${achievement.color} mb-6 relative`} 
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }} 
                      transition={{ duration: 0.8 }}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                      
                      {/* Animated Ring */}
                      <motion.div 
                        className="absolute inset-0 rounded-2xl border-2 border-white/30" 
                        animate={{
                          rotate: 360,
                          scale: [1, 1.1, 1]
                        }} 
                        transition={{
                          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }} 
                      />
                    </motion.div>
                    
                    <motion.h4 
                      className="text-4xl font-black text-white mb-3" 
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{ delay: index * 0.1 + 0.5 }} 
                      viewport={{ once: true }}
                    >
                      {achievement.number}
                    </motion.h4>
                    
                    <motion.p 
                      className="text-gray-300 font-medium" 
                      initial={{ opacity: 0 }} 
                      whileInView={{ opacity: 1 }} 
                      transition={{ delay: index * 0.1 + 0.7 }} 
                      viewport={{ once: true }}
                    >
                      {achievement.label}
                    </motion.p>
                  </div>

                  {/* Particle Effect */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-1 h-1 bg-white rounded-full" 
                    animate={{
                      scale: [0, 20, 0],
                      opacity: [0, 0.3, 0]
                    }} 
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }} 
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
