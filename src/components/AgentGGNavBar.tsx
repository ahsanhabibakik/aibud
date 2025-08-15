"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { FaHome, FaUsers, FaBoxOpen, FaTools, FaPlug, FaTasks, FaBlog } from "react-icons/fa";
import Link from "next/link";

export default function AgentGGNavBar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Success Metrices",
      link: "#roi",
      icon: <FaUsers className="h-4 w-4 text-white" />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <FaBlog className="h-4 w-4 text-white" />,
    },
    {
      name: "Features",
      link: "#features",
      icon: <FaBoxOpen className="h-4 w-4 text-white" />,
    },
    {
      name: "How It Works",
      link: "#howItWorks",
      icon: <FaTools className="h-4 w-4 text-white" />,
    },
    {
      name: "Integrations",
      link: "#integrations",
      icon: <FaPlug className="h-4 w-4 text-white" />,
    },
    {
      name: "Results",
      link: "#roi",
      icon: <FaTasks className="h-4 w-4 text-white" />,
    },
  ];

  // Scroll handler function
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // If it's not a section link (doesn't start with #), allow normal navigation
    if (!targetId.startsWith('#')) {
      return;
    }

    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Modify navItems to include click handler
  const navItemsWithHandler = navItems.map(item => ({
    ...item,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, item.link)
  }));

  return (
    <div className="relative w-full">
      <FloatingNav
        navItems={navItemsWithHandler}
        ctaText="Book a Call"
        ctaLink="https://calendly.com/msohanh/ai-discussion"
      />
    </div>
  );
}
