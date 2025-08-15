"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";


export const FloatingNav = ({
  navItems,
  className,
  heroThreshold = 0.15,
  ctaText = "Book a Call",
  ctaLink = "https://calendly.com/msohanh/ai-discussion",
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }[];
  className?: string;
  heroThreshold?: number;
  ctaText?: string;
  ctaLink?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current: number) => {
    if (typeof current === "number") {
      if (current > heroThreshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Split nav items for mobile display
  const primaryNavItems = navItems.slice(0, 3); // First 3 items always visible on mobile
  const secondaryNavItems = navItems.slice(3); // Rest in hamburger menu

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
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-4 sm:pl-8 py-2 items-center justify-center",
          className
        )}
      >
        {/* Mobile View: Primary Nav Items (always visible) */}
        <div className="flex md:hidden items-center space-x-1">
          {primaryNavItems.map((navItem, idx) => (
            navItem.link === "/" ? (
              <Link
                key={`primary-link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 px-2 py-1"
                )}
              >
                <span>{navItem.icon}</span>
              </Link>
            ) : (
              <a
                key={`primary-link-${idx}`}
                href={navItem.link}
                onClick={navItem.onClick}
                className={cn(
                  "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 px-2 py-1"
                )}
              >
                <span>{navItem.icon}</span>
              </a>
            )
          ))}
        </div>

        {/* Desktop View: All Nav Items */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((navItem, idx) => (
            navItem.link === "/" ? (
              <Link
                key={`desktop-link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 px-2 py-1"
                )}
              >
                <span className="text-sm">{navItem.name}</span>
              </Link>
            ) : (
              <a
                key={`desktop-link-${idx}`}
                href={navItem.link}
                onClick={navItem.onClick}
                className={cn(
                  "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 px-2 py-1"
                )}
              >
                <span className="text-sm">{navItem.name}</span>
              </a>
            )
          ))}
        </div>

        {/* Mobile View: Hamburger menu for secondary items */}
        {secondaryNavItems.length > 0 && (
          <div className="md:hidden">
            {/* Hamburger menu button */}
            <button
              className="p-1 rounded-md text-white ml-1"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>

            {/* Dropdown menu for secondary items */}
            {mobileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 p-2 bg-black rounded-lg border border-white/[0.2] flex flex-col min-w-[200px]">
                {secondaryNavItems.map((navItem, idx) => (
                  navItem.link === "/" ? (
                    <Link
                      key={`secondary-link-${idx}`}
                      href={navItem.link}
                      className={cn(
                        "relative text-neutral-50 items-center flex space-x-2 hover:text-neutral-300 px-3 py-2 my-1 w-full"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="mr-2">{navItem.icon}</span>
                      <span className="text-sm">{navItem.name}</span>
                    </Link>
                  ) : (
                    <a
                      key={`secondary-link-${idx}`}
                      href={navItem.link}
                      onClick={(e) => {
                        if (navItem.onClick) navItem.onClick(e);
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        "relative text-neutral-50 items-center flex space-x-2 hover:text-neutral-300 px-3 py-2 my-1 w-full"
                      )}
                    >
                      <span className="mr-2">{navItem.icon}</span>
                      <span className="text-sm">{navItem.name}</span>
                    </a>
                  )
                ))}
              </div>
            )}
          </div>
        )}

        {/* CTA Button */}
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="border text-xs sm:text-sm font-medium relative border-white/[0.2] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full ml-auto hover:bg-white/10 transition-colors"
        >
          <span>{ctaText}</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
