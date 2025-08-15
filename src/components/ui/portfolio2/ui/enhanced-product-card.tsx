"use client";
import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PortfolioProduct } from "@/types/portfolio";
import Image from "next/image";
import { ExternalLink, Eye, Github, Zap, Star } from "lucide-react";

interface ProductCardProps {
  product: PortfolioProduct;
  index: number;
}

const EnhancedProductCardComponent = ({ product, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Beta':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Coming Soon':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Case Study':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-neutral-500/20 text-neutral-400 border-neutral-500/30';
    }
  };

  const getCategoryGradient = (category: string) => {
    const gradients: Record<string, string> = {
      'Flagship': 'from-purple-500/20 via-pink-500/20 to-purple-500/20',
      'Marketing': 'from-blue-500/20 via-cyan-500/20 to-blue-500/20',
      'Operations': 'from-emerald-500/20 via-green-500/20 to-emerald-500/20',
      'Reporting': 'from-orange-500/20 via-red-500/20 to-orange-500/20',
      'Mental Health': 'from-teal-500/20 via-green-500/20 to-teal-500/20',
      'Dev/Infra': 'from-slate-500/20 via-neutral-500/20 to-slate-500/20'
    };
    return gradients[category] || 'from-neutral-500/20 via-neutral-600/20 to-neutral-500/20';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group h-full"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={cn(
          "relative h-full bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border rounded-2xl p-6 overflow-hidden transition-all duration-300",
          isHovered ? "border-purple-500/40 shadow-2xl shadow-purple-500/10" : "border-white/10"
        )}
      >
        {/* Background Gradient */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          getCategoryGradient(product.category)
        )} />

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.2 }}
              className="text-3xl"
            >
              {product.emoji}
            </motion.div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-100 transition-colors">
                {product.name}
              </h3>
              <span className={cn("text-xs px-2 py-1 rounded-full border font-medium", getStatusColor(product.status))}>
                {product.status}
              </span>
            </div>
          </div>
          
          {product.featured && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium"
            >
              <Star className="w-3 h-3 fill-current" />
              Featured
            </motion.div>
          )}
        </div>

        {/* Description */}
        <p className="relative z-10 text-neutral-300 text-sm leading-relaxed mb-4 group-hover:text-neutral-200 transition-colors">
          {product.description}
        </p>

        {/* Screenshot */}
        {product.screenshots.thumbnail && (
          <div className="relative z-10 mb-4">
            <div className="relative w-full h-36 rounded-xl overflow-hidden bg-neutral-800/50 border border-neutral-700/30 group-hover:border-purple-500/30 transition-colors">
              <Image
                src={product.screenshots.thumbnail}
                alt={`${product.name} screenshot`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-purple-500/20 flex items-center justify-center"
              >
                <Eye className="w-8 h-8 text-white drop-shadow-lg" />
              </motion.div>
            </div>
          </div>
        )}

        {/* Metrics */}
        {product.metrics && (
          <div className="relative z-10 mb-4">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <div>
                  <div className="text-lg font-bold text-emerald-400">{product.metrics.value}</div>
                  <div className="text-xs text-emerald-300/80">{product.metrics.label}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Capabilities */}
        <div className="relative z-10 flex flex-wrap gap-2 mb-4">
          {product.capabilities.slice(0, 3).map((capability, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.1 + idx * 0.05 }}
              className="bg-neutral-800/40 text-neutral-300 text-xs px-3 py-1.5 rounded-full border border-neutral-700/50 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-all duration-300"
            >
              {capability}
            </motion.span>
          ))}
          {product.capabilities.length > 3 && (
            <span className="bg-neutral-800/40 text-neutral-400 text-xs px-3 py-1.5 rounded-full border border-neutral-700/50">
              +{product.capabilities.length - 3}
            </span>
          )}
        </div>

        {/* Technologies */}
        <div className="relative z-10 flex flex-wrap gap-1 mb-6">
          {product.technologies.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20">
              {tech}
            </span>
          ))}
          {product.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 bg-neutral-800/50 text-neutral-400 rounded border border-neutral-700/50">
              +{product.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="relative z-10 flex items-center gap-2 mt-auto">
          {product.links.demo && (
            <motion.a
              href={product.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all"
            >
              <Eye className="w-4 h-4" />
              Demo
            </motion.a>
          )}
          {product.links.live && (
            <motion.a
              href={product.links.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Live
            </motion.a>
          )}
          {product.links.github && (
            <motion.a
              href={product.links.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-3 py-2.5 rounded-xl text-sm font-medium bg-neutral-700 text-white hover:bg-neutral-600 transition-colors flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          )}
        </div>

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          initial={{ background: "linear-gradient(0deg, transparent, transparent)" }}
          whileHover={{
            background: "linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

export const EnhancedProductCard = memo(EnhancedProductCardComponent);