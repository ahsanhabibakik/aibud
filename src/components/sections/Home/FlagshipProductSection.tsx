"use client";
import React from "react";
import { ContainerScroll } from "../../ui/container-scroll-animation";
import Image from "next/image";
import Link from "next/link";
import { FaTasks, FaCalendarAlt, FaEnvelope, FaBrain } from "react-icons/fa";

export const FlagshipProductSection = () => {
  return (
    <section id="product" className="w-full bg-[#0a0a0a] my-12 relative z-10">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-4xl font-semibold text-white mb-4">
                Meet <Image src="/images/agent-gg-logo.png" alt="Agent GG" width={180} height={80} className="inline-block" />
              </h2>
              <p className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                Our Flagship Product
              </p>
            </>
          }
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/agent_gg.png"
              alt="AgentGG Product"
              fill
              className="object-cover object-center rounded-xl"
              priority
            />
          </div>
        </ContainerScroll>

        <div className="flex justify-center mt-8 mb-16">
          <Link href="/agentgg">
          <div className="mt-4 md:mt-0">
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Learn More About AgentGG
              </span>
            </button>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string
}) => {
  return (
    <div className="bg-zinc-900/80 p-6 rounded-lg border border-zinc-800 hover:border-purple-500/50 transition-all duration-300">
      <div className="text-purple-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  );
};

export default FlagshipProductSection;
