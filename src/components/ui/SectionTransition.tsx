"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionTransitionProps {
  direction?: 'up' | 'down';
  variant?: 'gradient' | 'wave' | 'diagonal' | 'curve';
  intensity?: 'subtle' | 'medium' | 'strong';
  className?: string;
}

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  direction = 'down',
  variant = 'gradient',
  intensity = 'medium',
  className = ""
}) => {
  const intensityValues = {
    subtle: 0.3,
    medium: 0.6,
    strong: 1.0
  };

  const currentIntensity = intensityValues[intensity];

  const getTransitionPath = () => {
    switch (variant) {
      case 'wave':
        return direction === 'down'
          ? "M0,0 Q50,30 100,0 L100,100 L0,100 Z"
          : "M0,100 Q50,70 100,100 L100,0 L0,0 Z";
      
      case 'diagonal':
        return direction === 'down'
          ? "M0,0 L100,20 L100,100 L0,100 Z"
          : "M0,100 L100,80 L100,0 L0,0 Z";
      
      case 'curve':
        return direction === 'down'
          ? "M0,0 Q25,20 50,15 Q75,10 100,25 L100,100 L0,100 Z"
          : "M0,100 Q25,80 50,85 Q75,90 100,75 L100,0 L0,0 Z";
      
      default: // gradient
        return direction === 'down'
          ? "M0,0 L100,0 L100,50 Q50,80 0,50 Z"
          : "M0,100 L100,100 L100,50 Q50,20 0,50 Z";
    }
  };

  if (variant === 'gradient') {
    return (
      <div className={`relative h-32 ${className}`}>
        <div 
          className="absolute inset-0"
          style={{
            background: direction === 'down'
              ? `linear-gradient(to bottom, rgba(0,0,0,${currentIntensity}), transparent)`
              : `linear-gradient(to top, rgba(0,0,0,${currentIntensity}), transparent)`
          }}
        />
        
        {/* Static accent overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: direction === 'down'
              ? `linear-gradient(to bottom, rgba(147,51,234,${currentIntensity * 0.15}), transparent)`
              : `linear-gradient(to top, rgba(147,51,234,${currentIntensity * 0.15}), transparent)`
          }}
        />
      </div>
    );
  }

  return (
    <div className={`relative h-24 overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <linearGradient id="transitionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="50%" stopColor={`rgba(0,0,0,${currentIntensity * 0.5})`} />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </linearGradient>
          
          <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(147,51,234,0.1)" />
            <stop offset="50%" stopColor="rgba(236,72,153,0.1)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.1)" />
          </linearGradient>
        </defs>
        
        <path
          d={getTransitionPath()}
          fill="url(#transitionGradient)"
          opacity={currentIntensity}
        />
        
        <path
          d={getTransitionPath()}
          fill="url(#accentGradient)"
          opacity={currentIntensity * 0.2}
        />
      </svg>
    </div>
  );
};