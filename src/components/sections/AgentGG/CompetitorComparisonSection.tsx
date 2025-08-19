"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CompetitorComparisonSection() {
  const features = [
    "Task-specific automation (prioritization, scheduling)",
    "Bias detection and strategic decision-making enhancements",
    "Personalized, proactive productivity interventions",
    "ClickUp integration",
    "Calendar management",
    "Email assistance",
    "Cross-platform compatibility",
  ];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Agent GG vs. ChatGPT & Competitors
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            See how Agent GG stands out with specialized features designed for productivity workflows.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left text-white">Features</th>
                <th className="p-4 text-center text-white bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-t border-b border-l border-r border-purple-500/30 rounded-t-lg">
                  <div className="text-xl font-bold text-purple-400">Agent GG</div>
                  <div className="text-xs text-gray-400">Specialized Co-Pilot</div>
                </th>
                <th className="p-4 text-center text-white">
                  <div className="text-xl font-bold">ChatGPT</div>
                  <div className="text-xs text-gray-400">General AI</div>
                </th>
                <th className="p-4 text-center text-white">
                  <div className="text-xl font-bold">Competitors</div>
                  <div className="text-xs text-gray-400">Other Tools</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={index % 2 === 0 ? "bg-zinc-900/30" : "bg-zinc-900/10"}
                >
                  <td className="p-4 text-white border-b border-zinc-800">{feature}</td>
                  <td className="p-4 text-center border-b border-zinc-800 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border-l border-r border-purple-500/30">
                    <span className="text-green-400 text-xl">✓</span>
                  </td>
                  <td className="p-4 text-center text-white border-b border-zinc-800">
                    {index < 2 ? (
                      <span className="text-yellow-500 text-sm">Limited</span>
                    ) : index < 4 ? (
                      <span className="text-red-500 text-xl">✗</span>
                    ) : (
                      <span className="text-red-500 text-xl">✗</span>
                    )}
                  </td>
                  <td className="p-4 text-center text-white border-b border-zinc-800">
                    {index === 3 || index === 6 ? (
                      <span className="text-green-400 text-xl">✓</span>
                    ) : index === 0 || index === 2 || index === 4 ? (
                      <span className="text-yellow-500 text-sm">Partial</span>
                    ) : (
                      <span className="text-red-500 text-xl">✗</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-8">
            Agent GG is built specifically for productivity workflows, unlike general AI tools or fragmented solutions.
          </p>
          <div className="inline-block relative overflow-hidden rounded-full p-px">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <button className="relative bg-zinc-950 hover:bg-zinc-900 transition-colors text-white px-6 py-3 rounded-full">
              Get Early Access
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
