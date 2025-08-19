"use client";

import React, { useEffect, useState, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { fractionalCXOCopy } from "@/lib/copy/fractionalcxo";
import { ExternalLink, ChevronDown, TrendingUp, Users, Briefcase, Award, Clock, Target, Sparkles, ArrowRight } from "lucide-react";

// Enhanced Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const slideUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      mass: 0.8
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20
    }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 20
    }
  }
};

const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(59, 130, 246, 0.3)",
      "0 0 40px rgba(59, 130, 246, 0.6)",
      "0 0 20px rgba(59, 130, 246, 0.3)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Enhanced CXO value propositions data
const cxoValues = [
  { 
    icon: TrendingUp, 
    title: "Revenue Growth", 
    description: "Accelerated revenue scaling",
    metric: "300%",
    subtext: "Average growth",
    gradient: "from-emerald-400 to-green-600",
    delay: 0.1
  },
  { 
    icon: Users, 
    title: "Team Performance", 
    description: "High-performing culture",
    metric: "95%",
    subtext: "Retention rate",
    gradient: "from-blue-400 to-indigo-600",
    delay: 0.2
  },
  { 
    icon: Target, 
    title: "Market Penetration", 
    description: "Strategic market entry",
    metric: "5x",
    subtext: "Faster launch",
    gradient: "from-purple-400 to-violet-600",
    delay: 0.3
  },
  { 
    icon: Clock, 
    title: "Time to Value", 
    description: "Rapid implementation",
    metric: "60%",
    subtext: "Faster results",
    gradient: "from-orange-400 to-red-600",
    delay: 0.4
  }
];

// Executive credibility stats
const executiveStats = [
  { number: "15+", label: "Years C-Suite", sublabel: "Fortune 500 Experience" },
  { number: "6-12", label: "Month Engagements", sublabel: "Flexible Commitment" },
  { number: "10x", label: "ROI Average", sublabel: "Proven Results" }
];

const CXOHeroNew: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax effects for performance
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const floatingY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(setScrollY);
    return unsubscribe;
  }, [scrollYProgress]);

  // Optimized mouse tracking with throttling
  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    });
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const throttledMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => handleMouseMove(e), 16); // ~60fps
    };

    window.addEventListener('mousemove', throttledMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      clearTimeout(timeoutId);
    };
  }, [handleMouseMove]);

  // Optimized scroll handler
  const handleScrollToAudience = useCallback(() => {
    const element = document.getElementById("audience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // Intersection observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const heroElement = document.getElementById('hero');
    if (heroElement) {
      observer.observe(heroElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="hero" className="hero-section relative min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        {/* Premium gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 via-blue-950/20 to-indigo-950/40" />
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-950/20 via-transparent to-blue-950/20" />
        
        {/* Professional grid overlay with animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ delay: 1, duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-size-[100px_100px]" />
        </motion.div>

        {/* Enhanced geometric patterns with mouse interaction */}
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.05, 1],
            }}
            style={{
              x: mousePosition.x * 0.5,
              y: mousePosition.y * 0.5,
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-72 h-72 border border-blue-400/15 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1.05, 1, 1.05],
            }}
            style={{
              x: mousePosition.x * -0.3,
              y: mousePosition.y * -0.3,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-32 left-16 w-56 h-56 border border-purple-400/15 rotate-45"
          />
          
          {/* Additional floating elements */}
          <motion.div
            style={{ y: floatingY }}
            className="absolute top-1/3 left-1/4 w-32 h-32"
          >
            <motion.div
              animate={{
                rotate: [0, 180, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full h-full border border-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg"
            />
          </motion.div>
        </div>

        {/* Ambient lighting effects */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-blue-500/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-purple-500/5 via-transparent to-transparent blur-3xl" />
      </motion.div>

      {/* Main Content Container */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center"
      >
        <div className="flex flex-col items-center justify-center w-full text-center py-5 sm:py-10 lg:py-14 min-h-0">
          
          {/* Centered Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-5xl mx-auto mt-8 sm:mt-12 lg:mt-16"
          >
            {/* Premium Badge with enhanced animations */}
            <motion.div
              variants={slideUp}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
              </motion.div>
              <span className="text-blue-300 text-sm font-medium">Premium Fractional CXO</span>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-4 bg-blue-400 rounded-full" 
              />
            </motion.div>

            {/* Enhanced Executive Headline */}
            <motion.div variants={slideUp} className="mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.9] tracking-tight">
                <motion.span 
                  className="block text-white mb-4"
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Fractional CXO
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Executive Power
                </motion.span>
                <motion.span 
                  className="block text-white/90 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-normal"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
                    On Demand
                  </span>
                </motion.span>
              </h1>
            </motion.div>

            {/* Enhanced Executive Subheadline */}
            <motion.p
              variants={slideUp}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12 sm:mb-16 max-w-4xl mx-auto"
            >
              Get <span className="text-white font-semibold">C-suite expertise</span> without the 
              <span className="text-red-400 font-semibold"> $200K+ commitment</span>. 
              Transform your startup with{" "}
              <span className="text-blue-400 font-semibold">executive-grade strategy</span>,{" "}
              <span className="text-purple-400 font-semibold">investor-ready processes</span>, and{" "}
              <span className="text-emerald-400 font-semibold">proven growth frameworks</span>{" "}
              in just 30 days.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={slideUp}
              className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-12 sm:mb-16 lg:mb-20"
            >
              <motion.a
                href="https://calendly.com/msohanh/ai-discussion"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-lg opacity-75"
                  animate={isHovered ? { opacity: 1, scale: 1.05 } : { opacity: 0.75, scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 flex items-center space-x-3 border border-blue-400/30">
                  <span>See if we’re a fit</span>
                  <motion.div
                    animate={{ x: isHovered ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.a>
              
              <motion.button
                onClick={handleScrollToAudience}
                className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 px-2"
                whileHover={{ x: 5 }}
              >
                <span className="border-b border-gray-500 group-hover:border-blue-400 transition-colors">
                  Explore Success Stories
                </span>
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-4 h-4 group-hover:text-blue-400" />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Enhanced Executive Stats */}
            <motion.div
              variants={slideUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 max-w-4xl mx-auto mb-24 sm:mb-32"
            >
              {executiveStats.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center group relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500"
                    whileHover={{ 
                      boxShadow: "0 20px 60px rgba(59, 130, 246, 0.1)",
                      scale: 1.02
                    }}
                  />
                  <div className="relative z-10 p-8">
                    <motion.div 
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
                      animate={{ 
                        textShadow: [
                          "0 0 0px rgba(59, 130, 246, 0)",
                          "0 0 20px rgba(59, 130, 246, 0.4)",
                          "0 0 0px rgba(59, 130, 246, 0)"
                        ]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        delay: index * 0.8
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-300 text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                      {stat.label}
                    </div>
                    <div className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors">
                      {stat.sublabel}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </motion.div>

      {/* Enhanced Professional Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, type: "spring" }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.button
          onClick={handleScrollToAudience}
          className="group flex flex-col items-center space-y-3 text-gray-400 hover:text-white transition-colors duration-300"
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="relative w-7 h-12 border-2 border-gray-600 rounded-full flex justify-center group-hover:border-blue-400 transition-colors duration-300 bg-gradient-to-b from-transparent via-transparent to-blue-500/5"
            animate={{
              boxShadow: [
                "0 0 0px rgba(59, 130, 246, 0)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 0px rgba(59, 130, 246, 0)"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              animate={{ 
                y: [2, 16, 2],
                opacity: [1, 0.3, 1]
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "easeInOut",
                times: [0, 0.5, 1]
              }}
              className="w-1.5 h-4 bg-gradient-to-b from-gray-400 to-blue-400 rounded-full mt-2 group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300"
            />
            
            {/* Scroll indicator glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.div 
            className="text-xs font-medium tracking-wide"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Discover More
          </motion.div>
          
          {/* Additional animated elements */}
          <motion.div
            className="flex space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2.5 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-1 bg-blue-400/50 rounded-full"
                animate={{
                  scale: [0.5, 1, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.button>
      </motion.div>
  </section>
  </>
  );
};

export default CXOHeroNew;