"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Facebook, MonitorSmartphone, Search, Share2, FileText, ShoppingCart, Mail, MousePointerClick, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Branding & Design",
    description: "Logos, brand guidelines, and visual identities that make your business impossible to ignore, plus print, digital, and presentation design that keeps you consistent everywhere.",
    icon: <Palette size={20} className="text-zinc-900" />,
    iconBg: "bg-[#f4f7a1]",
  },
  {
    title: "Meta Ads Marketing",
    description: "Facebook and Instagram campaigns engineered for leads and sales, powered by sharp audience targeting and retargeting that lowers your cost per result. With social advertising making up around 40% of digital ad spend in the UAE, this is where much of your audience decides.",
    icon: <Facebook size={20} className="text-zinc-900" />,
    iconBg: "bg-[#a1dff7]",
  },
  {
    title: "Google Ads Marketing",
    description: "Search, Display, Video, and Shopping campaigns that put you in front of ready-to-buy customers, backed by keyword strategy and ad copy built to convert.",
    icon: <MousePointerClick size={20} className="text-zinc-900" />,
    iconBg: "bg-[#a1f7b5]",
  },
  {
    title: "Website Design & Development",
    description: "Fast, beautiful, conversion-focused websites, landing pages, and e-commerce stores — designed to turn visitors into customers and maintained to keep performing.",
    icon: <MonitorSmartphone size={20} className="text-zinc-900" />,
    iconBg: "bg-[#f4f7a1]",
  },
  {
    title: "Search Engine Optimization",
    description: "In-depth keyword research, technical SEO, quality backlinks, and on-page optimization. It matters: \"SEO agency Dubai\" alone records around 8,100 searches every month — that's demand we help you capture.",
    icon: <Search size={20} className="text-zinc-900" />,
    iconBg: "bg-[#a1f7b5]",
  },
  {
    title: "Social Media Marketing",
    description: "Channel-specific strategy, content creation, community management, and influencer partnerships that build engaged, loyal audiences.",
    icon: <Share2 size={20} className="text-zinc-900" />,
    iconBg: "bg-[#a1dff7]",
  },
  {
    title: "Content Marketing",
    description: "Blogs, video, web copy, and landing page content built to attract and convert. With video driving up to 90% of daily content consumption in the GCC, we make short-form and video-first content a core priority.",
    icon: <FileText size={20} className="text-zinc-900" />,
    iconBg: "bg-[#f4f7a1]",
  },
  {
    title: "E-commerce Marketing",
    description: "End-to-end growth for online stores: SEO, PPC, CRO, email automation, and store design that maximizes every visit.",
    icon: <ShoppingCart size={20} className="text-zinc-900" />,
    iconBg: "bg-[#a1f7b5]",
  },
  {
    title: "Email Marketing",
    description: "Newsletters, automated sequences, segmentation, and A/B-tested campaigns that nurture leads and drive repeat revenue.",
    icon: <Mail size={20} className="text-zinc-900" />,
    iconBg: "bg-[#a1dff7]",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function ServicesSection({ bgColor = "bg-[#0A0E17]", textColor = "text-white" }: { bgColor?: string; textColor?: string }) {
  return (
    <section className={`${bgColor} py-12`}>
      <div className="global-container md:px-4">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div {...fadeUp(0.05)}>
            <span className="inline-block text-[10px] font-semibold tracking-widest uppercase text-black bg-violet-100 rounded px-3 py-1 mb-6">
              WHAT WE DO
            </span>
          </motion.div>
          <motion.h2
            {...fadeUp(0.15)}
            className={`text-3xl sm:text-4xl md:text-[1.8rem] font-[500] leading-[1.15] tracking-tight ${textColor} mb-3`}
          >
            We're a full-service partner
          </motion.h2>
          <motion.p
            {...fadeUp(0.25)}
            className={`${textColor} text-sm md:text-md`}
          >
            which means every channel works together instead of in silos.
          </motion.p>
        </div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              {...fadeUp(0.1 + (idx % 3) * 0.1)}
              className="group bg-[#fafafa] rounded-2xl p-8 flex flex-col justify-between min-h-[300px] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-zinc-100 cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Footer ── */}
        <motion.div {...fadeUp(0.4)} className="mt-16 flex justify-center">
          <div className="mb-8">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 bg-[#117C75] text-white font-medium text-sm md:text-base pl-6 pr-2 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
            >
              View All Services
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#117C75] transition-colors duration-300">
                <ArrowUpRight size={16} className="text-black group-hover:text-white" />
              </span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}