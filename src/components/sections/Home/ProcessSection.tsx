"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { FaRegLightbulb, FaRegCheckCircle, FaRegEdit } from "react-icons/fa";

export function ProcessSection() {
  const data = [
    {
      title: "Our Process",
      content: (
        <div>
          <p className="text-center text-base font-normal text-neutral-300 md:text-lg">
            We follow a simple 3-step process to create your custom AI agent that fits your exact needs.
          </p>
        </div>
      ),
    },
    {
      title: "Step 1",
      content: (
        <div >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center">
              <FaRegLightbulb className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Understand Your Needs</h3>
          </div>
          <p className="mb-6 text-base text-neutral-300">
            We start by understanding your specific workflows, pain points, and business requirements.
            This deep understanding ensures we build the right solution for your unique needs.
          </p>
          <div className="rounded-xl overflow-hidden shadow-[0_0_15px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)]">
            <div className="bg-[#020618] p-6 flex justify-center items-center">
              <Image
                src="/images/brain-glass-pc.png"
                alt="Understanding your workflow needs"
                width={400}
                height={400}
                className="w-full sm:w-[60vw] md:w-[45vw] lg:w-[30vw] h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center">
              <FaRegCheckCircle className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Prototpe Delivery and Testing</h3>
          </div>
          <p className="mb-6 text-base text-neutral-300">
          We are fans of Design Thinking, so we will submit a prototype for your review, which cuts down production timeline and helps us make the final product for you specifically.
          </p>
          <div className="rounded-xl overflow-hidden shadow-[0_0_15px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)]">
            <div className="bg-[#020618] p-6 flex justify-center items-center">
              <Image
                src="/images/fabric-ai-new.png"
                alt="Confirming project deliverables"
                width={400}
                height={400}
                className="w-full sm:w-[60vw] md:w-[45vw] lg:w-[30vw] h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-teal-900/30 flex items-center justify-center">
              <FaRegEdit className="w-5 h-5 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Final Delivery</h3>
          </div>
          <p className="mb-6 text-base text-neutral-300">
          Your AI Agent starts working its magic and we stay ready for any additional support you may need for smooth daily operations.
          </p>
          <div className="rounded-xl overflow-hidden shadow-[0_0_15px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04)]">
            <div className="bg-[#020618] p-6 flex justify-center items-center">
              <Image
                src="/images/workflow-3d.png"
                alt="Creating your custom AI agent"
                width={400}
                height={400}
                className="w-full sm:w-[60vw] md:w-[45vw] lg:w-[30vw] h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="process" className="w-full">
      <Timeline data={data} />
    </section>
  );
}
