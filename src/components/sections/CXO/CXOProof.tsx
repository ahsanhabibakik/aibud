"use client";

import React from "react";
import { motion } from "framer-motion";
import { fractionalCXOCopy } from "@/lib/copy/fractionalcxo";

const CXOProof: React.FC = () => {
  const { proof } = fractionalCXOCopy;

  return (
    <section id="proof" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-900/5 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1),transparent_50%)]" />
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
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {proof.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {proof.subtitle}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {proof.metrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="text-center p-8 bg-neutral-900/40 backdrop-blur-sm border border-emerald-500/20 rounded-2xl hover:border-emerald-400/40 transition-all duration-300">
                {/* Metric Value */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="mb-4"
                >
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                    {metric.unit}
                  </div>
                </motion.div>

                {/* Metric Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {metric.title}
                </h3>

                {/* Metric Description */}
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {metric.description}
                </p>

                {/* Success Indicator */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-500 rounded-full opacity-60" />

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Testimonial Style Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-neutral-900/60 to-neutral-800/60 backdrop-blur-sm border border-white/10 rounded-2xl">
            <blockquote className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-6">
              &ldquo;Finally, a team that knows what <span className="text-emerald-400">good</span> looks like—and can get us there fast.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center space-x-2 text-neutral-400">
              <span className="w-12 h-px bg-emerald-500" />
              <span className="text-sm">Typical client feedback after 90 days</span>
              <span className="w-12 h-px bg-emerald-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CXOProof;