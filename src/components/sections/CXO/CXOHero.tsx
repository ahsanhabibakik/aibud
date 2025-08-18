"use client";

import React from "react";
import { motion } from "framer-motion";
import { fractionalCXOCopy } from "@/lib/copy/fractionalcxo";
import { ExternalLink } from "lucide-react";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// CXO-specific floating cards data
const cxoCards = [
  { label: "Clarity", emoji: "🎯", position: { top: "15%", left: "8%" } },
  { label: "Speed", emoji: "⚡", position: { top: "25%", right: "12%" } },
  { label: "Discipline", emoji: "📋", position: { bottom: "35%", left: "10%" } },
  { label: "Focus", emoji: "🔍", position: { bottom: "20%", right: "18%" } },
  { label: "Execute", emoji: "🚀", position: { top: "55%", left: "18%" } },
  { label: "Results", emoji: "📈", position: { top: "65%", right: "8%" } }
];

const CXOHero: React.FC = () => {
  const handleScrollToAudience = () => {
    const element = document.getElementById("audience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        
        {/* Static grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
      </div>

      {/* Floating Cards */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {cxoCards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              delay: 0.5 + index * 0.1,
              duration: 0.8,
              y: {
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="absolute hidden lg:block"
            style={card.position}
          >
            <div className="bg-neutral-900/80 border border-white/10 rounded-xl p-3 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <span className="text-lg" role="img" aria-label={card.label}>
                  {card.emoji}
                </span>
                <span className="text-white text-sm font-medium">{card.label}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainerVariants}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUpVariants}
            className="mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
              Fractional CXO Services
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUpVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl mx-auto"
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {fractionalCXOCopy.hero.headline}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            className="text-lg md:text-xl text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {fractionalCXOCopy.hero.subcopy}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={fractionalCXOCopy.finalCTA.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{fractionalCXOCopy.hero.primaryCTA}</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.button
              onClick={handleScrollToAudience}
              className="px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Fractional CXO Services",
            "description": fractionalCXOCopy.hero.subcopy,
            "provider": {
              "@type": "Organization",
              "name": "AI Buddy",
              "url": "https://aibud.ca"
            },
            "areaServed": "Global",
            "serviceType": "Fractional Executive Services",
            "offers": {
              "@type": "Offer",
              "name": "Fractional CXO Engagement",
              "description": "Executive firepower for startups without full-time hire"
            }
          })
        }}
      />
    </section>
  );
};

export default CXOHero;