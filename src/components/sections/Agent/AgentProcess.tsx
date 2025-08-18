"use client";

import React from "react";
import { motion } from "framer-motion";
import { agentProcess } from "@/lib/copy/agent";
import { CheckCircle, Circle } from "lucide-react";

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

const timelineItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const
    }
  }
};

const AgentProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/5 via-transparent to-purple-900/5" />
      
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
            Build process{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              (4–6 weeks typical)
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            From discovery to rollout, our proven process ensures your agent delivers real value quickly and scales sustainably.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
          variants={staggerContainerVariants}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {agentProcess.map((step, index) => (
              <motion.div
                key={step.step}
                variants={timelineItemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-black z-10" />

                {/* Content Card */}
                <div className={`flex-1 ml-20 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="group bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-sm font-medium text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                              {step.duration}
                            </span>
                            <span className="text-sm text-neutral-500">
                              Step {index + 1}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors duration-300">
                            {step.title}
                          </h3>
                        </div>
                        <CheckCircle className="w-6 h-6 text-green-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </div>
                      
                      {/* Description */}
                      <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                        {step.body}
                      </p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </motion.div>
                </div>

                {/* Mobile Step Number */}
                <div className="md:hidden absolute left-2 w-6 h-6 bg-neutral-800 border border-neutral-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={fadeUpVariants}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 border border-neutral-700/50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-400 mb-2">4-6</div>
                <div className="text-neutral-300 font-medium mb-1">Weeks to Launch</div>
                <div className="text-neutral-500 text-sm">From concept to production</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">1-2</div>
                <div className="text-neutral-300 font-medium mb-1">Initial Workflows</div>
                <div className="text-neutral-500 text-sm">Start small, expand gradually</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-neutral-300 font-medium mb-1">Support & Monitoring</div>
                <div className="text-neutral-500 text-sm">Continuous optimization</div>
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
            Ready to map out your agent development timeline?
          </p>
          <motion.a
            href="/contact?context=agent-pilot&focus=timeline"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 font-medium rounded-full hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Circle className="w-4 h-4 mr-2 fill-current" />
            <span>Start discovery call</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentProcess;