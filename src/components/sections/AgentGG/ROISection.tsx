"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MetricCard = React.memo(
  ({
    metric,
    index,
    hovered,
    setHovered,
  }: {
    metric: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <motion.div
      key={metric.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "bg-zinc-900/50 rounded-xl p-8 border border-zinc-800 text-center relative overflow-hidden transition-all duration-300 ease-out",
        hovered !== null && hovered !== index ? "blur-sm scale-[0.95] opacity-70" : "scale-100",
        hovered === index && "border-zinc-600 shadow-xl"
      )}
    >
      <div className="relative z-10">
        <div className="text-4xl mb-4">{metric.icon}</div>
        <div className="text-3xl md:text-4xl font-bold text-white mb-3">{metric.value}</div>
        <div className="text-gray-300 text-sm">{metric.label}</div>
      </div>
      {hovered === index && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 z-0"></div>
      )}
    </motion.div>
  )
);

MetricCard.displayName = "MetricCard";

export default function ROISection() {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      quote: "Agent GG cut my task management time in half and helped me focus on what truly matters.",
      author: "Sarah J., Marketing Director",
    },
    {
      id: 2,
      quote: "The bias checker feature has transformed our decision-making process. We're making better choices, faster.",
      author: "Michael T., Startup Founder",
    },
    {
      id: 3,
      quote: "I save at least 8 hours per week on email management alone. Game changer!",
      author: "Alex R., Solo Consultant",
    },
  ];

  const metrics = [
    {
      id: 1,
      value: "Huge",
      label: "Drop in cognitive load",
      icon: "🧠",
    },
    {
      id: 2,
      value: "7+ hrs",
      label: "Weekly time savings",
      icon: "⏱️",
    },
    {
      id: 3,
      value: "Growth",
      label: "In earning of solopreneur",
      icon: "📈",
    },
    {
      id: 4,
      value: "53%",
      label: "Growth in deep work",
      icon: "🎯",
    },
  ];

  return (
    <section id="roi" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            ROI & Success Stories
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            See how Agent GG is transforming workflows and boosting productivity for professionals like you.
            <span className="block mt-2 text-xs italic">Disclaimer: User is the founder and ideator of the Agent</span>
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.id}
              metric={metric}
              index={index}
              hovered={hoveredMetric}
              setHovered={setHoveredMetric}
            />
          ))}
        </div>

        {/* Testimonials */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: testimonial.id * 0.1 }}
              className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800"
            >
              <div className="text-4xl text-gray-600 mb-4">&quot;</div>
              <p className="text-white italic mb-4">{testimonial.quote}</p>
              <p className="text-gray-400 text-sm">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div> */}

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Productivity Boost</h3>
          <div className="h-6 w-full max-w-2xl mx-auto bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" style={{ width: '78%' }}></div>
          </div>
          <p className="text-gray-400 mt-4">Average productivity increase reported by our users</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative overflow-hidden rounded-full p-px">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <button className="relative bg-zinc-950 hover:bg-zinc-900 transition-colors text-white px-6 py-3 rounded-full">
              Book a Demo
            </button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
