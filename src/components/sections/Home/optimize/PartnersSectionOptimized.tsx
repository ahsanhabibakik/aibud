"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Anthropic",
    logo: "/images/anthropic-logo.png",
    description: "Advanced AI capabilities"
  },
  {
    name: "OpenAI",
    logo: "/images/openai-logo.png", 
    description: "GPT-powered solutions"
  },
  {
    name: "Google Cloud",
    logo: "/images/google-cloud-logo.png",
    description: "Cloud infrastructure"
  },
  {
    name: "Microsoft",
    logo: "/images/microsoft-logo.png",
    description: "Enterprise integration"
  },
  {
    name: "AWS",
    logo: "/images/aws-logo.png",
    description: "Scalable hosting"
  },
  {
    name: "Stripe",
    logo: "/images/stripe-logo.png",
    description: "Payment processing"
  }
];

export function PartnersSectionOptimized() {
  return (
    <section id="partners" className="w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted Partners
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We work with industry-leading partners to deliver the best AI solutions
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-300 text-center">
                {/* Logo */}
                <div className="relative w-16 h-16 mx-auto mb-4 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={40}
                    height={40}
                    className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>

                {/* Name */}
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-gray-100 transition-colors duration-300">
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  {partner.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400">
            Powering innovation through strategic partnerships
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default PartnersSectionOptimized;