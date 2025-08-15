"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ModernSectionBackgroundProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'gradient' | 'hero' | 'glass';
  intensity?: 'subtle' | 'medium' | 'strong';
  enableGrid?: boolean;
  enableDots?: boolean;
  enableMouseTracking?: boolean;
  enableAnimatedGradients?: boolean;
  enableParticles?: boolean;
  enableNoise?: boolean;
  enableMeshGradient?: boolean;
  className?: string;
}

export const ModernSectionBackground: React.FC<ModernSectionBackgroundProps> = ({
  variant = 'primary',
  intensity = 'medium',
  enableGrid = true,
  enableDots = true,
  enableMouseTracking = false,
  enableAnimatedGradients = true,
  enableParticles = false,
  enableNoise = false,
  enableMeshGradient = false,
  className = ""
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive elements
  useEffect(() => {
    if (!enableMouseTracking) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enableMouseTracking]);

  // Variant-specific configurations
  const getVariantConfig = (variant: string) => {
    const configs = {
      primary: {
        baseGradient: 'from-purple-900/30 via-black to-pink-900/30',
        accentColors: ['purple-400', 'pink-400', 'cyan-400'],
        animationColors: [
          'rgba(147, 51, 234, 0.15)',
          'rgba(236, 72, 153, 0.15)', 
          'rgba(59, 130, 246, 0.15)',
          'rgba(168, 85, 247, 0.15)'
        ],
        meshColors: ['#7c3aed', '#ec4899', '#06b6d4']
      },
      secondary: {
        baseGradient: 'from-blue-900/25 via-black to-teal-900/25',
        accentColors: ['blue-400', 'cyan-400', 'teal-400'],
        animationColors: [
          'rgba(59, 130, 246, 0.12)',
          'rgba(34, 211, 238, 0.12)',
          'rgba(20, 184, 166, 0.12)',
          'rgba(99, 102, 241, 0.12)'
        ],
        meshColors: ['#3b82f6', '#22d3ee', '#14b8a6']
      },
      tertiary: {
        baseGradient: 'from-emerald-900/25 via-black to-green-900/25',
        accentColors: ['emerald-400', 'green-400', 'lime-400'],
        animationColors: [
          'rgba(16, 185, 129, 0.12)',
          'rgba(34, 197, 94, 0.12)',
          'rgba(132, 204, 22, 0.12)',
          'rgba(5, 150, 105, 0.12)'
        ],
        meshColors: ['#10b981', '#22c55e', '#84cc16']
      },
      quaternary: {
        baseGradient: 'from-orange-900/25 via-black to-red-900/25',
        accentColors: ['orange-400', 'red-400', 'pink-400'],
        animationColors: [
          'rgba(251, 146, 60, 0.12)',
          'rgba(248, 113, 113, 0.12)',
          'rgba(244, 114, 182, 0.12)',
          'rgba(252, 165, 165, 0.12)'
        ],
        meshColors: ['#fb923c', '#f87171', '#f472b6']
      },
      gradient: {
        baseGradient: 'from-violet-900/20 via-neutral-900 to-indigo-900/20',
        accentColors: ['violet-400', 'indigo-400', 'purple-400'],
        animationColors: [
          'rgba(139, 92, 246, 0.10)',
          'rgba(99, 102, 241, 0.10)',
          'rgba(147, 51, 234, 0.10)',
          'rgba(168, 85, 247, 0.10)'
        ],
        meshColors: ['#8b5cf6', '#6366f1', '#9333ea']
      },
      hero: {
        baseGradient: 'from-purple-900/40 via-black/90 to-pink-900/40',
        accentColors: ['purple-300', 'pink-300', 'cyan-300'],
        animationColors: [
          'rgba(147, 51, 234, 0.25)',
          'rgba(236, 72, 153, 0.25)', 
          'rgba(59, 130, 246, 0.25)',
          'rgba(168, 85, 247, 0.25)'
        ],
        meshColors: ['#a855f7', '#f97316', '#06b6d4']
      },
      glass: {
        baseGradient: 'from-white/5 via-black/60 to-white/5',
        accentColors: ['white', 'gray-200', 'gray-300'],
        animationColors: [
          'rgba(255, 255, 255, 0.08)',
          'rgba(255, 255, 255, 0.05)',
          'rgba(255, 255, 255, 0.03)',
          'rgba(255, 255, 255, 0.06)'
        ],
        meshColors: ['#ffffff', '#f3f4f6', '#e5e7eb']
      }
    };
    return configs[variant as keyof typeof configs] || configs.primary;
  };

  const config = getVariantConfig(variant);
  
  // Intensity multipliers
  const intensityMultiplier = {
    subtle: 0.5,
    medium: 1,
    strong: 1.5
  }[intensity];

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {/* Base gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.baseGradient}`} />
      
      {/* Radial gradient overlay for depth */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,${0.6 * intensityMultiplier}) 100%)`
        }}
      />

      {/* Static mesh gradient background */}
      {enableMeshGradient && (
        <div 
          className="absolute inset-0"
          style={{ 
            opacity: intensityMultiplier * 0.15,
            background: `conic-gradient(from 45deg at 50% 50%, ${config.meshColors[0]}20, transparent 50%, ${config.meshColors[1]}20, transparent 100%)`
          }}
        />
      )}

      {/* Noise texture overlay */}
      {enableNoise && (
        <div 
          className="absolute inset-0 mix-blend-overlay" 
          style={{ 
            opacity: intensityMultiplier * 0.15,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '256px 256px'
          }}
        />
      )}
      
      {/* Static grid pattern */}
      {enableGrid && (
        <div 
          className="absolute inset-0" 
          style={{ 
            opacity: 0.08 * intensityMultiplier,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      )}

      {/* Static particles system */}
      {enableParticles && (
        <div className="absolute inset-0" style={{ opacity: intensityMultiplier * 0.4 }}>
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-60"
              style={{
                background: config.animationColors[i % config.animationColors.length],
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Static floating dots */}
      {enableDots && (
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${config.animationColors[0]}, transparent 70%)`,
              opacity: intensityMultiplier * 0.5
            }}
          />
          <div 
            className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full"
            style={{
              background: `radial-gradient(circle, ${config.animationColors[1]}, transparent 70%)`,
              opacity: intensityMultiplier * 0.6
            }}
          />
          <div 
            className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full"
            style={{
              background: `radial-gradient(circle, ${config.animationColors[2]}, transparent 70%)`,
              opacity: intensityMultiplier * 0.4
            }}
          />
        </div>
      )}
      
      {/* Static gradient backgrounds */}
      {enableAnimatedGradients && (
        <div className="absolute inset-0" style={{ opacity: intensityMultiplier * 0.6 }}>
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(800px circle at 20% 80%, ${config.animationColors[0]}, transparent 45%)`
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(600px circle at 80% 20%, ${config.animationColors[1]}, transparent 40%)`,
              mixBlendMode: 'screen'
            }}
          />
        </div>
      )}
      
      {/* Smooth section transitions */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"
        style={{ opacity: intensityMultiplier * 0.2 }}
      />
      
      {/* Additional subtle overlay for better text contrast */}
      <div 
        className="absolute inset-0 bg-black/25"
        style={{ opacity: intensityMultiplier * 0.4 }}
      />
    </div>
  );
};