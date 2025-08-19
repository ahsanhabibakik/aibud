"use client";

import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
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
  ExternalLink, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';
import { 
  getPageNavConfig, 
  getPageSections, 
  getRouteSections,
  MenuSection 
} from "@/lib/menu-data";

interface UnifiedNavBarProps {
  isVisible?: boolean;
}

export default function UnifiedNavBar({ isVisible = true }: UnifiedNavBarProps) {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Get current page configuration
  const currentConfig = useMemo(() => getPageNavConfig(pathname), [pathname]);
  const pageSections = useMemo(() => getPageSections(currentConfig.sections), [currentConfig.sections]);
  const routeSections = useMemo(() => getRouteSections(currentConfig.sections), [currentConfig.sections]);

  // Reset states when pathname changes
  useEffect(() => {
    setActiveSection('');
    setVisible(false);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
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
    if (!visible) return;
    
    const navbarHeight = 120;
    let currentActive = '';
    
    // Only check page sections (not routes)
    for (const section of pageSections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
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
      
      for (const section of pageSections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - navbarHeight);
          
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
        const lastSection = pageSections[pageSections.length - 1];
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
    
    if (currentActive && currentActive !== activeSection) {
      setActiveSection(currentActive);
    }
  }, [visible, activeSection, pageSections]);

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

    if (visible) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      updateActiveSection();
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible, updateActiveSection]);

  // Scroll to section function
  const scrollToSection = useCallback((sectionId: string, href?: string) => {
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
      
      setMobileMenuOpen(false);
      setActiveSection(sectionId);
      
      if ('vibrate' in navigator) {
        navigator.vibrate(50);
      }
    } else {
      setMobileMenuOpen(false);
    }
  }, []);

  // Toggle functions
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
    setDropdownOpen(false);
  }, []);

  const toggleDropdown = useCallback(() => {
    setDropdownOpen(prev => !prev);
  }, []);

  // Hover handlers for dropdown
  const handleDropdownMouseEnter = useCallback(() => {
    setDropdownOpen(true);
  }, []);

  const handleDropdownMouseLeave = useCallback(() => {
    setDropdownOpen(false);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "navbar-container flex fixed top-5 inset-x-0 mx-auto border border-white/20 rounded-full bg-black/95 backdrop-blur-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-5000 pr-2 pl-4 sm:pl-8 py-2 items-center justify-center w-[90%] max-w-7xl min-w-fit"
        )}
        data-navbar="unified"
      >
        {/* Mobile View */}
        <div className="flex lg:hidden items-center justify-between w-full">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
          >
            <span className="font-bold text-sm">AI Buddy</span>
          </Link>

          {/* Active Section Indicator - Mobile */}
          <div className="flex-1 flex justify-center">
            {activeSection && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-2 bg-purple-500/20 px-3 py-1.5 rounded-full border border-purple-500/30"
              >
                {(() => {
                  const section = [...pageSections, ...routeSections].find(s => s.id === activeSection);
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

        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-between w-full">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center space-x-2 text-white hover:text-purple-400 transition-all duration-200"
          >
            <span className="font-bold text-lg">AI Buddy</span>
          </Link>

          {/* Section Navigation - Desktop */}
          <div className="flex items-center space-x-1">
            {/* Page Sections */}
            {pageSections.map((section, index) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
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
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Route Sections */}
            {routeSections.map((section, index) => {
              const Icon = section.icon;
              
              return (
                <motion.button
                  key={section.id}
                  onClick={() => scrollToSection(section.id, section.href)}
                  className="relative flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-xl transition-all duration-300 text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (pageSections.length + index) * 0.05 }}
                >
                  <Icon className="w-4 h-4 text-white/50" />
                  <span>{section.name}</span>
                </motion.button>
              );
            })}

            {/* Dropdown Menu - Desktop */}
            {currentConfig.dropdown?.enabled && (
              <div 
                className="relative" 
                ref={dropdownRef}
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <motion.button
                  onClick={toggleDropdown}
                  className="relative flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-xl transition-all duration-300 text-white/70 hover:text-white hover:bg-white/10 border border-transparent"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentConfig.dropdown.triggerType === 'icon' ? (
                    <Menu className="w-4 h-4 text-white/50" />
                  ) : (
                    <>
                      <span>{currentConfig.dropdown.triggerText}</span>
                      <ChevronDown className={`w-4 h-4 text-white/50 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`} />
                    </>
                  )}
                </motion.button>

                {/* Dropdown Content - Desktop */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-64 bg-black border border-white/20 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden"
                    >
                      <div className="p-2">
                        {currentConfig.dropdown.items.map((item, index) => {
                          const Icon = item.icon;
                          return (
                            <motion.a
                              key={item.href}
                              href={item.href}
                              className="flex items-start space-x-3 px-3 py-3 rounded-xl hover:bg-white/10 transition-colors group"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              onClick={() => setDropdownOpen(false)}
                            >
                              <Icon className="w-5 h-5 text-white/60 group-hover:text-white/80 mt-0.5" />
                              <div>
                                <div className="font-medium text-white group-hover:text-white/90">{item.name}</div>
                                {item.description && (
                                  <div className="text-xs text-white/50 mt-0.5">{item.description}</div>
                                )}
                              </div>
                            </motion.a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Book a Call CTA */}
          <a
            href="https://calendly.com/msohanh/ai-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="border text-sm font-medium relative border-white/20 text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
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
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-3 bg-black border border-white/30 rounded-2xl mx-4 shadow-2xl shadow-purple-500/20 overflow-hidden"
              style={{ 
                zIndex: 6000,
                maxHeight: 'calc(100vh - 120px)' // Prevent overflow
              }}
            >
              <motion.div 
                className="p-4 space-y-2 max-h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {/* Page Sections - Mobile */}
                {pageSections.map((section, index) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id, section.href)}
                      className={`w-full flex items-center space-x-3 px-4 py-3.5 text-left rounded-xl transition-all duration-200 ${
                        isActive 
                          ? 'text-white bg-gradient-to-r from-purple-500/40 to-pink-500/40 border border-purple-500/60'
                          : 'text-white/85 hover:text-white hover:bg-white/10 border border-transparent'
                      }`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className={`w-5 h-5 ${
                        isActive ? 'text-purple-300' : 'text-white/60'
                      }`} />
                      <span className="font-medium">{section.name}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileBadge"
                          className="ml-auto w-2 h-2 bg-purple-400 rounded-full"
                          transition={{ type: "spring", bounce: 0.3 }}
                        />
                      )}
                    </motion.button>
                  );
                })}

                {/* Route Sections - Mobile */}
                {routeSections.map((section, index) => {
                  const Icon = section.icon;
                  
                  return (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id, section.href)}
                      className="w-full flex items-center space-x-3 px-4 py-3.5 text-left rounded-xl transition-all duration-200 text-white/85 hover:text-white hover:bg-white/10 border border-transparent"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (pageSections.length + index) * 0.05 + 0.1 }}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon className="w-5 h-5 text-white/60" />
                      <span className="font-medium">{section.name}</span>
                      <ExternalLink className="ml-auto w-4 h-4 text-white/40" />
                    </motion.button>
                  );
                })}
                
                {/* Dropdown Items - Mobile */}
                {currentConfig.dropdown?.enabled && currentConfig.dropdown.items.map((item, index) => {
                  const Icon = item.icon;
                  
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="w-full flex items-center space-x-3 px-4 py-3.5 text-left rounded-xl transition-all duration-200 text-white/85 hover:text-white hover:bg-white/10 border border-transparent"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (pageSections.length + routeSections.length + index) * 0.05 + 0.1 }}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5 text-white/60" />
                      <span className="font-medium">{item.name}</span>
                      <ExternalLink className="ml-auto w-4 h-4 text-white/40" />
                    </motion.a>
                  );
                })}
                
                {/* Mobile CTA */}
                <motion.div 
                  className="pt-4 mt-4 border-t border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="https://calendly.com/msohanh/ai-discussion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border text-sm font-medium relative border-white/20 text-white px-4 py-3 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
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