"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const servicesContent = [
  {
    title: "AI Agent Creation",
    description:
      "Our plug-and-play solutions adapts to your existing business processes, eliminating the learning curve and implementation hurdles.",
    image: "/images/ai-agent-creation.jpg",
    alt: "Turnkey AI Integration",
  },
  {
    title: "Agent GG",
    description:
      "Agent GG is like Jarvis for solopreneurs, focused on helping the user make smarter decisions, lower cognitive load, and improve focus on revenue-generation tasks or any priority that the solopreneur sets. Also useful for small business owners with a small team",
    image: "/images/agent-gg-logo.png",
    alt: "Context-Aware Intelligence",
  },
  {
    title: "DocDirector AI",
    description: "Coming Soon",
    image: "/images/doc-chain.png",
    alt: "Action-Oriented Productivity",
  },
];

export function OurServicesSectionOptimized() {
  return (
    <section className="w-full bg-[#0a1024] py-20" id="services">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-4xl font-bold text-white"
        >
          Our Products & Services
        </motion.h2>

        {/* Services Grid */}
        <div className="space-y-16">
          {servicesContent.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 relative">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-lg group">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative line element */}
        <div className="flex justify-center mt-16">
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default OurServicesSectionOptimized;