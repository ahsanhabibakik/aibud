"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLElement | null>(null);
  const [svgHeight, setSvgHeight] = useState(0);
  const [manualScrollProgress, setManualScrollProgress] = useState(0);
  const [gradientY1, setGradientY1] = useState(50);
  const [gradientY2, setGradientY2] = useState(50);

  // Use regular scroll for document scrolling
  const { scrollYProgress: docScrollProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Find and track the scrollable element inside our content
  useEffect(() => {
    if (contentRef.current) {
      // Look for scrollable elements inside our content
      const scrollElement = contentRef.current.querySelector('.overflow-y-auto') as HTMLElement;
      if (scrollElement) {
        scrollContainerRef.current = scrollElement;

        // Setup scroll listener for the inner container
        const trackInnerScroll = () => {
          if (scrollElement) {
            const maxScroll = scrollElement.scrollHeight - scrollElement.clientHeight;
            if (maxScroll > 0) {
              const progress = scrollElement.scrollTop / maxScroll;
              setManualScrollProgress(progress);

              // Update gradient positions based on scroll
              const y1 = progress * (svgHeight - 50) + 50;
              const y2 = progress * (svgHeight - 250) + 50;
              setGradientY1(y1);
              setGradientY2(y2);
            }
          }
        };

        // Initial check
        trackInnerScroll();

        // Add listener
        scrollElement.addEventListener('scroll', trackInnerScroll);

        return () => {
          scrollElement.removeEventListener('scroll', trackInnerScroll);
        };
      }
    }
  }, [children, svgHeight]);

  // Combine both scroll progress values - use inner scroll if available, otherwise doc scroll
  const scrollProgress = scrollContainerRef.current ? manualScrollProgress : docScrollProgress.get();

  // Update gradient positions based on document scroll
  useEffect(() => {
    if (!scrollContainerRef.current) {
      const y1 = scrollProgress * (svgHeight - 50) + 50;
      const y2 = scrollProgress * (svgHeight - 250) + 50;
      setGradientY1(y1);
      setGradientY2(y2);
    }
  }, [scrollProgress, svgHeight]);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setSvgHeight(contentRef.current.offsetHeight);
      }
    };

    // Initial height calculation
    updateHeight();

    // Force height recalculation when content changes
    const observer = new ResizeObserver(updateHeight);
    const content = contentRef.current;

    if (content) {
      observer.observe(content);
    }

    const handleScroll = () => {
      // Only needed for document scroll
      if (!scrollContainerRef.current && ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const isVisible = (rect.top < viewportHeight && rect.bottom > 0);
        if (isVisible) {
          // Force a re-render by updating the svgHeight slightly
          setSvgHeight(prev => prev + 0.1);
          setTimeout(() => setSvgHeight(prev => prev - 0.1), 10);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (content) {
        observer.unobserve(content);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [children]);

  const pathDefinition = `M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`;

  return (
    <motion.div
      ref={ref}
      className={cn("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute top-3 -left-4 md:-left-20">
        <motion.div
          key="circle-container"
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollProgress > 0
                ? "none"
                : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
          className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            key="circle-inner"
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor: scrollProgress > 0 ? "white" : "#10b981",
              borderColor: scrollProgress > 0 ? "white" : "#059669",
            }}
            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            key={`path-bg-${Math.floor(svgHeight)}`}
            d={pathDefinition}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          />
          <motion.path
            key={`path-gradient-${Math.floor(svgHeight)}`}
            d={pathDefinition}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          />
          <defs>
            <linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={gradientY1}
              y2={gradientY2}
            >
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef} className="w-full">{children}</div>
    </motion.div>
  );
};
