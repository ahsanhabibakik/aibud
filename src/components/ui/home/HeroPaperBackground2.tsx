"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MeshGradient } from '@paper-design/shaders-react';

interface HeroPaperBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  parallaxStrength?: number;
  animationSpeed?: number;
  opacityOverride?: number;
}

// Static poster component for SSR and reduced motion fallback
const StaticPoster: React.FC<{ className?: string }> = ({ className }) => (
  <div 
    className={`absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#08090b] to-[#0a0a0a] ${className || ''}`}
    style={{
      backgroundImage: `
        radial-gradient(ellipse 800px 600px at 25% 20%, rgba(107, 92, 255, 0.15) 0%, transparent 60%),
        radial-gradient(ellipse 600px 800px at 75% 80%, rgba(58, 160, 255, 0.12) 0%, transparent 60%),
        radial-gradient(circle 400px at 50% 50%, rgba(124, 88, 255, 0.08) 0%, transparent 70%)
      `
    }}
  />
);

// 1) Base Glow Field - Super optimized MeshGradient
const BaseGlowField: React.FC<{
  mouseX: any;
  mouseY: any;
  speed?: number;
  className?: string;
}> = ({ mouseX, mouseY, speed = 0.15, className }) => {
  // NO parallax for maximum performance - static positioning
  // const x = useTransform(mouseX, [-1, 1], [-8, 8]);
  // const y = useTransform(mouseY, [-1, 1], [-8, 8]);

  return (
    <div className={`absolute inset-0 ${className || ''}`}>
      <MeshGradient
       colors={['#000000', '#0a0a0a', '#2a2166', '#3b2173', '#1a3a66']}
        distortion={0.5} // Reduced from 0.8
        swirl={0.2} // Reduced from 0.4
        speed={speed} // Reduced from 0.25 to 0.15
        style={{ 
          width: '100%', 
          height: '100%',
          filter: 'blur(0.5px)', // Reduced blur
          opacity: 0.85 // Slightly reduced
        }}
      />
    </div>
  );
};

// 2) Soft Spotlights - Super optimized CSS gradients
const SoftSpotlights: React.FC<{
  mouseX: any;
  mouseY: any;
  speed?: number;
  className?: string;
}> = ({ mouseX, mouseY, speed = 0.08, className }) => {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + speed);
    }, 300); // Increased interval for better performance
    return () => clearInterval(interval);
  }, [speed]);

  // NO parallax for performance
  // const x = useTransform(mouseX, [-1, 1], [-4, 4]);
  // const y = useTransform(mouseY, [-1, 1], [-4, 4]);

  return (
    <div className={`absolute inset-0 opacity-25 ${className || ''}`}>
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 400px 280px at ${70 + Math.sin(time * 0.005) * 1}% ${25 + Math.cos(time * 0.005) * 1}%, rgba(124, 88, 255, 0.3) 0%, transparent 75%),
            radial-gradient(ellipse 320px 240px at ${30 + Math.cos(time * 0.007) * 1}% ${75 + Math.sin(time * 0.007) * 1}%, rgba(58, 160, 255, 0.2) 0%, transparent 75%)
          `,
          filter: 'blur(3px)' // Slightly more blur for softer look with less movement
        }}
      />
    </div>
  );
};

// 3) Wireframe Veil - Super optimized secondary MeshGradient
const WireframeVeil: React.FC<{
  mouseX: any;
  mouseY: any;
  speed?: number;
  className?: string;
}> = ({ mouseX, mouseY, speed = 0.1, className }) => {
  // NO parallax for performance
  // const x = useTransform(mouseX, [-1, 1], [-5, 5]);
  // const y = useTransform(mouseY, [-1, 1], [-5, 5]);

  return (
    <div className={`absolute inset-0 opacity-12 ${className || ''}`}>
      <MeshGradient
         colors={['#000000', '#0a0a0a', '#2a2166', '#3b2173', '#1a3a66']}
        distortion={0.3} // Reduced from 0.4
        swirl={0.1} // Reduced from 0.2
        speed={speed} // Reduced from 0.18 to 0.1
        style={{ 
          width: '100%', 
          height: '100%',
          filter: 'blur(2px)', // Increased blur for softer overlay
          mixBlendMode: 'soft-light', // Changed to soft-light for better performance
          opacity: 0.8
        }}
      />
    </div>
  );
};

// 4) Film Grain + Vignette - Ultra lightweight implementation
const FilmGrainVignette: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute inset-0 ${className || ''}`}>
    {/* Film Grain DISABLED for performance - comment out if needed */}
    {/* <div 
      className="absolute inset-0 opacity-3"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.4' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
        mixBlendMode: 'soft-light'
      }}
    /> */}
    {/* Ultra subtle Vignette only */}
    <div 
      className="absolute inset-0 opacity-8"
      style={{
        backgroundImage: 'radial-gradient(ellipse 80% 70% at center, transparent 40%, rgba(10, 10, 10, 0.4) 100%)'
      }}
    />
  </div>
);

// 5) Accent Flares - Behind logo and CTA
const AccentFlares: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`absolute inset-0 opacity-35 ${className || ''}`}>
    {/* Behind "AI Agents" area */}
    <div 
      className="absolute top-1/3 left-1/2 w-[350px] h-[300px] -translate-x-1/2 -translate-y-1/2"
      style={{
        background: 'radial-gradient(circle, rgba(107, 92, 255, 0.4) 0%, transparent 70%)',
        filter: 'blur(60px)'
      }}
    />
    {/* Behind CTA */}
    <div 
      className="absolute bottom-1/3 left-1/2 w-[300px] h-[250px] -translate-x-1/2 translate-y-1/4"
      style={{
        background: 'radial-gradient(circle, rgba(58, 160, 255, 0.3) 0%, transparent 70%)',
        filter: 'blur(50px)'
      }}
    />
  </div>
);

export default function HeroPaperBackground({
  className = '',
  children,
  parallaxStrength = 12,
  animationSpeed = 0.25,
  opacityOverride
}: HeroPaperBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse position tracking - COMMENTED OUT for better performance
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Static springs - no mouse interaction for optimal performance
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 1 });

  // Check for reduced motion preference and mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 768px)');
    
    setPrefersReducedMotion(mediaQuery.matches);
    setIsMobile(mobileQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    const handleMobileChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    mobileQuery.addEventListener('change', handleMobileChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      mobileQuery.removeEventListener('change', handleMobileChange);
    };
  }, []);

  // Mouse interaction COMPLETELY DISABLED for maximum performance
  // const handleMouseMove = useCallback((event: MouseEvent) => {
  //   if (prefersReducedMotion || isMobile || !containerRef.current) return;
  //   const rect = containerRef.current.getBoundingClientRect();
  //   const centerX = rect.left + rect.width / 2;
  //   const centerY = rect.top + rect.height / 2;
  //   const normalizedX = Math.max(-1, Math.min(1, (event.clientX - centerX) / (rect.width / 2)));
  //   const normalizedY = Math.max(-1, Math.min(1, (event.clientY - centerY) / (rect.height / 2)));
  //   mouseX.set(normalizedX);
  //   mouseY.set(normalizedY);
  // }, [mouseX, mouseY, prefersReducedMotion, isMobile]);

  // const throttledMouseMove = useMemo(() => {
  //   let ticking = false;
  //   return (event: MouseEvent) => {
  //     if (!ticking) {
  //       requestAnimationFrame(() => {
  //         handleMouseMove(event);
  //         ticking = false;
  //       });
  //       ticking = true;
  //     }
  //   };
  // }, [handleMouseMove]);

  // Mouse listeners DISABLED for performance
  // useEffect(() => {
  //   if (prefersReducedMotion || isMobile) {
  //     mouseX.set(0);
  //     mouseY.set(0);
  //     return;
  //   }
  //   window.addEventListener('mousemove', throttledMouseMove);
  //   return () => window.removeEventListener('mousemove', throttledMouseMove);
  // }, [throttledMouseMove, prefersReducedMotion, isMobile, mouseX, mouseY]);

  // Layer composition - always show main background design for better visual consistency
  const layers = useMemo(() => {
    // Always show full animated layers - no mouse interaction, super optimized
    return (
      <>
        <BaseGlowField mouseX={springX} mouseY={springY} speed={animationSpeed * 0.6} />
        <SoftSpotlights mouseX={springX} mouseY={springY} speed={animationSpeed * 0.3} />
        <WireframeVeil mouseX={springX} mouseY={springY} speed={animationSpeed * 0.4} />
        <AccentFlares />
        <FilmGrainVignette />
      </>
    );
    
    // Commented out reduced motion fallback - always show main design
    // if (prefersReducedMotion) {
    //   return (
    //     <>
    //       <StaticPoster />
    //       <AccentFlares />
    //       <FilmGrainVignette />
    //     </>
    //   );
    // }
  }, [springX, springY, animationSpeed]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={{
        minHeight: 'clamp(560px, 92vh, 980px)',
        width: '100%',
        opacity: opacityOverride !== undefined ? opacityOverride : 1,
        pointerEvents: 'none',
        backgroundColor: '#0a0a0a',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      {/* Background layers */}
      <div className="absolute inset-0 z-0 w-full h-full">
        {layers}
      </div>
      
      {/* Content layer */}
      <div className="relative z-10 w-full h-full" style={{ pointerEvents: 'auto' }}>
        {children}
      </div>
    </div>
  );
}

// Export static poster for SSR usage
export const HeroStaticPoster = StaticPoster;