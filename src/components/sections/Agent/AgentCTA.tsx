"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { agentCTA } from "@/lib/copy/agent";
import { ExternalLink, Mail, Calendar, ArrowRight } from "lucide-react";

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

const AgentCTA: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail("");

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-b from-neutral-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10" />
      
      {/* Radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.1)_0%,transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
          variants={staggerContainerVariants}
          className="text-center"
        >
          {/* Main Headline */}
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              {agentCTA.title}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            variants={fadeUpVariants}
            className="text-xl text-neutral-300 mb-12 max-w-3xl mx-auto"
          >
            {agentCTA.subtitle}
          </motion.p>

          {/* CTA Section */}
          <motion.div 
            variants={fadeUpVariants}
            className="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 border border-neutral-700/50 rounded-3xl p-8 md:p-12 mb-12"
          >
            {/* Email Capture & CTA Row */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-8">
              {/* Email Input */}
              <form onSubmit={handleEmailSubmit} className="flex-1 max-w-md w-full">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={agentCTA.emailPlaceholder}
                    className="w-full pl-12 pr-4 py-4 bg-neutral-800/80 border border-neutral-600 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                    disabled={isSubmitting || isSubmitted}
                  />
                  {isSubmitted && (
                    <div className="absolute inset-0 bg-green-500/20 border border-green-500/50 rounded-2xl flex items-center justify-center">
                      <span className="text-green-400 font-medium">✓ Subscribed!</span>
                    </div>
                  )}
                </div>
              </form>

              {/* Primary CTA */}
              <motion.a
                href={agentCTA.ctaPrimary.href}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-2xl hover:scale-105 transition-all duration-200 flex items-center space-x-2 whitespace-nowrap"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{agentCTA.ctaPrimary.label}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              {/* Secondary CTA */}
              <motion.a
                href={agentCTA.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/10 transition-all duration-200 flex items-center space-x-2 whitespace-nowrap"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-5 h-5" />
                <span>{agentCTA.ctaSecondary.label}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-700/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">4-6 weeks</div>
                <div className="text-neutral-400 text-sm">To launch</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400 mb-1">No lock-in</div>
                <div className="text-neutral-400 text-sm">Own your agent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">24/7 support</div>
                <div className="text-neutral-400 text-sm">Always available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">ROI guaranteed</div>
                <div className="text-neutral-400 text-sm">Or money back</div>
              </div>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            variants={fadeUpVariants}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                quote: "Our agent saved us 20+ hours per week on lead qualification and follow-up.",
                author: "Sarah Chen",
                title: "Founder, TechStart",
                avatar: "👩‍💼"
              },
              {
                quote: "The transparency and ethical approach made all the difference for our team.",
                author: "Marcus Johnson",
                title: "Operations Director",
                avatar: "👨‍💻"
              },
              {
                quote: "From pilot to production in 5 weeks. Exceeded our efficiency targets by 40%.",
                author: "Lisa Rodriguez",
                title: "CEO, ScaleUp Co",
                avatar: "👩‍💼"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-neutral-800/30 border border-neutral-700/50 rounded-2xl p-6">
                <p className="text-neutral-300 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{testimonial.avatar}</span>
                  <div>
                    <div className="text-white font-medium text-sm">{testimonial.author}</div>
                    <div className="text-neutral-400 text-xs">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Final Note */}
          <motion.div 
            variants={fadeUpVariants}
            className="text-center"
          >
            <p className="text-neutral-400 text-sm max-w-2xl mx-auto">
              Join founders across ops, marketing, and wellbeing who are already using custom AI agents 
              to scale their impact without scaling their stress.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </section>
  );
};

export default AgentCTA;