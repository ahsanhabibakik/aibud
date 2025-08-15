"use client";
import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "./product-card";
import { PortfolioProduct } from "@/types/portfolio";

interface FilterableProductGridProps {
  products: PortfolioProduct[];
  selectedCategory?: string;
  searchTerm?: string;
  sortBy?: 'newest' | 'oldest' | 'featured';
}

export const FilterableProductGrid = ({ 
  products, 
  selectedCategory = 'All',
  searchTerm = '',
  sortBy = 'featured'
}: FilterableProductGridProps) => {

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchTerm) {
      const query = searchTerm.toLowerCase();
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
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'featured':
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    return sorted;
  }, [products, selectedCategory, searchTerm, sortBy]);

  return (
    <div className="w-full">
      {/* Products Count */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-sm text-neutral-400">
          {filteredAndSortedProducts.length} product{filteredAndSortedProducts.length !== 1 ? 's' : ''} found
          {selectedCategory !== 'All' && (
            <span className="ml-2 px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
              {selectedCategory}
            </span>
          )}
          {searchTerm && (
            <span className="ml-2 px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
              &ldquo;{searchTerm}&rdquo;
            </span>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <AnimatePresence mode="wait">
        {filteredAndSortedProducts.length > 0 ? (
          <motion.div
            key={`${selectedCategory}-${searchTerm}-${sortBy}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredAndSortedProducts.map((product, index) => (
              <ProductCard 
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
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-neutral-300 mb-2">
              No products found
            </h3>
            <p className="text-neutral-400 text-sm">
              Try adjusting your search or filter criteria using the controls above.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};