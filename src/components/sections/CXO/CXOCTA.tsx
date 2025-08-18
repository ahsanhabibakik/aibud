"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fractionalCXOCopy } from "@/lib/copy/fractionalcxo";
import { ExternalLink, Mail, ArrowRight } from "lucide-react";

const CXOCTA: React.FC = () => {
  const { finalCTA } = fractionalCXOCopy;
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="cta" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_50%)]" />
        
        {/* Animated background beams */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              background: [
                "linear-gradient(45deg, transparent, rgba(147,51,234,0.1), transparent)",
                "linear-gradient(45deg, transparent, rgba(59,130,246,0.1), transparent)",
                "linear-gradient(45deg, transparent, rgba(147,51,234,0.1), transparent)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rotate-12 scale-150"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {finalCTA.headline}
            </span>
          </h2>

          {/* CTA Buttons Container */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-12">
            {/* Primary CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a
                href={finalCTA.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-200 text-lg"
              >
                <span>{finalCTA.primaryCTA}</span>
                <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Divider */}
            <div className="text-neutral-400 text-lg font-medium">or</div>

            {/* Email Signup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-md"
            >
              <form onSubmit={handleEmailSubmit} className="flex">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-3 bg-neutral-900/60 backdrop-blur-sm border border-white/20 rounded-l-full text-white placeholder-neutral-400 focus:outline-none focus:border-purple-400 transition-colors"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-r-full hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : isSubmitted ? (
                    <span className="text-green-400">✓</span>
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </motion.button>
              </form>
              <p className="text-neutral-400 text-sm mt-2">
                {finalCTA.secondaryCTA} • No spam, unsubscribe anytime
              </p>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center text-neutral-400 text-sm"
          >
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Free 30-min consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              <span>No obligation</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Usually respond within 24 hours</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
      />
    </section>
  );
};

export default CXOCTA;