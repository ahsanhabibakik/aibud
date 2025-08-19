"use client";

import React from "react";
import { motion } from "framer-motion";
import { fractionalCXOCopy } from "@/lib/copy/fractionalcxo";
import { Search, Target, Zap, ArrowUp } from "lucide-react";

const iconMap = {
  search: Search,
  target: Target,
  zap: Zap,
  "arrow-up": ArrowUp,
};

const CXOProcess: React.FC = () => {
  const { process } = fractionalCXOCopy;

  return (
    <section id="process" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/5 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_50%)]" />
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
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {process.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {process.subtitle}
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {process.steps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative lg:flex lg:items-center ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`lg:w-5/12 ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
                    <div className="p-6 bg-neutral-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl hover:border-blue-400/40 transition-all duration-300">
                      {/* Week Badge */}
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full">
                          {step.week}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-neutral-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Icon */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-auto lg:transform-none lg:w-2/12 lg:flex lg:justify-center z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center border-4 border-black">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Spacer for desktop */}
                  <div className="hidden lg:block lg:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
        
          <a
            href={fractionalCXOCopy.finalCTA.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200"
          >
            Schedule a fit call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CXOProcess;