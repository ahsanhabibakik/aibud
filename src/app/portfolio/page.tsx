import React from "react";
import { Metadata } from "next";
import PortfolioHero from "@/components/sections/Portfolio/PortfolioHero-optimize-1";
import { FooterSection } from "@/components/sections/Home/FooterSection";
import { MouseGradientOverlayOptimized } from "@/components/ui/MouseGradientOverlay-optimized";
import PortfolioWithNavigation from "@/components/sections/Portfolio/PortfolioWithNavigation";
import UnifiedNavBar from "@/components/UnifiedNavBar";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Portfolio - AI Buddy | Custom AI Solutions & Automations",
  description: "Explore our portfolio of custom AI agents, automations, and productivity tools built for founders and small teams. From Agent GG to specialized solutions across marketing, operations, and mental health.",
  keywords: "AI portfolio, custom AI development, business automation, Agent GG, productivity tools, AI solutions, case studies",
  openGraph: {
    title: "Portfolio - AI Buddy | Custom AI Solutions & Automations",
    description: "Explore our portfolio of custom AI agents, automations, and productivity tools built for founders and small teams.",
    url: "https://aibud.ca/portfolio",
    siteName: "AI Buddy",
    images: [
      {
        url: "/images/portfolio-og.jpg",
        width: 1200,
        height: 630,
        alt: "AI Buddy Portfolio - Custom AI Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - AI Buddy | Custom AI Solutions",
    description: "Explore our portfolio of custom AI agents and automation tools.",
    images: ["/images/portfolio-og.jpg"],
  },
  alternates: {
    canonical: "https://aibud.ca/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Optimized mouse-responsive gradient overlay system */}
      <MouseGradientOverlayOptimized />
      
      {/* Navigation */}
      <UnifiedNavBar />
      
      {/* Page content */}
      <div className="relative z-20">
        {/* Hero Section */}
        <PortfolioHero />

        {/* Portfolio Content with Integrated Navigation */}
        <PortfolioWithNavigation />

        <FooterSection />
      </div>
      
      {/* Scroll to Top with Progress */}
      <ScrollToTop />
    </div>
  );
}