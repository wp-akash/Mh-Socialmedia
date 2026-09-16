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

export default function Meta_report() {
    return (
        <>
            {/* ══════════════════════════════════════
          SECTION 1 — Our Mission
      ══════════════════════════════════════ */}
            <section className="py-20 md:py-28 bg-white">
                <div className="global-container md:px-4">

                    {/* Badge */}
                    <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
                        <span className="inline-flex items-center gap-1.5 md:text-[25px] font-[600] leading-[1.55] tracking-normal ">
                            <span className="text-[#117C75]">✦</span> Your Customers Are on Meta. Every Single Day.
                        </span>
                    </motion.div>

                    {/* Large centered mission statement */}
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-justify text-2xl md:text-[16px] font-[400] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto"
                    >
                        Around 9.4 million people in the UAE are active on Facebook and Instagram every month, and UAE users spend nearly 30 hours a month on Facebook alone — the highest of any app. This is where your audience discovers, compares, and decides.
                    </motion.p>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-justify text-2xl md:text-[16px] font-[400] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto py-3"
                    >
                        But reach isn't the same as results. Running "boost post" and hoping isn't a strategy — it's a way to burn budget. The brands winning on Meta in Dubai are the ones pairing precise targeting with creative built to convert and constant optimization. That's exactly what we do.
                    </motion.p>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-justify text-2xl md:text-[16px] font-[400] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto"
                    >
                        Here's the opportunity: UAE Meta CPMs actually run about 24% below the global average, meaning you can reach a premium, high-purchasing-power audience at a fraction of what advertisers pay in the US or UK. With the right setup, that's an unfair advantage — and we build campaigns to capture it.
                    </motion.p>

                </div>
            </section>

        </>
    );
}
