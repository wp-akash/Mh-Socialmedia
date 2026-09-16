"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, Facebook, MonitorSmartphone, Search, Share2, FileText, ShoppingCart, Mail, MousePointerClick, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Facebook Ads Management",
        description: "Full-funnel campaigns that use Facebook's broad reach and lower CPMs (typically AED 10–25) to build awareness, generate leads, and drive sales at efficient cost.",
        icon: <Palette size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Instagram Ads Management",
        description: "Leveraging visually-driven feeds, Reels, and Stories to capture attention and drive immediate action. Perfect for driving e-commerce sales and bookings.",
        icon: <Facebook size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    },
    {
        title: "Lead Generation Campaigns",
        description: "Instant-form and click-to-WhatsApp campaigns that fill your pipeline with qualified leads. We optimize for lead quality, not just volume, so your sales team talks to people who actually convert.",
        icon: <MousePointerClick size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1f7b5]",
    },
    {
        title: "Conversion & Sales Campaigns",
        description: "Custom audiences from your CRM, lookalikes, and retargeting sequences that re-engage warm prospects who didn't convert the first time — usually your cheapest, highest-ROI spend.",
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

export default function Meta_Services({ bgColor = "bg-[#0A0E17]", textColor = "text-white" }: { bgColor?: string; textColor?: string }) {
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