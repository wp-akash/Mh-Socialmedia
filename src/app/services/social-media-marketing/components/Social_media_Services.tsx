"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, FileText, Film, Palette, Megaphone, Users, Search, MessageCircle, Sparkles, BarChart2 } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Social Media Strategy",
        description: "Audience research, competitor analysis, positioning, platform selection, content pillars, campaign planning and conversion strategy built around your business goals.",
        icon: <Compass size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Content Marketing",
        description: "Educational, promotional, entertaining, authority, product, testimonial, UGC, founder and conversion-focused content designed around people, platforms and performance.",
        icon: <FileText size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    },
    {
        title: "Reels & Short-Form Video",
        description: "Instagram Reels, Facebook Reels, TikTok videos and YouTube Shorts designed to capture attention, explain products, demonstrate expertise and build familiarity.",
        icon: <Film size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1f7b5]",
    },
    {
        title: "Creative Design",
        description: "Scroll-stopping social creatives, carousels, stories, campaign graphics, promotional content and ad creatives built around your brand identity and audience.",
        icon: <Palette size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f7d6a1]",
    },
    {
        title: "Paid Social Advertising",
        description: "Meta, Facebook, Instagram, TikTok and LinkedIn campaigns focused on awareness, engagement, leads, conversions, retargeting and sales.",
        icon: <Megaphone size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Influencer & UGC Marketing",
        description: "We connect brands with relevant creators and develop authentic user-generated content based on audience relevance, credibility, location and content quality rather than follower count alone.",
        icon: <Users size={20} className="text-zinc-900" />,
        iconBg: "bg-[#e8a1f7]",
    },
    {
        title: "Social Media SEO",
        description: "Profile optimization, keywords, captions, video titles, descriptions, location signals and search-friendly content to make your brand more discoverable across social platforms.",
        icon: <Search size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    },
    {
        title: "Community Management",
        description: "Comment, message, review and conversation management that turns followers into relationships and customers.",
        icon: <MessageCircle size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1f7b5]",
    },
    {
        title: "AI-Powered Social Marketing",
        description: "AI-assisted research, ideation, creative variations, translation, localization, testing and performance analysis — combined with human strategy and brand judgment.",
        icon: <Sparkles size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f7d6a1]",
    },
    {
        title: "Performance Marketing",
        description: "We connect creative, audience, offer, landing page and conversion data to business outcomes such as leads, sales, CPA, CPL, ROAS and revenue.",
        icon: <BarChart2 size={20} className="text-zinc-900" />,
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