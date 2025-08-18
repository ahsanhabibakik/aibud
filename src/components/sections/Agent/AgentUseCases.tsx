"use client";

import React from "react";
import { motion } from "framer-motion";
import { agentUseCases, agentUseCasesFootnote } from "@/lib/copy/agent";
import { ArrowUpRight } from "lucide-react";

// Animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const AgentUseCases: React.FC = () => {
  return (
    <section id="use-cases" className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-transparent to-purple-900/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={staggerContainerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              High‑impact use cases
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            See how custom agents transform specific workflows across different business functions.
          </motion.p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {agentUseCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-6 h-full hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl" role="img" aria-label={useCase.title}>
                        {useCase.icon}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {useCase.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  
                  {/* Bullet Points */}
                  <ul className="space-y-2">
                    {useCase.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-neutral-300 text-sm leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <div className="mt-4 pt-4 border-t border-neutral-700/50">
                    <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-200 flex items-center space-x-1 group/btn">
                      <span>Learn more</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footnote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={fadeUpVariants}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-yellow-400 text-sm">⚠️</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {agentUseCasesFootnote}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={fadeUpVariants}
          className="text-center mt-12"
        >
          <p className="text-neutral-400 text-lg mb-6">
            Which workflow would make the biggest impact for your business?
          </p>
          <motion.a
            href="/contact?context=agent-pilot&focus=use-cases"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 font-medium rounded-full hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Discuss your use case</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentUseCases;