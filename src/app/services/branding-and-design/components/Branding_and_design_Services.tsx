"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, Palette, BookOpen, MessageSquare, RefreshCw, MonitorSmartphone, Package, Video } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Brand Strategy & Positioning",
        description: "We define your brand's purpose, positioning, target audience, differentiators, personality, value proposition, market territory, and messaging direction.",
        icon: <Compass size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Logo & Visual Identity",
        description: "Distinctive identity systems including logo variations, colour systems, typography, iconography, and layouts designed to work across all touchpoints.",
        icon: <Palette size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    },
    {
        title: "Brand Guidelines",
        description: "Scalable systems with clear rules for logo usage, colours, typography, imagery, layout, and brand voice to keep your brand consistent as you grow.",
        icon: <BookOpen size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1f7b5]",
    },
    {
        title: "Brand Voice & Messaging",
        description: "We develop your brand voice, tone of communication, messaging pillars, taglines, headlines, key messages, and calls to action.",
        icon: <MessageSquare size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Rebranding & Brand Refresh",
        description: "Brand Audit → Strategy → Positioning → Identity → Implementation → Launch. Modernize your identity without destroying valuable brand equity.",
        icon: <RefreshCw size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    },
    {
        title: "Social & Digital Branding",
        description: "Consistent systems for social platforms, websites, e-commerce, digital advertising, email, and mobile interfaces.",
        icon: <MonitorSmartphone size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1f7b5]",
    },
    {
        title: "Packaging & Business Collateral",
        description: "Brand experiences across product packaging, business cards, brochures, company profiles, presentations, sales decks, reports, and signage.",
        icon: <Package size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Motion & Campaign Design",
        description: "Extend your identity into motion with logo animation, motion graphics, social templates, animated typography, and campaign identities.",
        icon: <Video size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    }
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Branding_and_design_Services({ bgColor = "bg-[#0A0E17]", textColor = "text-white" }: { bgColor?: string; textColor?: string }) {
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
                        We're a Full-Service Branding Partner
                    </motion.h2>
                    <motion.p
                        {...fadeUp(0.25)}
                        className={`${textColor} text-sm md:text-md`}
                    >
                        We work with you to design and execute high-impact brand identities that build trust, recognition, and loyalty.
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