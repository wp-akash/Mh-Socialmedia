"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    value: "220K+",
    label: "Leads Generated Monthly",
    badge: "16% INCREASE",
  },
  {
    value: "250+",
    label: "Successful Campaigns Launched",
    badge: "16% INCREASE",
  },
  {
    value: "300%",
    label: "Average ROI Increase for Clients",
    badge: "16% INCREASE",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

function About_info() {
  return (
    <section className="py-20 md:py-24 bg-white" id="scroll-to-about">
      <div className="global-container md:px-4">

        {/* ── Top row: badge + headline + button ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12">

          {/* Left: badge + headline */}
          <div className="flex-1 max-w-2xl">
            <motion.div {...fadeUp(0.05)}>
              <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-zinc-500 border border-zinc-200 rounded px-3 py-1 mb-5">
                About Us
              </span>

            </motion.div>

            <motion.h2
              {...fadeUp(0.15)}
              className="text-3xl sm:text-4xl md:text-[1.8rem] font-[500] leading-[1.15] tracking-tight text-zinc-900"
            >
              We help brands grow through creative strategies, smart campaigns,
              and results-driven digital marketing expertise.
            </motion.h2>
          </div>

          {/* Right: About us button */}
          <motion.div {...fadeUp(0.25)} className="flex-shrink-0 flex md:items-start md:pt-14">
            <div className="mb-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-[#117C75] text-white font-medium text-sm md:text-base pl-6 pr-2 py-2 rounded-full  transition-colors duration-300 border-1 border-[#117C75] hover:border-1 hover:border-white"
              >
                About us
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#117C75] transition-colors duration-300">
                  <ArrowUpRight size={16} className="text-black group-hover:text-white" />
                </span>
              </Link>
            </div>

          </motion.div>
        </div>

        {/* ── Stat cards row ── */}
        <div className="mt-10 flex flex-col sm:flex-row gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fadeUp(0.15 + i * 0.1)}
              className="relative group flex flex-col justify-between p-8 md:p-10 bg-zinc-50 hover:bg-zinc-50 transition-all duration-500 cursor-default border-r last:border-r-0 border-zinc-100 flex-1 sm:hover:flex-[2]"
            >
              {/* Badge (optional) */}
              {stat.badge && (
                <span className="absolute top-5 right-5 text-[10px] font-semibold tracking-widest uppercase text-[#ffffff] bg-[#000000] border border-[#c8f244] rounded px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {stat.badge}
                </span>
              )}

              {/* Value */}
              <p className="text-5xl md:text-4xl font-[400] text-[#000000]">
                {stat.value}
              </p>

              {/* Label */}
              <p className="mt-6 text-xs font-semibold tracking-wide uppercase text-[#000000]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About_info;
