"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
    {
        question: "What services does your agency offer?",
        answer:
            "We offer strategic marketing, branding, content creation, social media, SEO, and data-driven campaigns designed to help bold brands connect, grow, and achieve lasting success.",
    },
    {
        question: "How do you measure marketing success?",
        answer:
            "We track measurable KPIs — traffic, conversions, engagement rate, and ROI — using real-time analytics dashboards to ensure every campaign delivers tangible, data-backed results.",
    },
    {
        question: "Do you offer custom marketing strategies?",
        answer:
            "Yes, we provide custom marketing strategies tailored to each client, combining creativity, data insights, and industry expertise to deliver campaigns that drive measurable growth and engagement.",
    },
    {
        question: "How long does it take to see results?",
        answer:
            "The timeline for results depends on strategy, goals, and campaign type, but clients typically begin seeing measurable improvements within a few weeks to a few months.",
    },
    {
        question: "What industries do you specialize in?",
        answer:
            "We specialize in diverse industries including technology, fashion, lifestyle, e-commerce, and startups, delivering tailored marketing strategies that drive growth and measurable results.",
    },
    {
        question: "What makes your agency different from others?",
        answer:
            "Our agency stands out by combining bold creativity, data-driven strategies, and personalized client collaboration, delivering marketing solutions that inspire action and drive measurable business growth.",
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Choose_us() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 md:py-28 bg-white">
            <div className="global-container md:px-4">

                {/* ── Top Header ── */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
                    <div className="max-w-lg">
                        <motion.div {...fadeUp(0)}>
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-4">
                                <span className="text-[#117C75]">✦</span> FAQ
                            </span>
                        </motion.div>
                        <motion.h2
                            {...fadeUp(0.1)}
                            className="text-4xl md:text-[2.5rem] font-[600] leading-[1.12] tracking-tight text-zinc-900"
                        >
                            Everything You Need
                            <br />
                            <span className="text-zinc-400 font-[400]">To Know Today</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        {...fadeUp(0.2)}
                        className="max-w-sm text-sm text-zinc-500 leading-relaxed md:pb-1"
                    >
                        We create impactful marketing strategies that drive growth, boost visibility,
                        and turn your audience into loyal, engaged, and paying customers.
                    </motion.p>
                </div>

                {/* ── Main Grid ── */}
                <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-start">

                    {/* Left: decorative stat block */}
                    <motion.div
                        {...fadeUp(0.25)}
                        className="md:col-span-2 flex flex-col gap-5"
                    >
                        {/* Stat card 1 */}
                        <div className="rounded-2xl bg-[#117C75] p-8 text-white">
                            <p className="text-5xl font-[700] tracking-tight mb-2">98%</p>
                            <p className="text-sm font-medium text-white/80 leading-snug">
                                Client Satisfaction Rate across all campaigns and partnerships
                            </p>
                        </div>

                        {/* Stat card 2 */}
                        <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-8">
                            <p className="text-5xl font-[700] tracking-tight text-zinc-900 mb-2">7+</p>
                            <p className="text-sm font-medium text-zinc-500 leading-snug">
                                Years of experience delivering results for brands across every industry
                            </p>
                        </div>

                        {/* Stat card 3 */}
                        <div className="rounded-2xl bg-zinc-50 border border-zinc-100 p-8">
                            <p className="text-5xl font-[700] tracking-tight text-zinc-900 mb-2">250+</p>
                            <p className="text-sm font-medium text-zinc-500 leading-snug">
                                Successful campaigns launched with measurable ROI for clients
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: FAQ Accordion */}
                    <motion.div
                        {...fadeUp(0.35)}
                        className="md:col-span-3"
                    >
                        <ul className="divide-y divide-zinc-100 border-t border-zinc-100">
                            {faqItems.map((item, index) => (
                                <li key={index} className="group">
                                    <button
                                        className="flex items-center justify-between w-full py-5 text-left gap-4 cursor-pointer"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={activeIndex === index}
                                    >
                                        <div className="flex items-start gap-4">
                                            <span className="text-xs font-bold text-[#117C75] mt-0.5 tabular-nums flex-shrink-0">
                                                {String(index + 1).padStart(2, "0")}.
                                            </span>
                                            <span
                                                className={`text-[15px] font-[500] transition-colors duration-200 ${
                                                    activeIndex === index
                                                        ? "text-zinc-900"
                                                        : "text-zinc-600 group-hover:text-zinc-900"
                                                }`}
                                            >
                                                {item.question}
                                            </span>
                                        </div>
                                        <span
                                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                activeIndex === index
                                                    ? "bg-[#117C75] text-white"
                                                    : "bg-zinc-100 text-zinc-500 group-hover:bg-zinc-200"
                                            }`}
                                        >
                                            {activeIndex === index ? (
                                                <Minus className="w-4 h-4" />
                                            ) : (
                                                <Plus className="w-4 h-4" />
                                            )}
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {activeIndex === index && (
                                            <motion.div
                                                key="content"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pl-9 pb-5 text-sm text-zinc-500 leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
