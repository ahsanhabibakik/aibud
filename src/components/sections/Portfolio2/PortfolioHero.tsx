"use client";
import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { LazyBackgroundBoxes, LazySparkles } from "@/components/ui/lazy-components";
import { portfolioProducts } from "@/lib/portfolio-data";
import Image from "next/image";
import { ExternalLink, ArrowDown } from "lucide-react";

const PortfolioHero = () => {
  const featuredProducts = portfolioProducts.filter(p => p.featured).slice(0, 6);

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
    <div className="min-h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-black to-pink-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
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
              <TextGenerateEffect 
                words="Results we can replicate for you."
                className="text-2xl md:text-3xl text-neutral-300 font-medium"
              />
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className={`
                    relative group cursor-pointer rounded-xl overflow-hidden border border-white/5 bg-neutral-900/50 p-3 hover:border-purple-500/20 transition-all duration-200
                    ${index === 0 ? 'col-span-2' : ''}
                    ${index === 1 || index === 2 ? 'h-28' : 'h-36'}
                  `}
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
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 text-xs font-medium">Live</span>
                      </div>
                    )}
                  </div>

                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToGrid}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default PortfolioHero;