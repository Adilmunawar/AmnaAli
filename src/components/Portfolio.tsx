import { motion } from "framer-motion";
import { ExternalLink, Eye, Github, Star } from "lucide-react";
import { useState } from "react";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Luxury Brand Identity Design",
      category: "design",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=faces",
      description: "Complete visual identity system with sophisticated branding elements and color psychology for luxury fashion brands",
      tags: ["Branding", "Identity", "Luxury"]
    },
    {
      id: 2,
      title: "Social Media Campaign Visuals",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Engaging social media campaign designs with high conversion rates and compelling brand storytelling",
      tags: ["Social Media", "Campaign", "Visual Design"]
    },
    {
      id: 3,
      title: "SEO Performance Dashboard",
      category: "seo",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      description: "Analytics dashboard design showcasing traffic growth, keyword performance, and ROI metrics",
      tags: ["Analytics", "Dashboard", "SEO"]
    },
    {
      id: 4,
      title: "Premium Product Packaging",
      category: "design",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Innovative premium product packaging design with sustainable materials and compelling visual appeal",
      tags: ["Packaging", "Premium", "Sustainable"]
    },
    {
      id: 5,
      title: "Integrated Marketing Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
      description: "Multi-channel marketing campaign with brand consistency across all touchpoints and platforms",
      tags: ["Multi-channel", "Integration", "Strategy"]
    },
    {
      id: 6,
      title: "Corporate Brand Guidelines",
      category: "design",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      description: "Comprehensive brand guidelines and design systems for corporate identity and consistency",
      tags: ["Guidelines", "Corporate", "Systems"]
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "design", label: "Graphic Design" },
    { key: "marketing", label: "Digital Marketing" },
    { key: "seo", label: "SEO & Analytics" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-pink-900/20 via-purple-950/30 to-pink-900/20 relative overflow-hidden">
      {/* Pink Gradient Aura Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/30 via-purple-900/20 to-pink-900/30" />
        
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
            backgroundImage: `url("data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3e%3cpath d='m 60 0 l 0 60 l -60 0 l 0 -60 z' fill='none' stroke='%23ec4899' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23grid)'/%3e%3c/svg%3e")`,
            backgroundSize: "60px 60px"
          }}
        />

        {/* Pink Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div 
            key={`portfolio-orb-${i}`} 
            className="absolute rounded-full blur-2xl" 
            style={{
              background: `linear-gradient(45deg, 
                ${i % 2 === 0 ? '#ec4899, #f97316' : '#db2777, #e11d48'})`,
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


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 bg-clip-text text-transparent"
            whileInView={{ scale: [0.9, 1.05, 1] }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Creative Portfolio
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore my latest creative projects showcasing innovative design solutions and strategic marketing excellence.
          </motion.p>
        </motion.div>

        {/* Enhanced Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.key}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08,
                y: -3,
                boxShadow: "0 15px 35px rgba(34, 211, 238, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden backdrop-blur-lg border ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-xl border-cyan-400/50"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 border-white/10 hover:border-white/30"
              }`}
            >
              {activeFilter === filter.key && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                  layoutId="activeFilter"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -20, 
                rotateY: 5,
                rotateX: -5,
                scale: 1.03,
                transition: { duration: 0.4 }
              }}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-cyan-400/60 transition-all duration-700 relative"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Project Image with Enhanced Overlay */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.15 }}
                />
                
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* Action Buttons */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                    <motion.button
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 360,
                        boxShadow: "0 15px 35px rgba(34, 211, 238, 0.6)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-4 rounded-2xl hover:from-cyan-400 hover:to-cyan-500 transition-all duration-300 relative overflow-hidden group/btn"
                    >
                      <Eye className="w-6 h-6 relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.button>
                    <motion.button
                      initial={{ scale: 0, rotate: 180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: -360,
                        boxShadow: "0 15px 35px rgba(168, 85, 247, 0.6)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-2xl hover:from-purple-400 hover:to-purple-500 transition-all duration-300 relative overflow-hidden group/btn"
                    >
                      <ExternalLink className="w-6 h-6 relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, -180, -360]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.button>
                    <motion.button
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 180,
                        boxShadow: "0 15px 35px rgba(236, 72, 153, 0.6)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-2xl hover:from-pink-400 hover:to-pink-500 transition-all duration-300 relative overflow-hidden group/btn"
                    >
                      <Github className="w-6 h-6 relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 90, 180]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.button>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="absolute top-6 right-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Enhanced Content Section */}
              <div className="p-8 relative">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm text-cyan-300 border border-cyan-500/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                
                <motion.p 
                  className="text-gray-300 leading-relaxed mb-6"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>
                
                {/* Enhanced Progress Bar */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
