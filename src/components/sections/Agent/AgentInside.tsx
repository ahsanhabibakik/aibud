"use client";

import React from "react";
import { motion } from "framer-motion";
import { agentInside } from "@/lib/copy/agent";

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
      staggerChildren: 0.2,
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

const AgentInside: React.FC = () => {
  return (
    <section id="inside" className="py-20 bg-gradient-to-b from-neutral-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/5 via-transparent to-teal-900/5" />
      
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
            What&apos;s inside{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              your agent
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            Four core components work together to deliver intelligent, reliable automation that grows with your business.
          </motion.p>
        </motion.div>

        {/* Components Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {agentInside.map((component, index) => (
            <motion.div
              key={component.title}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-3xl p-8 h-full hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                      <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                        {component.icon}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {component.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-neutral-300 text-lg leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                    {component.body}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-cyan-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Subtle Glow Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={fadeUpVariants}
          className="mt-16"
        >
          <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              How it all works together
            </h3>
            
            {/* Flow Diagram */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-6">
              {/* Input */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30 mx-auto mb-3">
                  <span className="text-2xl">📥</span>
                </div>
                <h4 className="text-white font-medium mb-2">Data Inputs</h4>
                <p className="text-neutral-400 text-sm">Your tools, workflows, and decisions</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500" />
              </div>

              {/* Processing */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full flex items-center justify-center border border-cyan-500/30 mx-auto mb-3">
                  <span className="text-2xl">🧠</span>
                </div>
                <h4 className="text-white font-medium mb-2">Intelligence Layer</h4>
                <p className="text-neutral-400 text-sm">Analysis, reasoning, and decision making</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block">
                <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500" />
              </div>

              {/* Output */}
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-full flex items-center justify-center border border-green-500/30 mx-auto mb-3">
                  <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-white font-medium mb-2">Smart Actions</h4>
                <p className="text-neutral-400 text-sm">Automated execution and follow-up</p>
              </div>
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
            Ready to see how these components could work for your specific workflows?
          </p>
          <motion.a
            href="/contact?context=agent-pilot&focus=architecture"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 text-cyan-300 font-medium rounded-full hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-teal-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore technical details</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentInside;