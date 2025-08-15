"use client";

import React from "react";
import { motion } from "framer-motion";
import { CardContainer, CardBody } from "@/components/ui/3d-card";

export default function IdealUsersSection() {
  const userTypes = [
    {
      id: 1,
      title: "Solopreneurs",
      description: "Manage your entire business operation without needing to hire additional help.",
      icon: "👨‍💼",
    },
    {
      id: 2,
      title: "Startup Founders",
      description: "Stay on top of critical tasks while maintaining strategic oversight.",
      icon: "🚀",
    },
    {
      id: 3,
      title: "Freelancers",
      description: "Juggle multiple clients and projects with streamlined workflows.",
      icon: "🎨",
    },
    {
      id: 4,
      title: "Digital Marketers",
      description: "Automate campaign management and focus on creative strategy.",
      icon: "📱",
    },
    {
      id: 5,
      title: "Executives",
      description: "Make better decisions with less bias and more insight.",
      icon: "👔",
    },
    {
      id: 6,
      title: "Project Managers",
      description: "Coordinate tasks and resources more efficiently across teams.",
      icon: "📊",
    }
  ];

  return (
    <section id="idealUsers" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ideal Users
          </h2>
          <div className="inline-block px-4 py-1 rounded-full bg-zinc-800 text-gray-400 text-sm mb-6">
            Coming Soon
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Agent GG is designed for busy professionals who need to optimize their workflow and make smarter decisions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((user) => (
            <CardContainer key={user.id} className="w-full h-64" containerClassName="py-4">
              <CardBody>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: user.id * 0.1 }}
                  className="w-full h-full p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl border border-zinc-700 flex flex-col justify-between"
                >
                  <div className="text-4xl mb-4">{user.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{user.title}</h3>
                    <p className="text-gray-400 text-sm">{user.description}</p>
                  </div>
                </motion.div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block relative overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <button className="relative bg-zinc-950 hover:bg-zinc-900 transition-colors text-white px-6 py-3 rounded-full">
              Book a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
