import React from "react";
import { Metadata } from "next";
import NavBar from "@/components/NavBar";
import PortfolioHeroNew from "@/components/sections/Portfolio2/PortfolioHeroNew";
import { FooterSection } from "@/components/sections/Home/FooterSection";
import PortfolioContent from "./portfolio-content";

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
    <div className="relative bg-black min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <PortfolioHeroNew />

      {/* Main Content */}
      <PortfolioContent />

      <FooterSection />
    </div>
  );
}