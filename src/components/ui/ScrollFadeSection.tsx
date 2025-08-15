"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ScrollFadeSectionProps {
  children: React.ReactNode;
  className?: string;
  startOffset?: number; // Start fading when section top enters at X% of viewport height
  endOffset?: number; // Finish fading when section bottom reaches X% of viewport height  
  minScale?: number;
  maxOffsetY?: number;
  minOpacity?: number;
  enableMobile?: boolean;
}

export const ScrollFadeSection: React.FC<ScrollFadeSectionProps> = ({
  children,
  className = "",
  startOffset = 0.15, // Start at 15% viewport height
  endOffset = 0.85, // End at 85% viewport height
  minScale = 0.95,
  maxOffsetY = -60,
  minOpacity = 0,
  enableMobile = true
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Apply mobile constraints if needed
  const finalMinScale = isMobile ? Math.max(0.98, minScale) : minScale;
  const finalMaxOffsetY = isMobile ? Math.max(-24, maxOffsetY) : maxOffsetY;
  const finalMinOpacity = isMobile ? Math.max(0.8, minOpacity) : minOpacity;

  // Calculate scroll-based transforms similar to hero section
  const opacity = useTransform(scrollY, (value) => {
    if (!ref.current) return 1;
    
    const element = ref.current;
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    // Start fading when section enters viewport at startOffset
    const fadeStart = elementTop - (viewportHeight * (1 - startOffset));
    // Complete fade when section reaches endOffset
    const fadeEnd = elementTop + (elementHeight * endOffset);
    
    if (value < fadeStart) return 1;
    if (value > fadeEnd) return finalMinOpacity;
    
    const progress = (value - fadeStart) / (fadeEnd - fadeStart);
    return Math.max(finalMinOpacity, 1 - progress);
  });

  const scale = useTransform(scrollY, (value) => {
    if (!ref.current) return 1;
    
    const element = ref.current;
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    const fadeStart = elementTop - (viewportHeight * (1 - startOffset));
    const fadeEnd = elementTop + (elementHeight * endOffset);
    
    if (value < fadeStart) return 1;
    if (value > fadeEnd) return finalMinScale;
    
    const progress = (value - fadeStart) / (fadeEnd - fadeStart);
    return Math.max(finalMinScale, 1 - (progress * (1 - finalMinScale)));
  });

  const y = useTransform(scrollY, (value) => {
    if (!ref.current) return 0;
    
    const element = ref.current;
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const viewportHeight = window.innerHeight;
    
    const fadeStart = elementTop - (viewportHeight * (1 - startOffset));
    const fadeEnd = elementTop + (elementHeight * endOffset);
    
    if (value < fadeStart) return 0;
    if (value > fadeEnd) return finalMaxOffsetY;
    
    const progress = (value - fadeStart) / (fadeEnd - fadeStart);
    return progress * finalMaxOffsetY;
  });

  return (
    <motion.div
      ref={ref}
      style={shouldReduceMotion ? {} : { opacity, scale, y }}
      className={className}
      // Accessibility: respect reduced motion preference
      initial={false}
      transition={{ type: "tween", ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Mobile-optimized wrapper with toned-down values
export const MobileScrollFadeSection: React.FC<ScrollFadeSectionProps> = (props) => {
  return (
    <ScrollFadeSection
      {...props}
      minScale={Math.max(0.98, props.minScale || 0.95)} // Clamp scale for mobile
      maxOffsetY={Math.max(-24, props.maxOffsetY || -60)} // Reduce Y offset for mobile
      minOpacity={Math.max(0.8, props.minOpacity || 0)} // Maintain readability
    />
  );
};