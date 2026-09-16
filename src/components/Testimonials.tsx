"use client";

import React from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Testimonial data
───────────────────────────────────────────── */
const testimonials = [
    {
        id: 1,
        text: "Their strategies boosted our engagement and conversions improved noticeably within weeks. Highly efficient work.",
        name: "Liam Hayes",
        role: "Marketing Director",
        avatar: "https://i.pravatar.cc/56?img=11",
    },
    {
        id: 2,
        text: "They understood our product vision right away and provided smart, practical suggestions. The final result exceeded our expectations.",
        name: "Noah Reed",
        role: "Product Manager",
        avatar: "https://i.pravatar.cc/56?img=12",
    },
    {
        id: 3,
        text: "Smooth process, clear communication, and reliable execution. They made everything feel effortless from start to finish.",
        name: "Ethan Cole",
        role: "Brand Strategist",
        avatar: "https://i.pravatar.cc/56?img=13",
    },
    {
        id: 4,
        text: "A results-driven team that truly listens. Our campaign performance improved dramatically after working with them.",
        name: "James Foster",
        role: "E-commerce Director",
        avatar: "https://i.pravatar.cc/56?img=14",
    },
    {
        id: 5,
        text: "They brought structure and focus to a project that felt scattered. Their input was game-changing for our launch.",
        name: "Ryan Mitchell",
        role: "Startup CEO",
        avatar: "https://i.pravatar.cc/56?img=15",
    },
    {
        id: 6,
        text: "They introduced fresh ideas that elevated our content instantly. Their creative direction made a real difference.",
        name: "Aiden Brooks",
        role: "Creative Producer",
        avatar: "https://i.pravatar.cc/56?img=21",
    },
    {
        id: 7,
        text: "They delivered fast, strategic guidance that helped us launch confidently. A strong partner for any growing startup.",
        name: "Oliver Kent",
        role: "Startup Founder",
        avatar: "https://i.pravatar.cc/56?img=22",
    },
    {
        id: 8,
        text: "Their user-focused design approach improved our product's usability significantly. User satisfaction scores went up.",
        name: "Samuel Price",
        role: "UX Lead",
        avatar: "https://i.pravatar.cc/56?img=23",
    },
    {
        id: 9,
        text: "Exceptional work ethic and a genuine passion for results. They treated our goals as their own throughout the project.",
        name: "Daniel West",
        role: "Operations Head",
        avatar: "https://i.pravatar.cc/56?img=24",
    },
    {
        id: 10,
        text: "Working with this team was seamless. They helped refine our ideas in meaningful ways and delivered beyond what we asked.",
        name: "Lucas Grant",
        role: "Digital Consultant",
        avatar: "https://i.pravatar.cc/56?img=31",
    },
    {
        id: 11,
        text: "A smart blend of strategy and creativity. Their input improved our funnel performance and boosted overall ROI.",
        name: "Jacob Flynn",
        role: "Growth Analyst",
        avatar: "https://i.pravatar.cc/56?img=32",
    },
    {
        id: 12,
        text: "They brought structure, strategy, and clear direction to our project. Their work helped us move faster and present our brand with more confidence.",
        name: "Mason Clarke",
        role: "Brand Manager",
        avatar: "https://i.pravatar.cc/56?img=33",
    },
];

/* Split into 3 columns */
const col1 = [testimonials[0], testimonials[1], testimonials[2], testimonials[3], testimonials[4]];
const col2 = [testimonials[5], testimonials[6], testimonials[7], testimonials[8]];
const col3 = [testimonials[9], testimonials[10], testimonials[11], testimonials[0], testimonials[1]];

/* ─────────────────────────────────────────────
   Single Card
───────────────────────────────────────────── */
function TestimonialCard({ item }: { item: (typeof testimonials)[0] }) {
    return (
        <div className="bg-[#f7f7f7] rounded-2xl p-6 mb-4 flex-shrink-0">
            <p className="text-[15px] leading-[1.65] text-zinc-800 font-normal mb-5">
                &ldquo;{item.text}&rdquo;
            </p>
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-zinc-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={item.avatar}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <p className="text-sm font-semibold text-[#117C75] leading-tight">{item.name}</p>
                    <p className="text-xs text-zinc-500 mt-0.5">{item.role}</p>
                </div>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Scrolling Column
───────────────────────────────────────────── */
function ScrollColumn({
    items,
    direction = "up",
    speed = 30,
}: {
    items: (typeof testimonials)[0][];
    direction?: "up" | "down";
    speed?: number;
}) {
    const doubled = [...items, ...items];
    const animName = direction === "up" ? "tScrlUp" : "tScrlDown";

    return (
        <div className="relative overflow-hidden" style={{ height: "480px" }}>
            {/* Top fade */}
            <div
                className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, white 0%, transparent 100%)" }}
            />
            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to top, white 0%, transparent 100%)" }}
            />

            <div
                className="flex flex-col"
                style={{
                    animation: `${animName} ${speed}s linear infinite`,
                    willChange: "transform",
                }}
            >
                {doubled.map((item, idx) => (
                    <TestimonialCard key={`${item.id}-${idx}`} item={item} />
                ))}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   Fade-up helper
───────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
function Testimonials() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            {/* Keyframes injected via <style> */}
            <style>{`
        @keyframes tScrlUp {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes tScrlDown {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>

            <div className="global-container md:px-4">
                {/* ── Header ── */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-14">
                    {/* Left: badge + title */}
                    <div className="max-w-sm">
                        <motion.div {...fadeUp(0)}>
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-4">
                                <span className="text-[#117C75]">✦</span> Testimonials
                            </span>
                        </motion.div>
                        <motion.h2
                            {...fadeUp(0.1)}
                            className="text-4xl md:text-[2.5rem] font-[600] leading-[1.12] tracking-tight text-zinc-900"
                        >
                            Loved By Our
                            <br />
                            <span className="text-zinc-400 font-[400]">Community</span>
                        </motion.h2>
                    </div>

                    {/* Right: description */}
                    <motion.p
                        {...fadeUp(0.2)}
                        className="max-w-xs text-sm text-zinc-500 leading-relaxed md:pt-2"
                    >
                        We partner with forward-thinking teams who believe in strategy, creativity, and
                        measurable growth. Their words reflect the impact we strive to create—real results,
                        lasting relationships, and brands built to lead.
                    </motion.p>
                </div>

                {/* ── 3-Column Scroll Grid ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                    <ScrollColumn items={col1} direction="up" speed={28} />
                    <ScrollColumn items={col2} direction="down" speed={24} />
                    <ScrollColumn items={col3} direction="up" speed={32} />
                </motion.div>
            </div>
        </section>
    );
}

export default Testimonials;
