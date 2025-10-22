"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-gray-400">
              © 2024 YourName. Made with <Heart className="inline text-red-500" size={16} /> using Next.js
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};