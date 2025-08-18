import React from "react";
import { Metadata } from "next";
import { FooterSection } from "@/components/sections/Home/FooterSection";
import { MouseGradientOverlayOptimized } from "@/components/ui/MouseGradientOverlay-optimized";
import UnifiedNavBar from "@/components/UnifiedNavBar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CXOHeroNew from "@/components/sections/CXO/CXOHeroNew";
import CXOAudience from "@/components/sections/CXO/CXOAudience";
import CXOProblems from "@/components/sections/CXO/CXOProblems";
import CXODeliverables from "@/components/sections/CXO/CXODeliverables";
import CXOProcess from "@/components/sections/CXO/CXOProcess";
import CXORoles from "@/components/sections/CXO/CXORoles";
import CXOProof from "@/components/sections/CXO/CXOProof";
import CXOCTA from "@/components/sections/CXO/CXOCTA";

export const metadata: Metadata = {
  title: "Fractional CXO for Startups (Pre-Seed & Seed) | AI Buddy",
  description: "Borrow executive firepower without the full-time hire. Clarity, speed, and investor-grade discipline in your first 6–12 months.",
  keywords: "fractional CXO, startup executive, fractional CPO, fractional COO, fractional CMO, startup consulting, pre-seed, seed funding",
  openGraph: {
    title: "Fractional CXO for Startups | AI Buddy",
    description: "Borrow executive firepower without the full-time hire. Get clarity, speed, and investor-grade discipline.",
    url: "https://aibud.ca/fractionalcxo",
    siteName: "AI Buddy",
    images: [
      {
        url: "/images/fractionalcxo-og.jpg",
        width: 1200,
        height: 630,
        alt: "Fractional CXO for Startups - AI Buddy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional CXO for Startups | AI Buddy",
    description: "Borrow executive firepower without the full-time hire. Clarity, speed, and discipline.",
    images: ["/images/fractionalcxo-og.jpg"],
  },
  alternates: {
    canonical: "https://aibud.ca/fractionalcxo",
  },
};

export default function FractionalCXOPage() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Optimized mouse-responsive gradient overlay system */}
      <MouseGradientOverlayOptimized />
      
      {/* Navigation */}
      <UnifiedNavBar />
      
      {/* Page content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <CXOHeroNew />

        {/* Who this is for */}
        <CXOAudience />

        {/* Problems we solve */}
        <CXOProblems />

        {/* What you get (deliverables) */}
        <CXODeliverables />

        {/* How engagement works */}
        <CXOProcess />

        {/* Roles we cover */}
        <CXORoles />

        {/* Proof you can feel */}
        <CXOProof />

        {/* Final CTA section */}
        <CXOCTA />

        <FooterSection />
      </div>
      
      {/* Scroll to Top with Progress */}
      <ScrollToTop />
    </div>
  );
}