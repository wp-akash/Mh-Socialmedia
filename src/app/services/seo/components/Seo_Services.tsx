"use client";

import React from "react";
import { motion } from "framer-motion";
import { MonitorSmartphone, FileText, Share2, Search, Zap, Lightbulb, Bot, ShoppingCart, Globe, Mic, Building2, Smile } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Technical SEO",
        description: "Identify and resolve structural issues. A clean technical foundation helps search engines discover relationships between pages, entities, products, and locations.",
        icon: <MonitorSmartphone size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "On-Page SEO",
        description: "Ranking isn't simply placing keywords on a page. We build structured, comprehensive pages that make sense to both human users and search systems.",
        icon: <FileText size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    },
    {
        title: "Off-Page SEO & Authority",
        description: "Build legitimate digital authority adhering to Google's spam policies. We establish high-quality digital footprints that real businesses are proud to own.",
        icon: <Share2 size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1f7b5]",
    },
    {
        title: "Local SEO",
        description: "Dubai is a collection of unique neighborhoods and commercial districts. We help your business stand out when location and intent intersect on Maps and Search.",
        icon: <Search size={20} className="text-zinc-900" />,
        iconBg: "bg-[#fbd38d]",
    },
    {
        title: "Answer Engine Optimization (AEO)",
        description: "Optimize content for answer-oriented experiences. Get direct answers sourced from your platform when users ask precise questions.",
        icon: <Zap size={20} className="text-zinc-900" />,
        iconBg: "bg-[#c4b5fd]",
    },
    {
        title: "Generative Engine Optimization (GEO)",
        description: "Improve visibility within generative search systems. Provide unique, non-commodity content that AI models rely on to synthesize recommendations.",
        icon: <Lightbulb size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "AI Optimization (AIO)",
        description: "Optimize your total digital presence for AI discovery, interpretation, and recommendation engines across modern interfaces.",
        icon: <Bot size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    },
    {
        title: "E-Commerce SEO",
        description: "Dominate a competitive retail market. Drive high-intent buyers through product discovery, visits, add-to-cart, checkout, and revenue.",
        icon: <ShoppingCart size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1f7b5]",
    },
    {
        title: "Arabic & Multilingual SEO",
        description: "Connect with Dubai's diverse demographic. Tailored strategies bridging language, location, intent, and technical architecture (hreflang).",
        icon: <Globe size={20} className="text-zinc-900" />,
        iconBg: "bg-[#fbd38d]",
    },
    {
        title: "Voice Search Optimization",
        description: "Capture conversational queries. Tailor content around natural human questions as voice-assisted searches continue to grow.",
        icon: <Mic size={20} className="text-zinc-900" />,
        iconBg: "bg-[#c4b5fd]",
    },
    {
        title: "Enterprise SEO",
        description: "Manage large sites with thousands or millions of URLs through dedicated governance, prioritization, and scalable execution.",
        icon: <Building2 size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Search Experience Optimization (SXO)",
        description: "Merge visibility with user experience. Ensure seamless journeys from Search → Click → Experience → Conversion.",
        icon: <Smile size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    }
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
                        SEO Services That Speak Google's Language
                    </motion.h2>
                    <motion.p
                        {...fadeUp(0.25)}
                        className={`${textColor} text-sm md:text-md`}
                    >
                        Modern SEO isn't one discipline—it's an ecosystem. We make your brand understandable, discoverable, trustworthy, and useful everywhere customers search.
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