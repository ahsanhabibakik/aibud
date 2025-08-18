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

**Last Updated**: January 2025
**Version**: 1.0
**Maintainer**: Claude AI Assistant

## 🔧 Portfolio Page — Sticky Sub‑Nav vs Global Nav Conflict (Implementation Brief)

**Exact issue:** On the Portfolio page, the local sticky sub‑navigation (filters/tabs shown under the hero) overlaps with the floating/global navbar, causing two nav bars to be visible at the same time and competing for focus. This reduces clarity and introduces confusing focus order on keyboard/tab, especially around the Product Grid header area (see red‑boxed screenshots: top and mid sections).

**Where it occurs (location):**
- Route: `/portfolio` (all breakpoints)
- Sections: Hero → Sticky Sub‑Nav → Filter/Search/Sort toolbar region
- Layers: Global Floating Nav + local Sticky Sub‑Nav

**Expected behavior (UX):**
- Only one primary navigation should be visually and semantically active at any point.
- While the Portfolio **Sticky Sub‑Nav** is pinned/fixed, the **global Floating Nav** is hidden from the viewport and removed from the tab order.
- As soon as the user scrolls above the sticky zone or past the portfolio sections, the global nav gracefully returns (fade/slide) and regains focus order.
- On mobile, the sticky chip row remains scrollable (horizontal) and never sits under another nav.

**Fix requirements (no code):**
1. **Page‑specific navigation**
   - Do **not** reuse `NavBar.tsx` on the Portfolio route. Create a **Portfolio‑specific nav** matching the main UI style (same sizing, rounded pill CTA, dark theme) but scoped to the page.
   - The Portfolio nav should include: back to Home/Logo tap target and the “Book a Call” CTA. All portfolio category filters live in the sticky sub‑nav, not in the global nav.

2. **Single‑nav rule (visibility & focus)**
   - When the **Sticky Sub‑Nav** enters its pinned state, the **global Floating Nav** must be hidden visually (opacity/display) and **removed from the accessibility tree** (e.g., aria‑hidden, pointer‑events off) so keyboard focus cannot land on it.
   - When the sticky state ends (user scrolls above the sticky trigger or past the portfolio area), restore the global nav visibility and focus order.
   - Ensure **no cumulative layout shift** when toggling; reserve vertical space where needed.

3. **Layering and motion**
   - Maintain a clean stacking context to prevent overlap: Sticky Sub‑Nav sits above content but below any modal layers; global nav does not render while the sticky sub‑nav is active.
   - Use existing animation timing/easing from the design system for consistency. Respect **reduced‑motion** preferences (fade only).

4. **Component & file organization**
   - Create a **Portfolio page area** with its own component group. Keep each component in its own folder for clarity (Hero, Sticky Sub‑Nav, Filter/Search/Sort toolbar, Product Grid, Product Card, Case Studies, Integrations Wall, FAQ, Conversion Footer).
   - Place all **portfolio artwork/screenshots** under `public/images/portfolio/` (retain the provided `.gitkeep`). Reuse existing brand/integration logos from `public/images/` when applicable.
   - Add a short **README** in the portfolio component folder that lists the components, responsibilities, and props (no code needed here).

5. **Data & content**
   - Source the portfolio item copy, categories, and sections from the provided **portfolio spec MD**. Keep the labels and chip texts aligned with the spec; keep headlines concise (≤2 lines in hero).

6. **Accessibility & keyboard order**
   - Provide “Skip to content” and “Skip to filters” links at the top of the Portfolio page.
   - While the Sticky Sub‑Nav is active, the hidden global nav must be skipped by tab navigation. Sticky chips form a single‑select group with clear active state. Focus is never obscured by sticky elements.

7. **QA & acceptance criteria**
   - No double‑navbar is visible at any scroll position.
   - On small screens, the chip row never hides behind any other bar; horizontal scroll works with touch and keyboard.
   - Deep links (with filter query) render with the correct active tab.
   - Global nav reappears when leaving the portfolio sections and is fully operable.
   - No CLS ≥ 0.1 introduced by toggling; reduced‑motion paths are equivalent.
   - Check light‑house Core Web Vitals on the page: LCP ≤ 2.5s, TTI ≤ 3.5s.

8. **Risks & mitigations**
   - *Risk*: focus trap between two navs → *Mitigation*: remove hidden nav from tab order and ARIA tree.
   - *Risk*: visual jump when toggling → *Mitigation*: reserve space and use opacity transitions only.
   - *Risk*: z‑index conflicts with modals → *Mitigation*: document z‑index scale and verify against existing modal layers.

**Status icon:** ⛳️ _Open — ready for implementation (Portfolio route)_. Update this section with ✅ once merged, including a short note of what changed and screenshots for before/after.

## 📁 Portfolio Page — Folder & Asset Plan (no code)

**Goal:** Keep Portfolio isolated, easy to iterate, and aligned with existing app‑router patterns.

**Folders (descriptive, not code):**
- App route: `/src/app/portfolio/` (page file + sub‑routes for detail views if used)
- Local components group: `/src/components/sections/Portfolio/`
  - Keep one folder per component (Hero, StickySubNav, FilterToolbar, ProductGrid, ProductCard, CaseStudies, IntegrationsWall, FAQ, FooterCTA)
  - Each folder contains: index file, short MD notes, and any local styles (if applicable)
- Shared UI (if any extracted): continue to live in `/src/components/ui/`

**Assets:**
- Place all portfolio screenshots and artwork in `public/images/portfolio/`.
- Reuse existing integration and brand assets from `public/images/` (e.g., Slack, Stripe, QuickBooks, Telegram, Claude, ChatGPT, Brevo).
- Keep file names semantic; include a lightweight PNG or WEBP for thumbnails. Target image sizes ≤160KB; hero mosaic tiles ≤120KB. 
public =>
|-- clickup-logo.png
|-- file.svg
|-- globe.svg
|-- googleb2be42629c19bb73.html
|-- llms.txt
|-- manifest.json
|-- microsoft-for-startups.png
|-- next.svg
|-- robots.txt
|-- sitemap.xml
|-- vercel.svg
|-- window.svg
|-- images
  |-- agent-gg-logo.jpg
  |-- agent-gg-logo.png
  |-- agent_gg.png
  |-- ai-agent-creation.jpg
  |-- ai-buddy-logo-white.png
  |-- ai-buddy-logo.png
  |-- ai_brain_cpu.jpg
  |-- brain-glass-pc.png
  |-- brevo-logo.jpg
  |-- brevo-logo.png
  |-- brevo-logo.webp
  |-- chatgpt-logo.png
  |-- claude-logo.png
  |-- dark-workstation.jpg
  |-- data-fabric-ai.jpg
  |-- deep-work.jpg
  |-- doc-chain.png
  |-- fabric-ai-new.png
  |-- google-docs-logo.png
  |-- icons8-clickup-480.png
  |-- icons8-gmail-480.png
  |-- icons8-google-calendar-480.png
  |-- icons8-slack-480.png
  |-- io-logo.png
  |-- quickbooks-logo.png
  |-- slack_logo.png
  |-- small-business-owner.jpg
  |-- solopreneur-2.jpg
  |-- startup-garage-logo.png
  |-- stripe-logo.png
  |-- telegram-logo.png
  |-- workflow-3d.png
  |-- workflow-automation.png
  |-- portfolio
    |-- .gitkeep


**Content source:**
- Use the provided `ai_buddy_portfolio_page_ux_content_spec_inspired_by_linktree.md` for copy blocks, categories, labels, and acceptance checks.

**Acceptance checklist:**
- Portfolio compiles without touching global `NavBar.tsx`.
- All components exist under the Portfolio folder group; no cross‑page imports except shared UI.
- Image paths resolve from `public/images/portfolio/` with no 404s.
- Lighthouse baseline (Portfolio route): LCP ≤ 2.5s on 3G Fast; CLS ≤ 0.1; JS payload for the route within current site norms.
