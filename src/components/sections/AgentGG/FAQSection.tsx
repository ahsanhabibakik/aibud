"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What is Agent GG?",
      answer: "Agent GG is an AI-powered co-pilot designed to help professionals streamline their workflows, prioritize tasks effectively, and make smarter decisions with less bias and fatigue.",
    },
    {
      id: 2,
      question: "How does Agent GG integrate with my existing tools?",
      answer: "Agent GG seamlessly connects with popular productivity tools like ClickUp, Google Calendar, Gmail, Slack, and more. Our setup process is designed to be quick and straightforward.",
    },
    {
      id: 3,
      question: "Is my data secure with Agent GG?",
      answer: "Absolutely. We implement enterprise-grade security measures to ensure your data remains private and protected. We don&apos;t store your sensitive information and use encryption for all data transfers.",
    },
    {
      id: 4,
      question: "How does the daily 7 AM email work?",
      answer: "Each morning at 7 AM (your local time), Agent GG analyzes your tasks, calendar, and priorities to send you a personalized email with a clear plan for the day, highlighting your most critical tasks.",
    },
    {
      id: 5,
      question: "Can Agent GG help me prioritize my work?",
      answer: "Yes, that&apos;s one of our core features. Agent GG uses advanced algorithms to analyze your tasks based on deadlines, importance, and impact to help you focus on what matters most at any given moment.",
    },
  ];

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <div className="inline-block px-4 py-1 rounded-full bg-zinc-800 text-gray-400 text-sm mb-6">
            Coming Soon
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Find answers to commonly asked questions about Agent GG.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-900/50"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left text-white focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400"
                  >
                    {faq.answer}
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Have a question that&apos;s not listed here? Feel free to reach out.
          </p>
          <div className="inline-block relative overflow-hidden rounded-full p-px">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <button className="relative bg-zinc-950 hover:bg-zinc-900 transition-colors text-white px-6 py-3 rounded-full">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
