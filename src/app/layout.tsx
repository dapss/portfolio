import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollIndicator } from "@/components/common/ScrollIndicator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import TargetCursor from "@/components/common/TargetCursor"; 
import AnimatedBackground from "@/components/common/AnimatedBackground"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mochamad Daffa - Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className + " bg-primary text-text relative"}>
        
        {/* Global Animated Background (Behind everything) */}
        <AnimatedBackground />

        {/* Global Cursor */}
        <TargetCursor 
            spinDuration={4} 
            hideDefaultCursor={true} 
            targetSelector=".cursor-target" 
        />
        
        {/* Main Content (Transparent wrapper) */}
        <div className="relative z-10">
            <ScrollIndicator />
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
      </body>
    </html>
  );
}