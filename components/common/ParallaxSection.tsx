"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxSection = ({ 
  children, 
  speed = 0.5, 
  className = "" 
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 300]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="h-full">
        {children}
      </motion.div>
    </div>
  );
};