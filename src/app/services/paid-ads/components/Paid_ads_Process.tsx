"use client";

import React, { useState } from "react";

const features = [
    {
        id: "01",
        title: "Discovery & Audit",
        description: "Understand your business, audience, offer, competitors, existing campaigns and customer economics.",
        accent: "#6366f1", // indigo
    },
    {
        id: "02",
        title: "Strategy",
        description: "Select the right platforms, objectives, audiences, creative direction, offers, budget and KPIs.",
        accent: "#a855f7", // purple
    },
    {
        id: "03",
        title: "Tracking Setup",
        description: "Ensure important actions such as clicks, leads, purchases, bookings and revenue can be measured.",
        accent: "#10b981", // emerald
    },
    {
        id: "04",
        title: "Creative & Campaign Setup",
        description: "Develop multiple creative concepts, campaign structures, landing pages and audience strategies.",
        accent: "#ef4444", // red
    },
    {
        id: "05",
        title: "Launch & Test",
        description: "Launch campaigns and systematically test creative, audiences, offers, messages and landing pages.",
        accent: "#f59e0b", // amber
    },
    {
        id: "06",
        title: "Optimize & Scale",
        description: "Shift budget toward stronger opportunities, eliminate waste and scale campaigns when the economics support growth.",
        accent: "#3b82f6", // blue
    },
];

const Paid_ads_Process = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="py-20 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-white" />

            <div className="global-container mx-auto relative z-10 w-full">
                {/* Header */}
                <div className="grid md:grid-cols-2 mb-12">
                    <div>
                        <h3 className="h3 text-center md:text-left primary_header">
                            Our Process
                        </h3>
                    </div>
                    <div>
                        <p className="paragraph primary_header_content">
                            Data-driven framework for predictable growth Our approach follows a proven system designed to scale results consistently.
                        </p>
                    </div>
                </div>

                {/* Accordion columns — desktop */}
                <div
                    className="hidden md:flex gap-4 h-[380px]"
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    {features.map((feature, index) => {
                        const isActive = activeIndex === index;
                        const isInactive = activeIndex !== null && !isActive;

                        return (
                            <div
                                key={feature.id}
                                onMouseEnter={() => setActiveIndex(index)}
                                style={{
                                    flex: isActive ? "0 0 40%" : isInactive ? "0 0 20%" : "1",
                                    borderTop: `3px solid ${feature.accent}`,
                                    transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
                                }}
                                className="bg-black rounded-2xl p-8 flex flex-col justify-between overflow-hidden cursor-pointer"
                            >
                                {/* Top */}
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div
                                            className="w-2 h-2 rounded-full mr-3"
                                            style={{ backgroundColor: feature.accent }}
                                        />
                                        <span className="text-white font-semibold text-xl">
                                            {feature.id}
                                        </span>
                                    </div>

                                    <h3
                                        className={`text-white font-medium leading-tight secondary_header transition-all duration-300 ${isActive ? "text-2xl" : "text-lg"
                                            }`}
                                        style={{
                                            writingMode: isActive ? "horizontal-tb" : "vertical-rl",
                                            textOrientation: "mixed",
                                            transform: isActive ? "none" : "rotate(180deg)",
                                            whiteSpace: isActive ? "normal" : "nowrap",
                                        }}
                                    >
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Description — only visible when active */}
                                <p
                                    className="text-[#d1d5dc] text-base leading-relaxed secondary_header_content transition-all duration-300"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        maxHeight: isActive ? "200px" : "0px",
                                        overflow: "hidden",
                                        transition:
                                            "opacity 0.3s ease, max-height 0.4s ease",
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile — stacked cards */}
                <div className="flex md:hidden flex-col gap-4">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-black rounded-2xl p-8 flex flex-col"
                            style={{ borderTop: `3px solid ${feature.accent}` }}
                        >
                            <div className="flex items-center mb-4">
                                <div
                                    className="w-2 h-2 rounded-full mr-3"
                                    style={{ backgroundColor: feature.accent }}
                                />
                                <span className="text-white font-semibold text-xl">
                                    {feature.id}
                                </span>
                            </div>
                            <h3 className="text-white text-2xl font-medium mb-4 leading-tight secondary_header">
                                {feature.title}
                            </h3>
                            <p className="text-[#d1d5dc] leading-relaxed text-base secondary_header_content">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Dots */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
            <div className="absolute top-1/3 right-20 w-1 h-1 bg-green-400/40 rounded-full animate-pulse delay-500" />
            <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000" />
        </section>
    );
};

export default Paid_ads_Process;