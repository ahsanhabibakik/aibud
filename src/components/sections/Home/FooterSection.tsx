"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight-new";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export const FooterSection = () => {
  // Custom colors to match the purple theme in the rest of the site
  const purpleGradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 100%, 85%, .08) 0, hsla(270, 100%, 55%, .03) 50%, hsla(270, 100%, 45%, 0) 80%)";
  const purpleGradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 85%, .06) 0, hsla(270, 100%, 55%, .03) 80%, transparent 100%)";
  const purpleGradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 85%, .04) 0, hsla(270, 100%, 45%, .02) 80%, transparent 100%)";

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/msohanh/", label: "LinkedIn" },
    // { icon: <FaTwitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    // { icon: <FaFacebook size={20} />, href: "https://facebook.com", label: "Facebook" },
    // { icon: <FaInstagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaYoutube size={20} />, href: "https://www.youtube.com/@AIBudLL", label: "Youtube" },
    { icon: <FaGithub size={20} />, href: "https://github.com/aukik", label: "GitHub" },
  ];

  const footerLinks = [
    { title: "Product", links: [
      { label: "Features", href: "/#services" },
      { label: "Integrations", href: "/#integrations" },
    ]},
    { title: "Legal", links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ]},
  ];

  return (
    <footer className="relative bg-black/[0.96] overflow-hidden">
      {/* Spotlight effect with purple hues */}
      <Spotlight
        gradientFirst={purpleGradientFirst}
        gradientSecond={purpleGradientSecond}
        gradientThird={purpleGradientThird}
        translateY={-450}
        width={600}
        height={1200}
        smallWidth={280}
        duration={9}
        xOffset={150}
      />

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and company info */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/ai-buddy-logo.png"
                  alt="AI Buddy Logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  AI Buddy
                </h2>
              </div>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-md">
              We build customized AI Agents for solopreneurs and SMBs.
              Choose pre-built features or order a custom AI Agent for your needs
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="p-2 bg-slate-900 rounded-full text-neutral-400 hover:text-white hover:bg-purple-900 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent my-10"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} AI Buddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
