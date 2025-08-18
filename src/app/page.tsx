import HeroSection from '@/components/sections/Home/HeroSection';
import TargetAudienceSection from '@/components/sections/Home/TargetAudienceSection';
import { OurServicesSection } from '@/components/sections/Home/OurServicesSection';
import { ProcessSection } from '@/components/sections/Home/ProcessSection';
import { IntegrationSection } from '@/components/sections/Home/IntegrationSection';
import { WhyChooseUsSection } from '@/components/sections/Home/WhyChooseUsSection';
import { PartnersSection } from '@/components/sections/Home/PartnersSection';
import FlagshipProductSection from '@/components/sections/Home/FlagshipProductSection';
import { CTASection } from '@/components/sections/Home/CTASection';
import { FooterSection } from '@/components/sections/Home/FooterSection';
import UnifiedNavBar from '@/components/UnifiedNavBar';
import ScrollToTop from '@/components/ui/ScrollToTop';

export default function Home() {
  return (
    <main>
      <UnifiedNavBar />
      <HeroSection />

      {/* <TargetAudienceSection /> */}

      <FlagshipProductSection />
      <OurServicesSection />
      <WhyChooseUsSection />
      <PartnersSection />
      <IntegrationSection />
      <ProcessSection />
      <CTASection />
      <FooterSection />

      
      {/* Scroll to Top with Progress */}
      <ScrollToTop />
    </main>
  );
}
