"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className = "",
  onClick,
  href
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200";
  
  const variants = {
    primary: "bg-accent text-primary hover:bg-blue-600 shadow-lg hover:shadow-xl",
    outline: "border-2 border-accent text-accent hover:bg-accent hover:text-primary",
    ghost: "text-gray-400 hover:text-accent hover:bg-primary/50",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const Component = href ? "a" : "button";
  
  return (
    <Component
      href={href}
      onClick={onClick}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
      >
        {children}
      </motion.div>
    </Component>
  );
};