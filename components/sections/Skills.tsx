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
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "HTML/CSS", icon: SiHtml5, color: "#E34F26" },
    { name: "SQL", icon: FaDatabase, color: "#4479A1" },
  ],
  frameworks: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#ffffff" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
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
  { id: "languages", name: "Languages", color: "from-sky-500 to-blue-600" },
  { id: "frameworks", name: "Frameworks", color: "from-violet-500 to-indigo-500" },
  { id: "tools", name: "Tools", color: "from-emerald-400 to-teal-500" },
  { id: "databases", name: "Databases", color: "from-orange-500 to-amber-500" },
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
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Explore my technical stack across different categories</p>
        </motion.div>

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
                                ? `text-white border-transparent shadow-[0_0_20px_rgba(14,165,233,0.3)] transform scale-105` 
                                : "bg-slate-800/50 text-slate-400 border-slate-700 hover:border-sky-500/30 hover:bg-slate-800 hover:text-sky-200"
                            }
                        `}
                    >
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
                        <span className="relative z-10">{category.name}</span>
                    </button>
                );
            })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="contents" 
            >
                {skillsData[selectedCategory as keyof typeof skillsData].map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                    <div key={skill.name}>
                    <SpotlightCard
                        className="h-full min-h-[160px] group border-slate-800 bg-slate-900/80 hover:border-sky-500/30"
                    >
                        <div className="flex flex-col items-center justify-center gap-5 w-full h-full py-8 px-6">
                            <div 
                                className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                                style={{ 
                                    backgroundColor: `${skill.color}15`, 
                                    boxShadow: `0 0 0 1px ${skill.color}30`
                                }}
                            >
                            <IconComponent 
                                className="text-4xl transition-colors duration-300 drop-shadow-lg" 
                                style={{ color: skill.color }}
                            />
                            </div>
                            
                            <h3 className="text-slate-300 text-sm md:text-base font-medium tracking-wide group-hover:text-white transition-colors text-center">
                                {skill.name}
                            </h3>
                        </div>
                    </SpotlightCard>
                    </div>
                )
                })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};