"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { agentHero } from "@/lib/copy/agent";
import { ExternalLink, ChevronDown, Sparkles, Zap, Brain, Target } from "lucide-react";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Modern agent capabilities data
const agentCapabilities = [
  { 
    icon: Brain, 
    label: "AI Intelligence", 
    description: "Deep learning insights",
    color: "from-purple-500 to-violet-600",
    position: { top: "15%", left: "10%" }
  },
  { 
    icon: Target, 
    label: "Precision Focus", 
    description: "Laser-targeted execution",
    color: "from-blue-500 to-cyan-500",
    position: { top: "25%", right: "15%" }
  },
  { 
    icon: Zap, 
    label: "Lightning Speed", 
    description: "Instant processing power",
    color: "from-yellow-500 to-orange-500",
    position: { bottom: "30%", left: "12%" }
  },
  { 
    icon: Sparkles, 
    label: "Adaptive Learning", 
    description: "Evolves with your business",
    color: "from-pink-500 to-rose-500",
    position: { bottom: "20%", right: "10%" }
  }
];

const AgentHeroNew: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / window.innerWidth,
        y: (e.clientY - window.innerHeight / 2) / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToUseCases = () => {
    const element = document.getElementById("use-cases");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-indigo-950 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Dynamic gradient background */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(1000px circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(139, 92, 246, 0.15), transparent 50%)`,
          }}
        />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.9)_70%)]" />
        </div>
        
        {/* Advanced grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-blue-500/20 rotate-45"
          />
        </div>
      </div>

      {/* Enhanced Floating Capability Cards */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {agentCapabilities.map((capability, index) => {
          const Icon = capability.icon;
          return (
            <motion.div
              key={capability.label}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: 0,
                y: [0, -15, 0],
                x: mousePosition.x * (10 + index * 5),
                rotateY: mousePosition.x * 10,
              }}
              transition={{
                delay: 0.8 + index * 0.2,
                duration: 1,
                y: {
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="absolute hidden lg:block"
              style={capability.position}
            >
              <div className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${capability.color} rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity`} />
                <div className="relative bg-black/80 border border-white/10 rounded-2xl p-4 backdrop-blur-lg hover:border-white/30 transition-all duration-500 transform hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-r ${capability.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{capability.label}</h4>
                      <p className="text-white/60 text-xs mt-1">{capability.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Main Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        {/* Enhanced Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300 text-sm font-medium">{agentHero.badge}</span>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        </motion.div>

        {/* Enhanced Headline */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Custom AI Agent
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent mt-2">
              for Founders
            </span>
          </h1>
        </motion.div>

        {/* Enhanced Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
        >
          <span className="bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            {agentHero.subtitle}
          </span>
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <a
            href="https://calendly.com/msohanh/ai-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <span>{agentHero.ctaPrimary.label}</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
          
          <button
            onClick={handleScrollToUseCases}
            className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
          >
            <span className="border-b border-gray-500 group-hover:border-white transition-colors">
{agentHero.ctaSecondary.label}
            </span>
            <ChevronDown className="w-4 h-4 group-hover:animate-bounce" />
          </button>
        </motion.div>

        {/* Enhanced Stats/Metrics */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { metric: "40%", label: "Faster Decisions", color: "from-green-400 to-emerald-500" },
            { metric: "60%", label: "Time Saved", color: "from-blue-400 to-cyan-500" },
            { metric: "10x", label: "Better Insights", color: "from-purple-400 to-pink-500" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.2 }}
              className="text-center"
            >
              <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.metric}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <button
          onClick={handleScrollToUseCases}
          className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2 group-hover:bg-white transition-colors"
            />
          </div>
          <span className="text-xs font-medium">Scroll to explore</span>
        </button>
      </motion.div>
    </section>
  );
};

export default AgentHeroNew;