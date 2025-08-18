import { notFound } from 'next/navigation';
import { getSinglePost, getPosts } from '@/lib/ghost-api';
import { RichContentRenderer } from '@/components/BlogContent/RichContentRenderer';
import { BlogPostClient } from '@/components/BlogContent/BlogPostClient';
import Image from 'next/image';
import {
  IconUser,
  IconCalendar,
  IconClock,
  IconTag,
  IconArrowLeft,
} from '@tabler/icons-react';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    // Return some default fallback params to prevent build failure
    return [
      { slug: 'welcome' },
      { slug: 'design' },
      { slug: 'write' }
    ];
  }
}

const CategoryBadge = ({ category }: { category: string }) => {
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & technology':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'productivity':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'no-code':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'case studies':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'guides':
        return 'bg-teal-500/20 text-teal-300 border-teal-500/30';
      case 'business strategy':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'security':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm ${getCategoryColor(category)}`}>
      {category}
    </div>
  );
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const post = await getSinglePost(slug);

    if (!post) {
      notFound();
    }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative">
        {post.imageUrl && (
          <div className="relative h-64 md:h-96 overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
        )}

        <div className="relative -mt-32 md:-mt-48 z-10">
          <div className="max-w-4xl mx-auto px-4 py-20">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-200 mb-8"
            >
              <IconArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Category */}
            <div className="mb-4">
              <CategoryBadge category={post.category} />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-neutral-400 border-t border-neutral-700/30 pt-6">
              <div className="flex items-center gap-2">
                <IconUser className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconCalendar className="h-5 w-5" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <IconClock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Content - Now using client component for optimization */}
      <BlogPostClient html={post.html} />

      {/* Related Posts Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 border-t border-neutral-700/30">
        <div className="text-center">
          <Link
            href="/blog"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2">
              <IconArrowLeft className="h-4 w-4" />
              Back to All Posts
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const post = await getSinglePost(slug);

    if (!post) {
      return {
        title: 'Post Not Found',
        description: 'The requested blog post could not be found.',
      };
    }

  return {
    title: `${post.title} | AI Buddy Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.imageUrl ? [post.imageUrl] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'AI Buddy Blog',
      description: 'Blog posts about AI, productivity, and business automation.',
    };
  }
}

// Enable static generation with revalidation
export const revalidate = 3600; // Revalidate every hour
