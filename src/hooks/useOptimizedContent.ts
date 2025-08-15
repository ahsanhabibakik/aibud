"use client";

import { useState, useEffect, useMemo } from 'react';
import { sanitizeContent, extractTextContent, calculateReadingTime } from '@/lib/content-sanitizer';

interface OptimizedContent {
  sanitizedHtml: string;
  textContent: string;
  readingTime: number;
  wordCount: number;
  isProcessing: boolean;
  error: string | null;
}

/**
 * Custom hook for optimizing and processing Ghost CMS content
 * Provides sanitized HTML, text extraction, reading time calculation, and caching
 */
export function useOptimizedContent(rawHtml: string): OptimizedContent {
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoize expensive operations
  const optimizedContent = useMemo(() => {
    if (!rawHtml) {
      return {
        sanitizedHtml: '',
        textContent: '',
        readingTime: 0,
        wordCount: 0
      };
    }

    try {
      setIsProcessing(true);
      setError(null);

      // Sanitize the HTML content
      const sanitizedHtml = sanitizeContent(rawHtml);

      // Extract text content for reading time calculation
      const textContent = extractTextContent(sanitizedHtml);

      // Calculate reading time
      const readingTime = calculateReadingTime(sanitizedHtml);

      // Calculate word count
      const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;

      return {
        sanitizedHtml,
        textContent,
        readingTime,
        wordCount
      };
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to process content');
      return {
        sanitizedHtml: rawHtml, // Fallback to raw HTML
        textContent: '',
        readingTime: 0,
        wordCount: 0
      };
    } finally {
      setIsProcessing(false);
    }
  }, [rawHtml]);

  return {
    ...optimizedContent,
    isProcessing,
    error
  };
}

/**
 * Hook for lazy loading content with intersection observer
 */
export function useLazyContent(
  rawHtml: string,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      options
    );

    observer.observe(ref);

    return () => observer.disconnect();
  }, [ref, options]);

  const optimizedContent = useOptimizedContent(isVisible ? rawHtml : '');

  return {
    ...optimizedContent,
    ref: setRef,
    isVisible
  };
}

/**
 * Hook for content search and filtering
 */
export function useContentSearch(content: string, searchTerm: string) {
  return useMemo(() => {
    if (!searchTerm || !content) return { matches: [], highlightedContent: content };

    const textContent = extractTextContent(content);
    const regex = new RegExp(searchTerm, 'gi');
    const matches = textContent.match(regex) || [];

    // Simple highlighting (for search results)
    const highlightedContent = content.replace(
      regex,
      `<mark class="bg-yellow-400/30 text-yellow-100 px-1 rounded">$&</mark>`
    );

    return {
      matches,
      matchCount: matches.length,
      highlightedContent
    };
  }, [content, searchTerm]);
}

/**
 * Hook for content analytics and tracking
 */
export function useContentAnalytics(content: string) {
  return useMemo(() => {
    const textContent = extractTextContent(content);
    const readingTime = calculateReadingTime(content);
    const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;

    // Analyze content structure
    const headingMatches = content.match(/<h[1-6][^>]*>/g) || [];
    const imageMatches = content.match(/<img[^>]*>/g) || [];
    const linkMatches = content.match(/<a[^>]*href/g) || [];
    const codeBlockMatches = content.match(/<pre[^>]*>/g) || [];

    return {
      wordCount,
      readingTime,
      characterCount: textContent.length,
      headingCount: headingMatches.length,
      imageCount: imageMatches.length,
      linkCount: linkMatches.length,
      codeBlockCount: codeBlockMatches.length,
      complexity: calculateComplexity(content),
      engagementScore: calculateEngagementScore({
        wordCount,
        readingTime,
        imageCount: imageMatches.length,
        headingCount: headingMatches.length,
        linkCount: linkMatches.length
      })
    };
  }, [content]);
}

// Helper function to calculate content complexity
function calculateComplexity(content: string): 'simple' | 'moderate' | 'complex' {
  const textContent = extractTextContent(content);
  const sentences = textContent.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const averageWordsPerSentence = textContent.split(/\s+/).length / sentences.length;

  if (averageWordsPerSentence < 15) return 'simple';
  if (averageWordsPerSentence < 25) return 'moderate';
  return 'complex';
}

// Helper function to calculate engagement score
function calculateEngagementScore(metrics: {
  wordCount: number;
  readingTime: number;
  imageCount: number;
  headingCount: number;
  linkCount: number;
}): number {
  const { wordCount, readingTime, imageCount, headingCount, linkCount } = metrics;

  // Base score from content length (ideal: 1500-2500 words)
  let score = 50;

  if (wordCount >= 1500 && wordCount <= 2500) score += 20;
  else if (wordCount >= 1000) score += 10;

  // Reading time bonus (ideal: 7-15 minutes)
  if (readingTime >= 7 && readingTime <= 15) score += 15;
  else if (readingTime >= 5) score += 5;

  // Visual content bonus
  score += Math.min(imageCount * 5, 20); // Max 20 points for images

  // Structure bonus
  score += Math.min(headingCount * 3, 15); // Max 15 points for headings

  // External engagement bonus
  score += Math.min(linkCount * 2, 10); // Max 10 points for links

  return Math.min(score, 100);
}
