"use client";

import { motion, useScroll } from "framer-motion";

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 z-50 origin-left shadow-[0_0_10px_rgba(56,189,248,0.5)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};