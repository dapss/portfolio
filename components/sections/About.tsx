"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/Button";
import { Download, Code, Zap, Users } from "lucide-react";

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Zap, label: "Years of Experience", value: "5+" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating amazing web experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                className="inline-block"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-accent to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-primary">YN</span>
                </div>
              </motion.div>
              
              <h3 className="text-3xl font-bold text-text mb-4">
                Building Digital Experiences
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 mb-8"
            >
              <p className="text-gray-300 leading-relaxed">
                Hi! I'm a full-stack developer with 5+ years of experience building web applications. 
                I specialize in React, Next.js, and Node.js, with a passion for creating intuitive, 
                performant user interfaces that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source, 
                or sharing my knowledge through technical writing and mentoring aspiring developers.
              </p>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              <div className="bg-secondary rounded-lg p-4 text-center">
                <h4 className="text-accent font-semibold mb-2">Frontend</h4>
                <p className="text-gray-400 text-sm">React, Next.js, TS</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <h4 className="text-accent font-semibold mb-2">Backend</h4>
                <p className="text-gray-400 text-sm">Node.js, Python, SQL</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <h4 className="text-accent font-semibold mb-2">Tools</h4>
                <p className="text-gray-400 text-sm">Git, Docker, AWS</p>
              </div>
              <div className="bg-secondary rounded-lg p-4 text-center">
                <h4 className="text-accent font-semibold mb-2">Design</h4>
                <p className="text-gray-400 text-sm">Figma, Tailwind</p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="bg-secondary rounded-lg p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-bold text-text mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <Button variant="primary" className="flex items-center gap-2 mx-auto">
                <Download size={16} />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};