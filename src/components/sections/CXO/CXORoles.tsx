"use client";

import React from "react";
import { motion } from "framer-motion";
import { fractionalCXOCopy } from "@/lib/copy/fractionalcxo";
import { Code, Settings, Megaphone, Server } from "lucide-react";

const iconMap = {
  code: Code,
  settings: Settings,
  megaphone: Megaphone,
  server: Server,
};

const CXORoles: React.FC = () => {
  const { roles } = fractionalCXOCopy;

  return (
    <section id="roles" className="relative py-24 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/5 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1),transparent_50%)]" />
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {roles.title}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            {roles.subtitle}
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {roles.items.map((role, index) => {
            const IconComponent = iconMap[role.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative group"
              >
                <div className="h-full p-8 bg-neutral-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl hover:border-purple-400/40 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {role.title}
                      </h3>
                      <span className="text-purple-400 text-sm font-medium">
                        {role.focus}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-400 leading-relaxed mb-6">
                    {role.description}
                  </p>

                  {/* Key Areas Badge */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full">
                      {role.focus}
                    </span>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="p-6 bg-neutral-900/30 backdrop-blur-sm border border-white/10 rounded-xl max-w-3xl mx-auto">
            <p className="text-neutral-300 leading-relaxed">
              <span className="text-purple-400 font-semibold">Mix and match:</span> Most engagements blend 2-3 roles based on your specific needs and growth stage. We will tailor the approach during our fit call.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CXORoles;