"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiReact,
  SiNextdotjs, SiNodedotjs, SiExpress, SiTailwindcss, SiGit,
  SiDocker, SiAmazon, SiUnity, SiFigma, SiPostgresql,
  SiMongodb, SiRedis, SiFirebase
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const skillsData = {
  languages: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Python", icon: SiPython },
    { name: "HTML/CSS", icon: SiHtml5 },
    { name: "SQL", icon: FaDatabase },
  ],
  frameworks: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    // { name: "AWS", icon: SiAmazon },
    { name: "Unity", icon: SiUnity },
    { name: "Figma", icon: SiFigma },
  ],
  databases: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Firebase", icon: SiFirebase },
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
        >
          {skillsData[selectedCategory as keyof typeof skillsData].map((skill, index) => {
            const IconComponent = skill.icon;
            return (
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
                className="bg-secondary rounded-xl p-6 text-center border border-gray-800 hover:border-accent/50 transition-all duration-300 cursor-pointer group flex flex-col items-center justify-center gap-3"
              >
                {/* Render the icon component */}
                <IconComponent className="text-4xl text-gray-400 group-hover:text-accent transition-colors duration-300" />
                <h3 className="text-text font-semibold">{skill.name}</h3>
              </motion.div>
            )
          })}
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
          </p>
        </motion.div>
      </div>
    </section>
  );
};