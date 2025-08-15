import { GlareCard } from "@/components/ui/glare-card";
import Image from "next/image";
import Link from "next/link";

export const PartnersSection = () => {
  const partners = [
    {
      name: "",
      logo: "/clickup-logo.png",
      description: "Project management and productivity platform",
      url: "https://clickup.com/"
    },
    {
      name: "Microsoft for Startups",
      logo: "/microsoft-for-startups.png",
      description: "Empowering startups with technology and resources",
      url: "https://www.microsoft.com/en-us/startups"
    },
    {
      name: "Invest Ottawa",
      logo: "/images/io-logo.png",
      description: "Empowering businesses with digital solutions",
      url: "https://www.investottawa.ca/"
    }
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          We collaborate with industry leaders to deliver exceptional AI solutions and drive innovation together.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-8 flex-wrap">
          {partners.map((partner, index) => (
            <Link
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <GlareCard className="flex flex-col items-center justify-center p-8 cursor-pointer">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      fill
                      className="object-contain filter brightness-0 invert"
                      priority
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl md:text-2xl text-center">
                    {partner.name}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base text-center max-w-48">
                    {partner.description}
                  </p>
                </div>
              </GlareCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
