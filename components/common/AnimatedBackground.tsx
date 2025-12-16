"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep Dark Base */}
      <div className="absolute inset-0 bg-primary" />

      {/* Moving Blobs (Colors boosted for visibility) */}
      
      {/* Blue Orb - Top Left */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/40 rounded-full blur-[120px]"
      />

      {/* Purple Orb - Bottom Right */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          scale: [1, 1.5, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500/40 rounded-full blur-[120px]"
      />

      {/* Cyan/Accent Orb - Center */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-cyan-400/30 rounded-full blur-[100px]"
      />
    </div>
  );
}