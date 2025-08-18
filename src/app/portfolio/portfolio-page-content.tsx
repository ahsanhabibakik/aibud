"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioProducts, caseStudies } from "@/lib/portfolio-data";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { LazyLoadWrapper } from "@/components/ui/lazy-components";
import dynamic from "next/dynamic";

// Lazy load heavy sections with optimized loading
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

// const LazySuccessStoriesSection = dynamic(
//   () => import("@/components/sections/Portfolio/SuccessStoriesSection"),
//   { 
//     loading: () => (
//       <div className="flex items-center justify-center py-20">
//         <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
//       </div>
//     ),
//     ssr: false 
//   }
// );

// const LazyIntegrationSection = dynamic(
//   () => import("@/components/sections/Home/IntegrationSection").then(mod => ({ default: mod.IntegrationSection })),
//   { 
//     loading: () => (
//       <div className="flex items-center justify-center py-20">
//         <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
//       </div>
//     ),
//     ssr: false 
//   }
// );

// const LazyPartnersSection = dynamic(
//   () => import("@/components/sections/Home/PartnersSection").then(mod => ({ default: mod.PartnersSection })),
//   { 
//     loading: () => (
//       <div className="flex items-center justify-center py-20">
//         <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
//       </div>
//     ),
//     ssr: false 
//   }
// );

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

// Optimized animation variants
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const fadeRightVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export default function PortfolioPageContent() {
  const [isStickyNavActive, setIsStickyNavActive] = useState(false);
  const [isPortfolioNavVisible, setIsPortfolioNavVisible] = useState(true);

  // Simplified navbar visibility logic - let the navbar handle its own scroll detection
  useEffect(() => {
    // The optimized navbar handles its own visibility based on scroll position
    // We can always keep it visible and let it manage itself
    setIsPortfolioNavVisible(true);
  }, []);

  return (
    <>
      {/* Flagship Spotlight - Agent GG */}
      <motion.section 
        id="flagship-product"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.2 }}
        variants={staggerContainerVariants}
        className="py-20 bg-gradient-to-b from-black to-neutral-900 relative overflow-hidden"
      >
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-pink-900/5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <motion.h2 
              variants={fadeUpVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Flagship Product
              </span>
            </motion.h2>
            <motion.p 
              variants={fadeUpVariants}
              className="text-xl text-neutral-400"
            >
              Our most advanced AI productivity copilot
            </motion.p>
          </div>

          <motion.div 
            variants={fadeUpVariants}
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

                <motion.a
                  href="/agentgg"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full hover:scale-105 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Learn about Agent GG</span>
                </motion.a>
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
      </motion.section>

      {/* Product Grid Section */}
      <motion.section 
        id="product-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
        variants={fadeUpVariants}
        className="py-20 bg-neutral-900 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrorBoundary>
            <LazyLoadWrapper>
              <LazyFilterableProductGrid 
                products={portfolioProducts}
              />
            </LazyLoadWrapper>
          </ErrorBoundary>
        </div>
      </motion.section>

      {/* Success Stories Section */}
      {/* <motion.section 
        id="success-stories"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
        variants={fadeUpVariants}
        className="relative"
      >
        <ErrorBoundary>
          <LazyLoadWrapper>
            <LazySuccessStoriesSection />
          </LazyLoadWrapper>
        </ErrorBoundary>
      </motion.section> */}

      {/* Integrations Wall */}
      {/* <motion.section
        id="integrations"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
        variants={fadeRightVariants}
        className="relative bg-neutral-900"
      >
        <ErrorBoundary>
          <LazyLoadWrapper>
            <LazyIntegrationSection />
          </LazyLoadWrapper>
        </ErrorBoundary>
      </motion.section> */}

      {/* Partners & Credibility */}
      {/* <motion.section
        id="partners"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
        variants={fadeUpVariants}
        className="py-20 relative bg-black"
      >
        <ErrorBoundary>
          <LazyLoadWrapper>
            <LazyPartnersSection />
          </LazyLoadWrapper>
        </ErrorBoundary>
      </motion.section> */}

      {/* FAQ Section */}
      <motion.section 
        id="faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
        variants={staggerContainerVariants}
        className="py-20 bg-black relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              variants={fadeUpVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </motion.h2>
            <motion.p 
              variants={fadeUpVariants}
              className="text-xl text-neutral-400 max-w-3xl mx-auto"
            >
              Everything you need to know about working with us and our development process.
            </motion.p>
          </div>
          
          <motion.div variants={fadeUpVariants}>
            <ErrorBoundary>
              <LazyLoadWrapper>
                <LazyAccordionFAQ />
              </LazyLoadWrapper>
            </ErrorBoundary>
          </motion.div>
        </div>
      </motion.section>

      {/* Conversion Footer */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px -10% 0px", amount: 0.1 }}
        variants={staggerContainerVariants}
        className="py-20 bg-gradient-to-b from-black to-neutral-900 border-t border-neutral-800 relative"
      >
        {/* Subtle background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/5 via-transparent to-pink-900/5" />
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            variants={fadeUpVariants}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Ready to bring your agent to life?
          </motion.h2>
          <motion.p 
            variants={fadeUpVariants}
            className="text-xl text-neutral-400 mb-8"
          >
            Join the projects spanning ops, marketing, and wellbeing.
          </motion.p>
          
          <motion.div 
            variants={fadeUpVariants}
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
            variants={fadeUpVariants}
            className="text-sm text-neutral-500"
          >
            Projects spanning ops, marketing, and wellbeing.
          </motion.p>
        </div>
      </motion.section>

      {/* Portfolio End Marker for Navigation Logic */}
      <div id="portfolio-end" className="h-0" />
    </>
  );
}