"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#0f172a]" />

      <div 
        className="absolute inset-0" 
        style={{
            background: 'radial-gradient(circle at center, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.8) 100%)'
        }}
      />

      <div 
        className="absolute inset-[-100%] bg-[size:50px_50px] opacity-[0.15]"
        style={{
            backgroundImage: 'linear-gradient(to right, rgba(56, 189, 248, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.3) 1px, transparent 1px)',
            animation: 'panBackground 60s linear infinite'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <style jsx>{`
        @keyframes panBackground {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            /* Move by exactly one grid tile size to create a seamless loop */
            transform: translate3d(50px, 50px, 0);
          }
        }
      `}</style>
    </div>
  );
}