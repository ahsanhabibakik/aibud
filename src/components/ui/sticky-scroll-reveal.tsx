"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    // Throttle updates to reduce performance impact
    if (Math.abs(latest - (activeCard / cardLength)) > 0.1) {
      const adjustedLatest = Math.min(latest, 0.95);
      const cardsBreakpoints = content.map((_, index) => index / cardLength);
      const closestBreakpointIndex = cardsBreakpoints.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(adjustedLatest - breakpoint);
          if (distance < Math.abs(adjustedLatest - cardsBreakpoints[acc])) {
            return index;
          }
          return acc;
        },
        0,
      );
      setActiveCard(closestBreakpointIndex);
    }
  });

  const backgroundColors = Array(content.length).fill("#0a1024");
  const linearGradients = Array(content.length).fill("linear-gradient(to bottom right, #0a1024, #0a1024)");

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  // Check if we are on mobile layout
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener for resize
    window.addEventListener('resize', checkIsMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      transition={{ duration: 0.7 }}
      className="relative flex h-[45rem] w-full flex-col md:flex-row md:justify-center md:space-x-10 overflow-y-auto hide-scrollbar"
      ref={ref}
      style={{
        scrollbarWidth: 'none', /* Hide scrollbar for Firefox */
        msOverflowStyle: 'none' /* Hide scrollbar for IE and Edge */
      }}
    >
      {/* Mobile View: Stacked layout (text then image for each card) */}
      {isMobile ? (
        <div className="w-full px-4 pt-8 pb-16">
          {content.map((item, index) => (
            <div key={item.title + index} className="mb-24">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-6 text-slate-300"
              >
                {item.description}
              </motion.p>
              {activeCard === index && (
                <motion.div
                  style={{ background: backgroundGradient }}
                  className={cn(
                    "mt-6 h-64 w-full overflow-hidden rounded-lg",
                    contentClassName
                  )}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  key={`mobile-${activeCard}`}
                >
                  {item.content ?? null}
                </motion.div>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      ) : (
        /* Desktop View: Side by side layout (text on left, image on right) */
        <>
          <div className="relative flex items-start px-8 pt-8">
            <div className="max-w-2xl px-4">
              {content.map((item, index) => (
                <div key={item.title + index} className="mb-24">
                  <motion.h2
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-2xl font-bold text-slate-100"
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: activeCard === index ? 1 : 0.3,
                    }}
                    className="text-kg mt-6 max-w-sm text-slate-300"
                  >
                    {item.description}
                  </motion.p>
                </div>
              ))}
              <div className="h-60" />
            </div>
          </div>
          <motion.div
            style={{ background: backgroundGradient }}
            className={cn(
              "sticky top-1/2 -translate-y-1/2 h-96 w-[32rem] overflow-hidden rounded-lg hidden md:block",
              contentClassName,
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            key={`desktop-${activeCard}`}
          >
            {content[activeCard].content ?? null}
          </motion.div>
        </>
      )}
    </motion.div>
  );
};
