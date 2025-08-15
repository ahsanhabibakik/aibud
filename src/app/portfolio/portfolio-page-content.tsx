"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PortfolioNavBar from "@/components/sections/Portfolio/PortfolioNavBar";
import { portfolioProducts, caseStudies } from "@/lib/portfolio-data";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { LazyLoadWrapper } from "@/components/ui/lazy-components";
import { AnimatedSection, ContentAnimatedSection } from "@/components/ui/AnimatedSection";
import { ModernSectionBackground } from "@/components/ui/ModernSectionBackground";
import { SectionTransition } from "@/components/ui/SectionTransition";
import dynamic from "next/dynamic";

// Lazy load heavy sections
const LazyFilterableProductGrid = dynamic(
  () => import("@/components/ui/filterable-product-grid").then(mod => ({ default: mod.FilterableProductGrid })),
  { 
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    ),
    ssr: false 
  }
);

const LazyCaseStudySection = dynamic(
  () => import("@/components/sections/Portfolio/CaseStudySection"),
  { 
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    ),
    ssr: false 
  }
);

const LazyIntegrationSection = dynamic(
  () => import("@/components/sections/Home/IntegrationSection").then(mod => ({ default: mod.IntegrationSection })),
  { 
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    ),
    ssr: false 
  }
);

const LazyPartnersSection = dynamic(
  () => import("@/components/sections/Home/PartnersSection").then(mod => ({ default: mod.PartnersSection })),
  { 
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    ),
    ssr: false 
  }
);

const LazyAccordionFAQ = dynamic(
  () => import("@/components/ui/accordion-faq").then(mod => ({ default: mod.AccordionFAQ })),
  { 
    loading: () => (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
      </div>
    ),
    ssr: false 
  }
);

export default function PortfolioPageContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'featured'>('featured');
  const [isStickyNavActive, setIsStickyNavActive] = useState(false);
  const [isPortfolioNavVisible, setIsPortfolioNavVisible] = useState(true);

  // Handle sticky nav state changes - key requirement from spec
  const handleStickyStateChange = (isSticky: boolean) => {
    setIsStickyNavActive(isSticky);
    // When sticky nav is active, hide portfolio nav and remove from tab order
    setIsPortfolioNavVisible(!isSticky);
  };

  // Handle scroll to restore nav when leaving portfolio sections
  useEffect(() => {
    const handleScroll = () => {
      const portfolioEnd = document.getElementById('portfolio-end');
      if (portfolioEnd) {
        const rect = portfolioEnd.getBoundingClientRect();
        const pastPortfolio = rect.top <= window.innerHeight;
        
        if (pastPortfolio && !isStickyNavActive) {
          setIsPortfolioNavVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStickyNavActive]);

  return (
    <>
      {/* Portfolio-specific Navigation */}
      <PortfolioNavBar 
        isVisible={isPortfolioNavVisible}
      />

      {/* Flagship Spotlight - Agent GG */}
      <ContentAnimatedSection 
        className="relative overflow-hidden"
        fadeDirection="up"
        delay={0.1}
        enableScrollHide={true}
      >
        <ModernSectionBackground 
          variant="hero" 
          intensity="strong" 
          enableGrid={true}
          enableDots={true}
          enableAnimatedGradients={true}
          enableMeshGradient={true}
          enableParticles={true}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Flagship Product
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-400"
            >
              Our most advanced AI productivity copilot
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700 rounded-3xl p-8 md:p-12 hover:border-purple-500/30 transition-all duration-500"
          >
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
          </motion.div>
        </div>
      </ContentAnimatedSection>

      {/* Smooth transition */}
      <SectionTransition direction="down" variant="wave" intensity="medium" />

      {/* Product Grid Section */}
      <ContentAnimatedSection 
        className="relative overflow-hidden"
        fadeDirection="up"
        delay={0.2}
        enableScrollHide={true}
      >
        <ModernSectionBackground 
          variant="secondary" 
          intensity="medium" 
          enableGrid={true}
          enableDots={true}
          enableAnimatedGradients={true}
          enableNoise={true}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorBoundary>
            <LazyLoadWrapper>
              <LazyFilterableProductGrid 
                products={portfolioProducts}
                selectedCategory={selectedCategory}
                searchTerm={searchTerm}
                sortBy={sortBy}
              />
            </LazyLoadWrapper>
          </ErrorBoundary>
        </div>
      </ContentAnimatedSection>

      {/* Smooth transition */}
      <SectionTransition direction="down" variant="curve" intensity="subtle" />

      {/* Case Studies Section */}
      <ContentAnimatedSection 
        className="relative overflow-hidden"
        fadeDirection="left"
        delay={0.3}
        enableScrollHide={true}
      >
        <ModernSectionBackground 
          variant="tertiary" 
          intensity="medium" 
          enableGrid={false}
          enableDots={true}
          enableAnimatedGradients={true}
          enableMeshGradient={true}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-400 max-w-3xl mx-auto"
            >
              Real results from clients who transformed their workflows with our AI solutions.
            </motion.p>
          </div>
          
          <ErrorBoundary>
            <LazyLoadWrapper>
              <LazyCaseStudySection />
            </LazyLoadWrapper>
          </ErrorBoundary>
        </div>
      </ContentAnimatedSection>

      {/* Smooth transition */}
      <SectionTransition direction="down" variant="diagonal" intensity="medium" />

      {/* Integrations Wall */}
      <AnimatedSection
        className="relative overflow-hidden"
        fadeDirection="right"
        delay={0.4}
        enableMouseGradient={false}
        gradientIntensity="medium"
        enableShadows={true}
        enableDepthLayers={true}
        enableScrollHide={true}
      >
        <ModernSectionBackground 
          variant="primary" 
          intensity="medium" 
          enableGrid={true}
          enableDots={true}
          enableAnimatedGradients={true}
          enableMeshGradient={true}
          enableNoise={true}
        />
        <div className="relative z-10">
          <ErrorBoundary>
            <LazyLoadWrapper>
              <LazyIntegrationSection />
            </LazyLoadWrapper>
          </ErrorBoundary>
        </div>
      </AnimatedSection>

      {/* Smooth transition */}
      <SectionTransition direction="down" variant="wave" intensity="subtle" />

      {/* Partners & Credibility */}
      <AnimatedSection
        className="relative overflow-hidden"
        fadeDirection="up"
        delay={0.5}
        enableMouseGradient={false}
        gradientIntensity="strong"
        enableShadows={true}
        enableDepthLayers={true}
        parallax={true}
        enableScrollHide={true}
      >
        <ModernSectionBackground 
          variant="glass" 
          intensity="subtle" 
          enableGrid={false}
          enableDots={true}
          enableAnimatedGradients={true}
        />
        <div className="relative z-10">
          <ErrorBoundary>
            <LazyLoadWrapper>
              <LazyPartnersSection />
            </LazyLoadWrapper>
          </ErrorBoundary>
        </div>
      </AnimatedSection>

      {/* Smooth transition */}
      <SectionTransition direction="down" variant="gradient" intensity="medium" />

      {/* FAQ Section */}
      <ContentAnimatedSection 
        className="relative overflow-hidden"
        fadeDirection="up"
        delay={0.6}
        enableScrollHide={true}
      >
        <ModernSectionBackground 
          variant="secondary" 
          intensity="medium" 
          enableGrid={true}
          enableDots={false}
          enableAnimatedGradients={true}
          enableMeshGradient={true}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-neutral-400 max-w-3xl mx-auto"
            >
              Everything you need to know about working with us and our development process.
            </motion.p>
          </div>
          
          <ErrorBoundary>
            <LazyLoadWrapper>
              <LazyAccordionFAQ />
            </LazyLoadWrapper>
          </ErrorBoundary>
        </div>
      </ContentAnimatedSection>

      {/* Smooth transition */}
      <SectionTransition direction="down" variant="curve" intensity="medium" />

      {/* Conversion Footer */}
      <AnimatedSection
        className="py-20 relative overflow-hidden border-t border-neutral-800/50"
        fadeDirection="up"
        delay={0.7}
        enableMouseGradient={false}
        gradientIntensity="strong"
        enableShadows={true}
        enableDepthLayers={true}
        parallax={true}
        enableScrollHide={true}
      >
        <ModernSectionBackground 
          variant="hero" 
          intensity="strong" 
          enableGrid={true}
          enableDots={true}
          enableAnimatedGradients={true}
          enableMeshGradient={true}
          enableParticles={true}
          enableMouseTracking={true}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to bring your agent to life?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-400 mb-8"
          >
            Join the projects spanning ops, marketing, and wellbeing.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <div className="flex-1 max-w-md">
              <input
                type="email"
                placeholder="Enter your email for updates"
                className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-full text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
              />
            </div>
            <motion.a
              href="https://calendly.com/msohanh/ai-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200 whitespace-nowrap"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-neutral-500"
          >
            Projects spanning ops, marketing, and wellbeing.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* Portfolio End Marker for Navigation Logic */}
      <div id="portfolio-end" className="h-0" />
    </>
  );
}