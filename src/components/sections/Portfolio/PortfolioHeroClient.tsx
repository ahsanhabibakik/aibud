"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface MousePosition {
  x: number;
  y: number;
}

interface PortfolioHeroClientProps {
  children: React.ReactNode;
}

const PortfolioHeroClient = ({ children }: PortfolioHeroClientProps) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  // Optimized scroll-based animations
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.9]);
  const heroY = useTransform(scrollY, [0, 400], [0, -50]);
  
  // Throttled mouse tracking for performance
  useEffect(() => {
    let animationFrame: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX - window.innerWidth / 2) / 100,
          y: (e.clientY - window.innerHeight / 2) / 100
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const scrollToGrid = useCallback(() => {
    const gridElement = document.getElementById('product-grid');
    if (gridElement) {
      gridElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.div 
      style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
      className="min-h-screen relative w-full overflow-hidden bg-black flex flex-col items-center justify-center"
    >
      {/* Interactive background elements */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Simplified floating elements with mouse interaction */}
        <motion.div 
          animate={{ 
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400/50 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        </motion.div>
        
        {/* Single moving gradient for performance */}
        <motion.div
          animate={{ 
            background: [
              "radial-gradient(600px circle at 20% 20%, rgba(147, 51, 234, 0.1), transparent 40%)",
              "radial-gradient(600px circle at 80% 20%, rgba(236, 72, 153, 0.1), transparent 40%)",
              "radial-gradient(600px circle at 80% 80%, rgba(59, 130, 246, 0.1), transparent 40%)",
              "radial-gradient(600px circle at 20% 80%, rgba(147, 51, 234, 0.1), transparent 40%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      {/* Server-rendered content passed as children */}
      {children}

      {/* Interactive scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToGrid}
          className="relative p-3 rounded-full border border-white/20 text-white/60 hover:text-white hover:border-purple-500/50 transition-all duration-300 group"
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Floating elements with mouse interaction */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <motion.div 
          animate={{ 
            x: mousePosition.x * -3,
            y: mousePosition.y * -3,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="absolute top-1/2 right-16 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        />
        <motion.div 
          animate={{ 
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 150 }}
          className="absolute bottom-1/3 left-16 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"
        />
      </div>
    </motion.div>
  );
};

export default PortfolioHeroClient;