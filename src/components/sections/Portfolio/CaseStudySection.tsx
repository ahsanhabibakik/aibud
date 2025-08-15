"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GlareCard } from "@/components/ui/glare-card";
import { caseStudies } from "@/lib/portfolio-data";
import { ExternalLink, TrendingUp } from "lucide-react";

const CaseStudySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Proven Results</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Case Studies
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Real outcomes from real implementations. See how our solutions drive measurable impact for businesses.
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
              <GlareCard className="flex flex-col h-full">
                <div className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-neutral-400">{study.client}</span>
                      {study.brandLogo && (
                        <div className="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center">
                          {/* Placeholder for brand logo */}
                          <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  {/* Outcome */}
                  <div className="mb-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-3">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">
                          {study.outcome}
                        </div>
                        <div className="text-xs text-green-300/80">Key Achievement</div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6 flex-grow">
                    {study.summary}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-purple-400">
                          {metric.value}
                        </div>
                        <div className="text-xs text-neutral-400 leading-tight">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Components Used */}
                  <div className="mb-6">
                    <div className="text-xs text-neutral-400 mb-2">Built with:</div>
                    <div className="flex flex-wrap gap-1">
                      {study.componentsUsed.slice(0, 3).map((component, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded border border-purple-500/20"
                        >
                          {component}
                        </span>
                      ))}
                      {study.componentsUsed.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-neutral-800 text-neutral-400 rounded border border-neutral-700">
                          +{study.componentsUsed.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    {study.link ? (
                      <a
                        href={study.link}
                        className="inline-flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group"
                      >
                        <span>Read Full Case Study</span>
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <button className="inline-flex items-center space-x-2 text-sm text-neutral-400 cursor-not-allowed">
                        <span>Case Study Coming Soon</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Mask Reveal Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
              </GlareCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-400 mb-6">
            Want to see similar results for your business?
          </p>
          <a
            href="https://calendly.com/msohanh/ai-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200"
          >
            <span>Discuss Your Project</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;