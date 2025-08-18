"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define the shape of an integration
interface Integration {
  name: string;
  logo: string;
  description: string;
  bgColor: string;
  gradientFrom: string;
  gradientTo: string;
}

// Data for the integrations
const integrations: Integration[] = [
  {
    name: "ClickUp",
    logo: "/images/icons8-clickup-480.png",
    description: "Seamlessly create and assign tasks directly from conversations. Track project status and automatically update workflows based on real-time inputs.",
    bgColor: "bg-purple-950",
    gradientFrom: "from-purple-600",
    gradientTo: "to-indigo-600"
  },
  {
    name: "Google Calendar",
    logo: "/images/icons8-google-calendar-480.png",
    description: "Automatically schedule meetings, set reminders, and optimize your time management with smart scheduling recommendations.",
    bgColor: "bg-blue-900",
    gradientFrom: "from-blue-500",
    gradientTo: "to-blue-700"
  },
  {
    name: "Gmail",
    logo: "/images/icons8-gmail-480.png",
    description: "AI-powered email responses and smart notifications keep you informed without overwhelming you.",
    bgColor: "bg-teal-900",
    gradientFrom: "from-teal-500",
    gradientTo: "to-cyan-600"
  },
  {
    name: "Slack",
    logo: "/images/icons8-slack-480.png",
    description: "Transform team conversations into actionable insights and streamline communication workflows.",
    bgColor: "bg-green-900",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-600"
  },
  {
    name: "Stripe",
    logo: "/images/icons8-stripe-480.png",
    description: "Automated payment processing, invoice generation, and financial insights to streamline your revenue operations.",
    bgColor: "bg-violet-900",
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-600"
  },
  {
    name: "QuickBooks",
    logo: "/images/icons8-quickbooks-480.png",
    description: "Intelligent bookkeeping automation that categorizes expenses, tracks income, and generates financial reports effortlessly.",
    bgColor: "bg-yellow-900",
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-600"
  },
  {
    name: "Telegram",
    logo: "/images/icons8-telegram-480.png",
    description: "Secure messaging integration with smart notifications and automated responses for streamlined communication.",
    bgColor: "bg-sky-900",
    gradientFrom: "from-sky-500",
    gradientTo: "to-blue-600"
  },
  {
    name: "Claude AI",
    logo: "/images/icons8-claude-ai-480.png",
    description: "Advanced AI capabilities for content generation, analysis, and decision-making support across all your workflows.",
    bgColor: "bg-orange-900",
    gradientFrom: "from-orange-500",
    gradientTo: "to-red-600"
  },
  {
    name: "ChatGPT",
    logo: "/images/icons8-chat-gpt-480.png",
    description: "Conversational AI integration for intelligent assistance, content creation, and automated customer support.",
    bgColor: "bg-emerald-900",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-600"
  },
  {
    name: "Brevo",
    logo: "/images/icons8-sendinblue-480.png",
    description: "Smart email marketing automation with AI-driven campaigns, subscriber management, and performance analytics.",
    bgColor: "bg-indigo-900",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-purple-600"
  }
];

export function IntegrationSectionOptimized() {
  return (
    <section id="integrations" className="w-full bg-black py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-black" />
      
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
            Seamless Integrations
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with your favorite tools and platforms for a unified workflow experience
          </p>
        </motion.div>

        {/* Integration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-64 rounded-2xl overflow-hidden ${integration.bgColor} border border-white/10 backdrop-blur-sm`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${integration.gradientFrom} ${integration.gradientTo} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Logo */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-16 h-16 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <Image
                        src={integration.logo}
                        alt={integration.name}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-semibold text-white text-center mb-3 group-hover:text-gray-100 transition-colors duration-300">
                    {integration.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 text-center line-clamp-4 group-hover:text-gray-300 transition-colors duration-300">
                    {integration.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-400 mb-6">
            Don't see your favorite tool? We can integrate with almost anything.
          </p>
          <a
            href="https://calendly.com/msohanh/ai-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            Request Custom Integration
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default IntegrationSectionOptimized;