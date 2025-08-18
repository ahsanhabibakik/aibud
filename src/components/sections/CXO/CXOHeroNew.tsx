"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fractionalCXOCopy } from "@/lib/copy/fractionalcxo";
import { ExternalLink, ChevronDown, TrendingUp, Users, Briefcase, Award, Clock, Target } from "lucide-react";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20
    }
  }
};

// CXO value propositions data
const cxoValues = [
  { 
    icon: TrendingUp, 
    title: "Strategic Growth", 
    description: "Scale smart, not just fast",
    metric: "3x",
    gradient: "from-emerald-400 to-green-600"
  },
  { 
    icon: Users, 
    title: "Team Excellence", 
    description: "Build high-performing teams",
    metric: "90%",
    gradient: "from-blue-400 to-indigo-600"
  },
  { 
    icon: Target, 
    title: "Market Focus", 
    description: "Hit the right targets",
    metric: "2x",
    gradient: "from-purple-400 to-violet-600"
  },
  { 
    icon: Clock, 
    title: "Speed to Market", 
    description: "Move faster than competitors",
    metric: "50%",
    gradient: "from-orange-400 to-red-600"
  }
];

const CXOHeroNew: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setScrollY);
    return unsubscribe;
  }, [scrollYProgress]);

  const handleScrollToAudience = () => {
    const element = document.getElementById("audience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Dynamic Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        {/* Executive-style gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-blue-900/10 to-indigo-950/30" />
        
        {/* Professional grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>

        {/* Subtle geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-64 h-64 border border-blue-500/10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-32 left-16 w-48 h-48 border border-purple-500/10 rotate-45"
          />
        </div>
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left"
          >
            {/* Premium Badge */}
            <motion.div
              variants={slideUp}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
            >
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium">Fractional CXO Services</span>
              <div className="w-1 h-4 bg-blue-400 rounded-full" />
            </motion.div>

            {/* Executive Headline */}
            <motion.div variants={slideUp} className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-white mb-2">
                  Fractional CXO
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                  Executive Power
                </span>
                <span className="block text-white/90 text-3xl sm:text-4xl lg:text-5xl mt-2">
                  On Demand
                </span>
              </h1>
            </motion.div>

            {/* Executive Subheadline */}
            <motion.p
              variants={slideUp}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 max-w-lg"
            >
              Borrow <span className="text-white font-semibold">executive firepower</span> without the full-time hire. 
              Get clarity, speed, and investor-grade discipline in your first 6–12 months.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={slideUp}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
            >
              <a
                href="https://calendly.com/msohanh/ai-discussion"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>Book Executive Consultation</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
              
              <button
                onClick={handleScrollToAudience}
                className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <span className="border-b border-gray-500 group-hover:border-white transition-colors">
                  See Success Stories
                </span>
                <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
              </button>
            </motion.div>

            {/* Executive Stats */}
            <motion.div
              variants={slideUp}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { number: "C-Suite", label: "Experience" },
                { number: "6-12mo", label: "Engagement" },
                { number: "ROI+", label: "Results" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Value Cards */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative"
          >
            {/* Main Value Proposition Card */}
            <motion.div
              variants={slideUp}
              className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Why Fractional?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span>Get executive expertise without $200K+ salary</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span>Start immediately, no 6-month hiring process</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span>Scale engagement based on your needs</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Value Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {cxoValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={slideUp}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative bg-gradient-to-br from-slate-800/40 to-slate-900/60 backdrop-blur-lg border border-white/10 rounded-xl p-4 hover:border-white/20 transition-all duration-300"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${value.gradient} mb-3`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {value.title}
                      </h4>
                      
                      <p className="text-gray-400 text-xs mb-2">
                        {value.description}
                      </p>
                      
                      <div className={`text-lg font-bold bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                        {value.metric}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Professional Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <button
          onClick={handleScrollToAudience}
          className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-blue-400 transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2 group-hover:bg-blue-400 transition-colors"
            />
          </div>
          <span className="text-xs font-medium">Explore Services</span>
        </button>
      </motion.div>
    </section>
  );
};

export default CXOHeroNew;