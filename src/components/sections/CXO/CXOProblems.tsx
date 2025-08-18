"use client";

import React from "react";
import { motion } from "framer-motion";
import { fractionalCXOCopy } from "@/lib/copy/fractionalcxo";
import { Compass, Search, Puzzle, Calendar, Presentation } from "lucide-react";

const iconMap = {
  compass: Compass,
  search: Search,
  puzzle: Puzzle,
  calendar: Calendar,
  presentation: Presentation,
};

const CXOProblems: React.FC = () => {
  const { problems } = fractionalCXOCopy;

  return (
    <section id="problems" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/5 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              {problems.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {problems.subtitle}
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className="h-full p-6 bg-neutral-900/30 backdrop-blur-sm border border-red-500/20 rounded-xl hover:border-red-400/40 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Subtle Warning Indicator */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full opacity-60" />

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call to Action Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-neutral-400 text-lg">
            Sound familiar? Let us bring the clarity and structure you need.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CXOProblems;