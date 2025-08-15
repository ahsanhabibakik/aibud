"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Menu, X, Sparkles, Target, Users, Zap, HelpCircle, Phone } from 'lucide-react';

interface PortfolioNavBarProps {
  isVisible: boolean;
}

const PortfolioNavBar = ({ isVisible }: PortfolioNavBarProps) => {
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
    { name: 'Stories', id: 'success-stories', icon: Users },
    { name: 'Integrations', id: 'integrations', icon: Zap },
    { name: 'FAQ', id: 'faq', icon: HelpCircle },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      
      // Show navbar after hero section ends (around 300px) with fast animation
      setShowNavbar(scrollPos > 250);
      setIsScrolled(scrollPos > 300); // Enhanced styling after more scroll
      
      // Only update active section if navbar is visible (past hero)
      if (scrollPos > 250) {
        // More precise section detection with offset for navbar height
        const sections = portfolioSections.map(section => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const navbarHeight = 120; // Account for navbar + padding
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
          if (closestSection && closestSection.distance < 200) {
            setActiveSection(closestSection.id);
          }
        }
      } else {
        setActiveSection(''); // Clear active section in hero
      }
    };

    // Run once on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 120; // Account for navbar + padding
      const offsetTop = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
      
      // Close mobile menu and give visual feedback
      setMobileMenuOpen(false);
      
      // Temporarily highlight the target section
      setActiveSection(sectionId);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && showNavbar && (
        <motion.nav
          ref={navRef}
          initial={{ opacity: 0, y: -30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-200 w-auto ${
            isScrolled 
              ? 'bg-black/90 backdrop-blur-xl border border-white/20' 
              : 'bg-black/70 backdrop-blur-lg border border-white/10'
          } rounded-full relative overflow-hidden group mx-auto`}
          style={{
            boxShadow: isScrolled 
              ? '0 8px 32px rgba(0, 0, 0, 0.8), 0 0 20px rgba(147, 51, 234, 0.15)' 
              : '0 4px 20px rgba(0, 0, 0, 0.6), 0 0 10px rgba(147, 51, 234, 0.1)',
            minWidth: 'fit-content'
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
          <div className="hidden lg:flex items-center justify-center px-4 xl:px-6 py-3 w-full">
            {/* Logo / Back to Home */}
            <Link 
              href="/"
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-all duration-200 group/logo"
              aria-label="Back to Home"
            >
              <ArrowLeft className="w-4 h-4 group-hover/logo:-translate-x-1 transition-transform" />
              <span className="font-semibold">AI Buddy</span>
            </Link>

            {/* Divider */}
            <div className="w-px h-5 bg-white/30 mx-4" />

            {/* Section Navigation */}
            <div className="flex items-center justify-center space-x-0.5 xl:space-x-1">
              {portfolioSections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`relative flex items-center space-x-1.5 xl:space-x-2 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 group/item ${
                      isActive 
                        ? 'text-purple-300 bg-purple-500/20 border border-purple-500/30'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className={`w-3 xl:w-3.5 h-3 xl:h-3.5 transition-colors ${
                      isActive ? 'text-purple-400' : 'text-white/60 group-hover/item:text-white/80'
                    }`} />
                    <span className="hidden sm:inline">{section.name}</span>
                    <span className="sm:hidden">{section.name.slice(0, 3)}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="w-px h-5 bg-white/30 mx-4" />

            {/* Book a Call CTA */}
            <a
              href="https://calendly.com/msohanh/ai-discussion"
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta flex items-center space-x-1.5 xl:space-x-2 px-3 xl:px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs xl:text-sm font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book a Call</span>
              <ExternalLink className="w-3 h-3 group-hover/cta:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center justify-between px-3 py-2.5 w-full max-w-[90vw]">
            {/* Logo */}
            <Link 
              href="/"
              className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-semibold text-sm">AI Buddy</span>
            </Link>

            {/* Active Section Indicator */}
            <div className="flex items-center space-x-2 flex-1 justify-center">
              {activeSection && (
                <div className="flex items-center space-x-1 bg-purple-500/20 px-2 py-1 rounded-full border border-purple-500/30">
                  {(() => {
                    const section = portfolioSections.find(s => s.id === activeSection);
                    const Icon = section?.icon;
                    return (
                      <>
                        {Icon && <Icon className="w-3 h-3 text-purple-400" />}
                        <span className="text-xs text-purple-300 font-medium">
                          {section?.name}
                        </span>
                      </>
                    );
                  })()} 
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-3 mx-3 shadow-2xl shadow-purple-500/10"
              >
                <div className="space-y-1.5">
                  {portfolioSections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-3 py-2.5 text-left rounded-lg transition-all duration-200 ${
                          isActive 
                            ? 'text-purple-300 bg-purple-500/20 border border-purple-500/30'
                            : 'text-white/80 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${
                          isActive ? 'text-purple-400' : 'text-white/60'
                        }`} />
                        <span className="font-medium">{section.name}</span>
                      </button>
                    );
                  })}
                  
                  {/* Mobile CTA */}
                  <div className="pt-2 mt-2 border-t border-white/20">
                    <a
                      href="https://calendly.com/msohanh/ai-discussion"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:scale-105 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Phone className="w-4 h-4" />
                      <span>Book a Call</span>
                    </a>
                  </div>
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