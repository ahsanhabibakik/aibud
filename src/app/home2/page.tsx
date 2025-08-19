import UnifiedNavBar from '@/components/UnifiedNavBar';
import HeroSection from '@/components/sections/Home/Home2/HeroSection';
import TargetAudienceSection from '@/components/sections/Home/TargetAudienceSection';
import FlagshipProductSection from '@/components/sections/Home/FlagshipProductSection';
import { OurServicesSection } from '@/components/sections/Home/OurServicesSection';
import { WhyChooseUsSection } from '@/components/sections/Home/WhyChooseUsSection';
import { PartnersSection } from '@/components/sections/Home/PartnersSection';
import { IntegrationSection } from '@/components/sections/Home/IntegrationSection';
import { ProcessSection } from '@/components/sections/Home/ProcessSection';
import { CTASection } from '@/components/sections/Home/CTASection';
import { FooterSection } from '@/components/sections/Home/FooterSection';
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
      <ScrollToTop />
    </main>
  );
}
