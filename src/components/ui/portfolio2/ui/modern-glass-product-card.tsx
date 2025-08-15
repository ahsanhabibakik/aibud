"use client";
import React, { useState, memo, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PortfolioProduct } from "@/types/portfolio";
import { ExternalLink, Eye, Github, Zap, Star, ArrowUpRight, Sparkles } from "lucide-react";

interface ModernGlassProductCardProps {
  product: PortfolioProduct;
  index: number;
}

const ModernGlassProductCardComponent = ({ product, index }: ModernGlassProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Live':
        return {
          color: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
          glow: 'shadow-emerald-500/20',
          pulse: true
        };
      case 'Beta':
        return {
          color: 'bg-blue-500/20 text-blue-300 border-blue-400/30',
          glow: 'shadow-blue-500/20',
          pulse: false
        };
      case 'Coming Soon':
        return {
          color: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
          glow: 'shadow-amber-500/20',
          pulse: false
        };
      case 'Case Study':
        return {
          color: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
          glow: 'shadow-purple-500/20',
          pulse: false
        };
      default:
        return {
          color: 'bg-neutral-500/20 text-neutral-300 border-neutral-400/30',
          glow: 'shadow-neutral-500/20',
          pulse: false
        };
    }
  };

  const getCategoryTheme = (category: string) => {
    const themes: Record<string, any> = {
      'Flagship': {
        gradient: 'from-purple-500/30 via-pink-500/20 to-violet-500/30',
        border: 'border-purple-400/30',
        glow: 'shadow-purple-500/25',
        accent: 'text-purple-300'
      },
      'Marketing': {
        gradient: 'from-blue-500/30 via-cyan-500/20 to-indigo-500/30',
        border: 'border-blue-400/30',
        glow: 'shadow-blue-500/25',
        accent: 'text-blue-300'
      },
      'Operations': {
        gradient: 'from-emerald-500/30 via-green-500/20 to-teal-500/30',
        border: 'border-emerald-400/30',
        glow: 'shadow-emerald-500/25',
        accent: 'text-emerald-300'
      },
      'Reporting': {
        gradient: 'from-orange-500/30 via-red-500/20 to-pink-500/30',
        border: 'border-orange-400/30',
        glow: 'shadow-orange-500/25',
        accent: 'text-orange-300'
      },
      'Mental Health': {
        gradient: 'from-teal-500/30 via-cyan-500/20 to-blue-500/30',
        border: 'border-teal-400/30',
        glow: 'shadow-teal-500/25',
        accent: 'text-teal-300'
      },
      'Dev/Infra': {
        gradient: 'from-slate-500/30 via-gray-500/20 to-zinc-500/30',
        border: 'border-slate-400/30',
        glow: 'shadow-slate-500/25',
        accent: 'text-slate-300'
      }
    };
    return themes[category] || themes['Dev/Infra'];
  };

  const statusConfig = getStatusConfig(product.status);
  const categoryTheme = getCategoryTheme(product.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.21, 1.11, 0.81, 0.99]
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <motion.div
        whileHover={{ 
          y: isMobile ? -6 : -12, 
          scale: isMobile ? 1.01 : 1.03,
          rotateX: isMobile ? 0 : 5,
          rotateY: isMobile ? 0 : 5
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.21, 1.11, 0.81, 0.99]
        }}
        className={cn(
          "relative h-full backdrop-blur-xl bg-black/40 border rounded-2xl md:rounded-3xl p-4 md:p-6 overflow-hidden transition-all duration-500 group-hover:bg-black/30",
          isHovered ? `${categoryTheme.border} ${categoryTheme.glow} shadow-2xl` : "border-white/10 shadow-lg shadow-black/25"
        )}
        style={{
          background: isHovered 
            ? `linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), linear-gradient(135deg, ${categoryTheme.gradient.replace('from-', '').replace('via-', '').replace('to-', '').split(' ').map((c: string) => c.replace('/', ',')).join(', ')})`
            : 'linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.6))'
        }}
      >
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/0 to-white/5 opacity-60" />
        
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * 300, 
                y: Math.random() * 400,
                opacity: 0
              }}
              animate={isHovered ? {
                x: Math.random() * 300,
                y: Math.random() * 400,
                opacity: [0, 1, 0]
              } : {}}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        {/* Header Section */}
        <div className="relative z-10 flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ 
                scale: 1.3, 
                rotate: [0, -10, 10, 0],
                filter: "drop-shadow(0 0 8px rgba(147, 51, 234, 0.5))"
              }}
              transition={{ duration: 0.4 }}
              className="text-3xl md:text-4xl relative"
            >
              {product.emoji}
              {product.featured && (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1"
                >
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </motion.div>
              )}
            </motion.div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className={cn(
                  "text-lg md:text-xl font-bold transition-all duration-300",
                  isHovered ? categoryTheme.accent : "text-white"
                )}>
                  {product.name}
                </h3>
                {product.featured && (
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <span className={cn(
                  "text-xs font-medium px-2 py-1 rounded-full border backdrop-blur-sm transition-all duration-300",
                  statusConfig.color
                )}>
                  {statusConfig.pulse && (
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1"
                    />
                  )}
                  {product.status}
                </span>
                
                <span className="text-xs text-neutral-400 bg-neutral-900/50 px-2 py-1 rounded-full border border-neutral-700/50">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="relative z-10 mb-6">
          <p className="text-neutral-300 text-xs md:text-sm leading-relaxed line-clamp-3 group-hover:text-neutral-200 transition-colors duration-300">
            {product.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="relative z-10 mb-6">
          <div className="flex flex-wrap gap-1.5">
            {product.technologies.slice(0, 4).map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05 }}
                className="text-xs px-2 py-1 bg-white/10 text-white/80 rounded-md md:rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
            {product.technologies.length > 4 && (
              <span className="text-xs px-2 py-1 bg-neutral-800/50 text-neutral-400 rounded-lg border border-neutral-600/50">
                +{product.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="relative z-10 mb-6">
          <div className="space-y-2">
            {product.capabilities.slice(0, 3).map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <Zap className={cn("w-3 h-3", categoryTheme.accent)} />
                <span className="text-neutral-300 group-hover:text-neutral-200 transition-colors">
                  {capability}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex items-center gap-3 mt-auto">
          {product.links.demo && (
            <motion.a
              href={product.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300 backdrop-blur-sm border",
                isHovered 
                  ? `bg-gradient-to-r ${categoryTheme.gradient} ${categoryTheme.border} text-white shadow-lg ${categoryTheme.glow}`
                  : "bg-white/10 border-white/20 text-white hover:bg-white/20"
              )}
            >
              <Eye className="w-4 h-4" />
              <span>View</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          )}
          
          {product.links.github && (
            <motion.a
              href={product.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>

        {/* Bottom Gradient Border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4 }}
          className={cn(
            "absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r",
            categoryTheme.gradient
          )}
        />
      </motion.div>
    </motion.div>
  );
};

export const ModernGlassProductCard = memo(ModernGlassProductCardComponent);