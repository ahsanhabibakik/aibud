import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { GoogleTagManager } from '@next/third-parties/google';
import { ReactNode } from "react";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "AI Buddy - Your All-in-One AI Productivity Copilot",
  description: "Turn scattered GPT experiments into your streamlined business workflow—instantly. Boost productivity with Agent GG AI-powered task management, calendar integration, and automated workflows.",
  keywords: "AI productivity, business automation, GPT workflow, task management, AI copilot, productivity tools, business AI, workflow optimization",
  authors: [{ name: "AI Buddy Team" }],
  creator: "AI Buddy",
  publisher: "AI Buddy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aibud.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aibud.ca',
    title: 'AI Buddy - Your All-in-One AI Productivity Copilot',
    description: 'Turn scattered GPT experiments into your streamlined business workflow—instantly. Boost productivity with Agent GG AI-powered task management.',
    siteName: 'AI Buddy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Buddy - AI Productivity Copilot',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Buddy - Your All-in-One AI Productivity Copilot',
    description: 'Turn scattered GPT experiments into your streamlined business workflow—instantly.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/images/ai-buddy-logo-white.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <Script id="hydration-fix" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const body = document.body;
                if (body && body.hasAttribute('data-new-gr-c-s-check-loaded')) {
                  body.removeAttribute('data-new-gr-c-s-check-loaded');
                }
                if (body && body.hasAttribute('data-gr-ext-installed')) {
                  body.removeAttribute('data-gr-ext-installed');
                }
              } catch (e) {
                console.error('Hydration fix error:', e);
              }
            })();
          `}
        </Script>
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI Buddy",
              "url": "https://aibud.ca",
              "logo": "https://aibud.ca/images/ai-buddy-logo-white.png",
              "description": "AI Buddy builds customized AI Agents for solopreneurs and SMBs. Turn scattered GPT experiments into streamlined business workflows with Agent GG.",
              "sameAs": [
                "https://aibud.ca/agentgg"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "sohan.h777@gmail.com",
                "contactType": "customer service"
              },
              "founder": {
                "@type": "Person",
                "name": "Md Sohan Haidear",
                "email": "sohan.h777@gmail.com"
              },
              "products": [
                {
                  "@type": "SoftwareApplication",
                  "name": "Agent GG",
                  "applicationCategory": "BusinessApplication",
                  "description": "AI-powered productivity copilot with daily task prioritization, automated scheduling, and smart workflows.",
                  "operatingSystem": "Web, Desktop, Mobile",
                  "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/PreOrder",
                    "price": "0",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2025-12-31"
                  },
                  "featureList": [
                    "Daily Task Prioritization",
                    "ClickUp-to-Calendar Integration",
                    "The One Thing Focus",
                    "80/20 (Pareto) Analysis",
                    "Bias Checker",
                    "Procrastination Helper",
                    "Context-Aware Intelligence",
                    "Automated Executive Summaries",
                    "Automatic Note Taking"
                  ]
                }
              ],
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Custom AI Agent Development",
                  "description": "Custom AI agent development services for businesses"
                }
              }
            }
          `}
        </Script>
      </head>
      <GoogleTagManager gtmId="GTM-KCS53CSX" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
