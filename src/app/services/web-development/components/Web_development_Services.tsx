"use client";

import React from "react";
import { motion } from "framer-motion";
import { Palette, ShoppingCart, Code2, Building2, MousePointerClick, Plug, Bot, Search, Wrench, FileText } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Website Design & Development",
        description: "Modern corporate, business, startup, service, portfolio, landing page, booking and industry-specific websites designed around clear customer journeys.",
        icon: <Palette size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "WordPress & Elementor Development",
        description: "Custom WordPress websites, Elementor layouts, reusable design systems, custom functionality, WooCommerce, integrations, security and performance optimization.",
        icon: <FileText size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    },
    {
        title: "E-commerce Development",
        description: "Shopify, WooCommerce, Magento and custom e-commerce solutions with product catalogs, payment gateways, shipping, inventory, customer accounts and conversion-focused experiences.",
        icon: <ShoppingCart size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1f7b5]",
    },
    {
        title: "Custom Web Development",
        description: "Bespoke business portals, dashboards, CRM interfaces, booking systems, marketplaces, membership platforms, SaaS products and web applications built around your processes.",
        icon: <Code2 size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f7d6a1]",
    },
    {
        title: "Real Estate Websites",
        description: "Property listings, advanced search, location filters, project pages, floor plans, agent profiles, virtual tours, lead forms, WhatsApp and CRM integrations.",
        icon: <Building2 size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
    {
        title: "Landing Page Development",
        description: "High-converting landing pages for Google Ads, Meta Ads, product launches, campaigns, events, webinars and lead generation.",
        icon: <MousePointerClick size={20} className="text-zinc-900" />,
        iconBg: "bg-[#e8a1f7]",
    },
    {
        title: "API & Business Integrations",
        description: "Connect your website with CRM, ERP, payment gateways, WhatsApp, analytics, booking systems, inventory, accounting, marketing automation and other business tools.",
        icon: <Plug size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1dff7]",
    },
    {
        title: "AI-Powered Websites",
        description: "AI chat assistants, intelligent search, lead qualification, recommendations, customer support and workflow automation where AI creates genuine business value.",
        icon: <Bot size={20} className="text-zinc-900" />,
        iconBg: "bg-[#a1f7b5]",
    },
    {
        title: "SEO-Friendly Development",
        description: "Search-friendly architecture, URLs, metadata, schema, internal linking, crawlability, mobile performance and technical foundations for SEO, AEO, GEO and emerging AI-search experiences.",
        icon: <Search size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f7d6a1]",
    },
    {
        title: "Maintenance & Support",
        description: "Security updates, backups, monitoring, bug fixes, performance improvements, content updates and ongoing technical support.",
        icon: <Wrench size={20} className="text-zinc-900" />,
        iconBg: "bg-[#f4f7a1]",
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Web_development_Services({ bgColor = "bg-[#0A0E17]", textColor = "text-white" }: { bgColor?: string; textColor?: string }) {
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
                        From brochure sites to complex web applications, we design and build websites that perform across search, mobile and conversion.
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