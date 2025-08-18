"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Menu, X, Sparkles, Target, Users, Zap, HelpCircle, Phone } from 'lucide-react';

interface PortfolioNavBarProps {
  isVisible?: boolean;
}

const PortfolioNavBarFixed = ({ isVisible = true }: PortfolioNavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);
  
  // DEBUG: For testing - remove after fix
  const [debugInfo, setDebugInfo] = useState({ scrollPos: 0, heroHeight: 0, shouldShow: false });

  // Portfolio section navigation items
  const portfolioSections = useMemo(() => [
    { name: 'Product', id: 'flagship-product', icon: Sparkles },
    { name: 'Portfolio', id: 'product-grid', icon: Target },
    { name: 'Stories', id: 'success-stories', icon: Users },
    { name: 'Integrations', id: 'integrations', icon: Zap },
    { name: 'FAQ', id: 'faq', icon: HelpCircle },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      
      // SIMPLIFIED APPROACH: Use viewport height for hero detection
      // Most hero sections are full viewport height or close to it
      let heroHeight = window.innerHeight;
      
      // Try to find the first content section as a reference point
      const firstSection = document.getElementById('flagship-product');
      if (firstSection) {
        heroHeight = firstSection.offsetTop - 50; // 50px buffer
      }
      
      // Show navbar when scrolled past hero section OR after 500px as fallback
      const shouldShow = scrollPos >= heroHeight - 100 || scrollPos >= 500;
      
      // DEBUG: Update debug info
      setDebugInfo({ scrollPos, heroHeight, shouldShow });
      
      // PERMANENT VISIBILITY: Once shown, stays visible forever
      if (shouldShow && !showNavbar) {
        setShowNavbar(true);
      }
      // NEVER hide once shown - this is the key fix
      
      // Enhanced styling when more scrolled
      setIsScrolled(scrollPos > heroHeight + 200);
      
      // Update active section only when navbar is visible
      if (showNavbar) {
        updateActiveSection();
      }
    };

    const updateActiveSection = () => {
      const navbarHeight = 120; // Fixed navbar height
      let currentActiveSection = '';
      
      // Check each section to see which is most visible
      for (const section of portfolioSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active if its top is within navbar area
          if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
            currentActiveSection = section.id;
            break;
          }
        }
      }
      
      // If no section is directly under navbar, find the closest upcoming one
      if (!currentActiveSection) {
        for (const section of portfolioSections) {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top > 0 && rect.top <= 300) { // Within 300px of top
              currentActiveSection = section.id;
              break;
            }
          }
        }
      }
      
      setActiveSection(currentActiveSection);
    };

    // Initial check
    handleScroll();
    
    // Use RAF for smooth performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [portfolioSections, showNavbar]);

  // Mouse tracking for gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const nav = navRef.current;
    if (nav) {
      nav.addEventListener('mousemove', handleMouseMove, { passive: true });
      return () => nav.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 120;
      const offsetTop = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
      
      setMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <AnimatePresence>
        {showNavbar && (
        <motion.nav
          ref={navRef}
          initial={{ opacity: 0, y: -120, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1
          }}
          exit={{ opacity: 0, y: -120, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            duration: 0.8
          }}
          className="fixed top-6  z-[9999] w-2/3 max-w-6xl min-w-fit"
          style={{
            // CRITICAL: Fixed positioning that works
            position: 'fixed',
            top: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: '66.666667%', // Exactly 2/3 width
            maxWidth: '72rem', // max-w-6xl
            minWidth: 'fit-content'
          }}
        >
          <div className={`
            ${isScrolled 
              ? 'bg-black/95 backdrop-blur-xl border border-white/30 shadow-2xl shadow-purple-500/20' 
              : 'bg-black/85 backdrop-blur-lg border border-white/20 shadow-xl shadow-black/60'
            } 
            rounded-2xl relative overflow-hidden group transition-all duration-300
          `}
          style={{
            boxShadow: isScrolled 
              ? '0 12px 40px rgba(0, 0, 0, 0.9), 0 0 30px rgba(147, 51, 234, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
              : '0 8px 25px rgba(0, 0, 0, 0.7), 0 0 15px rgba(147, 51, 234, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}>
            {/* Mouse gradient effect */}
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
              style={{
                background: `radial-gradient(150px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 70%)`
              }}
            />
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-between px-6 py-4">
              {/* Logo / Back to Home */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/"
                  className="flex items-center space-x-2 text-white hover:text-purple-400 transition-all duration-200 group/logo"
                  aria-label="Back to Home"
                >
                  <motion.div
                    whileHover={{ x: -4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </motion.div>
                  <span className="font-bold text-lg">AI Buddy</span>
                </Link>
              </motion.div>

              {/* Section Navigation - Centered */}
              <div className="flex items-center space-x-2">
                {portfolioSections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`relative flex items-center space-x-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'text-white bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50'
                          : 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent'
                      }`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? 'text-purple-300' : 'text-white/50'
                      }`} />
                      <span>{section.name}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
                          transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Book a Call CTA */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://calendly.com/msohanh/ai-discussion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 relative overflow-hidden"
                >
                  <Phone className="w-4 h-4 z-10 relative" />
                  <span className="z-10 relative">Book a Call</span>
                  <motion.div
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="z-10 relative"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex items-center justify-between px-4 py-3">
              {/* Logo */}
              <Link 
                href="/"
                className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-bold">AI Buddy</span>
              </Link>

              {/* Active Section Indicator */}
              <div className="flex-1 flex justify-center">
                <AnimatePresence mode="wait">
                  {activeSection && (
                    <motion.div
                      key={activeSection}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center space-x-2 bg-purple-500/20 px-3 py-1.5 rounded-full border border-purple-500/30"
                    >
                      {(() => {
                        const section = portfolioSections.find(s => s.id === activeSection);
                        const Icon = section?.icon;
                        return (
                          <>
                            {Icon && <Icon className="w-3.5 h-3.5 text-purple-400" />}
                            <span className="text-sm text-purple-300 font-medium">
                              {section?.name}
                            </span>
                          </>
                        );
                      })()} 
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-purple-400 transition-colors"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="lg:hidden absolute top-full left-0 right-0 mt-3 bg-black/95 backdrop-blur-xl border border-white/30 rounded-2xl mx-4 shadow-2xl shadow-purple-500/20 overflow-hidden"
                >
                  <div className="p-4 space-y-2">
                    {portfolioSections.map((section, index) => {
                      const Icon = section.icon;
                      const isActive = activeSection === section.id;
                      
                      return (
                        <motion.button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                            isActive 
                              ? 'text-white bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50'
                              : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent'
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Icon className={`w-5 h-5 ${
                            isActive ? 'text-purple-400' : 'text-white/60'
                          }`} />
                          <span className="font-medium">{section.name}</span>
                        </motion.button>
                      );
                    })}
                    
                    {/* Mobile CTA */}
                    <motion.div 
                      className="pt-3 mt-3 border-t border-white/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <a
                        href="https://calendly.com/msohanh/ai-discussion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Book a Call</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioNavBarFixed;