"use client";

import React from "react";
import { motion } from "framer-motion";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Reads ClickUp",
      description: "Agent GG integrates with ClickUp to understand your tasks, priorities, and deadlines. It analyzes your workspace to identify what matters most.",
      icon: "📋",
      solves:"Stop juggling apps and stay focused in Agent GG only",
    },
    {
      id: 2,
      title: "Manages your email inbox and prepares drafts",
      description: "Automatically organizes your inbox, flags important messages, and prepares draft responses that sound like you wrote them.",
      icon: "📨",
      solves: "You'll only get emails that matter into your primary inbox, reducing cognitive load and saving time with ready-to-send drafts.",
    },
    {
      id: 3,
      title: "Manages your calendar",
      description: "Intelligently schedules your tasks, balances your workload, and protects your focus time to maximize productivity.",
      icon: "📅",
      solves: "Offload this task to our agent and focus on what matters as it smartly schedules your day and protects your deep work time.",
    },
    {
      id: 4,
      title: "Can take instructions from Telegram",
      description: "Send commands and receive updates on-the-go through simple Telegram messages, making productivity management mobile and convenient.",
      icon: "📱",
      solves: "Access your agent from anywhere—Telegram, Slack, or wherever you communicate—for mobile, seamless productivity management.",
    },
  ];

  return (
    <section id="howItWorks">
      <TracingBeam className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              How Agent GG Works
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our AI assistant seamlessly integrates with your existing tools to provide a frictionless productivity experience.
            </p>
          </motion.div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1 order-2 md:order-0">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                <div className="flex-1 bg-zinc-900/60 rounded-2xl p-6 order-1 md:order-0">
                  <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl flex items-center justify-center border border-zinc-800">
                    <p className="text-gray-500 text-center px-6 max-w-[90%] mx-auto">{step.solves}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </TracingBeam>
    </section>
  );
}
