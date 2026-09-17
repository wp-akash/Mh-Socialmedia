"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Headphones } from "lucide-react";

const values = [
    {
        icon: Users,
        title: "Unwavering Integrity",
        description:
            "We act with honesty and transparency, earning the trust of our clients and partners.",
    },
    {
        icon: Lightbulb,
        title: "Bold Innovation",
        description:
            "We embrace creativity and forward-thinking ideas to stay ahead and deliver meaningful results.",
    },
    {
        icon: Headphones,
        title: "Seamless Collaboration",
        description:
            "We work together, valuing teamwork and open communication to achieve the best outcomes.",
    },
];

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Google_report() {
    return (
        <>
            {/* ══════════════════════════════════════
          SECTION 1 — Our Mission
      ══════════════════════════════════════ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="global-container md:px-4">

                    {/* Badge */}
                    <motion.div {...fadeUp(0)} className="flex justify-center mb-2">
                        <span className="inline-flex items-center gap-1.5 md:text-[25px] font-[600] leading-[1.55] tracking-normal ">
                            <span className="text-[#117C75]">✦</span> Meet Your SEO Agency in Dubai That Gets You Found
                        </span>
                    </motion.div>
                    {/* Large centered mission statement */}
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-justify text-2xl md:text-[16px] font-[400] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto py-3"
                    >
                        Traditional SEO used to be simple: find keywords, create pages, build links, and repeat. But search has evolved. In 2026, Google combines organic results with local maps, shopping, videos, featured snippets, and AI-powered experiences.
                    </motion.p>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-justify text-2xl md:text-[16px] font-[400] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto"
                    >
                        At MH Social, we don't treat SEO as a checklist. We treat it as a digital growth system built for how your customers actually search.
                    </motion.p>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-justify text-2xl md:text-[16px] font-[400] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto"
                    >
                        At MH Social, we don't treat SEO as a checklist. We treat it as a digital growth system built for how your customers actually search.
                    </motion.p>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-justify text-2xl md:text-[16px] font-[400] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto"
                    >
                        <b>Tailored Search Strategies For Your Sector :</b> Dubai Real Estate,
                        Hotels & Hospitality,
                        Restaurants & Dining,
                        Law Firms & Legal,
                        Healthcare Providers,
                        E-Commerce Brands,
                        Construction & Engineering,
                        Financial Services,
                        Technology Companies,
                        Education Providers,
                        Professional Services,
                        Enterprise Brands
                    </motion.p>

                </div>
            </section>

        </>
    );
}
