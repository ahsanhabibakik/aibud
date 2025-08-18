"use client";

import React from "react";
import { motion } from "framer-motion";
import { agentMetrics } from "@/lib/copy/agent";
import { TrendingUp, Clock, Users, Shield } from "lucide-react";

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

// Icons for each metric
const metricIcons = [
  TrendingUp,
  Clock,
  Users,
  Shield
];

// Sample data for visual appeal
const metricValues = [
  { value: "15-25", unit: "hours/week" },
  { value: "60%", unit: "faster" },
  { value: "3x", unit: "throughput" },
  { value: "99.5%", unit: "accuracy" }
];

const AgentMetrics: React.FC = () => {
  return (
    <section id="metrics" className="py-20 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/5 via-transparent to-green-900/5" />
      
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
            Success metrics we{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              optimize for
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            We track what matters most to your business—time saved, decisions accelerated, and quality maintained at scale.
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {agentMetrics.map((metric, index) => {
            const IconComponent = metricIcons[index];
            const sampleData = metricValues[index];
            
            return (
              <motion.div
                key={metric.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-3xl p-8 h-full hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon & Value */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-emerald-400 transform group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Sample Value */}
                      <div className="text-right">
                        <div className="text-2xl md:text-3xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                          {sampleData.value}
                        </div>
                        <div className="text-neutral-500 text-sm">{sampleData.unit}</div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300">
                      {metric.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                      {metric.description}
                    </p>
                  </div>

                  {/* Subtle Pattern */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-emerald-500/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ROI Calculator Preview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={fadeUpVariants}
          className="bg-gradient-to-r from-neutral-800/50 to-neutral-900/50 border border-emerald-500/20 rounded-3xl p-8 mb-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Quick ROI Calculator
            </h3>
            <p className="text-neutral-400">
              See potential savings for your team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Input */}
            <div className="text-center">
              <div className="bg-neutral-700/50 rounded-2xl p-6 mb-4">
                <div className="text-3xl font-bold text-white mb-2">40h</div>
                <div className="text-neutral-400">Hours per week saved</div>
              </div>
              <div className="text-sm text-neutral-500">
                Average across all use cases
              </div>
            </div>

            {/* Calculation */}
            <div className="text-center">
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 mb-4">
                <div className="text-3xl font-bold text-emerald-400 mb-2">×</div>
                <div className="text-neutral-400">Your hourly rate</div>
              </div>
              <div className="text-sm text-neutral-500">
                Multiply by your loaded cost
              </div>
            </div>

            {/* Result */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 rounded-2xl p-6 mb-4">
                <div className="text-3xl font-bold text-emerald-400 mb-2">ROI</div>
                <div className="text-neutral-400">Monthly savings</div>
              </div>
              <div className="text-sm text-neutral-500">
                Typical 3-6x return
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Dashboard Preview */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={fadeUpVariants}
          className="text-center"
        >
          <div className="bg-neutral-800/30 border border-neutral-700/50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">
              Real-time Performance Dashboard
            </h3>
            <p className="text-neutral-400 mb-6">
              Track your agent&apos;s impact with transparent metrics and actionable insights.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Tasks Completed", "Time Saved", "Accuracy Rate", "User Satisfaction"].map((label, index) => (
                <div key={label} className="bg-neutral-700/30 rounded-xl p-4">
                  <div className="text-lg font-bold text-emerald-400">
                    {["2,847", "156h", "99.2%", "4.8/5"][index]}
                  </div>
                  <div className="text-neutral-400 text-sm">{label}</div>
                </div>
              ))}
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
            Want to see how these metrics would look for your specific workflows?
          </p>
          <motion.a
            href="/contact?context=agent-pilot&focus=metrics"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 text-emerald-300 font-medium rounded-full hover:bg-gradient-to-r hover:from-emerald-500/30 hover:to-green-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            <span>Calculate your ROI</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentMetrics;