"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

// Define the shape of an integration
interface Integration {
  name: string;
  logo: string;
  description: string;
  bgColor: string;
  colors: number[][];
}

// Data for the integrations
const integrations: Integration[] = [
  {
    name: "ClickUp",
    logo: "/images/icons8-clickup-480.png",
    description: "Seamlessly create and assign tasks directly from conversations. Track project status and automatically update workflows based on real-time inputs.",
    bgColor: "bg-purple-950",
    colors: [
      [138, 43, 226], // Purple
      [75, 0, 130]     // Indigo
    ]
  },
  {
    name: "Google Calendar",
    logo: "/images/icons8-google-calendar-480.png",
    description: "Automatically schedule meetings, set reminders, and optimize your time management with smart scheduling recommendations.",
    bgColor: "bg-blue-900",
    colors: [
      [0, 112, 240], // Blue
      [66, 133, 244]  // Google Blue
    ]
  },
  {
    name: "Gmail",
    logo: "/images/icons8-gmail-480.png",
    description: " AI-powered email responses and smart notifications keep you informed without overwhelming you.",
    bgColor: "bg-teal-900",
    colors: [
      [20, 184, 166], // Teal
      [6, 182, 212]    // Cyan
    ]
  },
  {
    name: "Slack",
    logo: "/images/slack_logo.png",
    description: "Automatically summarize conversations, manage notifications, and create actionable tasks from discussions in your Slack channels.",
    bgColor: "bg-amber-900",
    colors: [
      [245, 158, 11], // Amber
      [234, 88, 12]    // Orange
    ]
  },
  {
    name: "Stripe",
    logo: "/images/stripe-logo.png",
    description: "Automate payment collection, invoicing, and subscription management. Receive real-time alerts on payment success and failures without manual monitoring.",
    bgColor: "bg-indigo-900",
    colors: [
      [99, 102, 241], // Indigo
      [79, 70, 229]    // Darker Indigo
    ]
  },
  {
    name: "QuickBooks",
    logo: "/images/quickbooks-logo.png",
    description: "Streamline bookkeeping by automatically categorizing expenses, tracking invoices, and preparing financial reports based on your transactions.",
    bgColor: "bg-green-900",
    colors: [
      [34, 197, 94], // Green
      [22, 163, 74]   // Darker Green
    ]
  },
  {
    name: "Telegram",
    logo: "/images/telegram-logo.png",
    description: "Automate messaging, and coordinate communication channels with seamless integration into your workflow.",
    bgColor: "bg-blue-800",
    colors: [
      [59, 130, 246], // Blue
      [37, 99, 235]   // Darker Blue
    ]
  },
  {
    name: "Claude",
    logo: "/images/claude-logo.png",
    description: "Harness Claude's powerful AI capabilities for content creation, research assistance, and intelligent document processing.",
    bgColor: "bg-violet-900",
    colors: [
      [124, 58, 237], // Violet
      [109, 40, 217]  // Darker Violet
    ]
  },
  {
    name: "ChatGPT",
    logo: "/images/chatgpt-logo.png",
    description: "Leverage ChatGPT's conversational AI to automate customer support, generate creative content, and streamline complex workflows.",
    bgColor: "bg-emerald-900",
    colors: [
      [16, 185, 129], // Emerald
      [5, 150, 105]   // Darker Emerald
    ]
  },
  {
    name: "Brevo",
    logo: "/images/brevo-logo.webp",
    description: "Optimize email marketing campaigns, customer journey automation, and CRM integration for better customer engagement and conversion.",
    bgColor: "bg-sky-900",
    colors: [
      [14, 165, 233], // Sky
      [3, 105, 161]   // Darker Sky
    ]
  }
];

// Card component for each integration
const IntegrationCard = ({
  integration,
  isCustom = false,
  onRequestIntegration
}: {
  integration: Integration;
  isCustom?: boolean;
  onRequestIntegration?: () => void;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);

  if (isCustom) {
    return (
      <div
        onClick={() => {
          setClicked(!clicked);
          if (onRequestIntegration) onRequestIntegration();
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-white/[0.3] border-dashed group/canvas-card flex items-center justify-center relative h-[18rem] w-full max-w-md mx-auto p-6 rounded-xl overflow-hidden bg-white/[0.05] cursor-pointer transition-all duration-300 hover:bg-white/[0.1] hover:scale-105"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-50 flex flex-col items-center justify-center w-full h-full gap-4">
          <AnimatePresence>
            {clicked ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center"
              >
                <h3 className="text-white text-lg font-bold mb-2">We Will Get You Covered!</h3>
                <p className="text-white/70 text-sm">Our team will work with you to integrate any service you need. Contact us to get started.</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center"
              >
                <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-white text-lg font-bold mb-2">Add Your SaaS</h3>
                  <p className="text-white/70 text-sm">Connect with any service you use through our flexible API and integration system.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center relative h-[18rem] w-full max-w-md mx-auto p-6 rounded-xl overflow-hidden"
    >
      <div className="absolute h-6 w-6 -top-3 -left-3 border-t-2 border-l-2 border-white/40 rounded-tl-lg" />
      <div className="absolute h-6 w-6 -bottom-3 -left-3 border-b-2 border-l-2 border-white/40 rounded-bl-lg" />
      <div className="absolute h-6 w-6 -top-3 -right-3 border-t-2 border-r-2 border-white/40 rounded-tr-lg" />
      <div className="absolute h-6 w-6 -bottom-3 -right-3 border-b-2 border-r-2 border-white/40 rounded-br-lg" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={3.5}
              containerClassName={integration.bgColor}
              colors={integration.colors}
              dotSize={2}
            />
            {/* Add a radial gradient for a nicer fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-50 flex flex-col items-center justify-center w-full h-full">
        {/* Logo and name - only visible when not hovered */}
        <div className={`flex flex-col items-center transition-all duration-300 ${hovered ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
          <div className="h-16 w-16 mb-4 relative rounded-xl overflow-hidden">
            <Image
              src={integration.logo}
              alt={`${integration.name} integration`}
              fill
              className="object-cover"
            />
          </div>

          <h3 className="text-white text-lg font-bold text-center">
            {integration.name}
          </h3>
        </div>

        {/* Description - only visible when hovered */}
        <div className={`absolute inset-0 flex items-center justify-center p-8 transition-all duration-500 ${hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <p className="text-white text-center text-sm">
            {integration.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// Integration Request Modal Component
const IntegrationRequestModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [firstName, setFirstName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
        onClose();
      }, 3000);
    } catch (err) {
      setError("Failed to submit form. Please try again later.");
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative z-[101] bg-[#0a1024] border border-white/20 rounded-xl p-8 w-full max-w-lg overflow-hidden"
      >
        {/* Background effect positioned behind content */}
        <div className="absolute inset-0 pointer-events-none">
          <BackgroundBeams className="opacity-20" />
        </div>

        {/* Close button */}
        <div className="absolute right-4 top-4 z-[102]">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="relative z-[102] pointer-events-auto">
          <h3 className="text-white text-2xl font-bold mb-6 text-center">
            Request Custom Integration
          </h3>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-green-500 mb-4 text-5xl">✓</div>
              <p className="text-white text-lg mb-2">Thank you for your request!</p>
              <p className="text-gray-400">We&apos;ll be in touch soon about your integration.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <textarea
                placeholder="Describe the integration you need"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
              ></textarea>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export function IntegrationSection() {
  const [showRequestModal, setShowRequestModal] = useState(false);

  return (
    <section id="integrations" className="w-full bg-[#0a1024] py-20">
      <div className="container mx-auto px-4">
        <div className="relative mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Powerful Integrations
          </h2>
          <p className="text-gray-300 text-center mb-6 max-w-2xl mx-auto">
            Seamlessly connect with the SaaS tools you already use. Our platform adapts to your workflow, not the other way around.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {integrations.map((integration) => (
            <IntegrationCard
              key={integration.name}
              integration={integration}
            />
          ))}
          <IntegrationCard
            isCustom={true}
            integration={{
              name: "",
              logo: "",
              description: "",
              bgColor: "",
              colors: [[0,0,0],[0,0,0]]
            }}
            onRequestIntegration={() => setShowRequestModal(true)}
          />
        </div>
      </div>

      <AnimatePresence>
        {showRequestModal && (
          <IntegrationRequestModal
            isOpen={showRequestModal}
            onClose={() => setShowRequestModal(false)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
