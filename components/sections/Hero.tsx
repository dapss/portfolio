"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import BlurText from "@/components/ui/BlurText";

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-transparent">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="pointer-events-auto">
            <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
            >
            <motion.div variants={itemVariants} className="mb-4">
                <span className="text-accent font-semibold text-lg inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
                Hello, I'm
                </span>
            </motion.div>
            
            <div className="mb-6 flex justify-center">
                <BlurText 
                    text="Mochamad Daffa" 
                    delay={150} 
                    animateBy="letters" 
                    direction="bottom" 
                    className="text-5xl md:text-7xl font-bold text-text justify-center drop-shadow-lg"
                />
            </div>
            
            <motion.div variants={itemVariants} className="mb-8">
                <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
                    Software Engineer & Creative Thinker
                </p>
            </motion.div>
            
            <motion.p 
                variants={itemVariants}
                className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg"
            >
                Crafting beautiful, functional web experiences with modern technologies. 
                Passionate about creating innovative solutions that make a difference.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex gap-4 justify-center mb-12">
                <Button variant="primary" size="lg" href="#projects" className="w-48 shadow-blue-500/25 shadow-lg">
                View My Work
                </Button>
                <Button variant="outline" size="lg" href="https://dapss.github.io/resume/Resume.pdf" className="w-48 bg-primary/20 backdrop-blur-sm">
                Download CV
                </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex gap-6 justify-center">
                {[
                    { icon: Github, href: "https://github.com/dapss" },
                    { icon: Linkedin, href: "https://linkedin.com/in/mochamaddaffa/" },
                    { icon: Mail, href: "mailto:mochamaddaffa05@gmail.com" }
                ].map((social, i) => (
                    <motion.a
                        key={i}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="cursor-target p-3 bg-secondary/80 backdrop-blur-sm rounded-full border border-gray-800 text-gray-400 hover:text-accent hover:border-accent transition-all duration-300 shadow-sm"
                    >
                        <social.icon size={24} />
                    </motion.a>
                ))}
            </motion.div>
            </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
      >
        <ArrowDown className="text-gray-400" size={24} />
      </motion.div>
    </section>
  );
};