import React from "react";
import { FooterSection } from "@/components/sections/Home/FooterSection";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";
import { Metadata } from 'next';
import PrivacyPolicyClient from './PrivacyPolicyClient';
import UnifiedNavBar from '@/components/UnifiedNavBar';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Buddy - Data Protection & Security',
  description: 'Learn how AI Buddy protects your privacy and handles your data. PIPEDA compliant privacy policy covering data collection, usage, retention, and your rights.',
  keywords: 'privacy policy, data protection, GDPR, privacy rights, data security, AI Buddy privacy',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | AI Buddy - Data Protection & Security',
    description: 'Learn how AI Buddy protects your privacy and handles your data. PIPEDA compliant privacy policy.',
    url: 'https://aibud.ca/privacy',
    type: 'website',
  },
  twitter: {
    title: 'Privacy Policy | AI Buddy - Data Protection & Security',
    description: 'Learn how AI Buddy protects your privacy and handles your data. PIPEDA compliant privacy policy.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="relative bg-black min-h-screen">
      {/* Navigation */}
      <UnifiedNavBar />
      
      {/* Page Content */}
      <div className="relative z-20">
        <PrivacyPolicyClient />
      </div>
      
      {/* Scroll to Top with Progress */}
      <ScrollToTop />
    </div>
  );
}
