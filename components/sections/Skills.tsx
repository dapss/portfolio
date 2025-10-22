"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const skillsData = {
  languages: [
    { name: "JavaScript", icon: "JS", level: "Expert" },
    { name: "TypeScript", icon: "TS", level: "Advanced" },
    { name: "Python", icon: "PY", level: "Advanced" },
    { name: "HTML/CSS", icon: "🎨", level: "Expert" },
    { name: "SQL", icon: "DB", level: "Intermediate" },
  ],
  frameworks: [
    { name: "React", icon: "⚛️", level: "Expert" },
    { name: "Next.js", icon: "▲", level: "Advanced" },
    { name: "Node.js", icon: "N", level: "Advanced" },
    { name: "Express", icon: "E", level: "Intermediate" },
    { name: "Tailwind", icon: "🌊", level: "Expert" },
  ],
  tools: [
    { name: "Git", icon: "📦", level: "Advanced" },
    { name: "Docker", icon: "🐳", level: "Intermediate" },
    { name: "AWS", icon: "☁️", level: "Intermediate" },
    { name: "Unity", icon: "🎮", level: "Beginner" },
    { name: "Figma", icon: "🎨", level: "Advanced" },
  ],
  databases: [
    { name: "PostgreSQL", icon: "🐘", level: "Advanced" },
    { name: "MongoDB", icon: "🍃", level: "Intermediate" },
    { name: "Redis", icon: "🔴", level: "Intermediate" },
    { name: "Firebase", icon: "🔥", level: "Advanced" },
  ],
};

const categories = [
  { id: "languages", name: "Languages", color: "from-blue-500 to-cyan-500" },
  { id: "frameworks", name: "Frameworks", color: "from-purple-500 to-pink-500" },
  { id: "tools", name: "Tools", color: "from-green-500 to-emerald-500" },
  { id: "databases", name: "Databases", color: "from-orange-500 to-red-500" },
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [selectedCategory, setSelectedCategory] = useState("languages");

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my technical stack across different categories
          </p>
        </motion.div>

        {/* Category Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-primary shadow-lg scale-105`
                  : "bg-secondary text-gray-400 hover:text-text border border-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {skillsData[selectedCategory as keyof typeof skillsData].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05 + 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              className="bg-secondary rounded-xl p-6 text-center border border-gray-800 hover:border-accent/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-text font-semibold mb-2">{skill.name}</h3>
              <span className={`inline-block px-3 py-1 rounded-full text-xs ${
                skill.level === "Expert" ? "bg-green-500/20 text-green-400" :
                skill.level === "Advanced" ? "bg-blue-500/20 text-blue-400" :
                skill.level === "Intermediate" ? "bg-yellow-500/20 text-yellow-400" :
                "bg-gray-500/20 text-gray-400"
              }`}>
                {skill.level}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Always learning and exploring new technologies. 
            <span className="text-accent"> Currently diving into Web3 and AI! 🚀</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};