"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export const MouseGradientOverlayOptimized: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Optimized mouse tracking with RAF throttling
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(() => {
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
        }, 150);
      });
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Optimized gradient styles with reduced calculations
  const gradientStyles = {
    primary: {
      background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, ${isMoving ? 0.15 : 0.08}), transparent 35%)`,
    },
    secondary: {
      background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, ${isMoving ? 0.08 : 0.04}), transparent 50%)`,
    },
    accent: {
      background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, ${isMoving ? 0.06 : 0.03}), transparent 25%)`,
    }
  };

  return (
    <>
      {/* Primary Spotlight Gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300 ease-out"
        style={gradientStyles.primary}
      />

      {/* Secondary Ambient Light */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-500 ease-out"
        style={gradientStyles.secondary}
      />

      {/* Accent Glow */}
      <div
        className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-700 ease-out"
        style={gradientStyles.accent}
      />

      {/* Cursor indicator */}
      <div
        className="fixed w-2 h-2 pointer-events-none z-20 rounded-full transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, transparent 100%)',
          transform: `scale(${isMoving ? 1.5 : 1})`,
          opacity: isMoving ? 0.9 : 0.6,
        }}
      />
    </>
  );
};