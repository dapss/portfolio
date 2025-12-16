"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiReact, SiPhp,
  SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiGit, SiLaravel,
  SiDocker, SiAmazon, SiUnity, SiFigma, SiPostgresql,
  SiMongodb, SiRedis, SiFirebase
} from "react-icons/si";
import { FaDatabase, FaJava } from "react-icons/fa";
import SpotlightCard from "@/components/ui/SpotlightCard";

const skillsData = {
  languages: [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Java", icon: FaJava, color: "#ED8B00" }, // Added Java
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
    { name: "SQL", icon: FaDatabase, color: "#4479A1" },
  ],
  frameworks: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" }, // Restored Laravel
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  ],
  tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Unity", icon: SiUnity, color: "#c5c5c5" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  ],
  databases: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ],
};

const categories = [
  { id: "languages", name: "Languages", color: "from-blue-600 to-cyan-500" },
  { id: "frameworks", name: "Frameworks", color: "from-purple-600 to-pink-500" },
  { id: "tools", name: "Tools", color: "from-green-600 to-emerald-500" },
  { id: "databases", name: "Databases", color: "from-orange-600 to-red-500" },
];

export const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState("languages");

  return (
    <section id="skills" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">Technical Skills</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Explore my technical stack across different categories</p>
        </motion.div>

        {/* --- CATEGORY BUTTONS (No Fluid Animation) --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => {
                const isSelected = selectedCategory === category.id;
                return (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`
                            relative px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300
                            flex items-center gap-2 cursor-target border overflow-hidden
                            ${isSelected 
                                ? `text-white border-transparent shadow-[0_0_20px_rgba(0,0,0,0.5)] transform scale-105` 
                                : "bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-gray-200"
                            }
                        `}
                    >
                        {/* Background Gradient (Simple Fade In, No Slide) */}
                        <AnimatePresence>
                            {isSelected && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className={`absolute inset-0 rounded-xl bg-gradient-to-r ${category.color}`}
                                />
                            )}
                        </AnimatePresence>

                        {/* Text Content */}
                        <span className="relative z-10">{category.name}</span>
                        
                        {/* Dot Indicator */}
                        {isSelected && (
                            <motion.span 
                                initial={{ scale: 0, opacity: 0 }} 
                                animate={{ scale: 1, opacity: 1 }}
                                className="relative z-10 bg-white/20 p-1 rounded-full"
                            >
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </motion.span>
                        )}
                    </button>
                );
            })}
        </div>

        {/* --- SKILL CARDS --- */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {skillsData[selectedCategory as keyof typeof skillsData].map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <SpotlightCard
                    className="h-full min-h-[160px] group border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  >
                    {/* Centered Content Wrapper */}
                    <div className="flex flex-col items-center justify-center gap-5 w-full h-full py-8 px-6">
                        
                        {/* Inner Colored Box */}
                        <div 
                            className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                            style={{ 
                                backgroundColor: `${skill.color}20`,
                                boxShadow: `0 0 0 1px ${skill.color}40`
                            }}
                        >
                          <IconComponent 
                            className="text-4xl transition-all duration-300 drop-shadow-lg" 
                            style={{ color: skill.color }}
                          />
                        </div>
                        
                        {/* Text */}
                        <h3 className="text-gray-300 text-sm md:text-base font-medium tracking-wide group-hover:text-white transition-colors text-center">
                            {skill.name}
                        </h3>
                    </div>
                  </SpotlightCard>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};