"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModernGlassProductCard } from "./modern-glass-product-card";
import { PortfolioProduct } from "@/types/portfolio";
import { portfolioCategories } from "@/lib/portfolio-data";

interface FilterableProductGridProps {
  products: PortfolioProduct[];
}

export const FilterableProductGrid = ({ products }: FilterableProductGridProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  // Use a named union type and a small constant array to avoid TSX parsing ambiguity
  type SortBy = 'newest' | 'featured' | 'alphabetical';
  const sortOptions = ['featured', 'newest', 'alphabetical'] as const;
  const [sortBy, setSortBy] = useState<SortBy>('featured');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(product => product.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.capabilities.some(cap => cap.toLowerCase().includes(query)) ||
        product.technologies.some(tech => tech.toLowerCase().includes(query))
      );
    }

    // Sort products
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'featured':
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'alphabetical':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [products, activeCategory, searchQuery, sortBy]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="w-full relative">
      {/* Background effects are now handled by ModernSectionBackground */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6"
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-purple-400 text-sm font-medium">Our Work</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Complete Portfolio
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Explore our full range of AI solutions, custom developments, and innovative automations 
            built for modern businesses.
          </motion.p>
        </div>

        {/* Enhanced Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 p-4 sm:p-6 bg-black/20 backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
            <span className="text-white text-sm font-semibold">Sort by:</span>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                    sortBy === option
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25 border border-purple-400/30'
                      : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 border border-white/10 hover:border-white/20'
                  }`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-lg sm:rounded-xl px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
            <span className="text-xs sm:text-sm text-purple-300 font-semibold">
              {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
            </span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {filteredAndSortedProducts.length > 0 ? (
            <motion.div
              key={`${activeCategory}-${searchQuery}-${sortBy}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            >
              {filteredAndSortedProducts.map((product, index) => (
                <ModernGlassProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-md mx-auto shadow-2xl">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  No products found
                </h3>
                <p className="text-neutral-400 mb-8">
                  Try adjusting your search or filter criteria to discover more projects
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                  >
                    Clear Search
                  </button>
                  <button
                    onClick={() => setActiveCategory('All')}
                    className="px-6 py-3 bg-neutral-800 text-white rounded-xl font-medium hover:bg-neutral-700 transition-colors"
                  >
                    Show All Products
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};