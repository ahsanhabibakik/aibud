"use client";

import React from "react";
import { motion } from "framer-motion";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function ProblemStatementSection() {
  const problems = [
    {
      id: 1,
      title: "Overwhelming task lists",
      description: "Drowning in never-ending to-dos without clear focus on what matters most.",
      icon: "📋"
    },
    {
      id: 2,
      title: "Difficulty prioritizing under pressure",
      description: "Struggling to decide what deserves your attention when everything feels urgent.",
      icon: "⏱️"
    },
    {
      id: 3,
      title: "Decision fatigue and unnoticed biases",
      description: "Mental exhaustion from constant choices, often clouded by unconscious biases.",
      icon: "🧠"
    },
    {
      id: 4,
      title: "ClickUp, email, and calendar management takes up valuable time",
      description: "Spending precious hours just organizing your work rather than doing it.",
      icon: "📅"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Problems We Solve
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: problem.id * 0.1 }}
              className="h-full"
            >
              <BackgroundGradient containerClassName="h-full" className="p-6 rounded-3xl bg-zinc-900/80 backdrop-blur-sm h-full">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{problem.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{problem.title}</h3>
                    <p className="text-gray-400">{problem.description}</p>
                  </div>
                </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
