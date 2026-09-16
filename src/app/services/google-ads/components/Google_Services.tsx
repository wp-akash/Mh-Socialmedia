"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Facebook, MonitorSmartphone, Search, Share2, FileText, ShoppingCart, Mail, MousePointerClick, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Search Ads Management",
        description: "High-intent campaigns targeting the exact keywords your customers search, with tightly themed ad groups, precise match types, and negative keyword lists that stop your budget bleeding on irrelevant clicks.",
        icon: <Palette size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Display Ads Management",
        description: "Visually engaging banner campaigns across Google's network to build awareness, stay top-of-mind, and retarget visitors who didn't convert the first time.",
        icon: <Facebook size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    },
    {
        title: "Video Ads Management",
        description: "YouTube campaigns that put your brand in front of the right audience — powerful in a market where video drives up to 90% of daily content consumption in the GCC.",
        icon: <MousePointerClick size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1f7b5]",
    },
    {
        title: "Shopping Ads Management ",
        description: "Product-led campaigns for e-commerce and retail that showcase your products, prices, and images directly in search results, capturing buyers at the point of decision.",
        icon: <MonitorSmartphone size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Keyword & Audience Strategy",
        description: "Deep keyword research across English and Arabic — because most competitors run English-only and leave Arabic search volume uncontested, which means lower competition, higher relevance, and cheaper clicks for you.",
        icon: <MonitorSmartphone size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Ad Copy & Creative Development ",
        description: "Conversion-focused ad copy and creative that earns clicks and lifts your Quality Score, which directly lowers what you pay per click.",
        icon: <MonitorSmartphone size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },

];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Google_Services({ bgColor = "bg-[#0A0E17]", textColor = "text-white" }: { bgColor?: string; textColor?: string }) {
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
                        We're a Full-Service Partner
                    </motion.h2>
                    <motion.p
                        {...fadeUp(0.25)}
                        className={`${textColor} text-sm md:text-md`}
                    >
                        We work with you to design and execute Facebook and Instagram campaigns that turn attention into leads, appointments, and sales.
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


            </div>
        </section>
    );
}