"use client";

import React from "react";
import { motion } from "framer-motion";
import { agentBenefits } from "@/lib/copy/agent";

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

const AgentBenefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-pink-900/5" />
      
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
            Why an agent{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              (not another tool)?
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            Unlike static tools, our agents actively work for you—thinking, deciding, and acting within your business context.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {agentBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 rounded-2xl p-6 h-full hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                    {benefit.body}
                  </p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
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
            Ready to experience intelligent automation that actually understands your business?
          </p>
          <motion.a
            href="/contact?context=agent-pilot"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-medium rounded-full hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore pilot options</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentBenefits;