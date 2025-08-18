"use client";
import React, { useId, useMemo, useCallback, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface OptimizedSparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

interface Particle {
  id: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocity: { x: number; y: number };
}

export const OptimizedSparkles: React.FC<OptimizedSparklesProps> = ({
  id,
  className,
  background = "transparent",
  minSize = 0.3,
  maxSize = 1.0,
  speed = 0.8,
  particleColor = "#ffffff",
  particleDensity = 50, // Reduced from 1000 to 50
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const generatedId = useId();
  const controls = useAnimation();
  const canvasId = id || generatedId;

  const createParticle = useCallback((index: number): Particle => ({
    id: `${canvasId}-${index}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: minSize + Math.random() * (maxSize - minSize),
    opacity: 0.1 + Math.random() * 0.9,
    velocity: {
      x: (Math.random() - 0.5) * speed,
      y: (Math.random() - 0.5) * speed,
    },
  }), [canvasId, minSize, maxSize, speed]);

  const initialParticles = useMemo(() => 
    Array.from({ length: particleDensity }, (_, i) => createParticle(i)),
    [particleDensity, createParticle]
  );

  useEffect(() => {
    setParticles(initialParticles);
    controls.start({
      opacity: 1,
      transition: { duration: 1 },
    });

    const intervalId = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.velocity.x + 100) % 100,
          y: (particle.y + particle.velocity.y + 100) % 100,
          opacity: 0.1 + Math.abs(Math.sin(Date.now() * 0.001 + particle.x * 0.01)) * 0.9,
        }))
      );
    }, 100); // Reduced frequency from potential 60fps to 10fps

    return () => clearInterval(intervalId);
  }, [initialParticles, controls]);

  const sparkleElements = useMemo(() => 
    particles.map(particle => (
      <div
        key={particle.id}
        className="absolute rounded-full pointer-events-none"
        style={{
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          backgroundColor: particleColor,
          opacity: particle.opacity,
          transform: 'translate(-50%, -50%)',
        }}
      />
    )),
    [particles, particleColor]
  );

  return (
    <motion.div 
      animate={controls} 
      className={cn("opacity-0 relative overflow-hidden", className)}
      style={{ backgroundColor: background }}
    >
      {sparkleElements}
    </motion.div>
  );
};