"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export const CTASection = () => {
  const [firstName, setFirstName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ firstName, email, country }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setEmail("");
      setFirstName("");
      setCountry("");

      // Reset the submitted state after a few seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("Failed to submit form. Please try again later.");
      console.error("Error submitting form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="relative h-[40rem] w-full bg-neutral-950">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h4 className="mb-6 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Want to test if Agent GG is a good fit for your business?
          </h4>


          <p className="mb-4 text-neutral-400 text-lg">
            Join the waitlist
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <input
              type="text"
              placeholder="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-l-lg border border-neutral-800 bg-neutral-900 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-r-lg bg-gradient-to-r from-purple-800 to-purple-950 text-white font-medium hover:opacity-90 transition-all duration-200 shadow-lg shadow-purple-900/10 disabled:opacity-50"
              >
                {isSubmitting ? "Joining..." : "Join"}
              </button>
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}
            {submitted && (
              <p className="text-green-500 text-sm mt-2">Thank you for joining the waitlist!</p>
            )}
          </form>
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};
