"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

export default function Privacy_intro() {
    return (
        <section className="pt-20 md:pt-28 pb-0 bg-white overflow-hidden">
            <div className="global-container md:px-4">

                {/* ── Hero Header Row ── */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">

                    {/* Left: badge + headline */}
                    <div className="max-w-lg">
                        <motion.div {...fadeUp(0)}>
                            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-5">
                                <span className="text-[#117C75]">✦</span> Privacy
                            </span>
                        </motion.div>
                        <motion.h1
                            {...fadeUp(0.1)}
                            className="text-4xl sm:text-5xl md:text-[3rem] font-[600] leading-[1.1] tracking-tight text-zinc-900"
                        >
                            Privacy Policy
                        </motion.h1>
                        <motion.p
                            {...fadeUp(0.15)}
                            className="text-sm font-medium text-zinc-500 mt-4"
                        >
                            Last Updated: September 2026
                        </motion.p>
                    </div>

                    {/* Right: description + CTA */}
                    <motion.div
                        {...fadeUp(0.2)}
                        className="max-w-lg flex flex-col gap-6 md:pt-14"
                    >
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            At MH Social, we respect your privacy and are committed to protecting the personal information you share with us.
                        </p>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            This Privacy Policy explains how we collect, use, store, process and protect personal information when you visit our website, communicate with us, request our services, submit an enquiry, or otherwise interact with MH Social through our digital channels.
                        </p>
                        <p className="text-sm text-zinc-500 leading-relaxed">
                            By using our website or providing your information to us, you acknowledge that you have read and understood this Privacy Policy.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
