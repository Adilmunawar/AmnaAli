import { motion } from "framer-motion";
import { Palette, Search, TrendingUp, Zap } from "lucide-react";
export const Tools = () => {
  const tools = [{
    category: "Design Tools",
    icon: Palette,
    color: "from-pink-600 to-rose-600",
    tools: [{
      name: "Adobe Photoshop",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
    }, {
      name: "Adobe Illustrator",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
    }, {
      name: "Figma",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
    }, {
      name: "Canva Pro",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Canva-Logo.png"
    }, {
      name: "Adobe InDesign",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg"
    }]
  }, {
    category: "SEO & Analytics",
    icon: Search,
    color: "from-emerald-500 to-teal-500",
    tools: [{
      name: "Google Analytics",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/77/GAnalytics.svg"
    }, {
      name: "SEMrush",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Semrush_logo.svg"
    }, {
      name: "Ahrefs",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Ahrefslogo.png"
    }, {
      name: "Search Console",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
    }, {
      name: "Yoast SEO",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Yoast_Logo_Small.svg"
    }]
  }, {
    category: "Marketing",
    icon: TrendingUp,
    color: "from-purple-500 to-violet-500",
    tools: [{
      name: "Google Ads",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg"
    }, {
      name: "Meta Ads",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg"
    }, {
      name: "LinkedIn",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Linkedin-web-vt.png"
    }, {
      name: "Hootsuite",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Hootsuite_logo.png"
    }, {
      name: "Pinterest",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Pinterest.svg"
    }]
  }, {
    category: "Productivity",
    icon: Zap,
    color: "from-cyan-500 to-blue-500",
    tools: [{
      name: "Notion",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
    }, {
      name: "Slack",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg"
    }, {
      name: "Trello",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Trello-logo-blue.svg"
    }, {
      name: "Adobe Express",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Adobe_Express_logo.png"
    }, {
      name: "Google Workspace",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Apps_Script.svg"
    }]
  }];
  return <section id="tools" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        type: "spring",
        stiffness: 100
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <motion.h2 className="text-5xl font-bold mb-6 text-white drop-shadow-lg" whileInView={{
          scale: [0.9, 1.05, 1]
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }}>
            My Professional Toolkit
          </motion.h2>
          <motion.p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          delay: 0.3
        }} viewport={{
          once: true
        }}>
            Cutting-edge tools and technologies that power my creative and strategic solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tools.map((category, index) => {
          const IconComponent = category.icon;
          return <motion.div key={category.category} initial={{
            opacity: 0,
            y: 50,
            rotateX: 45
          }} whileInView={{
            opacity: 1,
            y: 0,
            rotateX: 0
          }} transition={{
            duration: 0.8,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }} viewport={{
            once: true
          }} whileHover={{
            y: -10,
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)"
          }} className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg shadow-white/10 group relative overflow-hidden">
                {/* Animated Background */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-white/10 to-pink-300/10 opacity-0 group-hover:opacity-100" transition={{
              duration: 0.3
            }} />
                
                <motion.div whileHover={{
              rotate: 360,
              scale: 1.1
            }} transition={{
              duration: 0.6
            }} className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-full mb-6 group-hover:shadow-lg transition-all duration-300 relative z-10`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-pink-200 transition-colors relative z-10 drop-shadow-md">
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-3 gap-4 relative z-10">
                  {category.tools.map((tool, toolIndex) => <motion.div key={tool.name} initial={{
                opacity: 0,
                scale: 0.5,
                rotate: -180
              }} whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0
              }} transition={{
                delay: index * 0.1 + toolIndex * 0.05,
                type: "spring",
                stiffness: 200
              }} viewport={{
                once: true
              }} whileHover={{
                scale: 1.1,
                y: -5,
                rotate: [0, -5, 5, 0],
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)"
              }} className="group/tool relative">
                      <motion.div className="bg-white/30 rounded-xl p-4 border border-white/40 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-sm" whileHover={{
                  background: "rgba(255, 255, 255, 0.4)"
                }}>
                        <motion.div className="relative z-10" animate={{
                    y: [0, -2, 0]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}>
                          <motion.img src={tool.image} alt={tool.name} className="w-12 h-12 mx-auto mb-3 object-contain filter drop-shadow-lg" whileHover={{
                      rotate: [0, 360],
                      filter: "drop-shadow(0 8px 16px rgba(255, 255, 255, 0.5))"
                    }} transition={{
                      duration: 0.6
                    }} onError={e => {
                      console.log(`Failed to load image for ${tool.name}:`, e.currentTarget.src);
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.add('mt-6');
                    }} />
                          <motion.p whileHover={{
                      scale: 1.05
                    }} className="text-xs font-semibold text-center leading-tight transition-colors drop-shadow-sm text-gray-950">
                            {tool.name}
                          </motion.p>
                        </motion.div>

                        <motion.div className="absolute inset-0 rounded-xl opacity-0 group-hover/tool:opacity-100 transition-opacity duration-300" style={{
                    background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)"
                  }} />
                      </motion.div>
                    </motion.div>)}
                </div>
              </motion.div>;
        })}
        </div>
      </div>
    </section>;
};