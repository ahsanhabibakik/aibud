import { Suspense } from 'react';
import { BlogGrid } from '@/components/sections/BlogGrid';
import { getPosts } from '@/lib/ghost-api';
import { Metadata } from "next";

// Loading component for the blog
function BlogLoading() {
  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-neutral-400">Loading blog posts...</p>
        </div>
      </div>
    </div>
  );
}

// Server component to fetch posts
async function BlogContent() {
  try {
    const posts = await getPosts();
    return <BlogGrid initialPosts={posts} />;
  } catch (error) {
    console.error('Error fetching posts in page:', error);
    // Fallback to client-side rendering if server-side fails
    return <BlogGrid />;
  }
}

export default function BlogPage() {
  return (
    <Suspense fallback={<BlogLoading />}>
      <BlogContent />
    </Suspense>
  );
}

export const metadata: Metadata = {
  title: 'AI Buddy Blog - Insights on AI, Productivity & Automation',
  description: 'Discover insights, tips, and stories about AI-powered productivity, automation, and business innovation. Learn about AI tools, no-code solutions, business strategy, and productivity hacks.',
  keywords: 'AI blog, productivity tips, automation guides, business strategy, no-code solutions, AI tools, productivity blog, business innovation',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'AI Buddy Blog - Insights on AI, Productivity & Automation',
    description: 'Discover insights, tips, and stories about AI-powered productivity, automation, and business innovation.',
    url: 'https://aibud.ca/blog',
    type: 'website',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Buddy Blog - AI and Productivity Insights',
      },
    ],
  },
  twitter: {
    title: 'AI Buddy Blog - Insights on AI, Productivity & Automation',
    description: 'Discover insights, tips, and stories about AI-powered productivity, automation, and business innovation.',
    images: ['/og-blog.jpg'],
  },
};

// Disable caching to ensure fresh content
export const dynamic = 'force-dynamic';
