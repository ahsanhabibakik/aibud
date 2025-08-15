"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Image from "next/image";

export default function IntegrationsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const integrations = [
    {
      id: 1,
      name: "ClickUp",
      logoSrc: "/images/icons8-clickup-480.png",
      description: "Seamlessly sync and assign tasks, deadlines, and priorities using Chatbot.",
    },
    {
      id: 2,
      name: "Google Calendar",
      logoSrc: "/images/icons8-google-calendar-480.png",
      description: "Automatically schedule tasks and protect focus time in your calendar.",
    },
    {
      id: 3,
      name: "Gmail",
      logoSrc: "/images/icons8-gmail-480.png",
      description: "Manage your inbox, prioritize important emails, and draft responses.",
    },
    {
      id: 4,
      name: "Telegram",
      logoSrc: "/images/telegram-logo.png",
      description: "Automate messaging, and gain access to every features of Agent GG using Telegram.",
    },
    {
      id: 5,
      name: "Google Docs",
      logoSrc: "/images/google-docs-logo.png",
      description: "Create a searchable knowledge base from your documents that AI can reference and cite in its responses.",
    },
    {
      id: 6,
      name: "Stripe",
      logoSrc: "/images/stripe-logo.png",
      description: "Agent GG analyzes revenue from Stripe and give you suggestions to improve your business.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://n8n-canada.aukikaurnab.com/webhook/ai-buddy-forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          email,
          country,
          integrationRequest: description
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setEmail("");
      setFirstName("");
      setCountry("");
      setDescription("");

      // Reset the submitted state after a few seconds
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
      }, 3000);
    } catch (err) {
      setError("Failed to submit form. Please try again later.");
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="integrations" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Key Integrations
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Agent GG works with the tools you already use, making implementation quick and easy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrations.map((integration) => (
            <motion.div
              key={integration.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: integration.id * 0.1 }}
              className="flex justify-center"
            >
              <div className="border border-white/[0.1] relative w-full rounded-xl overflow-hidden bg-black h-[380px]">
                <Icon className="absolute h-4 w-4 -top-2 -left-2 text-white" />
                <Icon className="absolute h-4 w-4 -bottom-2 -left-2 text-white" />
                <Icon className="absolute h-4 w-4 -top-2 -right-2 text-white" />
                <Icon className="absolute h-4 w-4 -bottom-2 -right-2 text-white" />

                <div className="h-full">
                  <EvervaultCard text={integration.name} description={integration.description}>
                    <Image
                      src={integration.logoSrc}
                      alt={integration.name}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </EvervaultCard>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 text-gray-400">
          More integrations coming soon. Don&apos;t see what you need? Let us know!
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-zinc-900 hover:bg-zinc-800 transition-colors text-white px-8 py-3 rounded-full border border-white/10"
          >
            Request Integration
          </button>
        </div>
      </div>

      {/* Integration Request Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-zinc-900 rounded-2xl p-6 w-full max-w-md border border-white/10"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Request Integration</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h4 className="text-xl font-medium text-white mb-2">Request Submitted!</h4>
                <p className="text-gray-400">Thanks for your interest. We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-400 mb-1">Country</label>
                  <input
                    type="text"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-400 mb-1">Integration Request</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={4}
                    className="w-full bg-zinc-800 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Tell us which integration you'd like to see..."
                  />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black font-medium py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : "Submit Request"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
}
