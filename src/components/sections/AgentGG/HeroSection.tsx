"use client";

import React from "react";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";
import Image from "next/image";

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
            className="relative flex flex-col gap-4 items-center justify-center px-4 max-w-5xl mx-auto"
          >
            {/* Agent GG Logo */}
            <div className="w-32 md:w-40 mb-2">
              <Image
                src="/images/agent-gg-logo.png"
                alt="Agent GG Logo"
                width={160}
                height={160}
                priority
                className="w-full h-[40px] object-cover"
              />
            </div>

            <h1 className="text-white text-center leading-tight font-bold">
              <TextGenerateEffect
                words="Meet Agent GG: Your AI-Powered Co-Pilot for Smarter Workflows"
                textSize="text-xl md:text-3xl"
              />
            </h1>

            <p className="font-light text-base md:text-xl text-white/90 text-center max-w-3xl">
              Get critical tasks done faster, lower decision fatigue, make smarter decisions - every single day.
            </p>

            {/* Product Demo Video */}
            <div className="w-full max-w-3xl mt-2 mb-4">
              <div style={{ position: 'relative', paddingBottom: '57.82%', height: 0 }}>
                <iframe
                  src="https://www.loom.com/embed/fe83ea0c07bc4dc7817c4adcbe44ac28?sid=b3194d0a-b70a-4a2d-8579-711a40c3fac2"
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '0.75rem' }}
                />
              </div>
            </div>

            {/* CTA Button with rotating border animation */}
            <Link href="https://calendly.com/msohanh/ai-discussion" target="_blank" rel="noopener noreferrer" className="relative inline-flex h-12 overflow-hidden rounded-full p-px focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-10">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-lg font-medium text-white backdrop-blur-3xl">
                Book a Demo
              </span>
            </Link>
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
}
