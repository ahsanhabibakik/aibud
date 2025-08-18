import { Metadata } from 'next';
import CookiePolicyClient from '@/components/CookiePolicyClient';
import UnifiedNavBar from '@/components/UnifiedNavBar';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Cookie Policy - AI Buddy',
  description: 'Learn about how AI Buddy uses cookies to enhance your browsing experience and protect your privacy. Manage your cookie preferences and understand our cookie practices.',
  keywords: 'cookie policy, privacy, cookies, AI Buddy, data protection, GDPR, cookie consent, web tracking',
  authors: [{ name: 'AI Buddy Team' }],
  creator: 'AI Buddy',
  publisher: 'AI Buddy',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cookie Policy - AI Buddy',
    description: 'Learn about how AI Buddy uses cookies and manage your cookie preferences.',
    type: 'website',
    url: 'https://aibud.ca/cookie-policy',
    siteName: 'AI Buddy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy - AI Buddy',
    description: 'Learn about how AI Buddy uses cookies and manage your cookie preferences.',
  },
  alternates: {
    canonical: '/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Navigation */}
      <UnifiedNavBar />
      
      {/* Page Content */}
      <div className="relative z-20">
        <CookiePolicyClient />
      </div>
      
      {/* Scroll to Top with Progress */}
      <ScrollToTop />
    </div>
  );
}