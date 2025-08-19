"use client";

import React, { useMemo } from "react";
import { OptimizedAurora } from "@/components/ui/optimized-aurora";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSectionOptimized() {
  // Simplified animation variants with reduced complexity
  const fadeInVariants = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.4, 0.0, 0.2, 1] as const,
    },
  }), []);

  // Optimized text generation effect - static text with simple fade-in
  const words = "We build customized AI Agents for solopreneurs and SMBs";

  return (
    <section id="hero" className="hero-optimize">
      <OptimizedAurora className="min-h-screen w-full flex items-center justify-center hero-optimize">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <motion.div
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            transition={fadeInVariants.transition}
            viewport={{ once: true, margin: "-50px" }}
            className="relative flex flex-col gap-4 lg:gap-6 items-center justify-center px-4 max-w-5xl mx-auto"
          >
            {/* Logo */}
            <div>
              <Image
                src="/images/ai-buddy-logo-white.png"
                alt="AI Buddy Logo"
                width={180}
                height={60}
                className="mx-auto w-[140px] lg:w-[180px]"
                priority
                loading="eager"
                sizes="(max-width: 768px) 140px, 180px"
              />
            </div>

            {/* Main Heading - Optimized text animation */}
            <h1 className="font-bold text-white text-center leading-tight text-xl md:text-4xl lg:text-6xl">
              {words}
            </h1>

            {/* Subtitle */}
            <div className="font-light text-base md:text-lg lg:text-2xl text-white/90 text-center max-w-3xl px-2">
              Choose pre-built features or order a custom AI Agent for your needs
            </div>

            {/* CTA Button - Simplified border animation */}
            <Link 
              href="https://calendly.com/msohanh/ai-discussion" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="relative inline-flex h-10 lg:h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6 lg:mt-8 z-10 group"
            >
              {/* Simplified background gradient - no animation */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 lg:px-8 py-4 text-base lg:text-lg font-medium text-white backdrop-blur-3xl">
                Book a Call
              </span>
            </Link>

            {/* Simple sparkle effect using CSS only */}
            <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 h-[5vh] w-[150px] overflow-hidden">
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      animation: 'twinkle 3s ease-in-out infinite',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </OptimizedAurora>
      
      {/* CSS for simple sparkle animation */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}