import React from "react";
import { portfolioProducts } from "@/lib/portfolio-data";
import { ExternalLink } from "lucide-react";
import PortfolioHeroClient from "./PortfolioHeroClient";
import type { Metadata } from "next";
import type { PortfolioProduct } from "@/types/portfolio";

// Types for better TypeScript support
interface KPIData {
  value: string;
  label: string;
  description?: string;
}

interface PortfolioHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

// Static data optimized for SEO
const heroData = {
  title: "Work we have built.",
  subtitle: "Results we can replicate for you.",
  description: "A curated look at agents, automations, and tools we have built for founders and small teams.",
  calendlyUrl: "https://calendly.com/msohanh/ai-discussion"
};

const kpiData: KPIData[] = [
  { 
    value: "15+", 
    label: "Products Shipped",
    description: "Successfully delivered AI products across multiple industries"
  },
  { 
    value: "5", 
    label: "Industries Served",
    description: "From healthcare to finance, spanning diverse business sectors"
  },
  { 
    value: "40%", 
    label: "Avg. Efficiency Gain",
    description: "Average productivity improvement for our clients"
  }
];

// SEO metadata export for page-level usage
const portfolioHeroMetadata: Metadata = {
  title: "AI Buddy Portfolio - Custom AI Solutions & Automations",
  description: "Explore our portfolio of AI agents, automations, and tools built for founders and small teams. 15+ products shipped with 40% average efficiency gains.",
  keywords: ["AI portfolio", "automation tools", "AI agents", "business efficiency", "custom AI solutions"],
  openGraph: {
    title: "AI Buddy Portfolio - Work We Have Built",
    description: "Results we can replicate for you. See our AI products and automations.",
    type: "website",
    images: [{
      url: "/portfolio-hero-og.jpg",
      width: 1200,
      height: 630,
      alt: "AI Buddy Portfolio Showcase"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Buddy Portfolio - Custom AI Solutions",
    description: "15+ AI products shipped across 5 industries with 40% efficiency gains."
  }
};

const PortfolioHero: React.FC<PortfolioHeroProps> = ({ 
  title = heroData.title,
  subtitle = heroData.subtitle,
  description = heroData.description
}) => {
  // Filter featured products server-side for better performance
  const featuredProducts: PortfolioProduct[] = portfolioProducts.filter(p => p.featured).slice(0, 6);

  return (
    <>
      {/* SEO-optimized structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Portfolio",
            "name": "AI Buddy Portfolio",
            "description": description,
            "creator": {
              "@type": "Organization",
              "name": "AI Buddy",
              "url": "https://aibud.ca"
            },
            "workExample": featuredProducts.map(product => ({
              "@type": "CreativeWork",
              "name": product.name,
              "description": product.description,
              "creator": "AI Buddy"
            })),
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "15"
            }
          })
        }}
      />
      
      <PortfolioHeroClient>
        {/* Static background elements for better performance */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
          
          {/* Static grid pattern for better performance */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[100px_100px]" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Server-rendered for SEO */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    {title}
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-neutral-300 font-medium">
                  {subtitle}
                </h2>
              </div>

              <p className="text-lg text-neutral-400 mb-8 max-w-lg mx-auto lg:mx-0">
                {description}
              </p>

              {/* KPI Strip - Static for better SEO */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                {kpiData.map((kpi, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-emerald-400">
                      {kpi.value}
                    </div>
                    <div className="text-sm text-neutral-400">{kpi.label}</div>
                    {kpi.description && (
                      <div className="sr-only">{kpi.description}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTAs - Static for better accessibility */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href={heroData.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                  aria-label="Book a consultation call with AI Buddy"
                >
                  <span>Book a Call</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
                
                <button
                  type="button"
                  className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-200 flex items-center justify-center space-x-2"
                  aria-label="Browse all AI products and solutions"
                >
                  <span>Browse All Products</span>
                </button>
              </div>
            </div>

            {/* Right Content - Product Mosaic - Server-rendered for SEO */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {featuredProducts.map((product, index) => (
                  <article
                    key={product.id}
                    className={`
                      relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900 to-neutral-800 p-4 hover:border-purple-500/40 transition-all duration-300
                      ${index === 0 ? 'col-span-2' : ''}
                      ${index === 1 || index === 2 ? 'h-32' : 'h-40'}
                    `}
                    itemScope
                    itemType="https://schema.org/CreativeWork"
                  >
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          {product.emoji && (
                            <span className="text-xl" role="img" aria-label={product.name}>
                              {product.emoji}
                            </span>
                          )}
                          <h3 className="text-white font-medium text-sm" itemProp="name">
                            {product.name}
                          </h3>
                        </div>
                        <p className="text-neutral-400 text-xs leading-tight" itemProp="description">
                          {product.description.length > 60 
                            ? `${product.description.substring(0, 60)}...`
                            : product.description
                          }
                        </p>
                      </div>
                      
                      {product.status === 'Live' && (
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden="true" />
                          <span className="text-green-400 text-xs font-medium">Live</span>
                        </div>
                      )}
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" aria-hidden="true" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PortfolioHeroClient>
    </>
  );
};

export default PortfolioHero;
export { portfolioHeroMetadata, kpiData, heroData };