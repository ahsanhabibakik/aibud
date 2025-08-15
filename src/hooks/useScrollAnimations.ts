"use client";
import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useState, useEffect, useCallback, useMemo } from "react";

// Highly optimized mouse tracking for instant response
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct state update for instant response - no throttling
      setMousePosition({
        x: Math.round(((e.clientX - window.innerWidth / 2) / window.innerWidth) * 100) / 100,
        y: Math.round(((e.clientY - window.innerHeight / 2) / window.innerHeight) * 100) / 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};

// Enhanced section-based scroll animations with multiple scroll ranges
export const useSectionScrollAnimation = (sectionIndex: number = 0) => {
  const { scrollY } = useScroll();
  
  // Calculate section-specific scroll ranges
  const sectionHeight = 800; // Approximate section height
  const start = sectionIndex * sectionHeight;
  const peak = start + sectionHeight * 0.5; // Peak visibility
  const end = start + sectionHeight * 1.2; // Start hiding
  const fadeEnd = start + sectionHeight * 1.8; // Fully hidden
  
  const opacity = useTransform(scrollY, 
    [start, peak, end, fadeEnd], 
    [0, 1, 1, 0]
  );
  const scale = useTransform(scrollY, 
    [start, peak, end, fadeEnd], 
    [0.95, 1, 1, 0.9]
  );
  const y = useTransform(scrollY, 
    [start, peak, end, fadeEnd], 
    [30, 0, 0, -80]
  );
  
  return { opacity, scale, y };
};

// Optimized scroll-based hide animation for all sections
export const useScrollHideAnimation = (elementRef: React.RefObject<HTMLElement | null>) => {
  const { scrollY } = useScroll();
  const [animationValues, setAnimationValues] = useState({ opacity: 1, scale: 1, y: 0 });
  
  useEffect(() => {
    if (!elementRef.current) {
      return;
    }
    
    // Get element position dynamically
    const elementTop = elementRef.current.offsetTop;
    const elementHeight = elementRef.current.offsetHeight;
    
    const start = elementTop - window.innerHeight * 0.2; // Start fading when 20% from top
    const end = elementTop + elementHeight * 0.8; // Fully hidden when 80% scrolled past
    
    const unsubscribe = scrollY.on("change", (latest) => {
      const progress = Math.max(0, Math.min(1, (latest - start) / (end - start)));
      setAnimationValues({
        opacity: 1 - progress,
        scale: 1 - progress * 0.08,
        y: -progress * 60
      });
    });
    
    return unsubscribe;
  }, [scrollY, elementRef]);
  
  return animationValues;
};

// Optimized parallax for elements
export const useParallaxTransform = (speed: number = 0.5) => {
  const { scrollY } = useScroll();
  
  return useTransform(scrollY, (value) => value * speed);
};

// Section reveal animation
export const useSectionReveal = (threshold: number = 100) => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > threshold && !isVisible) {
        setIsVisible(true);
      }
    });
    
    return unsubscribe;
  }, [scrollY, threshold, isVisible]);
  
  return isVisible;
};

// Mouse-responsive gradient calculations
export const useMouseGradient = () => {
  const mousePosition = useMousePosition();
  
  return useMemo(() => {
    const x = (mousePosition.x + 1) * 50; // Convert to 0-100 range
    const y = (mousePosition.y + 1) * 50; // Convert to 0-100 range
    
    return {
      spotlight: `radial-gradient(600px circle at ${x}% ${y}%, rgba(147, 51, 234, 0.15), transparent 40%)`,
      ambient: `radial-gradient(800px circle at ${x}% ${y}%, rgba(236, 72, 153, 0.08), transparent 60%)`,
      interactive: `linear-gradient(${mousePosition.x * 180}deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)`,
      mouseX: mousePosition.x,
      mouseY: mousePosition.y
    };
  }, [mousePosition]);
};