"use client";

import { motion, Variants } from "framer-motion"; // 1. Import Variants
import { AnimatedText } from "@/components/common/AnimatedText";
import { ParallaxSection } from "@/components/common/ParallaxSection";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const containerVariants: Variants = { // Also good practice to type this one
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  // 2. Add the Variants type annotation here
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut", // This will now be correctly typed
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-accent font-semibold text-lg">Hello, I'm</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-text mb-6">
            <AnimatedText text="John Doe" delay={0.5} />
          </motion.h1>
          
          <motion.div variants={itemVariants} className="mb-8">
            <AnimatedText 
              text="Full Stack Developer & Creative Thinker" 
              className="text-2xl md:text-3xl text-gray-400"
              delay={0.8}
            />
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg"
          >
            Crafting beautiful, functional web experiences with modern technologies. 
            Passionate about creating innovative solutions that make a difference.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex gap-4 justify-center mb-12">
            <Button variant="primary" size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg">
              Download CV
            </Button>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex gap-6 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-gray-400" size={24} />
      </motion.div>
    </section>
  );
};