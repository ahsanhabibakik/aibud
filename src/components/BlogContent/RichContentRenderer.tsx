"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { CodeBlock } from '@/components/ui/code-block';

interface RichContentRendererProps {
  html: string;
  className?: string;
}

export function RichContentRenderer({ html, className }: RichContentRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const processContent = () => {
      const content = contentRef.current;
      if (!content) return;

      // Check if already processed to prevent multiple processing
      if (content.dataset.processed === 'true') {
        return;
      }

      // Mark as processed
      content.dataset.processed = 'true';

      // Process Ghost CMS specific cards first
      processGhostCards(content);

      // Process callout boxes and tips
      processCalloutBoxes(content);

      // Process FAQ sections (details/summary elements)
      processFAQSections(content);

      // Process YouTube embeds
      processYouTubeEmbeds(content);

      // Process code blocks
      processCodeBlocks(content);

      // Process CTAs and buttons
      processCTAs(content);

      // Process images
      processImages(content);

      // Process external links
      processExternalLinks(content);

      // Process tables
      processTables(content);
    };

    // Use a small delay to ensure DOM is ready
    const timer = setTimeout(processContent, 100);
    return () => clearTimeout(timer);
  }, [html]);

  return (
    <div
      ref={contentRef}
      className={cn(
        "rich-content prose prose-lg prose-invert max-w-none",
        "prose-headings:text-white prose-headings:font-bold prose-headings:scroll-mt-20",
        "prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:border-b prose-h1:border-neutral-600 prose-h1:pb-4",
        "prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:border-b prose-h2:border-neutral-600 prose-h2:pb-3",
        "prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:border-b prose-h3:border-neutral-700 prose-h3:pb-2",
        "prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-6 prose-h4:border-b prose-h4:border-neutral-700 prose-h4:pb-2",
        "prose-p:text-2xl prose-p:text-neutral-200 prose-p:leading-loose prose-p:mb-10",
        "prose-a:text-blue-400 prose-a:underline prose-a:font-medium hover:prose-a:text-blue-300 hover:prose-a:no-underline",
        "prose-strong:text-white prose-strong:font-semibold",
        "prose-em:text-neutral-200",
        "prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-neutral-900/50 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:my-8",
        "prose-code:bg-neutral-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-blue-300 prose-code:text-sm prose-code:font-mono",
        "prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-700 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:my-6",
        "prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8",
        "prose-hr:border-neutral-700 prose-hr:my-12",
        "prose-ul:text-neutral-300 prose-ul:my-6",
        "prose-ol:text-neutral-300 prose-ol:my-6",
        "prose-li:text-neutral-300 prose-li:my-2",
        "prose-li:marker:text-blue-400",
        className
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

// Process Ghost CMS specific cards and elements
function processGhostCards(content: HTMLElement) {
  // Process Ghost header cards
  const headerCards = content.querySelectorAll('.kg-header-card');
  headerCards.forEach((card) => {
    const cardElement = card as HTMLElement;

    // Style the header card container
    cardElement.className = cn(
      'my-12 p-8 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700'
    );

    // Style headings within header cards
    const headings = cardElement.querySelectorAll('.kg-header-card-heading');
    headings.forEach((heading) => {
      const h = heading as HTMLElement;
      h.className = cn(h.className, 'text-3xl md:text-4xl font-bold text-white mb-4');
    });

    // Style subheadings within header cards
    const subheadings = cardElement.querySelectorAll('.kg-header-card-subheading');
    subheadings.forEach((subheading) => {
      const s = subheading as HTMLElement;
      s.className = cn(s.className, 'text-lg text-neutral-300 leading-relaxed');
    });
  });

  // Process Ghost image cards
  const imageCards = content.querySelectorAll('.kg-image-card');
  imageCards.forEach((card) => {
    const cardElement = card as HTMLElement;
    cardElement.className = cn('my-8 rounded-lg overflow-hidden');

    const images = cardElement.querySelectorAll('.kg-image');
    images.forEach((img) => {
      const image = img as HTMLImageElement;
      image.className = cn(
        'w-full h-auto rounded-lg shadow-xl transition-transform duration-300 hover:scale-[1.02]'
      );
    });
  });

  // Process Ghost embed cards (including YouTube)
  const embedCards = content.querySelectorAll('.kg-embed-card');
  embedCards.forEach((card) => {
    const cardElement = card as HTMLElement;
    cardElement.className = cn('my-8');
  });

  // Process Ghost code cards
  const codeCards = content.querySelectorAll('.kg-code-card');
  codeCards.forEach((card) => {
    const cardElement = card as HTMLElement;
    cardElement.className = cn('my-6');
  });
}

// Enhanced YouTube embed processing
function processYouTubeEmbeds(content: HTMLElement) {
  const iframes = content.querySelectorAll('iframe[src*="youtube.com"], iframe[src*="youtu.be"]');

  iframes.forEach((iframe) => {
    const iframeElement = iframe as HTMLIFrameElement;

    // Don't process if already wrapped
    if (iframeElement.parentElement?.classList.contains('youtube-wrapper')) {
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = 'youtube-wrapper relative w-full aspect-video my-8 rounded-lg overflow-hidden shadow-xl bg-black';

    const styledIframe = iframe.cloneNode(true) as HTMLIFrameElement;
    styledIframe.className = 'absolute inset-0 w-full h-full border-0';
    styledIframe.setAttribute('allowfullscreen', 'true');
    styledIframe.setAttribute('loading', 'lazy');

    wrapper.appendChild(styledIframe);
    iframe.parentNode?.replaceChild(wrapper, iframe);
  });
}

// Enhanced code block processing using CodeBlock component
function processCodeBlocks(content: HTMLElement) {
  const codeBlocks = content.querySelectorAll('pre code');

  codeBlocks.forEach((codeBlock) => {
    const pre = codeBlock.parentElement as HTMLPreElement;
    if (!pre) return;

    // Don't process if already processed
    if (pre.querySelector('.code-block-wrapper')) return;

    const codeText = codeBlock.textContent || '';

    // Detect language from class attribute or content
    let language = 'text';
    const classAttr = codeBlock.getAttribute('class');
    if (classAttr) {
      const languageMatch = classAttr.match(/language-(\w+)/);
      if (languageMatch) {
        language = languageMatch[1];
      }
    } else {
      // Fallback to content detection
      const detectedLanguage = detectLanguageFromContent(codeText);
      if (detectedLanguage) {
        language = detectedLanguage;
      }
    }

    // Create a wrapper div that will hold our React component
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper my-6';

    // Replace the pre element with our wrapper
    pre.parentNode?.replaceChild(wrapper, pre);

    // Use React to render the CodeBlock component
    import('react-dom/client').then(({ createRoot }) => {
      const root = createRoot(wrapper);
      root.render(
        React.createElement(CodeBlock, {
          language: language,
          filename: `code.${getFileExtension(language)}`,
          code: codeText,
        })
      );
    });
  });
}

// Helper function to get file extension based on language
function getFileExtension(language: string): string {
  const extensions: Record<string, string> = {
    javascript: 'js',
    typescript: 'ts',
    jsx: 'jsx',
    tsx: 'tsx',
    css: 'css',
    scss: 'scss',
    html: 'html',
    json: 'json',
    python: 'py',
    bash: 'sh',
    shell: 'sh',
    sql: 'sql',
    php: 'php',
    java: 'java',
    cpp: 'cpp',
    c: 'c',
    rust: 'rs',
    go: 'go',
    ruby: 'rb',
    swift: 'swift',
    kotlin: 'kt',
    dart: 'dart',
    yaml: 'yml',
    xml: 'xml',
    markdown: 'md',
    text: 'txt',
  };

  return extensions[language] || 'txt';
}

// Enhanced language detection
function detectLanguageFromContent(code: string): string | null {
  const trimmed = code.trim().toLowerCase();

  // JavaScript/TypeScript patterns
  if (/(const|let|var|function|=>|import|export|console\.log|require)/.test(trimmed)) {
    return 'javascript';
  }

  // CSS patterns
  if (/(\.[\w-]+\s*\{|@media|@import|display\s*:|flex\s*:|grid\s*:)/.test(trimmed)) {
    return 'css';
  }

  // HTML patterns
  if (/<\/?[a-z][\s\S]*>/i.test(trimmed)) {
    return 'html';
  }

  // JSON patterns
  if (/^\s*[\[{]/.test(trimmed) && /[\]}]\s*$/.test(trimmed)) {
    try {
      JSON.parse(code);
      return 'json';
    } catch {
      // Not valid JSON
    }
  }

  // Shell/Bash patterns
  if (/(#!\/bin\/|npm\s|yarn\s|git\s|curl\s|wget\s|sudo\s|\$\s)/.test(trimmed)) {
    return 'bash';
  }

  // Python patterns
  if (/(def\s|import\s|from\s|print\(|if __name__|pip\s)/.test(trimmed)) {
    return 'python';
  }

  return null;
}

// Process CTAs and buttons
function processCTAs(content: HTMLElement) {
  // Look for common CTA patterns
  const ctaSelectors = [
    'a[href*="calendly"]',
    'a[href*="book"]',
    'a[href*="demo"]'
  ];

  const subscribeSelectors = [
    'a[href*="signup"]',
    'a[href*="subscribe"]',
    'a[href*="#/portal/"]',
    '.cta',
    '.button',
    '.btn'
  ];

  // Style prominent CTAs (book calls, demos) with blue gradient
  ctaSelectors.forEach(selector => {
    const elements = content.querySelectorAll(selector);
    elements.forEach((element) => {
      const link = element as HTMLAnchorElement;
      if (link.tagName === 'A') {
        link.className = cn(
          'inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 no-underline my-2'
        );
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
  });

  // Style subscribe/portal buttons with more subtle styling
  subscribeSelectors.forEach(selector => {
    const elements = content.querySelectorAll(selector);
    elements.forEach((element) => {
      const link = element as HTMLAnchorElement;
      if (link.tagName === 'A') {
        link.className = cn(
          'inline-flex items-center gap-2 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white font-medium rounded-lg transition-colors duration-200 no-underline my-2 border border-neutral-600'
        );
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      }
    });
  });
}

// Enhanced image processing
function processImages(content: HTMLElement) {
  const images = content.querySelectorAll('img');

  images.forEach((img) => {
    const image = img as HTMLImageElement;

    // Skip if already processed
    if (image.parentElement?.classList.contains('processed-image')) {
      return;
    }

    // Add loading optimization
    image.loading = 'lazy';
    image.decoding = 'async';

    // Add responsive classes
    image.className = cn(
      'w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]'
    );

    // Wrap in figure if not already wrapped
    if (image.parentElement?.tagName !== 'FIGURE') {
      const figure = document.createElement('figure');
      figure.className = 'processed-image my-8';

      image.parentNode?.insertBefore(figure, image);
      figure.appendChild(image);

      // Add caption if alt text exists
      if (image.alt && image.alt.trim()) {
        const caption = document.createElement('figcaption');
        caption.className = 'text-center text-sm text-neutral-400 mt-3 italic border-t border-neutral-800 pt-3';
        caption.textContent = image.alt;
        figure.appendChild(caption);
      }
    }
  });
}

// Process external links
function processExternalLinks(content: HTMLElement) {
  const links = content.querySelectorAll('a[href^="http"]');

  links.forEach((link) => {
    const anchor = link as HTMLAnchorElement;

    // Skip if it's a CTA button
    if (anchor.classList.contains('cta') || anchor.classList.contains('button') || anchor.classList.contains('btn')) {
      return;
    }

    // Add external link styling
    if (!anchor.href.includes(window.location.hostname)) {
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';

      // Add external link icon if not already present
      if (!anchor.querySelector('.external-icon')) {
        const icon = document.createElement('span');
        icon.innerHTML = ' ↗';
        icon.className = 'external-icon text-xs opacity-70 ml-1';
        anchor.appendChild(icon);
      }
    }
  });
}

// Process tables for better mobile responsiveness
function processTables(content: HTMLElement) {
  const tables = content.querySelectorAll('table');

  tables.forEach((table) => {
    // Skip if already processed
    if (table.parentElement?.classList.contains('table-wrapper')) {
      return;
    }

    // Wrap table in responsive container
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper overflow-x-auto my-8 rounded-lg border border-neutral-700';

    table.parentNode?.insertBefore(wrapper, table);
    wrapper.appendChild(table);

    // Style table
    table.className = cn(
      'w-full bg-neutral-900/50 border-collapse text-sm'
    );

    // Style table headers
    const headers = table.querySelectorAll('th');
    headers.forEach((th) => {
      th.className = cn(
        'px-4 py-3 bg-neutral-800 text-white font-semibold text-left border border-neutral-600'
      );
    });

    // Style table cells
    const cells = table.querySelectorAll('td');
    cells.forEach((td) => {
      td.className = cn(
        'px-4 py-3 text-neutral-300 border border-neutral-700'
      );
    });
  });
}

// Process callout boxes and tips
function processCalloutBoxes(content: HTMLElement) {
  // Look for Ghost CMS callout cards
  const calloutCards = content.querySelectorAll('.kg-callout-card:not(.callout-processed)');
  calloutCards.forEach((card) => {
    const cardElement = card as HTMLElement;
    
    // Mark as processed first
    cardElement.classList.add('callout-processed');
    
    // Get the emoji and text content
    const emoji = cardElement.querySelector('.kg-callout-emoji')?.textContent || '💡';
    const text = cardElement.querySelector('.kg-callout-text')?.textContent || cardElement.textContent || '';
    
    // Style the callout card
    cardElement.className = 'callout-processed my-6 p-4 rounded-lg border-2 border-green-500 bg-green-900/20 text-green-100 flex items-start gap-3';
    
    // Create the styled content
    cardElement.innerHTML = `
      <span class="text-2xl flex-shrink-0">${emoji}</span>
      <div class="flex-1">
        <p class="text-green-100 font-medium leading-relaxed mb-0">${text}</p>
      </div>
    `;
  });

  // Also look for paragraphs that start with "Tip:" or have lightbulb emoji
  // Exclude already processed elements and tip boxes
  const paragraphs = content.querySelectorAll('p:not(.tip-processed):not(.tip-box *):not(.callout-processed *)');
  paragraphs.forEach((p) => {
    const text = p.textContent || '';
    const innerHTML = p.innerHTML || '';
    
    // Skip if already inside a tip box or processed container
    if (p.closest('.tip-box, .callout-processed, .tip-processed')) {
      return;
    }
    
    // Check if it's a tip paragraph and not already processed
    if ((text.toLowerCase().includes('tip:') || innerHTML.includes('💡')) && !p.classList.contains('tip-processed')) {
      // Mark as processed first to prevent re-processing
      p.classList.add('tip-processed');
      
      // Extract the tip content, preserving any HTML formatting
      let tipContent = innerHTML;
      let emoji = '💡';
      
      // If it has an emoji, extract it but preserve HTML
      if (innerHTML.includes('💡')) {
        emoji = '💡';
        tipContent = innerHTML.replace(/💡\s*/, '');
      }
      
      // Create a new wrapper div
      const wrapper = document.createElement('div');
      wrapper.className = 'my-6 p-4 rounded-lg border-2 border-green-500 bg-green-900/20 text-green-100 flex items-start gap-3 tip-box';
      wrapper.setAttribute('data-processed', 'true');
      wrapper.innerHTML = `
        <span class="text-2xl flex-shrink-0">${emoji}</span>
        <div class="flex-1">
          <div class="text-green-100 font-medium leading-relaxed">${tipContent}</div>
        </div>
      `;
      
      // Replace the original paragraph with the wrapper
      p.parentNode?.replaceChild(wrapper, p);
    }
  });
}

// Process FAQ sections (details/summary elements)
function processFAQSections(content: HTMLElement) {
  // Look for details/summary elements (FAQ sections)
  const detailsElements = content.querySelectorAll('details');
  
  detailsElements.forEach((details) => {
    const detailsElement = details as HTMLDetailsElement;
    
    // Skip if already processed
    if (detailsElement.classList.contains('faq-processed')) return;
    
    // Mark as processed
    detailsElement.classList.add('faq-processed');
    
    // Style the details element like the reference image
    detailsElement.className = 'faq-processed my-4 border border-neutral-700 rounded-xl overflow-hidden bg-neutral-900/50';
    
    // Find and style the summary element
    const summary = detailsElement.querySelector('summary');
    if (summary) {
      summary.className = 'w-full flex items-center justify-between p-6 text-left text-white font-medium text-lg cursor-pointer focus:outline-none hover:bg-neutral-800/30 transition-colors';
      
      // Add chevron icon if not present
      if (!summary.querySelector('.faq-chevron')) {
        const chevron = document.createElement('span');
        chevron.className = 'faq-chevron ml-6 flex-shrink-0 transform transition-transform duration-200';
        chevron.innerHTML = `
          <svg class="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        `;
        summary.appendChild(chevron);
      }
    }
    
    // Style the content inside details (everything except summary)
    const contentElements = Array.from(detailsElement.children).filter(child => child.tagName !== 'SUMMARY');
    contentElements.forEach((element) => {
      const el = element as HTMLElement;
      if (!el.classList.contains('faq-content')) {
        el.className = 'faq-content p-6 pt-0 text-neutral-300 leading-relaxed';
      }
    });
    
    // Add event listener to rotate chevron
    detailsElement.addEventListener('toggle', () => {
      const chevron = summary?.querySelector('.faq-chevron');
      if (chevron) {
        if (detailsElement.open) {
          chevron.classList.add('rotated');
        } else {
          chevron.classList.remove('rotated');
        }
      }
    });
  });
}
