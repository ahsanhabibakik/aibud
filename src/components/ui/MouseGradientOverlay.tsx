"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface MousePosition {
  x: number;
  y: number;
}

export const MouseGradientOverlay: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Immediate mouse tracking with minimal throttling for instant response
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      setIsMoving(true);

      // Clear previous timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      // Set timeout for stopping movement
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      {/* Main Spotlight Gradient */}
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-200"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, ${isMoving ? 0.2 : 0.12}), transparent 35%)`,
          opacity: 1,
        }}
      />

      {/* Secondary Ambient Light */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(900px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, ${isMoving ? 0.1 : 0.06}), transparent 50%)`,
          opacity: 1,
        }}
      />

      {/* Tertiary Cyan Glow */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-400"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, ${isMoving ? 0.08 : 0.04}), transparent 25%)`,
          opacity: 1,
        }}
      />

      {/* Interactive Shadow Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0, 0, 0, ${isMoving ? 0.15 : 0}) 60%)`,
          opacity: 1,
        }}
      />

      {/* Trailing Light Effect */}
      <div
        className="fixed w-3 h-3 pointer-events-none z-20 -translate-x-1.5 -translate-y-1.5 rounded-full transition-all duration-100"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.7) 0%, rgba(147, 51, 234, 0.4) 50%, transparent 100%)',
          filter: 'blur(0.5px)',
          transform: `scale(${isMoving ? 1.3 : 1}) translate(-50%, -50%)`,
          opacity: isMoving ? 0.9 : 0.5,
        }}
      />
    </>
  );
};

// Parallax gradient component for depth
export const ParallaxGradientLayer: React.FC<{ 
  depth?: number; 
  color?: string; 
  intensity?: number;
}> = ({ depth = 1, color = "147, 51, 234", intensity = 0.1 }) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Apply parallax offset based on depth - instant response
      const parallaxX = e.clientX + (e.clientX - window.innerWidth / 2) * depth * 0.1;
      const parallaxY = e.clientY + (e.clientY - window.innerHeight / 2) * depth * 0.1;
      
      setMousePosition({
        x: parallaxX,
        y: parallaxY,
      });
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [depth]);

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${color}, ${intensity}), transparent 50%)`,
        zIndex: Math.max(1, 10 - depth),
      }}
    />
  );
};