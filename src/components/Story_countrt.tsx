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

export default function Story_countrt() {
  return (
    <section className="pt-20 md:pt-28 pb-0 bg-white overflow-hidden">
      <div className="global-container md:px-4">

        {/* ── Hero Header Row ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">

          {/* Left: badge + headline */}
          <div className="max-w-lg">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-zinc-500 mb-5">
                <span className="text-[#117C75]">✦</span> About Us
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp(0.1)}
              className="text-4xl sm:text-5xl md:text-[3rem] font-[600] leading-[1.1] tracking-tight text-zinc-900"
            >
              Digital Growth. Creative Thinking. Real Business Results.
            </motion.h1>
          </div>

          {/* Right: description + CTA */}
          <motion.div
            {...fadeUp(0.2)}
            className="max-w-xs flex flex-col gap-3 md:pt-14"
          >
            <p className="text-sm text-zinc-500 leading-relaxed">
              MH Social is a Dubai-based digital marketing and technology agency helping businesses build stronger brands, reach the right customers and grow online.
            </p>
            <p className="text-sm text-zinc-500 leading-relaxed">
              We combine strategy, creativity, technology and performance marketing to create digital solutions that deliver real business value.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#117C75] text-white font-medium text-sm pl-6 pr-2 py-2 rounded-full w-fit transition-colors duration-300 border border-[#117C75] hover:bg-[#0e6860]"
            >
              Book A Free Call
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#0e6860] transition-colors duration-300">
                <ArrowUpRight size={16} className="text-black group-hover:text-white" />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ── Hero Image ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative w-full rounded-3xl overflow-hidden"
          style={{ height: "clamp(280px, 50vw, 560px)" }}
        >
          <Image
            src="/About Hero Image-p-1080.webp"
            alt="About Us — team at work"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Subtle bottom gradient for smooth blend into stats */}
          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(255,255,255,0.4) 0%, transparent 100%)" }}
          />
        </motion.div>

      </div>
    </section>
  );
}