"use client";

import React from "react";
import { motion } from "framer-motion";
import { agentPrinciples } from "@/lib/copy/agent";

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

const AgentPrinciples: React.FC = () => {
  return (
    <section id="principles" className="py-20 bg-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/5 via-transparent to-yellow-900/5" />
      
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
            Our{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
              principles
            </span>
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            The values that guide every agent we build and every decision we make along the way.
          </motion.p>
        </motion.div>

        {/* Principles Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
          variants={staggerContainerVariants}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {agentPrinciples.map((principle, index) => (
            <motion.div
              key={principle.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 border border-neutral-700 rounded-3xl p-8 h-full hover:border-amber-500/30 transition-all duration-300 relative overflow-hidden">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-full flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300 mx-auto mb-6">
                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {principle.icon}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors duration-300">
                    {principle.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-neutral-300 text-lg leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                    {principle.body}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Commitment Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={fadeUpVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-full flex items-center justify-center border border-amber-500/30">
                <span className="text-2xl">🏛️</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Commitment to You
            </h3>
            
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              We don&apos;t just build AI agents—we build trusted partners for your business. Every line of code, 
              every training session, and every optimization is guided by these principles to ensure your agent 
              works reliably, ethically, and sustainably.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">100%</div>
                <div className="text-neutral-400 text-sm">Transparent Development</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">0</div>
                <div className="text-neutral-400 text-sm">Hidden Costs or Lock-ins</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-neutral-400 text-sm">Ethical AI Monitoring</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications & Standards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={fadeUpVariants}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white mb-2">
              Standards We Follow
            </h3>
            <p className="text-neutral-400">
              Aligned with industry best practices and ethical AI frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "GDPR Compliant", icon: "🛡️" },
              { name: "SOC 2 Aligned", icon: "🔒" },
              { name: "ISO 27001", icon: "📋" },
              { name: "Ethical AI", icon: "⚖️" }
            ].map((standard, index) => (
              <div key={standard.name} className="text-center">
                <div className="w-16 h-16 bg-neutral-800 border border-neutral-700 rounded-2xl flex items-center justify-center mx-auto mb-3 hover:border-amber-500/30 transition-colors duration-300">
                  <span className="text-2xl" role="img" aria-label={standard.name}>
                    {standard.icon}
                  </span>
                </div>
                <div className="text-neutral-300 text-sm font-medium">{standard.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={fadeUpVariants}
          className="text-center mt-16"
        >
          <p className="text-neutral-400 text-lg mb-6">
            Ready to work with a team that puts ethics and transparency first?
          </p>
          <motion.a
            href="/contact?context=agent-pilot&focus=principles"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 text-amber-300 font-medium rounded-full hover:bg-gradient-to-r hover:from-amber-500/30 hover:to-yellow-500/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn about our approach</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentPrinciples;