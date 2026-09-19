"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MoveDown } from "lucide-react";

// ── Logos strip data ──────────────────────────────────────────────
const clients = [
  { name: "Meta Ads" },
  { name: "Google Ads" },
  { name: "SEO Pro" },
];

// ── Fade-up helper ────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.25, 0.4, 0.25, 1] },
});

// ── Main Component ────────────────────────────────────────────────
export default function HeroSction() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#0a0a0a] text-white select-none"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Background Video (full bleed) ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.prod.website-files.com/68becb4858a3e743d2ec5a6d%2F68f20773550996f7d9403f37_freepik__smooth-dolly-shot-a-closeup-of-a-sleek-glossy-gree__83225-transcode.webm"
            type="video/webm"
          />
        </video>

        {/* Dark gradient — left heavy, fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/10" />

        {/* Subtle vignette on edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/60" />
      </div>

      {/* ── Diagonal divider line (decorative) ── */}
      <div
        className="absolute inset-y-0 z-10 pointer-events-none"
        style={{ left: "55%", width: "1px" }}
      >
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      {/* ── Main layout (flex column fills screen) ── */}
      <div className="global-container md:px-4 relative z-20 h-full flex flex-col">

        {/* ── Center content (grows to fill) ── */}
        <div className="flex-1 flex md:items-center items-end mb-2">
          <div className="max-w-2xl xl:max-w-3xl">

            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-[400] tracking-widest uppercase text-white/50 border border-white/10 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8f244] animate-pulse" />
                Dubai's Leading Digital Agency
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.25)}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3rem] font-[600] leading-[1.05] tracking-tight text-white"
            >
              Grow Your Brand in Dubai <span className="text-[#c8f244]">With Marketing</span> That Delivers <span className="text-[#c8f244]">Real Results</span>


            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.45)}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {/* Primary pill button — yellow/lime with dark arrow */}

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#117C75] text-white font-medium text-sm md:text-base pl-6 pr-2 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              >
                Request a Proposal
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#117C75] transition-colors duration-300">
                  <ArrowUpRight size={16} className="text-black group-hover:text-white" />
                </span>
              </Link>

              {/* Ghost link */}
              <Link
                href="/services"
                className="underline group inline-flex items-center gap-1.5 text-white/70 font-[500] hover:text-white font-medium text-sm sm:text-base transition-colors duration-300"
              >
                See Our Projects
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          {...fadeUp(0.65)}
          className="pb-8 sm:pb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8"
        >
          {/* Left: description + scroll */}
          <div className="flex flex-col gap-5 max-w-lg">
            <p className="text-white/45 text-[13px] leading-relaxed">
              MH Social is a full-service digital marketing agency in Dubai helping ambitious brands across the UAE and GCC generate leads, increase sales, and build identities customers remember. From high-performance Meta and Google Ads to SEO, branding, and web development — we turn attention into revenue.

            </p>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-white/50 hover:text-white text-xs font-medium tracking-wide uppercase transition-colors duration-300"
            >
              <MoveDown
                size={14}
                className="group-hover:translate-y-1 transition-transform duration-300"
              />
              Scroll Down
            </a>
          </div>

          {/* Right: client logos strip */}
          <div className="flex flex-col items-start sm:items-end gap-3">
            <p className="text-white/100 text-xs tracking-wide">
              Join over <span className="text-white/70 font-semibold">500+</span>{" "}
              brands growing with MH Social.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              {clients.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-xs font-medium"
                >
                  {/* Generic icon ring */}
                  <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                  </span>
                  {c.name}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Inter font import ── */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");
      `}</style>
    </section >
  );
}
