"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { caseStudies } from "@/lib/portfolio-data";
import { ExternalLink, TrendingUp, Zap, Users, Star } from "lucide-react";

const OptimizedCaseStudySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-8"
          >
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-semibold">Proven Impact</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Real results from real implementations. See how our AI solutions transform business operations and drive measurable growth.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 hover:bg-gradient-to-br hover:from-neutral-900/90 hover:to-neutral-800/90 transition-all duration-300">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-400 font-medium">{study.client}</span>
                    </div>
                    {study.brandLogo && (
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-700 flex items-center justify-center">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors mb-2">
                    {study.title}
                  </h3>
                </div>

                {/* Key Outcome */}
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-emerald-400">{study.outcome}</div>
                        <div className="text-xs text-emerald-300/80">Key Achievement</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  {study.summary}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-purple-400">{metric.value}</div>
                      <div className="text-xs text-neutral-400 leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="text-xs text-neutral-400 mb-2 font-medium">Built with:</div>
                  <div className="flex flex-wrap gap-2">
                    {study.componentsUsed.slice(0, 2).map((component, idx) => (
                      <span key={idx} className="text-xs px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 rounded-full border border-purple-500/20">
                        {component}
                      </span>
                    ))}
                    {study.componentsUsed.length > 2 && (
                      <span className="text-xs px-3 py-1.5 bg-neutral-800/50 text-neutral-400 rounded-full border border-neutral-700/50">
                        +{study.componentsUsed.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  {study.link ? (
                    <motion.a
                      href={study.link}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group/link"
                    >
                      <span>Read Full Case Study</span>
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  ) : (
                    <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
                      <Star className="w-3 h-3" />
                      <span>Case Study Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-neutral-900/80 to-neutral-800/80 border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to achieve similar results?
            </h3>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can create a custom AI solution that delivers measurable impact for your business.
            </p>
            <motion.a
              href="https://calendly.com/msohanh/ai-discussion"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-2xl transition-all"
            >
              <span>Start Your Project</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OptimizedCaseStudySection;