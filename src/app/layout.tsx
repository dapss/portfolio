import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollIndicator } from "@/components/common/ScrollIndicator";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + " bg-primary text-text"}>
        <ScrollIndicator />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}