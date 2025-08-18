import React from "react";
import { Metadata } from "next";
import { FooterSection } from "@/components/sections/Home/FooterSection";
import { MouseGradientOverlayOptimized } from "@/components/ui/MouseGradientOverlay-optimized";
import UnifiedNavBar from "@/components/UnifiedNavBar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import AgentHeroNew from "@/components/sections/Agent/AgentHeroNew";
import AgentBenefits from "@/components/sections/Agent/AgentBenefits";
import AgentUseCases from "@/components/sections/Agent/AgentUseCases";
import AgentInside from "@/components/sections/Agent/AgentInside";
import AgentProcess from "@/components/sections/Agent/AgentProcess";
import AgentMetrics from "@/components/sections/Agent/AgentMetrics";
import AgentPrinciples from "@/components/sections/Agent/AgentPrinciples";
import AgentCTA from "@/components/sections/Agent/AgentCTA";

export const metadata: Metadata = {
  title: "Custom AI Agent for Founders | AI Buddy - From Insight to Execution",
  description: "We design custom AI agents that lower cognitive load, surface core business insights, and act on them across your stack. Request a scoped pilot for speed and accuracy.",
  keywords: "custom AI agent, business automation, AI for founders, cognitive load reduction, business insights, AI pilot, speed and accuracy",
  openGraph: {
    title: "Custom AI Agent for Founders | AI Buddy",
    description: "From insight to execution—on autopilot. We design custom AI agents that lower cognitive load and surface core business insights.",
    url: "https://aibud.ca/agent",
    siteName: "AI Buddy",
    images: [
      {
        url: "/images/agent-og.jpg",
        width: 1200,
        height: 630,
        alt: "Custom AI Agent for Founders - AI Buddy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Agent for Founders | AI Buddy",
    description: "From insight to execution—on autopilot. Custom AI agents for speed and accuracy.",
    images: ["/images/agent-og.jpg"],
  },
  alternates: {
    canonical: "https://aibud.ca/agent",
  },
};

export default function AgentPage() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Optimized mouse-responsive gradient overlay system */}
      <MouseGradientOverlayOptimized />
      
      {/* Navigation */}
      <UnifiedNavBar />
      
      {/* Page content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <AgentHeroNew />

        {/* Why an agent (not another tool)? */}
        <AgentBenefits />

        {/* High-impact use cases */}
        <AgentUseCases />

        {/* What's inside your agent */}
        <AgentInside />

        {/* Build process (4–6 weeks typical) */}
        <AgentProcess />

        {/* Success metrics we optimize for */}
        <AgentMetrics />

        {/* Our principles */}
        <AgentPrinciples />

        {/* Final CTA section */}
        <AgentCTA />

        <FooterSection />
      </div>
      
      {/* Scroll to Top with Progress */}
      <ScrollToTop />
    </div>
  );
}