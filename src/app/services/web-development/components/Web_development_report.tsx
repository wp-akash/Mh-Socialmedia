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

export default function Web_development_report() {
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
                            <span className="text-[#117C75]">✦</span> Your Website Should Do More Than Look Good
                        </span>
                    </motion.div>

                    {/* Large centered mission statement */}
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-justify text-2xl md:text-[16px] font-[400] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto"
                    >
                        A beautiful website can still fail if it loads slowly, confuses visitors, performs poorly on mobile or generates no enquiries.
                    </motion.p>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-justify text-2xl md:text-[16px] font-[400] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto py-3"
                    >
                        In Dubai's competitive digital market, your website needs to be: Fast. Mobile-first. Secure. Search-friendly. Easy to navigate. Scalable. Built to convert.


                    </motion.p>
                    <motion.p
                        {...fadeUp(0.1)}
                        className="text-justify text-2xl md:text-[16px] font-[400] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto"
                    >
                        <b> We ask :</b> Who is the website for? What does the visitor need? What action should they take? What makes your business different? How should the website grow?

                    </motion.p>

                </div>
            </section>

        </>
    );
}
