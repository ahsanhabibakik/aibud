"use client";

import React from "react";
import { motion } from "framer-motion";
import { fractionalCXOCopy } from "@/lib/copy/fractionalcxo";
import { Users, TrendingUp, Target } from "lucide-react";

const iconMap = {
  users: Users,
  "trending-up": TrendingUp,
  target: Target,
};

const CXOAudience: React.FC = () => {
  const { audience } = fractionalCXOCopy;

  return (
    <section id="audience" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900/50 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.1),transparent_50%)]" />
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
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {audience.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {audience.subtitle}
          </p>
        </motion.div>

        {/* Audience Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {audience.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="h-full p-8 bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
        />
      </div>
    </section>
  );
};

export default CXOAudience;