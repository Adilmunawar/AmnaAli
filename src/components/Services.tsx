
import { motion } from "framer-motion";
import { Brush, Megaphone, Search, TrendingUp, Lightbulb, Target, Zap, Sparkles } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Brush,
      title: "Premium Design Studio",
      description: "Crafting extraordinary visual identities that captivate audiences and define market leadership",
      features: ["Luxury Brand Identity", "Award-Winning Logos", "Premium Print Design", "Digital Art Direction"],
      color: "from-pink-500 via-rose-500 to-pink-600",
      accentColor: "pink"
    },
    {
      icon: Megaphone,
      title: "Strategic Marketing Mastery",
      description: "Revolutionary marketing campaigns that drive exponential growth and market domination",
      features: ["Viral Campaign Strategy", "Omnichannel Marketing", "Influencer Partnerships", "Performance Analytics"],
      color: "from-purple-500 via-violet-500 to-purple-600",
      accentColor: "purple"
    },
    {
      icon: Search,
      title: "SEO Excellence Engine",
      description: "Advanced optimization strategies that dominate search rankings and drive organic supremacy",
      features: ["AI-Powered SEO", "Technical Optimization", "Content Strategy", "Competitive Intelligence"],
      color: "from-emerald-500 via-teal-500 to-emerald-600",
      accentColor: "emerald"
    },
    {
      icon: Target,
      title: "Growth Strategy Innovation",
      description: "Data-driven strategies that accelerate business growth and maximize market penetration",
      features: ["Growth Hacking", "Market Analysis", "ROI Optimization", "Strategic Planning"],
      color: "from-orange-500 via-amber-500 to-orange-600",
      accentColor: "orange"
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "High-converting campaigns that deliver measurable results and unprecedented ROI",
      features: ["Conversion Optimization", "Advanced Analytics", "A/B Testing", "Revenue Scaling"],
      color: "from-blue-500 via-cyan-500 to-blue-600",
      accentColor: "blue"
    },
    {
      icon: Lightbulb,
      title: "Brand Innovation Lab",
      description: "Revolutionary brand strategies that disrupt industries and create lasting market impact",
      features: ["Brand Positioning", "Innovation Strategy", "Market Disruption", "Future-Proofing"],
      color: "from-rose-500 via-pink-500 to-rose-600",
      accentColor: "rose"
    }
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 60 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-7xl md:text-8xl font-black mb-8 text-white drop-shadow-lg"
            whileInView={{ scale: [0.8, 1.05, 1] }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            My Services
          </motion.h2>
          
          <motion.p 
            className="text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Comprehensive creative and strategic solutions designed to elevate your brand to extraordinary heights
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 80, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -20, scale: 1.02, rotateY: 5 }}
                className="relative group cursor-pointer"
              >
                {/* Card Background */}
                <div className="relative bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/30 overflow-hidden h-full shadow-lg shadow-white/10">
                  {/* Hover Effect Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20`}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Animated Icon Container */}
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.color} relative`}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(255, 255, 255, 0.3)",
                          "0 0 40px rgba(255, 255, 255, 0.5)",
                          "0 0 20px rgba(255, 255, 255, 0.3)"
                        ]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <IconComponent className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-white/20"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Floating Sparkles */}
                    <motion.div
                      className="absolute -top-2 -right-2"
                      animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <Sparkles className="w-6 h-6 text-white opacity-60" />
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-pink-200 transition-colors drop-shadow-md"
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      className="text-white/90 mb-8 leading-relaxed text-lg drop-shadow-sm"
                      initial={{ opacity: 0.8 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1 + featureIndex * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ x: 10, scale: 1.05 }}
                          className="flex items-center text-white/90 group/feature cursor-pointer"
                        >
                          <motion.div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color} mr-4 relative`}
                            whileHover={{ scale: 1.5 }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-full bg-white/30"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.6, 0.3]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: featureIndex * 0.2
                              }}
                            />
                          </motion.div>
                          <span className="group-hover/feature:text-white transition-colors font-medium drop-shadow-sm">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Lightning Effect */}
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.8, 1.2, 0.8],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    <Zap className="w-4 h-4 text-white opacity-40" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
