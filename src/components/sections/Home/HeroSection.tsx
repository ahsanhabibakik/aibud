"use client";

import React, { lazy, Suspense, useMemo } from "react";
import HeroPaperBackground from "@/components/ui/HeroPaperBackground";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Lazy load the sparkles component
const OptimizedSparkles = lazy(() => 
  import("@/components/ui/optimized-sparkles").then(module => ({ 
    default: module.OptimizedSparkles 
  }))
);

// Fallback component for sparkles loading
const SparklesLoading = () => (
  <div className="w-full h-full opacity-20 bg-gradient-to-r from-white/10 to-white/5 animate-pulse" />
);

export default function HeroSection() {
  // Optimized animation variants - faster and simpler
  const fadeInVariants = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1] as const,
    },
  }), []);

  return (
    <section 
      id="hero" 
      className="hero-optimize relative w-full min-h-screen overflow-hidden"
      style={{ margin: 0, padding: 0 }}
    >
      <HeroPaperBackground className="absolute inset-0 w-full h-full hero-optimize">
        <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-4">
          <motion.div
            initial={fadeInVariants.initial}
            whileInView={fadeInVariants.animate}
            transition={fadeInVariants.transition}
            viewport={{ once: true, margin: "-50px" }}
            className="relative flex flex-col gap-4 lg:gap-6 items-center justify-center px-4 max-w-5xl mx-auto"
          >
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
            <h1 className="font-bold text-white text-center leading-tight">
              <TextGenerateEffect words="We build customized AI Agents for solopreneurs and SMBs"  textSize="text-xl md:text-4xl lg:text-6xl"/>
            </h1>
            <div className="font-light text-base md:text-lg lg:text-2xl text-white/90 text-center max-w-3xl px-2">
            Choose pre-built features or order a custom AI Agent for your needs
            </div>


            {/* CTA Button with rotating border animation */}
            <Link href="https://calendly.com/msohanh/ai-discussion" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-10 lg:h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6 lg:mt-8 z-10">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 lg:px-8 py-4 text-base lg:text-lg font-medium text-white backdrop-blur-3xl">
              Book a Call
              </span>
            </Link>

            {/* Optimized Sparkles component - positioned absolutely below the button */}
            <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 h-[5vh] w-[150px]">
              <Suspense fallback={<SparklesLoading />}>
                <OptimizedSparkles
                  background="transparent"
                  minSize={0.3}
                  maxSize={1.0}
                  particleDensity={20}
                  particleColor="#ffffff"
                  speed={0.5}
                  className="w-full h-full"
                />
              </Suspense>
            </div>
          </motion.div>
        </div>
      </HeroPaperBackground>
    </section>
  );
}
