// Basic HTML sanitizer without external dependencies
function basicSanitize(html: string): string {
  if (!html) return '';

  // Basic XSS protection - remove script tags and event handlers
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/<iframe[^>]*src="(?!https:\/\/www\.youtube\.com\/embed\/)[^"]*"[^>]*>/gi, '');
}

// Configuration for allowed content (for future DOMPurify implementation)
const SANITIZE_CONFIG = {
  ALLOWED_TAGS: [
    'p', 'br', 'strong', 'em', 'u', 'strike', 'del', 'ins',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'ul', 'ol', 'li',
    'blockquote', 'q',
    'a', 'img', 'figure', 'figcaption',
    'table', 'thead', 'tbody', 'tr', 'th', 'td',
    'pre', 'code',
    'iframe', 'embed', 'object',
    'div', 'span', 'section', 'article',
    'hr', 'sub', 'sup',
    'abbr', 'acronym', 'address', 'cite', 'dfn', 'kbd', 'samp', 'var',
    'details', 'summary'
  ],
  ALLOWED_ATTR: [
    'href', 'title', 'alt', 'src', 'width', 'height',
    'class', 'id', 'style',
    'target', 'rel', 'noopener', 'noreferrer',
    'data-*',
    'frameborder', 'allowfullscreen', 'allow',
    'loading', 'decoding',
    'colspan', 'rowspan',
    'type', 'start', 'reversed'
  ],
  ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|xxx):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  ADD_TAGS: ['iframe'],
  ADD_ATTR: ['target', 'allow', 'allowfullscreen', 'frameborder', 'scrolling']
};

/**
 * Sanitize HTML content from Ghost CMS
 * @param html - Raw HTML string from Ghost
 * @returns Sanitized HTML string safe for rendering
 */
export function sanitizeContent(html: string): string {
  if (!html) return '';

  // First pass: Basic sanitization
  let sanitized = basicSanitize(html);

  // Second pass: Custom processing for specific content types
  sanitized = processYouTubeUrls(sanitized);
  sanitized = processImageUrls(sanitized);
  sanitized = processCodeBlocks(sanitized);
  sanitized = addSecurityAttributes(sanitized);

  return sanitized;
}

/**
 * Convert YouTube URLs to proper embed format
 */
function processYouTubeUrls(html: string): string {
  // Convert YouTube watch URLs to embed URLs
  return html.replace(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/g,
    '<iframe src="https://www.youtube.com/embed/$1" frameborder="0" allowfullscreen class="youtube-embed"></iframe>'
  );
}

/**
 * Optimize image URLs and add proper attributes
 */
function processImageUrls(html: string): string {
  return html.replace(
    /<img([^>]*?)src="([^"]*?)"([^>]*?)>/g,
    (match, before, src, after) => {
      // Add loading="lazy" if not present
      const hasLoading = /loading\s*=/.test(before + after);
      const loadingAttr = hasLoading ? '' : ' loading="lazy"';

      // Add decoding="async" if not present
      const hasDecoding = /decoding\s*=/.test(before + after);
      const decodingAttr = hasDecoding ? '' : ' decoding="async"';

      return `<img${before}src="${src}"${after}${loadingAttr}${decodingAttr}>`;
    }
  );
}

/**
 * Process code blocks for better syntax highlighting
 */
function processCodeBlocks(html: string): string {
  // Add language detection for code blocks
  return html.replace(
    /<pre><code([^>]*?)>([\s\S]*?)<\/code><\/pre>/g,
    (match, attributes, content) => {
      // Try to detect language from content patterns
      const language = detectLanguage(content);
      const langClass = language ? ` class="language-${language}"` : '';

      return `<pre><code${attributes}${langClass}>${content}</code></pre>`;
    }
  );
}

/**
 * Simple language detection for code blocks
 */
function detectLanguage(code: string): string | null {
  const trimmed = code.trim();

  // JavaScript/TypeScript patterns
  if (/(function|const|let|var|=>|import|export|interface|type)/.test(trimmed)) {
    return 'javascript';
  }

  // CSS patterns
  if (/(\.[\w-]+\s*{|@media|@import|display:|flex:|grid:)/.test(trimmed)) {
    return 'css';
  }

  // HTML patterns
  if (/<\/?[a-z][\s\S]*>/i.test(trimmed)) {
    return 'html';
  }

  // JSON patterns
  if (/^\s*[\[{]/.test(trimmed) && /[\]}]\s*$/.test(trimmed)) {
    try {
      JSON.parse(trimmed);
      return 'json';
    } catch {
      // Not valid JSON
    }
  }

  // Shell/Bash patterns
  if (/(#!\/bin\/|npm\s|yarn\s|git\s|curl\s|wget\s|sudo\s)/.test(trimmed)) {
    return 'bash';
  }

  // Python patterns
  if (/(def\s|import\s|from\s|print\(|if __name__)/.test(trimmed)) {
    return 'python';
  }

  return null;
}

/**
 * Add security attributes to external links
 */
function addSecurityAttributes(html: string): string {
  return html.replace(
    /<a([^>]*?)href="(https?:\/\/[^"]*?)"([^>]*?)>/g,
    (match, before, href, after) => {
      // Check if it's an external link
      const hostname = typeof window !== 'undefined' ? window.location.hostname : 'aibud.ca';
      const isExternal = !href.includes(hostname);

      if (isExternal) {
        // Add security attributes if not present
        const hasTarget = /target\s*=/.test(before + after);
        const hasRel = /rel\s*=/.test(before + after);

        const targetAttr = hasTarget ? '' : ' target="_blank"';
        const relAttr = hasRel ? '' : ' rel="noopener noreferrer"';

        return `<a${before}href="${href}"${after}${targetAttr}${relAttr}>`;
      }

      return match;
    }
  );
}

/**
 * Extract and clean text content from HTML (useful for previews)
 */
export function extractTextContent(html: string, maxLength: number = 160): string {
  if (!html) return '';

  // Remove HTML tags and decode entities
  const text = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();

  if (text.length <= maxLength) return text;

  // Truncate at word boundary
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
}

/**
 * Calculate estimated reading time from HTML content
 */
export function calculateReadingTime(html: string): number {
  const text = extractTextContent(html);
  const wordsPerMinute = 200; // Average reading speed
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
