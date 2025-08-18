"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ArrowLeft, 
  ExternalLink, 
  Menu, 
  X, 
  Home, 
  Users, 
  Sparkles, 
  Settings, 
  Handshake, 
  Plug, 
  Target, 
  Phone,
  BookOpen,
  Bot,
  Briefcase,
  Award,
  Zap,
  TrendingUp,
  Shield,
  Building
} from 'lucide-react';

interface MainNavBarProps {
  isVisible?: boolean;
}

interface MainSection {
  name: string;
  id: string;
  icon: React.ComponentType<any>;
  href?: string;
}

interface PageNavConfig {
  sections: MainSection[];
  showAfterScroll: number;
}

export default function MainNavBar({ isVisible = true }: MainNavBarProps) {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Page-specific navigation configurations
  const pageNavConfigs: Record<string, PageNavConfig> = useMemo(() => ({
    '/': {
      sections: [
        { name: 'Home', id: 'hero', icon: Home },
        { name: 'Audience', id: 'audience', icon: Users },
        { name: 'Product', id: 'product', icon: Sparkles },
        { name: 'Services', id: 'services', icon: Settings },
        { name: 'Partners', id: 'partners', icon: Handshake },
        { name: 'Integrations', id: 'integrations', icon: Plug },
        { name: 'Process', id: 'process', icon: Target },
        { name: 'Agent', id: 'agent', icon: Bot, href: '/agent' },
        { name: 'CXO', id: 'fractionalcxo', icon: Phone, href: '/fractionalcxo' },
        { name: 'Portfolio', id: 'portfolio', icon: Briefcase, href: '/portfolio' },
        { name: 'Blog', id: 'blog', icon: BookOpen, href: '/blog' },
      ],
      showAfterScroll: 0.03
    },
    '/agent': {
      sections: [
        { name: 'Home', id: 'home', icon: Home, href: '/' },
        { name: 'Benefits', id: 'benefits', icon: Award },
        { name: 'Use Cases', id: 'use-cases', icon: Target },
        { name: 'Inside', id: 'inside', icon: Settings },
        { name: 'Process', id: 'process', icon: Zap },
        { name: 'Metrics', id: 'metrics', icon: TrendingUp },
        { name: 'Principles', id: 'principles', icon: Shield },
        { name: 'CXO', id: 'fractionalcxo', icon: Phone, href: '/fractionalcxo' },
        { name: 'Portfolio', id: 'portfolio', icon: Briefcase, href: '/portfolio' },
      ],
      showAfterScroll: 0.05
    },
    '/fractionalcxo': {
      sections: [
        { name: 'Home', id: 'home', icon: Home, href: '/' },
        { name: 'Audience', id: 'audience', icon: Users },
        { name: 'Problems', id: 'problems', icon: Target },
        { name: 'Deliverables', id: 'deliverables', icon: Settings },
        { name: 'Process', id: 'process', icon: Zap },
        { name: 'Roles', id: 'roles', icon: Building },
        { name: 'Proof', id: 'proof', icon: Award },
        { name: 'Agent', id: 'agent', icon: Bot, href: '/agent' },
        { name: 'Portfolio', id: 'portfolio', icon: Briefcase, href: '/portfolio' },
      ],
      showAfterScroll: 0.05
    },
    '/portfolio': {
      sections: [
        { name: 'Home', id: 'home', icon: Home, href: '/' },
        { name: 'Agent', id: 'agent', icon: Bot, href: '/agent' },
        { name: 'CXO', id: 'fractionalcxo', icon: Phone, href: '/fractionalcxo' },
        { name: 'Blog', id: 'blog', icon: BookOpen, href: '/blog' },
      ],
      showAfterScroll: 0.05
    },
  }), []);

  // Get current page configuration
  const currentConfig = pageNavConfigs[pathname] || pageNavConfigs['/'];
  const currentSections = currentConfig.sections;

  // Reset active section when pathname changes
  useEffect(() => {
    setActiveSection('');
    setVisible(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Show navbar after scrolling past hero - using page-specific scroll trigger
  useMotionValueEvent(scrollYProgress, "change", (current: number) => {
    if (typeof current === "number") {
      if (current > currentConfig.showAfterScroll) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  // ACTIVE SECTION DETECTION ON SCROLL
  const updateActiveSection = useCallback(() => {
    if (!visible) return; // Only update when navbar is visible
    
    const navbarHeight = 120;
    let currentActive = '';
    
    // Find which section is currently in view
    for (const section of currentSections) {
      if (section.href) continue; // Skip external links
      
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        // Section is active if it's in the viewport area under the navbar
        if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
          currentActive = section.id;
          break;
        }
      }
    }
    
    // If no section is directly under navbar, find the closest one
    if (!currentActive) {
      let closestSection = '';
      let closestDistance = Infinity;
      
      for (const section of currentSections) {
        if (section.href) continue; // Skip external links
        
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - navbarHeight);
          
          // Prefer sections that are coming up (positive top) over those that have passed
          if (rect.top > 0 && distance < closestDistance && distance < 400) {
            closestDistance = distance;
            closestSection = section.id;
          }
        }
      }
      
      if (closestSection) {
        currentActive = closestSection;
      } else {
        // If all sections have passed, activate the last one
        const localSections = currentSections.filter(s => !s.href);
        const lastSection = localSections[localSections.length - 1];
        if (lastSection) {
          const lastElement = document.getElementById(lastSection.id);
          if (lastElement) {
            const rect = lastElement.getBoundingClientRect();
            if (rect.bottom < navbarHeight) {
              currentActive = lastSection.id;
            }
          }
        }
      }
    }
    
    // Only update if changed to avoid unnecessary re-renders
    if (currentActive && currentActive !== activeSection) {
      setActiveSection(currentActive);
    }
  }, [visible, activeSection, currentSections]);

  // Optimized scroll listener with RAF throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Only add listener when navbar is visible
    if (visible) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Initial check
      updateActiveSection();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible, updateActiveSection]);

  const scrollToSection = useCallback((sectionId: string, href?: string) => {
    // If href is provided, navigate to that URL
    if (href) {
      window.location.href = href;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 120;
      const offsetTop = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth'
      });
      
      // Close mobile menu immediately for better UX
      setMobileMenuOpen(false);
      
      // Set active immediately for visual feedback
      setActiveSection(sectionId);
      
      // Add subtle haptic feedback on mobile
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
    } else {
      // If section doesn't exist on this page, try to find the closest match
      console.warn(`Section ${sectionId} not found on this page`);
      
      // For external navigation, just close menu
      setMobileMenuOpen(false);
    }
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const navbar = document.querySelector('[data-navbar="main"]');
      
      if (navbar && !navbar.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    // Delay to prevent immediate closing
    const timeoutId = setTimeout(() => {
      document.addEventListener('click', handleClickOutside, { passive: true });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "navbar-container flex fixed top-7 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/95 backdrop-blur-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 sm:pl-8 py-2 items-center justify-center w-2/3 max-w-7xl min-w-fit"
        )}
        style={{
          width: '75%', // Slightly wider for main nav
          maxWidth: '80rem',
          minWidth: 'fit-content'
        }}
        data-navbar="main"
      >
        {/* Mobile View: Logo and menu */}
        <div className="flex lg:hidden items-center justify-between w-full">
          {/* Logo / AI Buddy */}
          <Link 
            href="/"
            className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
          >
            <span className="font-bold text-sm">AI Buddy</span>
          </Link>

          {/* Active Section Indicator */}
          <div className="flex-1 flex justify-center">
            {activeSection && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-2 bg-purple-500/20 px-3 py-1.5 rounded-full border border-purple-500/30"
              >
                {(() => {
                  const section = currentSections.find(s => s.id === activeSection);
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
            onClick={toggleMobileMenu}
            className="p-2 text-white hover:text-purple-400 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Desktop View: Full navigation */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Logo / AI Buddy */}
          <Link 
            href="/"
            className="flex items-center space-x-2 text-white hover:text-purple-400 transition-all duration-200 group/logo"
            aria-label="AI Buddy Home"
          >
            <span className="font-bold text-lg">AI Buddy</span>
          </Link>

          {/* Section Navigation - Centered */}
          <div className="flex items-center space-x-1">
            {currentSections.map((section, index) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id && !section.href;
              
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id, section.href)}
                  className={`relative flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-500/50'
                      : 'text-white/70 hover:text-white hover:bg-white/10 border border-transparent'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Icon className={`w-4 h-4 transition-all duration-300 ${
                    isActive ? 'text-purple-300' : 'text-white/50'
                  }`} />
                  <span>{section.name}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeMainIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Book a Call CTA */}
          <a
            href="https://calendly.com/msohanh/ai-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full ml-auto hover:bg-white/10 transition-colors"
          >
            <span>Book a Call</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </a>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence mode="wait">
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 0.8,
                }
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.95, 
                y: -10,
                transition: { duration: 0.15 }
              }}
              className="lg:hidden absolute top-full left-0 right-0 mt-3 bg-black border border-white/30 rounded-2xl mx-4 shadow-2xl shadow-purple-500/20 overflow-hidden"
              style={{ zIndex: 6000 }}
            >
              <motion.div 
                className="p-4 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {currentSections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id && !section.href;
                  
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id, section.href)}
                      className={`w-full flex items-center space-x-3 px-4 py-3.5 text-left rounded-xl transition-all duration-200 group/mobile ${
                        isActive 
                          ? 'text-white bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-purple-500/60 shadow-lg shadow-purple-500/25'
                          : 'text-white/85 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20'
                      }`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { 
                          delay: index * 0.05 + 0.1,
                          type: "spring",
                          stiffness: 400
                        }
                      }}
                      whileHover={{ 
                        x: 6,
                        transition: { duration: 0.15 }
                      }}
                      whileTap={{ 
                        scale: 0.98,
                        transition: { duration: 0.1 }
                      }}
                    >
                      <Icon className={`w-5 h-5 transition-all duration-200 ${
                        isActive 
                          ? 'text-purple-300' 
                          : 'text-white/60 group-hover/mobile:text-white/80'
                      }`} />
                      <span className="font-medium">{section.name}</span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileMainBadge"
                          className="ml-auto w-2 h-2 bg-purple-400 rounded-full"
                          transition={{ type: "spring", bounce: 0.3 }}
                        />
                      )}
                      
                      {/* External link indicator */}
                      {section.href && (
                        <motion.div className="ml-auto">
                          <ExternalLink className="w-4 h-4 text-white/40" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
                
                {/* Mobile CTA */}
                <motion.div 
                  className="pt-4 mt-4 border-t border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: currentSections.length * 0.05 + 0.2,
                      type: "spring",
                      stiffness: 400
                    }
                  }}
                >
                  <a
                    href="https://calendly.com/msohanh/ai-discussion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border text-sm font-medium relative border-white/[0.2] text-white px-4 py-3 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>Book a Call</span>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}