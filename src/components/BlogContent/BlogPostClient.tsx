"use client";

import React from 'react';
import { RichContentRenderer } from './RichContentRenderer';
import { useOptimizedContent, useContentAnalytics } from '@/hooks/useOptimizedContent';
import {
  IconEye,
  IconClock,
  IconFileText,
  IconPhoto,
  IconLink,
  IconCode,
  IconTrendingUp
} from '@tabler/icons-react';

interface BlogPostClientProps {
  html: string;
}

export function BlogPostClient({ html }: BlogPostClientProps) {
  const { sanitizedHtml, isProcessing, error } = useOptimizedContent(html);
  const analytics = useContentAnalytics(html);

  if (isProcessing) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-3"></div>
          <span className="text-neutral-400">Processing content...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 text-red-200">
          <h3 className="font-semibold mb-2">Content Processing Error</h3>
          <p className="text-sm">{error}</p>
          <p className="text-xs mt-2 opacity-70">Falling back to basic rendering...</p>
        </div>
        <div className="mt-8">
          <RichContentRenderer html={html} className="blog-content" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 ">

      {/* Main Content */}
      <RichContentRenderer
        html={sanitizedHtml}
        className="blog-content"
      />

      {/* Content Stats for readers */}
      <div className="mt-16 pt-8 border-t border-neutral-700/30">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <IconFileText className="h-4 w-4" />
            <span>{analytics.wordCount.toLocaleString()} words</span>
          </div>
          <div className="flex items-center gap-2">
            <IconClock className="h-4 w-4" />
            <span>{analytics.readingTime} minute read</span>
          </div>
          {analytics.imageCount > 0 && (
            <div className="flex items-center gap-2">
              <IconPhoto className="h-4 w-4" />
              <span>{analytics.imageCount} image{analytics.imageCount !== 1 ? 's' : ''}</span>
            </div>
          )}
          {analytics.codeBlockCount > 0 && (
            <div className="flex items-center gap-2">
              <IconCode className="h-4 w-4" />
              <span>{analytics.codeBlockCount} code example{analytics.codeBlockCount !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
