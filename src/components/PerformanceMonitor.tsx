"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          
          // Log key metrics
          console.log('Performance Metrics:', {
            FCP: navEntry.responseStart - navEntry.fetchStart,
            DOMContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.fetchStart,
            LoadComplete: navEntry.loadEventEnd - navEntry.fetchStart,
          });

          // Send to Google Analytics if available
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'timing_complete', {
              name: 'load',
              value: Math.round(navEntry.loadEventEnd - navEntry.fetchStart),
            });
          }
        }
      }
    });

    observer.observe({ entryTypes: ['navigation'] });

    // Monitor Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      console.log('LCP:', lastEntry.startTime);
      
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'LCP', {
          value: Math.round(lastEntry.startTime),
        });
      }
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    return () => {
      observer.disconnect();
      lcpObserver.disconnect();
    };
  }, []);

  return null;
}