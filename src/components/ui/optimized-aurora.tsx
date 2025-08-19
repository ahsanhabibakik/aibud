"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useMemo } from "react";

interface OptimizedAuroraProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const OptimizedAurora = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: OptimizedAuroraProps) => {
  const gradientStyles = useMemo(() => ({
    "--aurora": "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
    "--dark-gradient": "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
  } as React.CSSProperties), []);

  const auroraClass = useMemo(() => cn(
    "after:animate-aurora pointer-events-none absolute -inset-[10px] opacity-50 blur-[10px] will-change-transform",
    "bg-gradient-to-br from-blue-500/20 via-indigo-300/20 to-violet-200/20",
    "after:absolute after:inset-0 after:bg-gradient-to-r after:from-blue-500/10 after:to-violet-200/10 after:mix-blend-difference after:content-['']",
    showRadialGradient && "mask-[radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
  ), [showRadialGradient]);

  return (
    <main>
      <div
        className={cn(
          "relative flex h-screen flex-col items-center justify-center bg-zinc-900 text-slate-50",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden" style={gradientStyles}>
          <div className={auroraClass}></div>
        </div>
        {children}
      </div>
    </main>
  );
};