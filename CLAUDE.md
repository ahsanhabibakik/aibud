# CLAUDE.md - AI Buddy Landing Page Documentation

This document serves as a comprehensive guide for Claude to understand the AI Buddy landing page codebase, providing context for future interactions and development tasks.

## Project Overview

**AI Buddy Landing Page** is a modern, sleek single-page application for AI Buddy, an all-in-one AI productivity copilot that helps users streamline business workflows. The project showcases the company's services and their flagship product Agent GG.

### Key Information
- **Company**: AI Buddy (domain: aibud.ca)
- **Product**: Agent GG - AI-powered productivity copilot
- **Target Audience**: Solopreneurs, small business owners, and productivity-focused professionals
- **Business Model**: Demo-based sales with Calendly integration

## Technology Stack

### Core Technologies
- **Framework**: Next.js 15.3.2 with App Router
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS v4 with dark mode enabled by default
- **Animations**: Framer Motion 12.12.1
- **Icons**: Tabler Icons 3.33.0, Lucide React 0.510.0, React Icons 5.5.0

### Key Dependencies
- **Content Management**: Ghost CMS integration (@tryghost/content-api 1.11.25)
- **3D Graphics**: @react-three/fiber 9.1.2, Three.js 0.176.0
- **Particles**: @tsparticles/react 3.0.0
- **Typography**: @tailwindcss/typography 0.5.16
- **Security**: isomorphic-dompurify 2.25.0
- **Code Highlighting**: react-syntax-highlighter 15.6.1

### Development Server
- **Port**: 3001 (configured in README.md)
- **Analytics**: Google Tag Manager (GTM-KCS53CSX)

## Project Structure

```
/src
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with GTM and fonts
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles and rich content CSS
│   ├── agentgg/page.tsx     # Agent GG product page
│   ├── blog/                # Blog functionality
│   │   ├── page.tsx         # Blog listing page
│   │   └── [slug]/page.tsx  # Individual blog posts
│   └── privacy/page.tsx     # Privacy policy page
├── components/              # React components
│   ├── NavBar.tsx          # Main navigation
│   ├── AgentGGNavBar.tsx   # Agent GG specific navigation
│   ├── Blog/               # Blog-specific components
│   ├── BlogContent/        # Blog content rendering
│   ├── sections/           # Page sections
│   │   ├── Home/          # Home page sections
│   │   └── AgentGG/       # Agent GG page sections
│   └── ui/                # Reusable UI components
├── lib/                    # Utility libraries
│   ├── utils.ts           # Tailwind utilities
│   ├── ghost-api.ts       # Ghost CMS API integration
│   ├── blog-data.ts       # Fallback blog data
│   └── content-sanitizer.ts # HTML sanitization
├── hooks/                  # Custom React hooks
│   └── useOptimizedContent.ts # Content optimization
└── types/                  # TypeScript definitions
    └── ghost.d.ts         # Ghost CMS types
```

## Core Features

### 1. Landing Page Sections

#### Home Page (src/app/page.tsx)
1. **Hero Section** - Aurora background with AI Buddy logo and main CTA
2. **Target Audience Section** - 3D cards showcasing user types
3. **Flagship Product Section** - Agent GG showcase with 3D animation
4. **Our Services Section** - Sticky scroll reveal of 6 key features
5. **Why Choose Us Section** - Interactive background boxes
6. **Partners Section** - GlareCard effects for partner logos
7. **Integration Section** - Canvas reveal effects for integrations
8. **Process Section** - Timeline with tracing beam
9. **CTA Section** - Background beams with contact form
10. **Footer Section** - Company info and social links

#### Agent GG Page (src/app/agentgg/page.tsx)
1. **Hero Section** - Product demo with Loom video
2. **Problem Statement** - Target pain points
3. **Features Section** - 9 key features in responsive grid
4. **How It Works Section** - Process explanation
5. **Integrations Section** - Supported platforms
6. **ROI Section** - Performance metrics and testimonials
7. **Competitor Comparison** - Feature comparison table
8. **Waitlist Section** - Email signup form

### 2. Blog System

#### Ghost CMS Integration
- **Server-side rendering** for optimal SEO
- **Static generation** for individual posts
- **Client-side fallback** to local data
- **Category-based filtering** (7 categories)
- **Real-time search** functionality
- **Responsive Bento Grid** layout

#### Content Processing
- **HTML Sanitization** with DOMPurify
- **Rich content rendering** with enhanced styling
- **Code block highlighting** with copy functionality
- **Image optimization** with lazy loading
- **YouTube embed** processing
- **CTA button** auto-styling

### 3. UI Components

#### Animation Components
- **Aurora Background** - Animated gradient backgrounds
- **Text Generate Effect** - Typewriter-style text animation
- **Sparkles Effect** - Particle-based animations
- **3D Card Effect** - Mouse-tracking 3D cards
- **Tracing Beam** - Visual scroll tracking
- **Background Gradient** - Animated gradient effects
- **Glowing Effect** - Interactive border glowing
- **Spotlight** - Animated spotlight effects

#### Navigation Components
- **Floating Navbar** - Scroll-responsive navigation
- **Smooth Scrolling** - Section-based navigation
- **Mobile-friendly** - Hamburger menu for small screens
- **Page-specific** - Different navbars for different pages

#### Interactive Components
- **Canvas Reveal Effect** - Hover-triggered content reveals
- **Background Boxes** - Interactive grid animations
- **Container Scroll** - 3D scroll animations
- **Sticky Scroll Reveal** - Progressive content reveal
- **GlareCard** - Premium interactive cards

## Business Logic

### Navigation Structure
```javascript
// Main Navigation (Home Page)
const navItems = [
  { name: "Home", link: "/", icon: FaHome },
  { name: "Audience", link: "#audience", icon: FaUsers },
  { name: "Product", link: "#product", icon: FaRobot },
  { name: "Services", link: "#services", icon: FaCogs },
  { name: "Integrations", link: "#integrations", icon: FaPlug },
  { name: "Process", link: "#process", icon: FaProjectDiagram },
  { name: "Agent GG", link: "/agentgg", icon: FaRobot }
]

// Agent GG Navigation
const agentGGNavItems = [
  { name: "Home", link: "/" },
  { name: "Success Metrices", link: "#roi" },
  { name: "Features", link: "#features" },
  { name: "How It Works", link: "#howItWorks" },
  { name: "Integrations", link: "#integrations" },
  { name: "Results", link: "#roi" }
]
```

### Key External Integrations
- **Calendly**: https://calendly.com/msohanh/ai-discussion
- **Google Tag Manager**: GTM-KCS53CSX
- **Ghost CMS**: Content API integration
- **Domain**: aibud.ca

### Agent GG Features (9 Core Features)
1. **Daily Task Prioritization** - 7 AM Email
2. **ClickUp-to-Calendar Integration** - Seamless scheduling
3. **The One Thing Focus** - Priority identification
4. **80/20 (Pareto) Analysis** - Efficiency optimization
5. **Bias Checker** - Decision support
6. **Procrastination Helper** - Productivity boost
7. **Context-Aware Intelligence** - Smart recommendations
8. **Automated Executive Summaries** - Content synthesis
9. **Automatic Note Taking** - Meeting documentation

### Supported Integrations (10 platforms)
1. **ClickUp** - Project management
2. **Google Calendar** - Scheduling
3. **Gmail** - Email automation
4. **Slack** - Team communication
5. **Stripe** - Payment processing
6. **QuickBooks** - Bookkeeping
7. **Telegram** - Messaging
8. **Claude** - AI assistance
9. **ChatGPT** - Conversational AI
10. **Brevo** - Email marketing

## Content Management

### Blog Categories
1. **AI & Technology** (Blue theme)
2. **Productivity** (Green theme)
3. **No-Code** (Purple theme)
4. **Case Studies** (Orange theme)
5. **Guides** (Teal theme)
6. **Business Strategy** (Red theme)
7. **Security** (Yellow theme)

### Content Types
- **Ghost CMS Posts** - Primary content source
- **Local Fallback Data** - Backup content (blog-data.ts)
- **Rich Content** - Enhanced HTML with styling
- **Code Blocks** - Syntax-highlighted with copy functionality
- **Media Embeds** - YouTube videos and images

## Styling System

### Design Principles
- **Dark Mode First** - Forced dark theme
- **Modern Aesthetics** - Purple/blue gradient themes
- **Responsive Design** - Mobile-first approach
- **Smooth Animations** - Framer Motion throughout
- **Interactive Elements** - Hover effects and micro-interactions

### Color Scheme
- **Primary Background**: #0a0a0a (black)
- **Text Primary**: #ededed (light gray)
- **Accent Colors**: Purple/blue gradients
- **Interactive**: Blue-400/500 variants
- **Success**: Green variants
- **Warning**: Yellow variants

### Typography
- **Sans Font**: Geist (--font-geist-sans)
- **Mono Font**: Geist Mono (--font-geist-mono)
- **Rich Content**: Enhanced prose styling
- **Gradient Text**: Brand headings with gradients

## Development Guidelines

### Key Commands
```bash
npm run dev     # Start development server on port 3001
npm run build   # Production build
npm run start   # Production server
npm run lint    # ESLint checking
```

### Environment Variables
```env
NEXT_PUBLIC_GHOST_URL=https://your-ghost-site.ghost.io
NEXT_PUBLIC_GHOST_CONTENT_API_KEY=your-content-api-key
```

### File Naming Conventions
- **Pages**: kebab-case (privacy/page.tsx)
- **Components**: PascalCase (HeroSection.tsx)
- **Utilities**: camelCase (utils.ts)
- **Sections**: Descriptive names (OurServicesSection.tsx)

### Code Organization
- **Client Components**: "use client" directive for interactivity
- **Server Components**: Default for SSR and performance
- **Type Safety**: Full TypeScript implementation
- **Error Handling**: Comprehensive try-catch blocks
- **Accessibility**: ARIA attributes and semantic HTML

## SEO & Performance

### Meta Configuration
- **Title**: "AI Buddy - Your All-in-One AI Productivity Copilot"
- **Description**: "Turn scattered GPT experiments into your streamlined business workflow—instantly."
- **Open Graph**: Configured for social sharing
- **Sitemap**: Available at /sitemap.xml
- **Robots.txt**: SEO-friendly crawling rules
- **LLMs.txt**: AI content discovery guide

### Performance Optimizations
- **Static Generation**: Blog posts pre-generated
- **Image Optimization**: Next.js automatic optimization
- **Lazy Loading**: Components and images load on demand
- **Code Splitting**: Automatic route-based splitting
- **Caching**: Browser and CDN caching strategies

## Security Measures

### Content Security
- **HTML Sanitization**: DOMPurify integration
- **XSS Protection**: Comprehensive input sanitization
- **External Links**: Proper rel attributes
- **CSP Headers**: Content Security Policy implementation

### Data Protection
- **Privacy Policy**: Comprehensive GDPR compliance
- **No Data Collection**: Minimal user data processing
- **Secure Forms**: Proper form validation and sanitization

## Common Tasks & Patterns

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to page layout
3. Update navigation if needed
4. Add responsive styling
5. Test animations and interactions

### Modifying UI Components
1. Locate in `src/components/ui/`
2. Update props interface if needed
3. Maintain animation consistency
4. Test across breakpoints
5. Update documentation

### Blog Content Updates
1. **Ghost CMS**: Add content via Ghost admin
2. **Local Fallback**: Update `blog-data.ts`
3. **Styling**: Modify `rich-content` CSS classes
4. **Categories**: Update category mapping in `ghost-api.ts`

### Integration Updates
1. Add integration data to `IntegrationSection.tsx`
2. Include brand colors and icons
3. Update integration count displays
4. Test canvas reveal animations
5. Update documentation

## Troubleshooting

### Common Issues
1. **Ghost API Errors**: Check environment variables and connection
2. **Animation Glitches**: Verify Framer Motion versions and keys
3. **Styling Issues**: Check Tailwind configuration and dark mode
4. **Build Errors**: Verify TypeScript types and imports
5. **Performance**: Check image optimization and lazy loading

### Debug Commands
```bash
npm run lint          # Check for linting errors
npm run build         # Test production build
npx next info         # Environment information
```

### Environment Checks
- Verify Node.js version compatibility
- Check Next.js and React versions
- Confirm environment variables
- Test Ghost CMS connectivity
- Validate image paths and assets

## Contact Information

### Key Personnel
- **Developer Contact**: sohan.h777@gmail.com
- **Privacy Contact**: privacy@agentgg.ai
- **Business Inquiries**: Via Calendly integration

### External Resources
- **Domain**: https://aibud.ca
- **Calendly**: https://calendly.com/msohanh/ai-discussion
- **Ghost CMS**: Configured via environment variables
- **GitHub**: Repository for version control

---

*This documentation was generated to provide Claude with comprehensive context about the AI Buddy landing page codebase. It should be updated as the project evolves to maintain accuracy and usefulness for future development tasks.*
*import note about code  & follow*
- chunk by chunk means file by file  commit on git - use my profile git config user.email , don't use claude profile. (dont commit every time if i mention then only commit)
- on text don't use "'" this cos on build it create error
- write code high optimize for not create any build error  

**Last Updated**: January 2025
**Version**: 1.0
**Maintainer**: Claude AI Assistant