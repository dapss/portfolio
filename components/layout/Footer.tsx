"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

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
              © Mochamad Daffa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-6"
          >
            {[
              { href: "https://github.com/dapss", icon: Github },
              { href: "https://linkedin.com/in/mochamaddaffa/", icon: Linkedin },
              { href: "mailto:mochamaddaffa05@gmail.com", icon: Mail }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                // Added cursor-target here
                className="cursor-target text-gray-400 hover:text-accent transition-colors"
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};