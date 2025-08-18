"use client";
import React from "react";

type Direction = "down" | "up" | "left" | "right";
type Variant = "wave" | "curve" | "diagonal" | "gradient";
type Intensity = "subtle" | "medium" | "strong";

interface SectionTransitionProps {
  direction?: Direction;
  variant?: Variant;
  intensity?: Intensity;
  className?: string;
}

const opacityForIntensity = (i: Intensity) => {
  switch (i) {
    case "subtle":
      return 0.18;
    case "strong":
      return 0.6;
    default:
      return 0.32;
  }
};

export const SectionTransition: React.FC<SectionTransitionProps> = ({
  direction = "down",
  variant = "wave",
  intensity = "medium",
  className = "",
}) => {
  const opacity = opacityForIntensity(intensity);

  // Simple SVG shapes for transitions. Keep tiny and purely decorative.
  const Wave = () => (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-20" aria-hidden>
      <path d="M0,32 C180,80 360,0 720,32 C1080,64 1260,8 1440,48 L1440 80 L0 80 Z" fill="currentColor" style={{ opacity }} />
    </svg>
  );

  const Curve = () => (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-20" aria-hidden>
      <path d="M0,56 C360,0 720,120 1440,40 L1440 80 L0 80 Z" fill="currentColor" style={{ opacity }} />
    </svg>
  );

  const Diagonal = () => (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-28" aria-hidden>
      <path d="M0,0 L1440,80 L1440,120 L0,120 Z" fill="currentColor" style={{ opacity }} />
    </svg>
  );

  const Gradient = () => (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-20" aria-hidden>
      <defs>
        <linearGradient id="st-grad" x1="0" x2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity={opacity * 0.9} />
          <stop offset="100%" stopColor="currentColor" stopOpacity={0} />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#st-grad)" />
    </svg>
  );

  const shape = (() => {
    switch (variant) {
      case "curve":
        return <Curve />;
      case "diagonal":
        return <Diagonal />;
      case "gradient":
        return <Gradient />;
      default:
        return <Wave />;
    }
  })();

  // Direction controls whether the element flips vertically
  const transformClass = direction === "up" ? "-rotate-180" : "";

  return (
    <div className={`pointer-events-none overflow-hidden ${className}`} aria-hidden>
      <div className={`w-full text-slate-900 ${transformClass}`} style={{ color: "rgba(15,23,42,1)" }}>
        {shape}
      </div>
    </div>
  );
};

export default SectionTransition;
