"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Menu, X, Sparkles, Target, Users, Zap, HelpCircle, Phone } from 'lucide-react';

interface PortfolioNavBarProps {
  isVisible?: boolean;
}

const PortfolioNavBar = ({ isVisible = true }: PortfolioNavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false); // Internal visibility based on scroll
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef<HTMLElement>(null);

  // Portfolio section navigation items
  const portfolioSections = useMemo(() => [
    { name: 'Product', id: 'flagship-product', icon: Sparkles },
    { name: 'Portfolio', id: 'product-grid', icon: Target },
    // { name: 'Stories', id: 'success-stories', icon: Users },
    // { name: 'Integrations', id: 'integrations', icon: Zap },
    { name: 'FAQ', id: 'faq', icon: HelpCircle },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const heroHeight = window.innerHeight * 0.8; // Assume hero is ~80vh
      
      // Show navbar after hero section ends with dramatic entrance
      const shouldShow = scrollPos > heroHeight;
      setShowNavbar(shouldShow);
      setIsScrolled(scrollPos > heroHeight + 100); // Enhanced styling after more scroll
      
      // Only update active section if navbar is visible (past hero)
      if (shouldShow) {
        // More precise section detection with offset for navbar height
        const sections = portfolioSections.map(section => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const navbarHeight = 100; // Account for navbar + padding
            return {
              id: section.id,
              inView: rect.top <= navbarHeight && rect.bottom >= navbarHeight,
              distance: Math.abs(rect.top - navbarHeight) // Distance from navbar
            };
          }
          return { id: section.id, inView: false, distance: Infinity };
        });

        // Find the section closest to the navbar position
        const activeSection = sections
          .filter(section => section.inView)
          .sort((a, b) => a.distance - b.distance)[0];
          
        if (activeSection) {
          setActiveSection(activeSection.id);
        } else {
          // If no section is directly under navbar, find the closest one
          const closestSection = sections
            .sort((a, b) => a.distance - b.distance)[0];
          if (closestSection && closestSection.distance < 300) {
            setActiveSection(closestSection.id);
          }
        }
      } else {
        setActiveSection(''); // Clear active section in hero
      }
    };

    // Run once on mount
    handleScroll();
    
    // Throttle scroll events for better performance
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
  }, [portfolioSections]);

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
      nav.addEventListener('mousemove', handleMouseMove);
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
      const navbarHeight = 100; // Account for navbar + padding
      const offsetTop = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
      
      // Close mobile menu and give visual feedback
      setMobileMenuOpen(false);
      
      // Temporarily highlight the target section
      setActiveSection(sectionId);
      
      // Add a subtle bounce animation to the navbar
      if (navRef.current) {
        navRef.current.style.transform = 'translateX(-50%) scale(1.02)';
        setTimeout(() => {
          if (navRef.current) {
            navRef.current.style.transform = 'translateX(-50%) scale(1)';
          }
        }, 200);
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && showNavbar && (
        <motion.nav
          ref={navRef}
          initial={{ opacity: 0, y: -100, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              type: "spring",
              damping: 15,
              stiffness: 200,
              mass: 1,
              duration: 0.6
            }
          }}
          exit={{ opacity: 0, y: -100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-100 transition-all duration-300 w-2/3 max-w-5xl min-w-fit ${
            isScrolled 
              ? 'bg-black/95 backdrop-blur-xl border border-white/30 shadow-2xl shadow-purple-500/20' 
              : 'bg-black/80 backdrop-blur-lg border border-white/15 shadow-xl shadow-black/50'
          } rounded-full relative overflow-hidden group`}
          style={{
            boxShadow: isScrolled 
              ? '0 12px 40px rgba(0, 0, 0, 0.9), 0 0 30px rgba(147, 51, 234, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
              : '0 8px 25px rgba(0, 0, 0, 0.7), 0 0 15px rgba(147, 51, 234, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            minWidth: 'fit-content',
            maxWidth: '90vw'
          }}
        >
          {/* Mouse gradient effect */}
          <div 
            className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
            style={{
              background: `radial-gradient(120px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 70%)`
            }}
          />
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between px-6 xl:px-8 py-3 w-full">
            {/* Logo / Back to Home */}
            <Link 
              href="/"
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-all duration-200 group/logo flex-shrink-0"
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-4 h-4 group-hover/logo:-translate-x-1 transition-transform" />
              <span className="font-semibold text-sm xl:text-base">AI Buddy</span>
            </Link>

            {/* Section Navigation - Center */}
            <div className="flex items-center justify-center space-x-1 xl:space-x-2 flex-1 px-4">
              {portfolioSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`relative flex items-center space-x-1.5 xl:space-x-2 px-3 xl:px-4 py-2.5 text-sm xl:text-base font-medium rounded-full transition-all duration-300 group/item ${
                      isActive 
                        ? 'text-purple-300 bg-purple-500/25 border border-purple-500/40 shadow-lg shadow-purple-500/20'
                        : 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105'
                    }`}
                  >
                    <Icon className={`w-4 xl:w-4 h-4 xl:h-4 transition-colors ${
                      isActive ? 'text-purple-400' : 'text-white/60 group-hover/item:text-white/80'
                    }`} />
                    <span className="hidden sm:inline">{section.name}</span>
                    <span className="sm:hidden">{section.name.slice(0, 3)}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/40"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Book a Call CTA */}
            <a
              href="https://calendly.com/msohanh/ai-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta flex items-center space-x-2 xl:space-x-2 px-4 xl:px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm xl:text-base font-semibold rounded-full hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex-shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Book a Call</span>
              <ExternalLink className="w-3 h-3 group-hover/cta:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between px-4 py-3 w-full">
            {/* Logo */}
            <Link 
              href="/"
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold text-sm">AI Buddy</span>
            </Link>

            {/* Active Section Indicator */}
            <div className="flex items-center space-x-2 flex-1 justify-center px-2">
              {activeSection && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center space-x-1.5 bg-purple-500/25 px-3 py-1.5 rounded-full border border-purple-500/40"
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
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-all duration-200 flex-shrink-0 ${
                mobileMenuOpen 
                  ? 'text-purple-400 bg-purple-500/20' 
                  : 'text-white hover:text-purple-400 hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ 
                  opacity: 1, 
                  height: 'auto', 
                  y: 0,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                exit={{ 
                  opacity: 0, 
                  height: 0, 
                  y: -10,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn"
                  }
                }}
                className="lg:hidden absolute top-full left-0 right-0 mt-3 bg-black/95 backdrop-blur-xl border border-white/25 rounded-2xl mx-4 shadow-2xl shadow-purple-500/15 overflow-hidden"
              >
                <div className="p-4 space-y-2">
                  {portfolioSections.map((section, index) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <motion.button
                        key={section.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.05 }
                        }}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-xl transition-all duration-200 ${
                          isActive 
                            ? 'text-purple-300 bg-purple-500/25 border border-purple-500/40 shadow-lg shadow-purple-500/20'
                            : 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-[0.98]'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${
                          isActive ? 'text-purple-400' : 'text-white/60'
                        }`} />
                        <span className="font-medium">{section.name}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeMobileSection"
                            className="ml-auto w-2 h-2 bg-purple-500 rounded-full"
                          />
                        )}
                      </motion.button>
                    );
                  })}
                  
                  {/* Mobile CTA */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { delay: portfolioSections.length * 0.05 + 0.1 }
                    }}
                    className="pt-3 mt-3 border-t border-white/20"
                  >
                    <a
                      href="https://calendly.com/msohanh/ai-discussion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg shadow-purple-500/25"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Book a Call</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default PortfolioNavBar;