"use client";

import { useRef, MouseEvent } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({ 
  children, 
  className = "", 
  spotlightColor = "rgba(14, 165, 233, 0.25)" 
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !overlayRef.current) return;
    
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    
    rafRef.current = requestAnimationFrame(() => {
      if (overlayRef.current) {
        overlayRef.current.style.opacity = "1";
        overlayRef.current.style.background = `radial-gradient(500px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (overlayRef.current) {
      overlayRef.current.style.opacity = "0";
    }
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-sky-500/30 ${className}`}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300"
        style={{ willChange: "opacity" }}
      />
      <div className="relative h-full z-10">
        {children}
      </div>
    </div>
  );
}