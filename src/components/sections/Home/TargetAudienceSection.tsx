"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const audienceData = [
  {
    title: "Solopreneurs",
    description: "The multi-hat wearing single founder will find a best friend in our Agent GG.",
    icon: "/images/solopreneur-2.jpg",
    link: "/creators"
  },
  {
    title: "Small Business Owners",
    description: "The small business owner with invoicing, sales prospecting, and management needs.",
    icon: "/images/small-business-owner.jpg",
    link: "/business-owners"
  },
  {
    title: "Productivity Geeks",
    description: "Fans of Tim Ferriss, Ali Abdaal, Thomas Frank, or Tiago Forte would love a conversation with our team of AI Agents!",
    icon: "/images/deep-work.jpg",
    link: "/agencies"
  },


];

export default function TargetAudienceSection() {
  return (
    <section id="audience" className="relative w-full py-20 bg-slate-950 z-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Who We Serve</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
          Productivity enthusiastic professionals looking for safe and transformative AI Agent solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 * (index + 1) }}
              className="col-span-1"
            >
              <CardContainer containerClassName="py-4">
                <CardBody className="bg-slate-900/60 relative aspect-square w-full max-w-[300px] mx-auto rounded-xl p-4 border border-slate-800 flex flex-col">
                  <CardItem
                    translateZ={40}
                    className="text-xl font-bold text-white mb-3"
                  >
                    {item.title}
                  </CardItem>

                  <CardItem
                    as="div"
                    translateZ={50}
                    className="w-full flex-1 overflow-hidden rounded-lg"
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                  </CardItem>

                  <CardItem
                    translateZ={30}
                    className="text-white/80 text-sm mt-3"
                  >
                    {item.description}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
