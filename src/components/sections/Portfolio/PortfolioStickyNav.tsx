"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioCategories } from '@/lib/portfolio-data';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

interface PortfolioStickyNavProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  sortBy: 'newest' | 'oldest' | 'featured';
  onSortChange: (sort: 'newest' | 'oldest' | 'featured') => void;
  onStickyStateChange: (isSticky: boolean) => void;
}

const PortfolioStickyNav = ({
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  sortBy,
  onSortChange,
  onStickyStateChange
}: PortfolioStickyNavProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const newStickyState = !entry.isIntersecting;
        setIsSticky(newStickyState);
        onStickyStateChange(newStickyState);
      },
      {
        threshold: 0,
        rootMargin: '-80px 0px 0px 0px', // Account for nav height
      }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [onStickyStateChange]);

  const sortOptions = [
    { value: 'featured', label: 'Featured First' },
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
  ];

  return (
    <>
      {/* Trigger point for sticky behavior */}
      <div ref={triggerRef} className="h-0" />
      
      <div
        ref={stickyRef}
        className={`transition-all duration-300 ${
          isSticky 
            ? 'fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
            : 'relative bg-black/60 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Skip Links for Accessibility */}
          <div className="sr-only focus-within:not-sr-only">
            <a 
              href="#product-grid" 
              className="block w-fit px-4 py-2 bg-purple-500 text-white rounded-md mb-2"
            >
              Skip to content
            </a>
            <a 
              href="#category-filters" 
              className="block w-fit px-4 py-2 bg-purple-500 text-white rounded-md"
            >
              Skip to filters
            </a>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filters */}
            <div id="category-filters" className="flex-1">
              <div className="flex items-center space-x-2 mb-2 lg:mb-0">
                <Filter className="w-4 h-4 text-white/60" />
                <span className="text-sm text-white/60 font-medium">Filter by:</span>
              </div>
              
              <div 
                className="flex flex-wrap gap-2 overflow-x-auto scrollbar-hide pb-2"
                role="tablist"
                aria-label="Product categories"
              >
                {portfolioCategories.map((category) => (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={selectedCategory === category}
                    aria-controls={`products-${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => onCategoryChange(category)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 border
                      ${selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-lg'
                        : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Search and Sort */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-200 w-64"
                  aria-label="Search products"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 hover:bg-white/10 hover:text-white transition-all duration-200"
                  aria-label="Sort options"
                  aria-expanded={showSortMenu}
                  aria-haspopup="true"
                >
                  <ArrowUpDown className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {sortOptions.find(opt => opt.value === sortBy)?.label}
                  </span>
                </button>

                <AnimatePresence>
                  {showSortMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl z-50"
                      role="menu"
                    >
                      {sortOptions.map((option) => (
                        <button
                          key={option.value}
                          role="menuitem"
                          onClick={() => {
                            onSortChange(option.value as any);
                            setShowSortMenu(false);
                          }}
                          className={`
                            w-full text-left px-4 py-3 text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg
                            ${sortBy === option.value
                              ? 'bg-purple-500/20 text-purple-400 font-medium'
                              : 'text-white/70 hover:bg-white/5 hover:text-white'
                            }
                          `}
                        >
                          {option.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Active Filters Summary */}
          {(selectedCategory !== 'All' || searchTerm) && (
            <div className="mt-3 pt-3 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-white/60">Active filters:</span>
                {selectedCategory !== 'All' && (
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">
                    {selectedCategory}
                  </span>
                )}
                {searchTerm && (
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">
                    &ldquo;{searchTerm}&rdquo;
                  </span>
                )}
                <button
                  onClick={() => {
                    onCategoryChange('All');
                    onSearchChange('');
                  }}
                  className="text-xs text-white/40 hover:text-white/60 transition-colors underline"
                >
                  Clear all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioStickyNav;