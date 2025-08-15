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

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Business Automation",
    description: "Explore how AI is revolutionizing business processes and automating complex workflows to boost productivity and efficiency.",
    category: "AI & Technology",
    author: "Sarah Johnson",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    tags: ["AI", "Automation", "Business", "Productivity"],
    slug: "future-ai-business-automation",
    html: "<p>Explore how AI is revolutionizing business processes and automating complex workflows to boost productivity and efficiency.</p>",
    url: "/blog/future-ai-business-automation"
  },
  {
    id: "2",
    title: "10 Productivity Hacks for Remote Teams",
    description: "Discover proven strategies and tools that help remote teams stay organized, collaborative, and highly productive.",
    category: "Productivity",
    author: "Michael Chen",
    publishedAt: "2024-01-12",
    readTime: "6 min read",
    tags: ["Remote Work", "Team Management", "Productivity", "Tools"],
    slug: "productivity-hacks-remote-teams",
    html: "<p>Discover proven strategies and tools that help remote teams stay organized, collaborative, and highly productive.</p>",
    url: "/blog/productivity-hacks-remote-teams"
  },
  {
    id: "3",
    title: "Building Scalable Workflows with No-Code Tools",
    description: "Learn how to create powerful, scalable business workflows without writing a single line of code using modern no-code platforms.",
    category: "No-Code",
    author: "Emma Rodriguez",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    tags: ["No-Code", "Workflows", "Automation", "Business Process"],
    slug: "scalable-workflows-no-code-tools",
    html: "<p>Learn how to create powerful, scalable business workflows without writing a single line of code using modern no-code platforms.</p>",
    url: "/blog/scalable-workflows-no-code-tools"
  },
  {
    id: "4",
    title: "Customer Success Stories: AI Transformations",
    description: "Real stories from businesses that have successfully implemented AI solutions and transformed their operations.",
    category: "Case Studies",
    author: "David Park",
    publishedAt: "2024-01-08",
    readTime: "15 min read",
    tags: ["Case Study", "AI Implementation", "Success Stories", "ROI"],
    slug: "customer-success-ai-transformations",
    html: "<p>Real stories from businesses that have successfully implemented AI solutions and transformed their operations.</p>",
    url: "/blog/customer-success-ai-transformations"
  },
  {
    id: "5",
    title: "Getting Started with AI Copilots",
    description: "A beginner's guide to understanding and implementing AI copilots in your daily workflow for maximum efficiency.",
    category: "Guides",
    author: "Lisa Wang",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    tags: ["AI Copilot", "Getting Started", "Guide", "Beginner"],
    slug: "getting-started-ai-copilots",
    html: "<p>A beginner's guide to understanding and implementing AI copilots in your daily workflow for maximum efficiency.</p>",
    url: "/blog/getting-started-ai-copilots"
  },
  {
    id: "6",
    title: "The ROI of Business Process Automation",
    description: "Calculating the return on investment for automation initiatives and measuring their impact on business growth.",
    category: "Business Strategy",
    author: "Robert Martinez",
    publishedAt: "2024-01-03",
    readTime: "9 min read",
    tags: ["ROI", "Business Strategy", "Automation", "Growth"],
    slug: "roi-business-process-automation",
    html: "<p>Calculating the return on investment for automation initiatives and measuring their impact on business growth.</p>",
    url: "/blog/roi-business-process-automation"
  },
  {
    id: "7",
    title: "Security Best Practices for AI Systems",
    description: "Essential security considerations and best practices when implementing AI systems in enterprise environments.",
    category: "Security",
    author: "Jennifer Lee",
    publishedAt: "2024-01-01",
    readTime: "14 min read",
    tags: ["Security", "AI Systems", "Enterprise", "Best Practices"],
    slug: "security-best-practices-ai-systems",
    html: "<p>Essential security considerations and best practices when implementing AI systems in enterprise environments.</p>",
    url: "/blog/security-best-practices-ai-systems"
  },
  {
    id: "8",
    title: "Scaling AI Solutions for Enterprise Growth",
    description: "A comprehensive guide to scaling AI implementations from pilot projects to enterprise-wide deployments with measurable ROI.",
    category: "Enterprise",
    author: "Alex Thompson",
    publishedAt: "2023-12-28",
    readTime: "11 min read",
    tags: ["Enterprise", "Scaling", "AI Implementation", "Growth"],
    slug: "scaling-ai-solutions-enterprise-growth",
    html: "<p>A comprehensive guide to scaling AI implementations from pilot projects to enterprise-wide deployments with measurable ROI.</p>",
    url: "/blog/scaling-ai-solutions-enterprise-growth"
  },
  {
    id: "9",
    title: "AI Ethics and Responsible Implementation",
    description: "Navigate the ethical considerations and responsible practices when implementing AI systems in modern organizations.",
    category: "AI & Technology",
    author: "Dr. Maria Santos",
    publishedAt: "2023-12-25",
    readTime: "13 min read",
    tags: ["AI Ethics", "Responsible AI", "Implementation", "Best Practices"],
    slug: "ai-ethics-responsible-implementation",
    html: "<p>Navigate the ethical considerations and responsible practices when implementing AI systems in modern organizations.</p>",
    url: "/blog/ai-ethics-responsible-implementation"
  },
  {
    id: "10",
    title: "AI Ethics and Responsible Implementation",
    description: "Navigate the ethical considerations and responsible practices when implementing AI systems in modern organizations.",
    category: "AI & Technology",
    author: "Dr. Maria Santos",
    publishedAt: "2023-12-25",
    readTime: "13 min read",
    tags: ["AI Ethics", "Responsible AI", "Implementation", "Best Practices"],
    slug: "ai-ethics-responsible-implementation-2",
    html: "<p>Navigate the ethical considerations and responsible practices when implementing AI systems in modern organizations.</p>",
    url: "/blog/ai-ethics-responsible-implementation-2"
  },
  {
    id: "11",
    title: "AI Ethics and Responsible Implementation",
    description: "Navigate the ethical considerations and responsible practices when implementing AI systems in modern organizations.",
    category: "AI & Technology",
    author: "Dr. Maria Santos",
    publishedAt: "2023-12-25",
    readTime: "13 min read",
    tags: ["AI Ethics", "Responsible AI", "Implementation", "Best Practices"],
    slug: "ai-ethics-responsible-implementation-3",
    html: "<p>Navigate the ethical considerations and responsible practices when implementing AI systems in modern organizations.</p>",
    url: "/blog/ai-ethics-responsible-implementation-3"
  },
  {
    id: "12",
    title: "AI Ethics and Responsible Implementation",
    description: "Navigate the ethical considerations and responsible practices when implementing AI systems in modern organizations.",
    category: "AI & Technology",
    author: "Dr. Maria Santos",
    publishedAt: "2023-12-25",
    readTime: "13 min read",
    tags: ["AI Ethics", "Responsible AI", "Implementation", "Best Practices"],
    slug: "ai-ethics-responsible-implementation-4",
    html: "<p>Navigate the ethical considerations and responsible practices when implementing AI systems in modern organizations.</p>",
    url: "/blog/ai-ethics-responsible-implementation-4"
  },

];
