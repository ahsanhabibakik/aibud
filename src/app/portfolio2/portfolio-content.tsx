"use client";
import React from "react";
import dynamic from "next/dynamic";
import { portfolioProducts } from "@/lib/portfolio-data";
import { ErrorBoundary } from "@/components/ui/portfolio2/ui/error-boundary";
import { 
  LazyFilterableProductGrid, 
  LazyCaseStudySection, 
  LazyAccordionFAQ,
  LazyLoadWrapper 
} from "@/components/ui/portfolio2/ui/lazy-components";

// Lazy load heavy sections
const LazyPartnersSection = dynamic(
  () => import("@/components/sections/Home/PartnersSection").then(mod => ({ default: mod.PartnersSection })),
  { ssr: false }
);

const LazyIntegrationSection = dynamic(
  () => import("@/components/sections/Home/IntegrationSection").then(mod => ({ default: mod.IntegrationSection })),
  { ssr: false }
);

export default function PortfolioContent() {
  return (
    <>
      {/* Flagship Spotlight - Agent GG - Critical path */}
      <section className="py-20 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Flagship Product
              </span>
            </h2>
            <p className="text-xl text-neutral-400">
              Our most advanced AI productivity copilot
            </p>
          </div>

          <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-4xl">🤖</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Agent GG</h3>
                  <span className="bg-green-500/20 text-green-400 text-sm px-3 py-1 rounded-full border border-green-500/30">
                    Live
                  </span>
                </div>
                
                <p className="text-lg text-neutral-300 mb-6">
                  Your decision co-pilot that lowers cognitive load, focuses you on revenue-makers, 
                  and scales across small teams when you&apos;re ready.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">40%</div>
                    <div className="text-sm text-neutral-400">Faster decisions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">7AM</div>
                    <div className="text-sm text-neutral-400">Daily briefings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">10+</div>
                    <div className="text-sm text-neutral-400">Integrations</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Focus mode", "Smart briefs", "Team-ready", "Calendar sync"].map((feature) => (
                    <span
                      key={feature}
                      className="bg-purple-500/10 text-purple-400 text-sm px-3 py-1 rounded-full border border-purple-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="/agentgg"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200"
                >
                  <span>Learn about Agent GG</span>
                </a>
              </div>

              <div className="relative">
                <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700">
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎬</div>
                      <div className="text-white font-medium">Demo Video</div>
                      <div className="text-neutral-400 text-sm">Interactive walkthrough</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid - Lazy loaded */}
      <section id="product-grid" className="bg-neutral-900">
        <ErrorBoundary>
          <LazyLoadWrapper>
            <LazyFilterableProductGrid products={portfolioProducts} />
          </LazyLoadWrapper>
        </ErrorBoundary>
      </section>

      {/* Case Studies - Lazy loaded */}
      <ErrorBoundary>
        <LazyLoadWrapper>
          <LazyCaseStudySection />
        </LazyLoadWrapper>
      </ErrorBoundary>

      {/* Integrations Wall - Lazy loaded */}
      <ErrorBoundary>
        <LazyLoadWrapper>
          <LazyIntegrationSection />
        </LazyLoadWrapper>
      </ErrorBoundary>

      {/* Process + Credibility Row - Lazy loaded */}
      <ErrorBoundary>
        <LazyLoadWrapper>
          <LazyPartnersSection />
        </LazyLoadWrapper>
      </ErrorBoundary>

      {/* FAQ Section - Lazy loaded */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Everything you need to know about working with us and our development process.
            </p>
          </div>
          
          <ErrorBoundary>
            <LazyLoadWrapper>
              <LazyAccordionFAQ />
            </LazyLoadWrapper>
          </ErrorBoundary>
        </div>
      </section>

      {/* Conversion Footer - Critical for conversion */}
      <section className="py-20 bg-gradient-to-b from-black to-neutral-900 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to bring your agent to life?
          </h2>
          <p className="text-xl text-neutral-400 mb-8">
            Join the projects spanning ops, marketing, and wellbeing.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex-1 max-w-md">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-full text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50"
              />
            </div>
            <a
              href="https://calendly.com/msohanh/ai-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              Book a Call
            </a>
          </div>

          <p className="text-sm text-neutral-500">
            Projects spanning ops, marketing, and wellbeing.
          </p>
        </div>
      </section>
    </>
  );
}