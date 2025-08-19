"use client";
import React from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { cn } from "@/lib/utils";
import { PortfolioProduct } from "@/types/portfolio";
import Image from "next/image";
import { ExternalLink, Eye, Github } from "lucide-react";
import { memo } from "react";

interface ProductCardProps {
  product: PortfolioProduct;
  index: number;
}

const ProductCardComponent = ({ product, index }: ProductCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Beta':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Coming Soon':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Case Study':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Flagship': 'bg-gradient-to-r from-purple-500 to-pink-500',
      'Marketing': 'bg-gradient-to-r from-blue-500 to-cyan-500',
      'Operations': 'bg-gradient-to-r from-green-500 to-emerald-500',
      'Reporting': 'bg-gradient-to-r from-orange-500 to-red-500',
      'Mental Health': 'bg-gradient-to-r from-teal-500 to-green-500',
      'Dev/Infra': 'bg-gradient-to-r from-gray-500 to-slate-500'
    };
    return colors[category] || 'bg-gradient-to-r from-gray-500 to-slate-500';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <CardContainer className="inter-var">
        <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-auto rounded-xl p-6 border">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              {product.emoji && (
                <CardItem translateZ="50" className="text-2xl">
                  {product.emoji}
                </CardItem>
              )}
              <div>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-100"
                >
                  {product.name}
                </CardItem>
                <CardItem
                  translateZ="30"
                  className={cn(
                    "text-xs px-2 py-1 rounded-full border inline-block",
                    getStatusColor(product.status)
                  )}
                >
                  {product.status}
                </CardItem>
              </div>
            </div>
            <CardItem
              translateZ="40"
              className={cn(
                "text-xs px-2 py-1 rounded-full text-white font-medium",
                getCategoryColor(product.category)
              )}
            >
              {product.category}
            </CardItem>
          </div>

          {/* Description */}
          <CardItem
            translateZ="60"
            className="text-neutral-300 text-sm mb-4 leading-relaxed"
          >
            {product.description}
          </CardItem>

          {/* Capabilities */}
          <div className="mb-4">
            <CardItem translateZ="50" className="flex flex-wrap gap-2">
              {product.capabilities.map((capability, idx) => (
                <span
                  key={idx}
                  className="bg-neutral-800/50 text-neutral-300 text-xs px-2 py-1 rounded-full border border-neutral-700"
                >
                  {capability}
                </span>
              ))}
            </CardItem>
          </div>

          {/* Screenshot */}
          {product.screenshots.thumbnail && (
            <CardItem translateZ="100" className="mb-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800">
                <Image
                  src={product.screenshots.thumbnail}
                  alt={`${product.name} screenshot`}
                  fill
                  className="object-cover group-hover/card:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </CardItem>
          )}

          {/* Metrics */}
          {product.metrics && (
            <CardItem translateZ="50" className="mb-4">
              <div className="bg-neutral-900/50 rounded-lg p-3 border border-neutral-800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">
                    {product.metrics.value}
                  </div>
                  <div className="text-xs text-neutral-400">
                    {product.metrics.label}
                  </div>
                </div>
              </div>
            </CardItem>
          )}

          {/* Technologies */}
          <CardItem translateZ="40" className="mb-6">
            <div className="flex flex-wrap gap-1">
              {product.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-blue-500/10 text-blue-400 rounded border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
              {product.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 bg-neutral-800 text-neutral-400 rounded border border-neutral-700">
                  +{product.technologies.length - 3} more
                </span>
              )}
            </div>
          </CardItem>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {product.links.demo && (
                <CardItem
                  translateZ={20}
                  as="a"
                  href={product.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all duration-200 flex items-center space-x-1"
                >
                  <Eye className="w-3 h-3" />
                  <span>Demo</span>
                </CardItem>
              )}
              {product.links.live && (
                <CardItem
                  translateZ={20}
                  as="a"
                  href={product.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg text-xs font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg transition-all duration-200 flex items-center space-x-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Live</span>
                </CardItem>
              )}
              {product.links.github && (
                <CardItem
                  translateZ={20}
                  as="a"
                  href={product.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg text-xs font-medium bg-neutral-800 text-white hover:bg-neutral-700 transition-colors flex items-center space-x-1"
                >
                  <Github className="w-3 h-3" />
                  <span>Code</span>
                </CardItem>
              )}
            </div>

            {product.featured && (
              <CardItem translateZ={30}>
                <div className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full border border-yellow-500/30">
                  ⭐ Featured
                </div>
              </CardItem>
            )}
          </div>
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};

export const ProductCard = memo(ProductCardComponent);