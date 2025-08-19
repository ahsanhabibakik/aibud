"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "../Blog/bento-grid";
import { BlogPost, getPosts } from "@/lib/ghost-api";
// Fallback to local data if Ghost API fails
import { blogPosts as fallbackPosts } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import {
  IconUser,
  IconCalendar,
  IconClock,
  IconTag,
  IconSearch,
  IconFilter,
  IconArticle,
  IconBook,
  IconCode,
  IconBrain,
  IconShield,
  IconTrendingUp,
  IconFileText,
} from "@tabler/icons-react";

// Better placeholder with category-specific icons
const BlogImage = ({ imageUrl, title, category }: { imageUrl?: string; title: string; category: string }) => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & technology':
        return <IconBrain className="h-12 w-12" />;
      case 'productivity':
        return <IconTrendingUp className="h-12 w-12" />;
      case 'no-code':
        return <IconCode className="h-12 w-12" />;
      case 'case studies':
        return <IconFileText className="h-12 w-12" />;
      case 'guides':
        return <IconBook className="h-12 w-12" />;
      case 'business strategy':
        return <IconTrendingUp className="h-12 w-12" />;
      case 'security':
        return <IconShield className="h-12 w-12" />;
      default:
        return <IconArticle className="h-12 w-12" />;
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {imageUrl && !imageUrl.includes('/api/placeholder') ? (
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover/bento:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center text-white/70 transition-all duration-300 group-hover/bento:from-blue-500/30 group-hover/bento:via-purple-500/30 group-hover/bento:to-pink-500/30">
          {getCategoryIcon(category)}
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
};

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
    <div className={cn(
      "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border backdrop-blur-sm",
      getCategoryColor(category)
    )}>
      {category}
    </div>
  );
};

const BlogMeta = ({ author, publishedAt, readTime }: { author: string; publishedAt: string; readTime: string }) => (
  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-300 pt-2 border-t border-neutral-700/30">
    <div className="flex items-center gap-1">
      <IconUser className="h-3 w-3 flex-shrink-0" />
      <span className="truncate">{author}</span>
    </div>
    <div className="flex items-center gap-1">
      <IconCalendar className="h-3 w-3 flex-shrink-0" />
      <span>{new Date(publishedAt).toLocaleDateString()}</span>
    </div>
    <div className="flex items-center gap-1">
      <IconClock className="h-3 w-3 flex-shrink-0" />
      <span>{readTime}</span>
    </div>
  </div>
);

interface BlogGridProps {
  initialPosts?: BlogPost[];
}

export function BlogGrid({ initialPosts }: BlogGridProps) {
  const [allPosts, setAllPosts] = useState<BlogPost[]>(initialPosts || []);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts || []);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState(!initialPosts);
  const [error, setError] = useState<string | null>(null);

  // Fetch posts from Ghost CMS if not provided as props
  useEffect(() => {
    if (!initialPosts) {
      fetchPosts();
    }
  }, [initialPosts]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const ghostPosts = await getPosts();

      if (ghostPosts.length === 0) {
        // Fallback to local data if Ghost API returns no posts
        console.warn('No posts found from Ghost API, using fallback data');
        setAllPosts(fallbackPosts);
        setFilteredPosts(fallbackPosts);
      } else {
        setAllPosts(ghostPosts);
        setFilteredPosts(ghostPosts);
      }
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to load posts from Ghost CMS, using fallback data');
      // Use fallback data on error
      setAllPosts(fallbackPosts);
      setFilteredPosts(fallbackPosts);
    } finally {
      setLoading(false);
    }
  };

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(allPosts.map(post => post.category)))];

  // Filter posts based on category and search term
  useEffect(() => {
    let filtered = allPosts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [allPosts, selectedCategory, searchTerm]);

  if (loading) {
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

  return (
    <div className="min-h-screen bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
            AI Buddy Blog
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Discover insights, tips, and stories about AI-powered productivity, automation, and business innovation.
          </p>
          {error && (
            <div className="mt-4 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg text-yellow-200 text-sm max-w-md mx-auto">
              {error}
            </div>
          )}
        </div>

        {/* Search Section */}
        <section id="search" className="mb-8">
          <div className="relative max-w-lg mx-auto">
            <IconSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-neutral-900/50 backdrop-blur-sm border border-neutral-700/50 rounded-2xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
            />
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="mb-16">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-neutral-400 text-sm mb-2 w-full justify-center">
              <IconFilter className="h-4 w-4" />
              <span>Filter by category</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border backdrop-blur-sm",
                    selectedCategory === category
                      ? "bg-blue-600/80 text-white border-blue-500/50 shadow-lg shadow-blue-500/25"
                      : "bg-neutral-800/50 text-neutral-300 border-neutral-700/50 hover:bg-neutral-700/50 hover:text-white hover:border-neutral-600/50"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Results Count */}
        {(searchTerm || selectedCategory !== "All") && (
          <div className="text-center mb-8">
            <p className="text-neutral-400">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>
        )}

        {/* Articles Section */}
        <section id="articles" className="mb-16">
          {filteredPosts.length > 0 ? (
            <BentoGrid className="max-w-7xl mx-auto">
            {filteredPosts.map((post, i) => {
              const totalPosts = filteredPosts.length;

              // Calculate grid positioning with repeating 12-post pattern
              let gridClasses = "";

              // Use modulo to create repeating pattern every 12 posts
              const patternIndex = i % 12;

              // Define the 12-post repeating pattern
              if (patternIndex === 0) {
                // Posts 0, 12, 24, etc.: Large feature card
                gridClasses = "md:col-span-2";
              } else if (patternIndex === 1) {
                // Posts 1, 13, 25, etc.: Wide card on the right
                gridClasses = "md:col-span-1";
              } else if (patternIndex === 5) {
                // Posts 5, 17, 29, etc.: Wide card
                gridClasses = "md:col-span-2";
              } else if (patternIndex === 8) {
                // Posts 8, 20, 32, etc.: Wide card
                gridClasses = "md:col-span-2";
              }
              // Posts 2,3,4,6,7,9,10,11 and their cycle equivalents: Standard 1x1 cards

              return (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <BentoGridItem
                    title={
                      <div className="space-y-2">
                        <CategoryBadge category={post.category} />
                        <h3 className="text-lg font-bold leading-tight text-white group-hover/bento:text-blue-200 transition-colors duration-200 line-clamp-3">
                          {post.title}
                        </h3>
                      </div>
                    }
                    description={
                      <div className="space-y-3">
                        <p className="text-sm leading-relaxed text-neutral-300 line-clamp-4">
                          {post.description}
                        </p>
                        <div className="space-y-3">
                          <BlogMeta
                            author={post.author}
                            publishedAt={post.publishedAt}
                            readTime={post.readTime}
                          />
                          {post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center px-2 py-0.5 rounded-md text-xs bg-neutral-800/60 text-neutral-400 border border-neutral-700/40"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    }
                    header={<BlogImage imageUrl={post.imageUrl} title={post.title} category={post.category} />}
                    className={cn(
                      "cursor-pointer hover:scale-[1.02] transition-all duration-300 border-neutral-700/30 hover:border-neutral-600/50 hover:shadow-2xl hover:shadow-blue-500/10",
                      gridClasses
                    )}
                  />
                </Link>
              );
            })}
            </BentoGrid>
          ) : (
          <div className="text-center py-20">
            <div className="mb-6">
              <IconSearch className="h-16 w-16 text-neutral-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-300 mb-2">No articles found</h3>
              <p className="text-neutral-500">
                Try adjusting your search terms or selected category.
              </p>
            </div>
          </div>
          )}
        </section>

        {/* Load More Button */}
        {/* {filteredPosts.length > 0 && (
          <div className="text-center">
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(147,51,234,0.6)_0%,rgba(147,51,234,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      Load More Articles
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-purple-400/0 via-purple-400/90 to-purple-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
          </div>
        )} */}
      </div>
    </div>
  );
}
