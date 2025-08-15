"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useMouseGradient, useScrollHideAnimation } from "@/hooks/useScrollAnimations";
import { ParallaxGradientLayer } from "./MouseGradientOverlay";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  enableMouseGradient?: boolean;
  parallax?: boolean;
  fadeDirection?: 'up' | 'down' | 'left' | 'right';
  gradientIntensity?: 'subtle' | 'medium' | 'strong';
  enableShadows?: boolean;
  enableDepthLayers?: boolean;
  enableScrollHide?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  enableMouseGradient = false,
  parallax = false,
  fadeDirection = 'up',
  gradientIntensity = 'medium',
  enableShadows = false,
  enableDepthLayers = false,
  enableScrollHide = false
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-5% 0px -5% 0px", // More aggressive threshold for better performance
    amount: 0.1 // Trigger when 10% is visible
  });
  
  const { spotlight, ambient, mouseX, mouseY } = useMouseGradient();
  const scrollAnimation = useScrollHideAnimation(ref);

  // Get intensity values based on setting
  const getIntensityValues = () => {
    switch (gradientIntensity) {
      case 'subtle':
        return { primary: 0.08, secondary: 0.04, tertiary: 0.02 };
      case 'strong':
        return { primary: 0.25, secondary: 0.15, tertiary: 0.08 };
      default:
        return { primary: 0.15, secondary: 0.08, tertiary: 0.04 };
    }
  };

  const intensities = getIntensityValues();

  // Direction-based initial positions
  const getInitialPosition = () => {
    switch (fadeDirection) {
      case 'up': return { y: 50, x: 0 };
      case 'down': return { y: -50, x: 0 };
      case 'left': return { y: 0, x: 50 };
      case 'right': return { y: 0, x: -50 };
      default: return { y: 50, x: 0 };
    }
  };

  const initialPos = getInitialPosition();

  return (
    <motion.section
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...initialPos,
        scale: 0.98
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        scale: 1
      } : {}}
      style={enableScrollHide ? {
        opacity: scrollAnimation.opacity,
        scale: scrollAnimation.scale,
        y: scrollAnimation.y
      } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 1.02, 0.73, 1], // Smooth custom easing
        scale: { duration: 0.6 }
      }}
      className={`relative ${className}`}
    >
      {/* Enhanced Mouse-responsive gradient overlay */}
      {enableMouseGradient && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Primary spotlight effect */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: `radial-gradient(600px circle at ${mouseX * 50 + 50}% ${mouseY * 50 + 50}%, rgba(147, 51, 234, ${intensities.primary}), transparent 40%)`,
              opacity: isInView ? 1 : 0
            }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
          />
          
          {/* Secondary ambient lighting */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: `radial-gradient(800px circle at ${mouseX * 40 + 50}% ${mouseY * 40 + 50}%, rgba(236, 72, 153, ${intensities.secondary}), transparent 60%)`,
              opacity: isInView ? 1 : 0
            }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
          />

          {/* Tertiary cyan glow */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: `radial-gradient(400px circle at ${mouseX * 60 + 50}% ${mouseY * 60 + 50}%, rgba(59, 130, 246, ${intensities.tertiary}), transparent 30%)`,
              opacity: isInView ? 1 : 0
            }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.7 }}
          />

          {/* Interactive shadow effects */}
          {enableShadows && (
            <motion.div
              className="absolute inset-0"
              animate={{
                background: `radial-gradient(300px circle at ${mouseX * 50 + 50}% ${mouseY * 50 + 50}%, transparent 0%, rgba(0, 0, 0, 0.1) 70%)`,
                opacity: isInView ? 0.6 : 0
              }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
            />
          )}

          {/* Depth layers */}
          {enableDepthLayers && (
            <>
              <ParallaxGradientLayer depth={0.5} color="147, 51, 234" intensity={intensities.tertiary * 0.5} />
              <ParallaxGradientLayer depth={1.5} color="236, 72, 153" intensity={intensities.tertiary * 0.3} />
              <ParallaxGradientLayer depth={2} color="59, 130, 246" intensity={intensities.tertiary * 0.2} />
            </>
          )}
          
          {/* Enhanced parallax light points */}
          <motion.div
            className="absolute inset-0"
            animate={{
              transform: `translate(${mouseX * 15}px, ${mouseY * 15}px)`,
            }}
            transition={{ type: "spring", damping: 25, stiffness: 150 }}
          >
            <div 
              className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"
              style={{
                top: '15%',
                left: '20%',
                filter: 'blur(1px)',
                animationDelay: '0s'
              }}
            />
            <div 
              className="absolute w-1 h-1 bg-pink-400/30 rounded-full animate-pulse"
              style={{
                top: '70%',
                right: '25%',
                filter: 'blur(0.5px)',
                animationDelay: '1.5s'
              }}
            />
            <div 
              className="absolute w-1.5 h-1.5 bg-cyan-400/25 rounded-full animate-pulse"
              style={{
                bottom: '25%',
                left: '75%',
                filter: 'blur(1px)',
                animationDelay: '3s'
              }}
            />
            <div 
              className="absolute w-0.5 h-0.5 bg-white/40 rounded-full animate-pulse"
              style={{
                top: '45%',
                left: '60%',
                filter: 'blur(0.3px)',
                animationDelay: '4.5s'
              }}
            />
          </motion.div>
        </div>
      )}
      
      {/* Parallax wrapper for content */}
      {parallax ? (
        <motion.div
          animate={{
            transform: `translateY(${mouseY * -10}px)`,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.section>
  );
};

// Specialized section for hero-like content
export const HeroAnimatedSection: React.FC<AnimatedSectionProps> = (props) => {
  return (
    <AnimatedSection
      {...props}
      enableMouseGradient={true}
      parallax={true}
      className={`min-h-screen ${props.className || ''}`}
    />
  );
};

// Content section with subtle animations
export const ContentAnimatedSection: React.FC<AnimatedSectionProps> = (props) => {
  return (
    <AnimatedSection
      {...props}
      enableMouseGradient={true}
      gradientIntensity="subtle"
      enableShadows={true}
      delay={0.2}
      className={`py-20 ${props.className || ''}`}
    />
  );
};