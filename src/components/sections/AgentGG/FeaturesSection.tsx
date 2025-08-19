"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: "Daily Task Prioritization (7 AM Email)",
      description: "Start each day with clarity—never miss a critical task again.",
      icon: <Box className="h-4 w-4 text-white dark:text-neutral-400" />,
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
    },
    {
      id: 2,
      title: "ClickUp-to-Calendar Integration",
      description: "Effortlessly convert tasks into scheduled calendar events.",
      icon: <Settings className="h-4 w-4 text-white dark:text-neutral-400" />,
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
    },
    {
      id: 3,
      title: "The One Thing Focus",
      description: "Instantly identify your single most impactful task at any moment.",
      icon: <Lock className="h-4 w-4 text-white dark:text-neutral-400" />,
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
    },
    {
      id: 4,
      title: "80/20 (Pareto) Analysis",
      description: "Optimize your energy and focus on the tasks that matter most.",
      icon: <Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />,
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
    },
    {
      id: 5,
      title: "Bias Checker",
      description: "Make unbiased, confident decisions free from hidden blindspots.",
      icon: <Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />,
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/13]",
    },
    {
      id: 6,
      title: "Procrastination Helper",
      description: "Stay productive with personalized, real-time procrastination interventions.",
      icon: <Search className="h-4 w-4 text-white dark:text-neutral-400" />,
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:3/1/4/7]",
    },
    {
      id: 7,
      title: "Automated Executive Summaries",
      description: "Instantly generate actionable summaries from lengthy documents.",
      icon: <Box className="h-4 w-4 text-white dark:text-neutral-400" />,
      area: "md:[grid-area:4/1/5/7] xl:[grid-area:3/7/4/13]",
    },
    {
      id: 8,
      title: "Automatic Note Taking",
      description: "Retrieve previous notes and conversation history when you need them most.",
      icon: <Settings className="h-4 w-4 text-white dark:text-neutral-400" />,
      area: "md:[grid-area:4/7/5/13] xl:[grid-area:4/1/5/7]",
    },
    {
      id: 9,
      title: "Context-Aware Intelligence",
      description: "Makes decisions based on your goals, team structure, and uploaded documents.",
      icon: <Lock className="h-4 w-4 text-white dark:text-neutral-400" />,
      area: "md:[grid-area:5/1/6/13] xl:[grid-area:4/7/5/13]",
    }
  ];

  const GridItem = ({ area, icon, title, description }: {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  }) => {
    return (
      <li className={`min-h-56 list-none ${area}`}>
        <div className="relative h-full rounded-2xl border border-zinc-800 hover:border-white/25 transition-all duration-300 p-2 md:rounded-3xl md:p-3">
          <GlowingEffect
            spread={80}
            glow={true}
            disabled={false}
            proximity={100}
            inactiveZone={0}
            variant="default"
            borderWidth={1.5}
          />
          <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl bg-zinc-900 p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-zinc-700 p-2">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-white md:text-2xl/[1.875rem]">
                  {title}
                </h3>
                <p className="font-sans text-sm/[1.125rem] text-gray-400 md:text-base/[1.375rem]">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

  return (
    <section id="features" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-6">
            Core Features & Benefits
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Agent GG supercharges your productivity with these powerful features designed to make your workflow smarter and more efficient.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-5 lg:gap-4 xl:grid-rows-4">
          {features.map((feature) => (
            <GridItem
              key={feature.id}
              area={feature.area}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
