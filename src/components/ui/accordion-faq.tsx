"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  items?: FAQItem[];
  className?: string;
}

const faqData: FAQItem[] = [
  {
    id: "scope",
    question: "What's the scope of your custom development projects?",
    answer: "We build everything from simple automations to complex AI-powered platforms. Our projects typically range from workflow optimizations and data dashboards to full-featured applications with AI integration. We focus on practical solutions that deliver measurable business value."
  },
  {
    id: "timeline", 
    question: "What are typical project timelines?",
    answer: "Simple automations and integrations: 1-2 weeks. Medium complexity tools (dashboards, chatbots): 3-6 weeks. Complex applications (Agent GG-level): 8-12 weeks. We always provide detailed timelines after initial discovery and break projects into milestone-based deliveries."
  },
  {
    id: "data-safety",
    question: "How do you ensure data safety and privacy?",
    answer: "We implement privacy-by-design principles, use encrypted data transmission, and follow SOC 2 security standards. All integrations use secure OAuth protocols, and we never store sensitive data unnecessarily. For enterprise clients, we can work within your existing security infrastructure."
  },
  {
    id: "customization",
    question: "How customizable are your solutions?",
    answer: "Extremely customizable. While we have proven templates and frameworks (like Agent GG), every implementation is tailored to your specific workflows, integrations, and business logic. We can adapt our solutions to work with your existing tools and processes."
  },
  {
    id: "support",
    question: "What ongoing support do you provide?",
    answer: "All projects include 30 days of post-launch support and bug fixes. We offer ongoing maintenance plans for $500-2000/month depending on complexity. This includes updates, new feature additions, and integration maintenance as your tools evolve."
  },
  {
    id: "pricing",
    question: "How does pricing work?",
    answer: "We use milestone-based fixed pricing after initial discovery. Simple automations start at $2-5K, medium complexity tools range $5-15K, and complex applications are $15K+. We always provide detailed estimates and never have hidden costs."
  },
  {
    id: "technology",
    question: "What technologies do you work with?",
    answer: "We specialize in modern web technologies: React/Next.js for frontends, Node.js/Python for backends, and integrate with 50+ business tools including ClickUp, Slack, Google Workspace, QuickBooks, and major AI APIs (OpenAI, Claude, etc.)."
  }
];

export const AccordionFAQ = ({ items = faqData, className }: AccordionFAQProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)}>
      <div className="space-y-2">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="border border-neutral-800 rounded-xl bg-neutral-900/50 backdrop-blur-sm overflow-hidden"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-inset"
              aria-expanded={openItem === item.id}
              aria-controls={`faq-answer-${item.id}`}
            >
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-white font-medium text-lg">
                  {item.question}
                </span>
              </div>
              
              <motion.div
                animate={{ rotate: openItem === item.id ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="ml-4 flex-shrink-0"
              >
                <ChevronDown className="w-5 h-5 text-neutral-400" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openItem === item.id && (
                <motion.div
                  id={`faq-answer-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    height: { duration: 0.3, ease: "easeInOut" },
                    opacity: { duration: 0.25, ease: "easeInOut" }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 pl-14">
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      className="text-neutral-300 leading-relaxed"
                    >
                      {item.answer}
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-neutral-400 mb-6">
            Let&apos;s discuss your specific needs and how we can help.
          </p>
          <a
            href="https://calendly.com/msohanh/ai-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200"
          >
            <span>Schedule a Call</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};