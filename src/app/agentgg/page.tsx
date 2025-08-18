import AgentGGNavBar from '@/components/AgentGGNavBar';
import HeroSection from '@/components/sections/AgentGG/HeroSection';
import ProblemStatementSection from '@/components/sections/AgentGG/ProblemStatementSection';
import FeaturesSection from '@/components/sections/AgentGG/FeaturesSection';
import HowItWorksSection from '@/components/sections/AgentGG/HowItWorksSection';
import IntegrationsSection from '@/components/sections/AgentGG/IntegrationsSection';
import ROISection from '@/components/sections/AgentGG/ROISection';
import CompetitorComparisonSection from '@/components/sections/AgentGG/CompetitorComparisonSection';
import IdealUsersSection from '@/components/sections/AgentGG/IdealUsersSection';
import FAQSection from '@/components/sections/AgentGG/FAQSection';
import WaitlistSection from '@/components/sections/AgentGG/WaitlistSection';
import { FooterSection } from '@/components/sections/Home/FooterSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agent GG - AI Productivity Copilot | AI Buddy',
  description: 'Agent GG is your AI-powered productivity copilot. Get daily task prioritization, automated scheduling, executive summaries, and smart workflows. Integrate with ClickUp, Google Calendar, Gmail, and more.',
  keywords: 'Agent GG, AI productivity, task management, calendar integration, ClickUp automation, business AI, workflow optimization, executive summaries, automated scheduling',
  alternates: {
    canonical: '/agentgg',
  },
  openGraph: {
    title: 'Agent GG - AI Productivity Copilot | AI Buddy',
    description: 'Agent GG is your AI-powered productivity copilot. Get daily task prioritization, automated scheduling, executive summaries, and smart workflows.',
    url: 'https://aibud.ca/agentgg',
    type: 'website',
    images: [
      {
        url: '/og-agent-gg.jpg',
        width: 1200,
        height: 630,
        alt: 'Agent GG - AI Productivity Copilot',
      },
    ],
  },
  twitter: {
    title: 'Agent GG - AI Productivity Copilot | AI Buddy',
    description: 'Agent GG is your AI-powered productivity copilot. Get daily task prioritization, automated scheduling, executive summaries, and smart workflows.',
    images: ['/og-agent-gg.jpg'],
  },
};

export default function AgentGG() {
  return (
    <main>
      <AgentGGNavBar />
      <HeroSection />
      <ProblemStatementSection />
      <FeaturesSection />
      <HowItWorksSection />
      <IntegrationsSection />
      <ROISection />
      <CompetitorComparisonSection />
      {/* <IdealUsersSection /> */}
      {/* <FAQSection /> */}
      <WaitlistSection />
      <FooterSection />
    </main>
  );
}
