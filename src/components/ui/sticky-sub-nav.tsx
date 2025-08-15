"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

interface StickySubNavProps {
  categories: readonly string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  className?: string;
}

export const StickySubNav = ({
  categories,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
  className
}: StickySubNavProps) => {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const heroHeight = 600; // Approximate hero height
      
      setIsSticky(scrollTop > heroHeight);
      
      // Calculate scroll progress for the active category indicator
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isSticky ? 0 : 0 }}
      className={cn(
        "sticky top-[72px] z-30 bg-black/80 backdrop-blur-sm border-b border-white/5 transition-all duration-200",
        isSticky && "shadow-sm shadow-black/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-4 gap-4">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-neutral-900/50 border border-neutral-700 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center space-x-1 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
            <div className="flex space-x-1 min-w-max">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 whitespace-nowrap",
                    activeCategory === category
                      ? "text-white bg-purple-500"
                      : "text-neutral-400 hover:text-white hover:bg-neutral-800/30"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="relative h-0.5 bg-neutral-800/30 overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-purple-500 transition-all duration-100"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};