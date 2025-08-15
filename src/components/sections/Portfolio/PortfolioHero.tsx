"use client";
import React, { useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { portfolioProducts } from "@/lib/portfolio-data";
import { ExternalLink, ArrowDown } from "lucide-react";

const PortfolioHero = () => {
  const featuredProducts = useMemo(() => portfolioProducts.filter(p => p.featured).slice(0, 6), []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Scroll-based animations
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const heroY = useTransform(scrollY, [0, 300], [0, -100]);
  
  // Mouse tracking for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const kpiData = [
    { value: "15+", label: "Products Shipped" },
    { value: "5", label: "Industries Served" },
    { value: "40%", label: "Avg. Efficiency Gain" }
  ];

  const scrollToGrid = () => {
    const gridElement = document.getElementById('product-grid');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      className="min-h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center"
    >
      {/* Enhanced optimized background with mouse parallax */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>
        
        {/* Mouse-reactive floating elements */}
        <motion.div 
          animate={{ 
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '6s' }} />
        </motion.div>
        
        {/* Subtle moving gradients */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              background: [
                "radial-gradient(600px circle at 0px 0px, rgba(147, 51, 234, 0.15), transparent 40%)",
                "radial-gradient(600px circle at 100% 0px, rgba(236, 72, 153, 0.15), transparent 40%)",
                "radial-gradient(600px circle at 100% 100%, rgba(59, 130, 246, 0.15), transparent 40%)",
                "radial-gradient(600px circle at 0px 100%, rgba(147, 51, 234, 0.15), transparent 40%)"
              ]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Work we&apos;ve built.
                </span>
              </h1>
              <motion.h2 
                className="text-2xl md:text-3xl text-neutral-300 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Results we can replicate for you.
              </motion.h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              A curated look at agents, automations, and tools we&apos;ve built for founders and small teams.
            </motion.p>

            {/* KPI Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
            >
              {kpiData.map((kpi, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="text-2xl md:text-3xl font-bold text-emerald-400"
                  >
                    {kpi.value}
                  </motion.div>
                  <div className="text-sm text-neutral-400">{kpi.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://calendly.com/msohanh/ai-discussion"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Book a Call</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button
                onClick={scrollToGrid}
                className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Browse All Products</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Right Content - Product Mosaic */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30, rotateX: 15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.6 + index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8,
                    rotateX: -2,
                    scale: 1.02,
                    transition: { duration: 0.3, type: "spring", stiffness: 200 }
                  }}
                  className={`
                    relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 hover:border-purple-500/40 transition-all duration-300
                    ${index === 0 ? 'col-span-2' : ''}
                    ${index === 1 || index === 2 ? 'h-32' : 'h-40'}
                  `}
                  style={{ perspective: "1000px" }}
                >
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xl">{product.emoji}</span>
                        <span className="text-white font-medium text-sm">
                          {product.name}
                        </span>
                      </div>
                      <p className="text-neutral-400 text-xs leading-tight">
                        {product.description.length > 60 
                          ? `${product.description.substring(0, 60)}...`
                          : product.description
                        }
                      </p>
                    </div>
                    
                    {product.status === 'Live' && (
                      <motion.div 
                        className="flex items-center space-x-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <motion.div 
                          className="w-2 h-2 bg-green-400 rounded-full"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-green-400 text-xs font-medium">Live</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Enhanced hover effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Animated glow on hover */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                    whileHover={{
                      boxShadow: [
                        "0 0 0 0px rgba(147, 51, 234, 0)",
                        "0 0 0 4px rgba(147, 51, 234, 0.1)",
                        "0 0 0 0px rgba(147, 51, 234, 0)"
                      ]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced floating elements with mouse parallax */}
            <motion.div 
              animate={{ 
                x: mousePosition.x * -0.5,
                y: mousePosition.y * -0.5,
              }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
            />
            <motion.div 
              animate={{ 
                x: mousePosition.x * 0.3,
                y: mousePosition.y * 0.3,
                rotate: mousePosition.x * 0.1
              }}
              transition={{ type: "spring", damping: 25, stiffness: 150 }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
            />
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator with magnetic effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToGrid}
          className="relative p-3 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-purple-500/50 transition-all duration-300 group overflow-hidden"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 relative z-10" />
          </motion.div>
          
          {/* Ripple effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-purple-500/20"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ 
              scale: [0, 1.5, 2],
              opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 0.6 }}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioHero;