"use client";
import { useEffect } from 'react';

interface PerformanceMonitorProps {
  pageName?: string;
}

export const PerformanceMonitor = ({ pageName = 'Portfolio' }: PerformanceMonitorProps) => {
  useEffect(() => {
    // Performance monitoring for development
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      const measurePerformance = () => {
        // Core Web Vitals
        const perfObserver = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            console.log(`${pageName} Performance:`, {
              name: entry.name,
              value: (entry as any).value || entry.duration,
              rating: ((entry as any).value || entry.duration) > 2500 ? 'poor' : ((entry as any).value || entry.duration) > 1000 ? 'needs-improvement' : 'good'
            });
          }
        });

        // Observe different metrics
        try {
          perfObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        } catch (e) {
          // Fallback for browsers that don't support these metrics
          console.log('Performance monitoring not supported');
        }

        // Measure load time
        window.addEventListener('load', () => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          
          console.log(`${pageName} Load Metrics:`, {
            'Total Load Time': `${loadTime}ms`,
            'DOM Content Loaded': `${navigation.domContentLoadedEventEnd - navigation.fetchStart}ms`,
            'First Paint': performance.getEntriesByName('first-paint')[0]?.startTime || 'N/A',
            'First Contentful Paint': performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 'N/A'
          });
        });

        // Memory usage (if available)
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          console.log(`${pageName} Memory:`, {
            'Used JS Heap Size': `${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB`,
            'Total JS Heap Size': `${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB`,
            'JS Heap Size Limit': `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB`
          });
        }
      };

      // Delay measurement to allow page to settle
      setTimeout(measurePerformance, 1000);
    }
  }, [pageName]);

  return null; // This component doesn't render anything
};

// Production-ready performance tracking for analytics
export const trackPerformanceMetrics = (pageName: string) => {
  if (typeof window === 'undefined') return;

  // Track Core Web Vitals for analytics
  const vitalsObserver = new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      // Send to analytics service (Google Analytics, etc.)
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: pageName,
          custom_parameter_1: entry.name,
          custom_parameter_2: (entry as any).value || entry.duration,
          non_interaction: true
        });
      }
    }
  });

  try {
    vitalsObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  } catch (e) {
    // Browser doesn't support these metrics
  }
};