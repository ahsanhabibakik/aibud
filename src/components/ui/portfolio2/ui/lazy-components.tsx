"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

// Loading component
const LoadingSpinner = ({ className }: { className?: string }) => (
  <div className={`flex items-center justify-center py-4 ${className}`}>
    <div className="w-6 h-6 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
  </div>
);

// Lazy load heavy components
export const LazyFilterableProductGrid = dynamic(
  () => import('./filterable-product-grid').then(mod => ({ default: mod.FilterableProductGrid })),
  {
    loading: () => <LoadingSpinner className="min-h-[200px]" />,
    ssr: false
  }
);

export const LazyCaseStudySection = dynamic(
  () => import('../../../sections/Portfolio2/CaseStudySection').then(mod => ({ default: mod.default })),

  {
    loading: () => <LoadingSpinner className="min-h-[300px]" />,
    ssr: false
  }
);

export const LazyAccordionFAQ = dynamic(
  () => import('./accordion-faq').then(mod => ({ default: mod.AccordionFAQ })),
  {
    loading: () => <LoadingSpinner className="min-h-[200px]" />,
    ssr: false
  }
);

export const LazySparkles = dynamic(
  () => import('./sparkles').then(mod => ({ default: mod.Sparkles })),
  {
    loading: () => null,
    ssr: false
  }
);

export const LazyBackgroundBoxes = dynamic(
  () => import('./background-boxes').then(mod => ({ default: mod.BackgroundBoxes })),
  {
    loading: () => null,
    ssr: false
  }
);

// Wrapper for lazy loading with intersection observer
interface LazyLoadWrapperProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
}

export const LazyLoadWrapper = ({ 
  children, 
  fallback = <LoadingSpinner />,
  rootMargin = "100px"
}: LazyLoadWrapperProps) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};