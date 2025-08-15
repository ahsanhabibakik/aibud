import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL || 'https://demo.ghost.io',
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY || '22444f78447824223cefc48062',
  version: "v5.0"
});

// Updated BlogPost interface to match Ghost's structure
export interface GhostPost {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  comment_id: string;
  feature_image: string | null;
  featured: boolean;
  visibility: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt: string | null;
  codeinjection_head: string | null;
  codeinjection_foot: string | null;
  custom_template: string | null;
  canonical_url: string | null;
  tags: Array<{
    id: string;
    name: string;
    slug: string;
    description: string | null;
    feature_image: string | null;
    visibility: string;
    og_image: string | null;
    og_title: string | null;
    og_description: string | null;
    twitter_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;
    meta_title: string | null;
    meta_description: string | null;
    created_at: string;
    updated_at: string;
  }>;
  authors: Array<{
    id: string;
    name: string;
    slug: string;
    email: string;
    profile_image: string | null;
    cover_image: string | null;
    bio: string | null;
    website: string | null;
    location: string | null;
    facebook: string | null;
    twitter: string | null;
    meta_title: string | null;
    meta_description: string | null;
    url: string;
  }>;
  primary_author: {
    id: string;
    name: string;
    slug: string;
    email: string;
    profile_image: string | null;
    cover_image: string | null;
    bio: string | null;
    website: string | null;
    location: string | null;
    facebook: string | null;
    twitter: string | null;
    meta_title: string | null;
    meta_description: string | null;
    url: string;
  };
  primary_tag: {
    id: string;
    name: string;
    slug: string;
    description: string | null;
    feature_image: string | null;
    visibility: string;
    og_image: string | null;
    og_title: string | null;
    og_description: string | null;
    twitter_image: string | null;
    twitter_title: string | null;
    twitter_description: string | null;
    meta_title: string | null;
    meta_description: string | null;
    created_at: string;
    updated_at: string;
  } | null;
  url: string;
  excerpt: string;
  reading_time: number;
  access: boolean;
  og_image: string | null;
  og_title: string | null;
  og_description: string | null;
  twitter_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  meta_title: string | null;
  meta_description: string | null;
}

// Transformed BlogPost interface to match current component structure
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: string;
  imageUrl?: string;
  tags: string[];
  slug: string;
  html: string;
  url: string;
}

// Function to transform Ghost post to BlogPost format
function transformGhostPost(ghostPost: GhostPost): BlogPost {
  const calculateReadTime = (readingTime: number): string => {
    return `${readingTime} min read`;
  };

  const getCategoryFromTags = (tags: GhostPost['tags']): string => {
    if (!tags || tags.length === 0) return 'General';

    // You can customize this mapping based on your tag structure
    const tag = tags[0];
    const tagName = tag.name.toLowerCase();

    if (tagName.includes('ai') || tagName.includes('technology')) return 'AI & Technology';
    if (tagName.includes('productivity')) return 'Productivity';
    if (tagName.includes('no-code') || tagName.includes('nocode')) return 'No-Code';
    if (tagName.includes('case') || tagName.includes('study')) return 'Case Studies';
    if (tagName.includes('guide') || tagName.includes('tutorial')) return 'Guides';
    if (tagName.includes('business') || tagName.includes('strategy')) return 'Business Strategy';
    if (tagName.includes('security')) return 'Security';

    return tag.name;
  };

  return {
    id: ghostPost.id,
    title: ghostPost.title,
    description: ghostPost.custom_excerpt || ghostPost.excerpt,
    category: getCategoryFromTags(ghostPost.tags),
    author: ghostPost.primary_author.name,
    publishedAt: ghostPost.published_at,
    readTime: calculateReadTime(ghostPost.reading_time),
    imageUrl: ghostPost.feature_image || undefined,
    tags: ghostPost.tags.map(tag => tag.name),
    slug: ghostPost.slug,
    html: ghostPost.html,
    url: ghostPost.url
  };
}

// Get all posts
export async function getPosts(): Promise<BlogPost[]> {
  try {
    const posts = await api.posts.browse({
      include: "tags,authors",
      limit: "all"
    });

    return posts.map(transformGhostPost);
  } catch (err) {
    console.error('Error fetching posts from Ghost:', err);
    return [];
  }
}

// Get a single post by slug
export async function getSinglePost(postSlug: string): Promise<BlogPost | null> {
  try {
    const post = await api.posts.read({
      slug: postSlug,
      include: "tags,authors"
    });

    return transformGhostPost(post);
  } catch (err) {
    console.error('Error fetching single post from Ghost:', err);
    return null;
  }
}

// Get all pages
export async function getPages() {
  try {
    return await api.pages.browse({
      limit: "all"
    });
  } catch (err) {
    console.error('Error fetching pages from Ghost:', err);
    return [];
  }
}

// Get author by slug
export async function getAuthor(authorSlug: string) {
  try {
    return await api.authors.read({
      slug: authorSlug
    });
  } catch (err) {
    console.error('Error fetching author from Ghost:', err);
    return null;
  }
}

// Get all authors
export async function getAllAuthors() {
  try {
    return await api.authors.browse({
      limit: "all"
    });
  } catch (err) {
    console.error('Error fetching authors from Ghost:', err);
    return [];
  }
}
