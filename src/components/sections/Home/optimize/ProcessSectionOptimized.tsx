"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegLightbulb, FaRegCheckCircle, FaRegEdit } from "react-icons/fa";

export function ProcessSectionOptimized() {
  const steps = [
    {
      number: "01",
      title: "Understand Your Needs",
      description: "We start by understanding your specific workflows, pain points, and business requirements. This deep understanding ensures we build the right solution for your unique needs.",
      icon: FaRegLightbulb,
      image: "/images/brain-glass-pc.png",
      alt: "Understanding your workflow needs"
    },
    {
      number: "02",
      title: "Design & Build",
      description: "Our team designs and develops your custom AI agent, integrating with your existing tools and workflows for maximum efficiency.",
      icon: FaRegEdit,
      image: "/images/design-build.png",
      alt: "Design and build process"
    },
    {
      number: "03",
      title: "Deploy & Support",
      description: "We deploy your AI agent and provide ongoing support to ensure it continues to meet your evolving business needs.",
      icon: FaRegCheckCircle,
      image: "/images/deploy-support.png",
      alt: "Deploy and support"
    }
  ];

  return (
    <section id="process" className="w-full bg-[#020618] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            We follow a simple 3-step process to create your custom AI agent that fits your exact needs.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                {/* Step Number & Icon */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-bold text-purple-500/30">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-neutral-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 relative">
                <div className="relative bg-[#020618] p-8 rounded-2xl border border-white/10 shadow-2xl">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      className="object-contain rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-2xl border border-purple-500/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-20"
        >
          <a
            href="https://calendly.com/msohanh/ai-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your AI Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ProcessSectionOptimized;