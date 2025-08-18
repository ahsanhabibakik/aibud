"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const FlagshipProductSectionOptimized = () => {
  return (
    <section id="product" className="w-full bg-[#0a0a0a] my-12 relative z-10">
      <div className="flex flex-col overflow-hidden max-w-7xl mx-auto px-4">
        {/* Title Section - Simplified animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 mt-16"
        >
          <h2 className="text-4xl font-semibold text-white mb-4">
            Meet{" "}
            <Image 
              src="/images/agent-gg-logo.png" 
              alt="Agent GG" 
              width={180} 
              height={80} 
              className="inline-block" 
            />
          </h2>
          <p className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Our Flagship Product
          </p>
        </motion.div>

        {/* Product Image - Static with simple hover effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl mb-12"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl group">
            <Image
              src="/images/agent_gg.png"
              alt="AgentGG Product"
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>

        {/* CTA Button - Simplified animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <Link href="/agentgg">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
              {/* Simplified gradient - no spinning animation */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-base font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-900">
                Learn More About AgentGG
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FlagshipProductSectionOptimized;