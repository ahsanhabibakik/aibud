"use client";

import React from "react";
import { motion } from "framer-motion";
import { fractionalCXOCopy } from "@/lib/copy/fractionalcxo";
import { Settings, Users, Code, Megaphone, BarChart, Brain } from "lucide-react";

const iconMap = {
  settings: Settings,
  users: Users,
  code: Code,
  megaphone: Megaphone,
  "chart-bar": BarChart,
  brain: Brain,
};

const CXODeliverables: React.FC = () => {
  const { deliverables } = fractionalCXOCopy;

  return (
    <section id="deliverables" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-green-900/5 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              {deliverables.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {deliverables.subtitle}
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {deliverables.items.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="h-full p-6 bg-neutral-900/40 backdrop-blur-sm border border-green-500/20 rounded-xl hover:border-green-400/40 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Success Indicator */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-green-500 rounded-full opacity-60" />

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Ethos Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="p-8 bg-gradient-to-r from-neutral-900/60 to-neutral-800/60 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-lg">🌱</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Our Ethos</h3>
                <p className="text-neutral-300 leading-relaxed">
                  {deliverables.ethos}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CXODeliverables;