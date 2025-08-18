"use client";
import React, { useRef } from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

const servicesContent = [
  {
    title: "AI Agent Creation",
    description:
      "Our plug-and-play solutions adapts to your existing business processes, eliminating the learning curve and implementation hurdles.",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <Image
          src="/images/ai-agent-creation.jpg"
          alt="Turnkey AI Integration"
          width={800}
          height={600}
          className="h-auto w-full object-cover rounded-xl transition-all duration-500 ease-in-out"
        />
      </div>
    ),
  },
  {
    title: "Agent GG",
    description:
      "Agent GG is like Jarvis for solopreneurs, focused on helping the user make smarter decisions, lower cognitive load, and improve focus on revenue-generation tasks or any priority that the solopreneur sets. Also useful for small business owners with a small team",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <Image
          src="/images/agent-gg-logo.png"
          alt="Context-Aware Intelligence"
          width={800}
          height={600}
          className="max-h-[300px] w-full object-cover rounded-xl transition-all duration-500 ease-in-out"
        />
      </div>
    ),
  },
  {
    title: "DocDirector AI",
    description:
      "Coming Soon",
    content: (
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <Image
          src="/images/doc-chain.png"
          alt="Action-Oriented Productivity"
          width={800}
          height={600}
          className="max-h-[300px] w-full object-cover rounded-xl transition-all duration-500 ease-in-out"
        />
      </div>
    ),
  },

];

export function OurServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="w-full bg-[#0a1024] py-20" id="services">
      <h2 className="mb-8 text-center text-4xl font-bold text-white">Our Products & Services</h2>
      {/* <p className="mb-12 text-center text-lg text-gray-300">Our plug-and-play solutions adapts to your existing business processes, eliminating the learning curve and implementation hurdles.</p> */}
      <TracingBeam className="w-full">
        <div className="w-full">
          <StickyScroll content={servicesContent} />
        </div>
      </TracingBeam>
    </section>
  );
}
