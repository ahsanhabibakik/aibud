"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero">
      <AuroraBackground className="min-h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 lg:gap-6 items-center justify-center px-4 max-w-5xl mx-auto"
          >
            <div>
              <Image
                src="/images/ai-buddy-logo-white.png"
                alt="AI Buddy Logo"
                width={180}
                height={60}
                className="mx-auto w-[140px] lg:w-[180px]"
              />
            </div>
            <h1 className="font-bold text-white text-center leading-tight">
              <TextGenerateEffect words="We build customized AI Agents for solopreneurs and SMBs"  textSize="text-xl md:text-4xl lg:text-6xl"/>
            </h1>
            <div className="font-light text-base md:text-lg lg:text-2xl text-white/90 text-center max-w-3xl px-2">
            Choose pre-built features or order a custom AI Agent for your needs
            </div>


            {/* CTA Button with rotating border animation */}
            <Link href="https://calendly.com/msohanh/ai-discussion" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-10 lg:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-6 lg:mt-8 z-10">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 lg:px-8 py-4 text-base lg:text-lg font-medium text-white backdrop-blur-3xl">
              Book a Call
              </span>
            </Link>

            {/* Sparkles component - positioned absolutely below the button */}
            <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 h-[5vh] w-[150px]">
              <SparklesCore
                background="transparent"
                minSize={0.3}
                maxSize={1.0}
                particleDensity={1000}
                particleColor="#ffffff"
                speed={0.8}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
}
