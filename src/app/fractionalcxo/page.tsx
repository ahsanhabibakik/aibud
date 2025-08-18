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
  title: "Fractional CXO Services for Startups | Executive Leadership On-Demand | AI Buddy",
  description: "Get C-suite expertise without the $200K+ commitment. Transform your startup with executive-grade strategy, investor-ready processes, and proven growth frameworks. 15+ years Fortune 500 experience. 10x ROI guaranteed.",
  keywords: [
    "fractional CXO services",
    "startup executive consultant", 
    "fractional CPO fractional COO fractional CMO",
    "startup leadership consulting",
    "pre-seed seed funding executive",
    "on-demand C-suite expertise",
    "interim executive services",
    "startup strategy consultant",
    "investor-ready processes",
    "executive leadership development",
    "Fortune 500 executive experience",
    "startup scaling strategies"
  ].join(", "),
  authors: [{ name: "AI Buddy", url: "https://aibud.ca" }],
  creator: "AI Buddy",
  publisher: "AI Buddy",
  category: "Business Consulting",
  classification: "Executive Consulting Services",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Fractional CXO Services for Startups | Executive Leadership On-Demand",
    description: "Get C-suite expertise without the $200K+ commitment. Transform your startup with executive-grade strategy, investor-ready processes, and proven growth frameworks.",
    url: "https://aibud.ca/fractionalcxo",
    siteName: "AI Buddy - Fractional CXO Services",
    images: [
      {
        url: "https://aibud.ca/images/fractionalcxo-og.jpg",
        width: 1200,
        height: 630,
        alt: "Fractional CXO Services - Executive Leadership for Startups",
        type: "image/jpeg",
      },
      {
        url: "https://aibud.ca/images/fractionalcxo-square.jpg",
        width: 800,
        height: 800,
        alt: "AI Buddy Fractional CXO Services",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AIBuddyCA",
    creator: "@AIBuddyCA",
    title: "Fractional CXO Services for Startups | Executive Leadership On-Demand",
    description: "Get C-suite expertise without the $200K+ commitment. 15+ years Fortune 500 experience. 10x ROI guaranteed.",
    images: {
      url: "https://aibud.ca/images/fractionalcxo-og.jpg",
      alt: "Fractional CXO Services - Executive Leadership for Startups",
    },
  },
  alternates: {
    canonical: "https://aibud.ca/fractionalcxo",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "business:contact_data:street_address": "Remote Services Worldwide",
    "business:contact_data:locality": "Toronto",
    "business:contact_data:region": "Ontario",
    "business:contact_data:postal_code": "M5V 3A8",
    "business:contact_data:country_name": "Canada",
    "business:contact_data:email": "hello@aibud.ca",
    "business:contact_data:phone_number": "+1-800-AI-BUDDY",
    "business:contact_data:website": "https://aibud.ca",
    "product:price:amount": "Starting at $5000",
    "product:price:currency": "USD",
    "article:author": "AI Buddy Executive Team",
    "article:section": "Executive Consulting",
    "article:tag": "Fractional CXO, Startup Leadership, Executive Consulting",
  },
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "name": "AI Buddy - Fractional CXO Services",
  "alternateName": "AI Buddy Executive Consulting",
  "url": "https://aibud.ca/fractionalcxo",
  "logo": "https://aibud.ca/images/ai-buddy-logo.png",
  "image": "https://aibud.ca/images/fractionalcxo-og.jpg",
  "description": "Get C-suite expertise without the $200K+ commitment. Transform your startup with executive-grade strategy, investor-ready processes, and proven growth frameworks.",
  "serviceType": "Fractional CXO Services",
  "provider": {
    "@type": "Organization",
    "name": "AI Buddy",
    "url": "https://aibud.ca"
  },
  "areaServed": {
    "@type": "Country",
    "name": ["United States", "Canada", "United Kingdom", "Australia"]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Fractional Executive Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fractional Chief Executive Officer",
          "description": "On-demand CEO expertise for strategic leadership and growth"
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "priceCurrency": "USD",
          "price": "5000",
          "unitText": "per month"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Fractional Chief Operating Officer",
          "description": "Operational excellence and process optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Fractional Chief Marketing Officer",
          "description": "Strategic marketing leadership and growth initiatives"
        }
      }
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-AI-BUDDY",
    "email": "hello@aibud.ca",
    "contactType": "customer service",
    "areaServed": ["US", "CA", "GB", "AU"],
    "availableLanguage": ["English"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "Ontario", 
    "addressCountry": "CA"
  },
  "sameAs": [
    "https://linkedin.com/company/aibuddy",
    "https://twitter.com/AIBuddyCA"
  ],
  "foundingDate": "2023",
  "numberOfEmployees": "10-50",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47",
    "bestRating": "5"
  }
};

export default function FractionalCXOPage() {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
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