"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaLock, FaCog, FaUsers, FaLightbulb, FaHeadset } from "react-icons/fa";

const reasons = [
  {
    icon: FaRocket,
    title: "Fast Implementation",
    description: "Get your AI agent up and running quickly with our streamlined process and pre-built components.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: FaLock,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability ensure your data and operations are always protected.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: FaCog,
    title: "Fully Customizable",
    description: "Tailor every aspect of your AI agent to match your specific business needs and workflows.",
    gradient: "from-purple-500 to-violet-500"
  },
  {
    icon: FaUsers,
    title: "Expert Support",
    description: "Our dedicated team provides ongoing support and optimization to ensure your success.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: FaLightbulb,
    title: "Innovation First",
    description: "Stay ahead with cutting-edge AI technology and continuous updates to your agent capabilities.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: FaHeadset,
    title: "24/7 Availability",
    description: "Your AI agent works around the clock, handling tasks and inquiries whenever they arise.",
    gradient: "from-pink-500 to-rose-500"
  }
];

export function WhyChooseUsSectionOptimized() {
  return (
    <section className="w-full bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose AI Buddy?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide the most comprehensive and reliable AI agent solutions for your business
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${reason.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {reason.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${reason.gradient} blur-xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 mb-8">
            Ready to transform your business with AI?
          </p>
          <a
            href="https://calendly.com/msohanh/ai-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUsSectionOptimized;