"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, ExternalLink } from "lucide-react";

interface BookCallButtonProps {
  variant?: "floating" | "modern";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  children?: React.ReactNode;
}

export const BookCallButton: React.FC<BookCallButtonProps> = ({
  variant = "floating",
  size = "md",
  className = "",
  href = "https://calendly.com/msohanh/ai-discussion",
  children = "Book a Call"
}) => {
  const baseClasses = "font-medium relative transition-all duration-300 flex items-center justify-center space-x-2";
  
  // Size variants
  const sizeClasses = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2", 
    lg: "text-sm px-5 py-2.5"
  };

  if (variant === "floating") {
    // Original floating navbar style with gradient underline
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          border border-white/[0.2] text-white rounded-full ml-auto hover:bg-white/10 transition-colors
          ${baseClasses} ${sizeClasses[size]} ${className}
        `}
      >
        <span>{children}</span>
        <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
      </a>
    );
  }

  // Modern gradient style (for optimized navbars)
  return (
    <motion.div
      whileHover={{ scale: size === "lg" ? 1.08 : 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group/cta bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/30 relative overflow-hidden
          ${baseClasses} ${sizeClasses[size]} ${className}
        `}
      >
        <Phone className={`${size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} z-10 relative`} />
        <span className="z-10 relative">{children}</span>
        <motion.div
          whileHover={{ x: 2 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="z-10 relative"
        >
          <ExternalLink className={`${size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"}`} />
        </motion.div>
        
        {/* Subtle hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300" />
      </a>
    </motion.div>
  );
};

export default BookCallButton;