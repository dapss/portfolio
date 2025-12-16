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
  href,
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 cursor-none";

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 shadow-md hover:shadow-lg hover:shadow-blue-500/20",
    
    outline: "border-2 border-accent text-accent hover:bg-accent/10",
    ghost: "text-gray-400 hover:text-accent hover:bg-primary/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        "cursor-target",
        className
      )}
    >
      {children}
    </Component>
  );
};