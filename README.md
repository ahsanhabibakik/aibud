# AI Buddy Landing Page

A modern, sleek single-page landing page for AI Buddy, an all-in-one AI productivity copilot that helps users streamline business workflows.

## Features

- Built with Next.js app router
- Tailwind CSS v4 for styling
- Framer Motion for smooth animations
- Custom Aceternity-inspired UI components:
  - Aurora Background
  - Text Generate Effect
  - Sparkles Effect with Particles
  - 3D Card Effect with Direction Aware Hover
  - Tracing Beam for visual path tracking during scrolling
  - Floating Navbar that hides on scroll down and reveals on scroll up with smooth scrolling navigation
  - Bento Grid for dynamic content layouts
- Unified workflow-automation.png imagery across sections with interactive functionality
- Clickable elements for improved user engagement
- Dark theme forced by default using Tailwind's 'dark' class (ignores system preferences)
- Legal pages including Privacy Policy
- Direct navigation to Agent GG page from the navbar
- Calendly integration for booking calls directly from the navigation bar
- Google Tag Manager (GTM) integration for analytics and tracking
- Dynamic blog page with Bento Grid layout for articles and insights
- **Ghost CMS Integration** - Headless CMS integration for blog content management

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Analytics & Tracking

### Google Tag Manager (GTM)
The project includes Google Tag Manager implementation for analytics and tracking purposes:

- **GTM Container ID**: GTM-KCS53CSX
- **Implementation**: Modern implementation using `@next/third-parties/google` package
- **Package**: Uses the official Vercel-maintained third-party integration library
- **Performance**: Optimized loading strategy that balances tracking accuracy with user experience
- **Automatic Handling**: The `@next/third-parties` package automatically handles:
  - Script placement and timing
  - Noscript fallback for users with JavaScript disabled
  - Performance optimization
  - Next.js App Router compatibility
- **Compliance**: Follows 2024 Next.js best practices for third-party script integration

The GTM implementation allows for comprehensive tracking of user interactions, page views, and custom events across the entire application with optimal performance.

## LLMs.txt - AI Content Discovery

The project includes an LLMs.txt file for AI model content discovery, following the emerging standard for guiding LLMs to the most relevant website content.

### Features
- **AI Content Guidance**: Directs AI models and LLMs to the most important pages and content
- **Structured Information**: Provides context about AI Buddy's services, Agent GG product, and blog content
- **Content Categories**: Organizes information by AI & Automation, Product Information, and Target Audience
- **Standard Compliance**: Follows the LLMs.txt format becoming standard across major platforms
- **SEO Enhancement**: Complements robots.txt and sitemap.xml for comprehensive content discovery

### File Location
The LLMs.txt file is located at `/public/llms.txt` and is accessible at `https://aibud.ca/llms.txt`

### Content Structure
- **About Section**: Overview of AI Buddy's mission and target audience
- **Primary Content**: Key pages with descriptions for AI understanding
- **Content Categories**: Organized topics for better AI comprehension
- **Technical Information**: Platform details and capabilities
- **Contact & Engagement**: Information about services and consultation options

This implementation helps AI platforms like ChatGPT, Claude, and other LLMs better understand and reference AI Buddy's content when users ask about AI productivity tools, workflow automation, or Agent GG capabilities.

## Ghost CMS Integration

This project integrates with Ghost CMS as a headless content management system for the blog functionality. The integration provides both server-side rendering and client-side fallback for optimal performance and reliability.

### Features

- **Server-Side Rendering (SSR)**: Blog posts are fetched at build time for optimal performance
- **Static Site Generation (SSG)**: Individual blog posts are generated as static pages
- **Client-Side Fallback**: Falls back to local data if Ghost API is unavailable
- **Type Safety**: Full TypeScript support with proper type definitions
- **SEO Optimized**: Automatic metadata generation for blog posts
- **Responsive Design**: Beautiful blog layout with Bento Grid and category filtering
- **Search & Filter**: Real-time search and category-based filtering
- **Dynamic Routing**: URL-based routing for individual blog posts
- **Clickable Blog Cards**: Blog grid items are fully clickable and navigate to individual post pages
- **Dark Theme**: Minimal dark design following the modern aesthetic
- **🚀 Rich Content Optimization**: Advanced content processing and rendering system
- **🛡️ Content Security**: HTML sanitization and XSS protection with DOMPurify
- **📊 Content Analytics**: Real-time content analysis and engagement scoring
- **⚡ Performance Optimized**: Lazy loading, caching, and optimized rendering
- **🎨 Enhanced Styling**: Beautiful typography, code highlighting, and media embedding

### Rich Content Features

The blog system now includes a sophisticated content rendering system that handles:

#### Media Embedding
- **YouTube Videos**: Automatic responsive embedding with proper aspect ratios
- **Images**: Lazy loading, responsive sizing, and automatic captions from alt text
- **Code Blocks**: Syntax highlighting with copy-to-clipboard functionality
- **Tables**: Mobile-responsive tables with hover effects

#### Interactive Elements
- **CTAs and Buttons**: Automatic styling for Calendly links, demo buttons, and other CTAs
- **External Links**: Security attributes and visual indicators for external navigation
- **Collapsible Content**: Support for details/summary elements

#### Content Security
- **HTML Sanitization**: DOMPurify integration for safe content rendering
- **XSS Protection**: Comprehensive security against malicious content
- **Content Validation**: Real-time content processing and error handling

#### Performance Optimizations
- **Lazy Loading**: Content loads as users scroll for better performance
- **Content Caching**: Memoized content processing for faster re-renders
- **Image Optimization**: Automatic loading="lazy" and decoding="async" attributes
- **Analytics**: Real-time content analysis for engagement optimization

#### Recent Bug Fixes & Improvements

**Fixed Overwhelming Subscribe Button Issue**:
- Replaced overwhelming gradient CTA styling for Ghost CMS portal/subscribe links
- Subscribe buttons now use subtle neutral styling instead of prominent gradients
- Differentiated styling between important CTAs (book calls, demos) and subscribe actions
- Subscribe buttons: Neutral gray background with subtle hover effects
- CTA buttons: Blue background for important actions like booking calls or demos

**Fixed Tailwind CSS Leaking into Code Blocks**:
- Complete isolation of code blocks from Tailwind CSS inheritance
- Added CSS reset (`all: revert`) to prevent Tailwind class conflicts
- Applied inline styles with `!important` declarations for consistent code block appearance
- Enhanced syntax highlighting with proper color schemes
- Improved copy button styling with isolated CSS to prevent Tailwind interference
- Added monospace font stack for consistent cross-browser code display

**Code Block Enhancements**:
- **New CodeBlock Component**: Modern, configurable code block component built on react-syntax-highlighter
- **Professional Syntax Highlighting**: Using Prism.js with atom-dark theme for VS Code-like appearance
- **Copy-to-Clipboard**: Integrated copy functionality with visual feedback and icons from Tabler Icons
- **Multi-language Support**: Automatic language detection and syntax highlighting for 20+ languages
- **Line Highlighting**: Support for highlighting specific lines of code
- **Tabbed Interface**: Support for multi-file code examples with tabbed navigation
- **Responsive Design**: Mobile-optimized with horizontal scrolling for long code lines
- **Line Numbers**: Automatic line numbering for better code readability
- **File Extensions**: Automatic filename generation based on language type
- **Dark Theme Integration**: Seamless integration with the site's dark theme aesthetic

**CodeBlock Component Features**:
- **Language Detection**: Supports JavaScript, TypeScript, CSS, HTML, JSON, Python, Bash, and more
- **Custom Styling**: Slate-900 background with proper contrast for code readability
- **Icon Integration**: Uses Tabler Icons for copy/check status indicators
- **TypeScript Support**: Fully typed with discriminated unions for code vs tabs props
- **Performance Optimized**: Uses React 19 compatible react-syntax-highlighter with proper overrides

**Magical Border Button Enhancement**:
- **Animated Border Effect**: Implemented magical spinning border button for "Back to All Posts" navigation
- **Conic Gradient Animation**: Beautiful purple-to-blue gradient that continuously rotates around button edge
- **Modern Design**: Rounded full shape with dark slate background and backdrop blur effect
- **Accessibility**: Proper focus states and ARIA-friendly design
- **Smooth Animation**: 2-second linear infinite spin animation for eye-catching visual appeal
- **User Experience**: Enhanced navigation back to blog listing with engaging visual feedback

### Content Processing Pipeline

1. **Fetch**: Ghost CMS content retrieved via Content API
2. **Sanitize**: HTML cleaned and secured with DOMPurify
3. **Transform**: Content optimized for web delivery
4. **Enhance**: Interactive elements and media properly embedded
5. **Analyze**: Content metrics calculated for optimization insights
6. **Render**: Beautiful, responsive presentation with dark theme

### Usage Example

```tsx
import { RichContentRenderer } from '@/components/BlogContent/RichContentRenderer';
import { useOptimizedContent } from '@/hooks/useOptimizedContent';

// Automatic optimization
function BlogPost({ html }: { html: string }) {
  const { sanitizedHtml, analytics } = useOptimizedContent(html);

  return (
    <RichContentRenderer
      html={sanitizedHtml}
      className="blog-content"
    />
  );
}
```

### CodeBlock Component Usage

The new CodeBlock component can be used standalone for displaying beautiful, syntax-highlighted code:

```tsx
import { CodeBlock } from '@/components/ui/code-block';

// Single code block
function MyComponent() {
  const code = `const greeting = "Hello, World!";
console.log(greeting);`;

  return (
    <CodeBlock
      language="javascript"
      filename="example.js"
      code={code}
      highlightLines={[1, 2]}
    />
  );
}

// Multi-tab code block
function MultiFileExample() {
  return (
    <CodeBlock
      language="html"
      filename="Multi-file Example"
      tabs={[
        {
          name: "HTML",
          code: '<div class="container">Content</div>',
          language: "html",
          highlightLines: [1]
        },
        {
          name: "CSS",
          code: '.container { padding: 1rem; }',
          language: "css"
        },
        {
          name: "JavaScript",
          code: 'console.log("Hello from JS!");',
          language: "javascript"
        }
      ]}
    />
  );
}
```

**Props:**
- `language`: Programming language for syntax highlighting
- `filename`: Display name for the file/example
- `code`: Code content (for single blocks)
- `tabs`: Array of tab configurations (for multi-file examples)
- `highlightLines`: Array of line numbers to highlight (optional)

### Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install @tryghost/content-api
   ```

2. **Environment Configuration**
   Create a `.env.local` file in your project root:
   ```env
   NEXT_PUBLIC_GHOST_URL=https://your-ghost-site.ghost.io
   NEXT_PUBLIC_GHOST_CONTENT_API_KEY=your-content-api-key
   ```

3. **Ghost Site Setup**
   - Create a Ghost site (self-hosted or Ghost(Pro))
   - Go to Ghost Admin → Integrations → Add custom integration
   - Copy the Content API Key and URL
   - Update your environment variables

4. **Configure Content**
   - Create blog posts in Ghost Admin
   - Add featured images, tags, and categories
   - Publish posts to make them available via the API

### Quick Start Guide

For immediate testing with the demo Ghost instance:

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd ai_buddy_landing_page
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Visit Blog**
   - Navigate to [http://localhost:3000/blog](http://localhost:3000/blog)
   - The app will use the demo Ghost instance by default
   - Click on any blog card to view the full post

4. **Connect Your Ghost Site** (Optional)
   - Create your own Ghost site
   - Add your credentials to `.env.local`
   - Restart the development server

### API Integration

**Ghost API Configuration** (`src/lib/ghost-api.ts`):
- Ghost Content API client initialization
- Type definitions for Ghost post structure
- Data transformation functions
- Error handling and fallback mechanisms

**Key Functions**:
- `getPosts()` - Fetch all blog posts with tags and authors
- `getSinglePost(slug)` - Fetch individual post by slug
- `getPages()` - Fetch Ghost pages
- `getAuthor(slug)` - Fetch author information
- `getAllAuthors()` - Fetch all authors

### Blog Pages

**Blog Index** (`/blog`):
- Server-side rendered blog listing
- Bento Grid layout with responsive design
- Category filtering and search functionality
- Loading states and error handling
- Clickable blog cards that navigate to individual posts

**Individual Posts** (`/blog/[slug]`):
- Static generation for SEO optimization
- Beautiful post layout with hero images
- Metadata and social sharing optimization
- Author information and publishing dates
- Tag display and navigation
- Back navigation to blog index

### Fallback System

The integration includes a robust fallback system:
- Local blog data serves as backup content
- Automatic failover when Ghost API is unavailable
- Consistent user experience regardless of API status
- Error messaging for transparency

### Category Mapping

Posts are automatically categorized based on Ghost tags:
- AI & Technology
- Productivity
- No-Code
- Case Studies
- Guides
- Business Strategy
- Security

### Performance Optimizations

- **Static Generation**: Blog posts are pre-generated at build time
- **Image Optimization**: Automatic Next.js image optimization
- **Lazy Loading**: Components and images load on demand
- **Caching**: Browser and CDN caching for Ghost API responses
- **Link Prefetching**: Next.js automatically prefetches linked pages

### Type Safety

Full TypeScript support with interfaces for:
- Ghost post structure
- Transformed blog post data
- Component props and state
- API response types

### Design Features

The blog implementation follows a minimal dark design aesthetic:
- **Dark Background**: Pure black background with subtle gradients
- **Bento Grid Layout**: Modern asymmetric grid for blog posts
- **Category Badges**: Color-coded category indicators
- **Hover Effects**: Smooth transitions and scaling effects
- **Typography**: Gradient text effects for headings
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Recent Updates

- **Blog Card Navigation**: Added clickable functionality to blog grid items
- **Link Integration**: Proper Next.js Link components for optimal performance
- **User Experience**: Seamless navigation between blog listing and individual posts
- **Performance**: Client-side routing with prefetching for faster navigation

### Customization

The blog system is highly customizable:
- **Styling**: Tailwind CSS classes can be modified
- **Layout**: Bento Grid pattern can be adjusted
- **Content**: Category mapping and transformations can be updated
- **Features**: Search, filtering, and pagination can be enhanced

### Troubleshooting

**Common Issues:**

1. **Posts not loading**: Check environment variables and Ghost site configuration
2. **Images not displaying**: Ensure Ghost site has proper image upload settings
3. **Build errors**: Verify all dependencies are installed correctly
4. **Style issues**: Check Tailwind CSS configuration and dark mode settings

**Debug Tips:**

- Check browser console for API errors
- Verify Ghost site is accessible and published
- Test with demo credentials first
- Use fallback data for development

## UI Components

### Aurora Background
A beautiful gradient background with animated aurora effects that gives the hero section a modern and engaging look. The animation is configured in the globals.css file using Tailwind CSS v4's @theme inline syntax, which moves the background position from 50% to 350% over 60 seconds in a continuous loop. The component is now configured to always use dark mode styling regardless of user preferences.

### Background Gradient
An animated gradient component that adds beautiful color transitions to UI elements like cards, buttons or any container. Features a subtle blur effect and hover animation with configurable properties. Used in the Problem Statement Section to enhance the visual appeal of problem cards with dynamic color transitions.

### Glowing Effect
A border glowing effect that adapts to any container or card, creating an elegant interactive highlight that follows cursor movement. The component features a flowing gradient animation that responds to proximity and mouse position, giving UI elements a premium, interactive feel. Used in the Features Section to create a modern bento grid layout with sleek colorful borders that glow with vibrant gradients when users interact with each card.

### Text Generate Effect
A text generation effect that animates words with a blur effect, revealing them one by one. The component takes props for customizing the animation, including duration and whether to apply a blur filter.
- **Update**: Enhanced the component to accept a textSize prop, allowing for custom text sizing when using the effect in different contexts. Removed hardcoded text sizes to enable more flexible usage throughout the site.

### Sparkles Effect
A particle-based animation effect using tsParticles that creates a dynamic sparkle animation. The component is fully customizable with properties for particle color, density, size, and speed.

### 3D Card Effect
A direction-aware 3D card component that responds to mouse movement, creating an immersive hover effect. Used in the Target Audience Section to highlight different user types with an engaging interactive experience. The component features enhanced sensitivity and smoother transitions for a more fluid, responsive interaction with cursor movements.

### Tracing Beam
A visual path tracking component that shows user progress through the section content.

### GlareCard
A premium interactive card component that creates a glare effect on hover, inspired by Linear's website design. The component features:
- **3D Perspective**: Uses CSS perspective and transforms to create a realistic 3D card effect
- **Mouse Tracking**: Tracks mouse position and rotates the card based on cursor movement
- **Glare Effect**: Creates a realistic glare effect that follows the mouse with rainbow gradient highlights
- **Interactive Animation**: Smooth transitions and real-time updates based on user interaction
- **Customizable**: Accepts children components and custom className for flexible styling
- **Responsive**: Adapts to different screen sizes while maintaining visual impact
- **Performance Optimized**: Uses refs and optimized event handlers for smooth performance

The component is used in the Partners Section to showcase partner logos with an engaging interactive experience.

### Floating Navbar
A responsive, floating navigation bar that remains hidden while scrolling down and reappears when scrolling up. Features mobile-friendly design with icon-based navigation on small screens and text-based navigation on larger screens. Includes a clean login button with a subtle gradient underline effect. Now styled consistently with dark mode regardless of system preferences to match the site's overall dark theme.

Functionality:
- Smooth scrolling navigation to each section when clicking on navbar items
- Home button navigates to the base URL while other navigation items scroll to their respective sections
- Navigation items dynamically match the actual page sections for better user experience
- Mobile-friendly navigation with hamburger menu for secondary items
- CTA "Book a Call" button links directly to Calendly (https://calendly.com/msohanh/ai-discussion) for easy appointment scheduling
- Properly handles click events to ensure a seamless user experience
- Direct navigation to Agent GG page through the dedicated navbar item

### Page-Specific Navigation
The site includes specialized navigation components for different pages:

1. **Main NavBar**: Used on the home page, with sections like Home, Audience, Product, Services, Integrations, Process
2. **AgentGGNavBar**: Specialized navigation for the Agent GG product page with:
   - Home button that navigates to the main home page
   - Context-specific navigation buttons (Audience, Product, Services, Integrations, Process) that scroll to the appropriate sections within the Agent GG page
   - Mobile-friendly design matching the main navbar
   - Consistent styling and behavior with the main navbar

## Page Sections

### Hero Section
A beautiful landing section with a captivating aurora background, animated headline, and a call-to-action button. Features the workflow automation image as a clickable element.
- **Update**: Added Calendly integration to the "Book a Demo" button, linking to https://calendly.com/msohanh/ai-discussion for easy appointment scheduling
- **Update 2**: Changed "Book a Demo" to "Book a Call" button and linked it to the Calendly URL: https://calendly.com/msohanh/ai-discussion for easy appointment scheduling
- **Update 3**: Improved the Calendly integration by updating the Floating NavBar component to open the scheduling link in a new tab with proper rel attributes for security
- **Update 4**: Added Agent GG logo above the headline and reduced text size for better visual hierarchy (from text-4xl/text-7xl to text-2xl/text-5xl)
- **Update 5**: Fixed layout issues with the logo and text sizing by:
  - Using clamp() for responsive text sizing to ensure proper scaling on all devices
  - Reducing the logo size and spacing for better proportions
  - Improving semantic HTML with h1 and p tags
  - Adjusting vertical spacing between elements
- **Update 6**: Fixed text sizing issue by:
  - Updating the TextGenerateEffect component to accept a textSize prop
  - Removing hardcoded text sizes from the TextGenerateEffect component
  - Setting appropriate text sizes (text-xl/text-3xl) directly on the component

### Target Audience Section
A bento grid layout showcasing the three target audience segments using square 3D cards in a responsive grid (three cards per row on large screens):
- Monetized Digital Creators
- Small Business Owners & Solopreneurs
- Boutique Agencies

Each card maintains a perfect square aspect ratio with a compact design that scales well across different screen sizes. Cards feature a title, image, and description with an interactive 3D hover effect.

### 3. Our Services Section
- **Design**: Alternating layout with Feature Sections component
- **Content**: Six key features with icons and brief descriptions:
  - Turnkey AI Integration
  - Context-Aware Intelligence
  - Action-Oriented Productivity
  - Decision-Science Driven
  - Source-Trace Citations
  - Budget-Friendly Pricing
- **Visual**: Each feature with a small icon and brief explanation
- **Animation**:
  - Sticky Scroll Reveal that animates features as user scrolls
  - Tracing Beam effect for a visual path as the user scrolls through the section
- **Status**: ✅ Implemented with StickyScroll component and TracingBeam component
- **Update**: Enhanced the StickyScroll component to better handle the last item (Budget-Friendly Pricing) by:
  - Increasing scroll container height
  - Adding more bottom padding
  - Improving scroll calculation for last item focus
  - Adjusting scroll offset parameters
  - Ensuring all items have proper styling
- **Update 2**: Enhanced images in the Services section with:
  - Rounded corners (rounded-xl) for a modern look
  - Smooth transition effects (transition-all duration-500 ease-in-out) when images change during scrolling
- **Update 3**: Improved content switching in the StickyScroll component:
  - Added Framer Motion transitions to the content container
  - Set proper opacity animation and duration for smoother switching between items
  - Added key prop to force component re-render and trigger transition on content change
- **Update 4**: Added auto-scrolling behavior to the Services section:
  - Section automatically scrolls to center when it comes into view
  - Uses IntersectionObserver to detect when the section is visible
  - Calculates optimal scroll position for good viewing experience
  - Allows users to scroll through content and continue to sections below
  - Only triggers the auto-scroll once per page load
- **Update 5**: Added TracingBeam component:
  - Visual scrolling indicator with animated gradient line
  - Shows user progress through the section content
  - Enhances scrolling experience with a visual guide
- **Update 6**: Enhanced TracingBeam to function as a scrollbar:
  - Removed default scrollbar for cleaner UI
  - Tracing beam now functions as an interactive scrollbar on the left side
  - Added ability to click and drag on the beam to scroll through content
  - Improved visual feedback while scrolling through services content
- **Update 7**: Fixed TracingBeam animation issues:
  - Added key attributes to animation elements to ensure proper re-rendering
  - Improved height calculation with ResizeObserver for dynamic content
  - Fixed gradient animation when scrolling
  - Ensured compatibility with both framer-motion and motion libraries
  - Made sure the beam moves properly with scroll position
- **Update 8**: Fixed TracingBeam to work with inner scrollable elements:
  - Added detection of internal scrollable elements within content
  - Implemented custom scroll tracking for inner containers
  - Created separate gradient calculation mechanism for internal scroll
  - Ensured beam works with both page scroll and component scroll
  - Fixed SVG gradient position updates to match scroll position accurately
- **Update 9**: Improved mobile responsiveness in the Services section:
  - Implemented a responsive layout that adapts to screen size
  - On mobile devices, the image appears below the text for each service
  - On desktop, maintains the side-by-side layout (text on left, image on right)
  - Added dynamic detection of screen size with resize listener
  - Created separate layouts for mobile and desktop views
  - Images are properly sized and contained for all device widths
  - Maintained smooth transitions between content items on all devices
- **Update 10**: Added descriptive subtitle below the main heading:
  - Added text "Our plug-and-play solutions adapts to your existing business processes, eliminating the learning curve and implementation hurdles"
  - Styled with gray-300 color for visual hierarchy
  - Maintained proper spacing between title and subtitle
  - Improved the overall section introduction with more context about the services

### 4. Why Choose Us Section
- **Design**: Full width background box container with animated hover effects
- **Content**: Team introduction and value proposition:
  - Small bootstrapped team passionate about AI solutions
  - Focus on listening more with high bias for action
  - Equipped to solve complex problems with proper compliance
  - Emphasis on AI as augmentation rather than replacement
- **Visual**: Interactive grid of four feature cards highlighting different aspects:
  - Card - Interactive card with hover effects
  - Background - Dynamic animated background elements
  - Gradient - Beautiful color transitions and effects
  - Special - Unique interactive experiences
- **Animation**: Background Boxes component that creates an interactive grid that highlights on hover
- **Status**: ✅ Implemented with BackgroundBoxes component that includes:
  - Grid of interactive boxes that highlight with random colors on hover
  - Modern skewed background design that adds depth
  - Translucent feature cards with backdrop blur for a modern look
  - Call to action button with purple gradient matching brand colors
  - Fully responsive layout that adapts to different screen sizes

### 5. Partners Section
- **Design**: Clean section with GlareCard effect showcasing partner logos
- **Content**: Trusted partners and collaborators:
  - Startup Garage - Accelerating startups with innovative programs
  - IO Platform - Empowering businesses with digital solutions
- **Visual**: Partner logos displayed in interactive GlareCard components with hover effects
- **Animation**: GlareCard effect that creates a glare on hover, similar to Linear's website
- **Status**: ✅ Implemented with GlareCard component that includes:
  - Interactive 3D card effect with mouse tracking
  - Glare effect that follows mouse movement with rainbow gradient highlights
  - Partner logos converted to white using CSS filters for dark theme consistency
  - Responsive layout that stacks vertically on mobile and horizontally on desktop
  - Professional partner descriptions and branding
  - Modern card design with rounded corners and subtle borders
- **Update**: Initial implementation with two partner logos:
  - Added startup-garage-logo.png and io-logo.png from public/images folder
  - Created custom GlareCard component based on Aceternity design
  - Positioned section between Why Choose Us and Integration sections for optimal flow
  - Implemented responsive design with proper spacing and typography

### 6. Integration Section
- **Design**: Cards Section with logos
- **Content**: Integrations with:
  - ClickUp
  - Google Calendar
  - Gmail
  - Slack
  - Stripe
  - QuickBooks
  - Telegram
  - Claude
  - ChatGPT
  - Brevo
- **Visual**: Integration logos with brief description of functionality
- **Animation**: Card Spotlight effect on hover
- **Status**: ✅ Implemented with CanvasRevealEffect component that includes:
  - Card design with logo and name always visible
  - Dot background that expands on hover to reveal integration description
  - Custom colors for each integration matching their brand identity
  - Animated reveal effect with smooth transitions
  - Responsive grid layout that adapts to different screen sizes
  - Custom integration request form popup when clicking "Add Your SaaS" button
  - Form collects first name, country, email, and integration description
  - Submissions sent to the n8n webhook API for processing
- **Update**: Enhanced the Integration cards with:
  - Increased z-index from 20 to 50 for better layer management
- **Update 2**: Further optimized the Integration section:
  - Reduced card height from 24rem to 18rem for a more compact display
  - Increased column count to 5 on large screens
  - Reduced gap between cards from 8 to 6 for better space utilization
  - Updated responsive layout to use 3 columns on medium screens
- **Update 3**: Added two more integrations:
  - Added Stripe with payment processing features
  - Added QuickBooks with bookkeeping features
  - Used custom brand-appropriate colors for each integration
- **Update 4**: Adjusted the visual presentation of integration cards:
  - Reduced logo size from 36rem to 24rem for a cleaner appearance
  - Decreased title text size from 2xl to lg for better proportions
  - Reduced description text size from lg to sm for improved readability in the smaller space
  - Maintained the overall card dimensions and hover effects
- **Update 5**: Further enhanced the Integration section:
  - Added Slack integration with custom colors
  - Reduced logo size from 24rem to 16rem for a more compact appearance
  - Updated grid layout to display all 6 integrations in a single row on large screens
  - Adjusted responsive grid to use 2 columns on small screens, 3 on medium screens, and 6 on large screens
  - Reduced gap between cards from 6 to 4 for better space utilization
- **Update 6**: Added explanatory subheading to the Integration section:
  - Added a descriptive text below the main heading that explains users can connect with any SaaS tools they already use
  - Positioned the text centrally with max-width constraints for better readability
  - Used gray-300 text color for visual hierarchy while maintaining readability
  - Adjusted spacing between heading, subheading, and integration cards for better visual flow
- **Update 7**: Enhanced UI/UX to emphasize flexibility in integrations:
  - Added informational badges indicating "Examples shown below" and "Supports 50+ integrations"
  - Created a custom "Add Your SaaS" card with plus icon and gradient hover effect
  - Added a "View all available integrations" button with animated background fill on hover
  - Improved visual hierarchy with consistent spacing and container structure
  - Used dashed borders and subtle hover animations to indicate interactive elements
- **Update 8**: Added four additional integrations:
  - Added Telegram integration for messaging automation
  - Added Claude AI integration for content and research assistance
  - Added ChatGPT integration for conversational AI capabilities
  - Added Brevo integration for email marketing and CRM functionality
  - Updated grid layout to accommodate more integrations with responsive design (5 columns on xl screens, 4 on lg)
  - Used distinct brand-appropriate colors for each new integration
- **Update 9**: Added custom integration request popup:
  - Created modal popup that appears when clicking the "Add Your SaaS" card
  - Implemented form with fields for first name, country, email, and integration description
  - Added form submission functionality that sends data to the same API endpoint used in CTA section
  - Included loading state, success message, and error handling
  - Added backdrop blur effect and animations for smooth user experience
  - Used BackgroundBeams component for consistent visual styling
  - Ensured mobile responsiveness across all device sizes

### 7. Process Section
- **Design**: Timeline component with three steps
- **Content**: The 3-step process:
  1. Understand Your Needs
  2. Confirm Clear Deliverables
  3. Create Your Custom AI Agent
- **Visual**: Numbered steps with icons and brief descriptions
- **Animation**: Tracing Beam effect that follows the path as user scrolls
- **Status**: ✅ Implemented with Timeline component that includes:
  - Custom interactive timeline with scroll-based animation
  - Icon indicators for each step with appropriate visual styling
  - Detailed descriptions for each process step
  - Consistent imagery matching other sections
  - Visual Tracing Beam effect that highlights progress while scrolling
- **Update**: Enhanced the process section visuals:
  - Increased image size from w-52 to w-80 for better visibility and impact
  - Reduced spacing between steps (from mb-12 to mb-4) for a more compact, cohesive layout
- **Update 2**: Fixed image clarity and tracing beam issues:
  - Removed opacity filter from images to improve clarity and visibility
  - Increased image dimensions from 220px to 300px
  - Added priority loading for images to improve initial loading
  - Fixed the trailing beam effect by adjusting the gradient mask and container overflow
  - Updated the beam gradient stops from 99% to 90% and mask from 90% to 85% to keep within the section
- **Update 3**: Improved responsive image sizing:
  - Made images fully responsive with tailored sizes for each breakpoint
  - Increased base image dimensions from 300px to 400px for better quality
  - On mobile: images take full width (w-full) for maximum visibility
  - On small screens: images use 60% of viewport width
  - On medium screens: images use 45% of viewport width
  - On large screens: images maintain 30% of viewport width
  - Ensures optimal image size across all device sizes

### 8. Flagship Product
- **Design**: Immersive Product Showcase with Container Scroll Animation
- **Content**:
  - Headline: "Meet AgentGG our Flagship product"
  - Key Features:
    - Intelligent Task Management
    - Smart Calendar Optimization
    - Automated Email Handling
    - Proactive Decision Support
    - Automatic Note Taking
    - Context-Aware Intelligence
- **Visual**: Immersive 3D card that rotates while scrolling
- **Animation**: ContainerScroll component that animates a 3D card on scroll
- **Status**: ✅ Implemented with ContainerScroll component that includes:
  - 3D rotating card animation on scroll
  - Gradient text for section title
  - Grid layout for feature cards
  - Consistent workflow-automation.png imagery
  - Feature cards with icons and descriptions
  - Mobile-responsive design with appropriate scaling
  - Consistent dark mode styling for the card container and inner content
- **Update**: Added a "Learn More About Agent GG" button beneath the 3D card that links to the dedicated Agent GG page, providing users with a clear path to more detailed information about the flagship product
- **Update 2**: Added two new features to the Features section:
  - Automatic Note Taking - Retrieves previous notes and conversation history
  - Context-Aware Intelligence - Makes decisions based on goals, team structure, and documents

### 9. CTA/Waitlist Section
- **Design**: Container with Background Beams effect
- **Content**:
  - Headline: "Transform Your Business Productivity Today"
  - Two options: "Book Your Personalized Demo" and "Get Started Now"
  - Email input field for waitlist signup
- **Visual**: Glowing button with hover effect
- **Animation**: Spotlight or Glowing Effect on CTA button
- **Status**: ✅ Implemented with BackgroundBeams component that includes:
  - Customized purplish beam effects for brand consistency
  - Clear headline with gradient text styling
  - Two CTA buttons for different user paths
  - Email input field with clean styling
  - Mobile-responsive layout that adapts to different screen sizes
  - Enhanced beam visibility with adjusted opacity and thickness

### Navbar
A floating navigation component that provides easy access to key sections of the site. The navbar:
- Hides when scrolling down to maximize content viewing space
- Reveals when scrolling up for easy navigation
- Contains links to all main sections of the page for quick navigation
- Shows 3 primary icons directly on mobile without requiring menu expansion
- Features a hamburger menu for additional navigation options on mobile
- Shows appropriate icons on mobile screens and text on larger screens
- Has a clean, modern design with a transparent background
- Includes a "Book Demo" CTA button instead of login
- Fully responsive across all device sizes
- **Update**: Fixed desktop navigation display to properly show all navigation items with correct styling and prevent duplicate rendering

### Footer Section
A modern footer with the following elements:
