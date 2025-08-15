"use client";
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ExternalLink } from "lucide-react";

const SuccessStoriesSection = () => {
  const kpiData = [
    { value: "40%", label: "faster decisions" },
    { value: "60%", label: "quicker launches" },
    { value: "–65%", label: "finance admin time" },
    { value: "+18", label: "NPS in 30 days" }
  ];

  const successStories = [
    {
      company: "Tech Startup",
      result: "–42% manual ops in 6 weeks",
      tools: ["Agent GG", "ClickUp", "Gmail", "Calendar"]
    },
    {
      company: "Marketing Agency", 
      result: "+31% throughput per PM",
      tools: ["Creator Compass", "DocDirector", "Slack"]
    },
    {
      company: "Remote Company",
      result: "Month-end closed in 2 days",
      tools: ["Slack → QuickBooks", "Agent GG"]
    }
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6"
          >
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Proven Results</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Success Stories
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-neutral-400 max-w-3xl mx-auto"
          >
            Real results. Less busywork. More momentum.
          </motion.h2>
        </div>

        {/* KPI Chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {kpiData.map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-full px-6 py-3 backdrop-blur-sm"
            >
              <div className="text-center">
                <div className="text-lg md:text-xl font-bold text-emerald-400">
                  {kpi.value}
                </div>
                <div className="text-sm text-emerald-300/80">
                  {kpi.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mini Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              {/* Company Name */}
              <div className="mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {story.company}
                </h3>
              </div>

              {/* Result */}
              <div className="mb-4">
                <div className="text-emerald-400 font-medium text-base">
                  {story.result}
                </div>
              </div>

              {/* Tools Used */}
              <div className="flex flex-wrap gap-2">
                {story.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-purple-500/10 text-purple-400 rounded border border-purple-500/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* Footer CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/msohanh/ai-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200"
            >
              <span>Book a Call</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#product-grid"
              className="inline-flex items-center space-x-2 px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <span>Explore Portfolio</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;