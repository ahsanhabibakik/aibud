"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function WhyChooseUsSection() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 md:py-32 ">
      <h2 className="text-3xl font-bold text-center mb-8 sm:mb-12 md:text-4xl lg:text-5xl">
        Why Choose Us?
      </h2>

      <div className="h-[500px] relative w-full rounder-4xl overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 mask-[radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <div className="relative z-20 max-w-3xl mx-auto text-center px-4">
          <p className="text-white text-lg sm:text-xl md:text-2xl mb-6">
            We&apos;re a small bootstrapped team passionate about working with other teams to provide amazing AI solutions.
          </p>
          <p className="text-neutral-300 text-md sm:text-lg mb-4">
            We listen more, have high bias for action, and we&apos;re equipped with the right credentials and curiosity to go deep and solve complex problems with right compliance.
          </p>
          <p className="text-neutral-300 text-md sm:text-lg">
            We aren&apos;t working to replace humans with AI but we help humans use AI as a superpower.
          </p>



        </div>
      </div>
    </section>
  );
}
