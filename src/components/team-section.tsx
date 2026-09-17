"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const members = [
    {
        id: "member1",
        name: "John Doe",
        role: "Chief Executive Officer",
        avatar: "https://i.pravatar.cc/300?u=1",
    },
    {
        id: "member2",
        name: "Jane Smith",
        role: "Chief Technology Officer",
        avatar: "https://i.pravatar.cc/300?u=2",
    },
    {
        id: "member3",
        name: "Michael Johnson",
        role: "HR Manager",
        avatar: "https://i.pravatar.cc/300?u=3",
    },
    {
        id: "member4",
        name: "Emily Davis",
        role: "Lead Software Analyst",
        avatar: "https://i.pravatar.cc/300?u=4",
    },
    {
        id: "member5",
        name: "William Brown",
        role: "Software Engineer",
        avatar: "https://i.pravatar.cc/300?u=5",
    },
    {
        id: "member6",
        name: "Olivia Wilson",
        role: "Senior Software Engineer",
        avatar: "https://i.pravatar.cc/300?u=6",
    },
    {
        id: "member7",
        name: "James Taylor",
        role: "Junior Software Engineer",
        avatar: "https://i.pravatar.cc/300?u=7",
    },
    {
        id: "member8",
        name: "Sophia Martinez",
        role: "Digital Marketing Expert",
        avatar: "https://i.pravatar.cc/300?u=8",
    },
];

const row1 = members.slice(0, 4);
const row2 = members.slice(4, 8);

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function TeamSection() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const renderCard = (member: typeof members[0], idx: number) => {
        const isHovered = hoveredId === member.id;
        const isFaded = hoveredId !== null && !isHovered;

        return (
            <div
                key={`${member.id}-${idx}`}
                className="cursor-default rounded-xl transition-all duration-400 p-2 -m-2 flex-shrink-0"
                style={{
                    width: "260px",
                    position: "relative",
                }}
                onMouseEnter={() => setHoveredId(member.id)}
                onMouseLeave={() => setHoveredId(null)}
            >
                {/* Image card */}
                <div
                    className="relative overflow-hidden rounded-xl"
                    style={{
                        aspectRatio: "4/5",
                        opacity: isFaded ? 0.28 : 1,
                        filter: isFaded ? "grayscale(0.4)" : "grayscale(0)",
                        transition: "opacity 0.4s ease, filter 0.4s ease",
                    }}
                >
                    <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover object-top pointer-events-none"
                    />
                </div>

                {/* Name + Role */}
                <div
                    className="pt-3 px-1"
                    style={{
                        opacity: isFaded ? 0.35 : 1,
                        transition: "opacity 0.4s ease",
                    }}
                >
                    <p
                        className="text-[14px] leading-tight transition-all duration-300"
                        style={{
                            fontWeight: isHovered ? 700 : 500,
                            color: isHovered ? "#111" : "#3f3f46",
                        }}
                    >
                        {member.name}
                    </p>
                    <p
                        className="text-xs mt-0.5 transition-all duration-300 pb-1"
                        style={{
                            color: isHovered ? "#52525b" : "#a1a1aa",
                            fontWeight: isHovered ? 500 : 400,
                        }}
                    >
                        {member.role}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <section className="py-20 md:py-28 bg-white overflow-hidden" id="team">
            <style>{`
                @keyframes scrollLeft {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    0%   { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
            `}</style>

            <div className="global-container md:px-4">
                {/* ── Header ── */}
                <div className="text-center mb-14">
                    <motion.div {...fadeUp(0)} className="flex justify-center mb-5">
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase bg-[#ede9fe] text-[#000000] rounded-full px-3 py-1">
                            Team Member
                        </span>
                    </motion.div>
                    <motion.h2
                        {...fadeUp(0.1)}
                        className="h2 primary_header"
                    >
                        Passionate professionals,
                        <br />
                        proven results
                    </motion.h2>
                </div>
            </div>

            {/* ── Marquee Rows ── */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col gap-10 mt-10"
            >
                {/* Row 1: Moves Left */}
                <div className="relative flex overflow-hidden w-[200%] sm:w-full max-w-[2000px] mx-auto">
                    {/* Fade Edges */}
                    <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

                    <div
                        className="flex gap-6 px-3"
                        style={{
                            animation: "scrollLeft 35s linear infinite",
                            animationPlayState: hoveredId ? "paused" : "running",
                            width: "max-content",
                            willChange: "transform"
                        }}
                    >
                        {[...row1, ...row1, ...row1].map((member, idx) => renderCard(member, idx))}
                    </div>
                </div>

                {/* Row 2: Moves Right */}
                <div className="relative flex overflow-hidden w-[200%] sm:w-full max-w-[2000px] mx-auto">
                    {/* Fade Edges */}
                    <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

                    <div
                        className="flex gap-6 px-3"
                        style={{
                            animation: "scrollRight 40s linear infinite",
                            animationPlayState: hoveredId ? "paused" : "running",
                            width: "max-content",
                            willChange: "transform"
                        }}
                    >
                        {[...row2, ...row2, ...row2].map((member, idx) => renderCard(member, idx))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}