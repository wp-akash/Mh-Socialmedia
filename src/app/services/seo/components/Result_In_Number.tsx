"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Users, BarChart3 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

const stats = [
  {
    value: "4–6x",
    label: "Average ROAS Delivered",
    icon: TrendingUp,
    accent: "#117C75",
    gradient: "from-[#117C75]/10 to-[#117C75]/5",
    border: "border-[#117C75]/20",
  },
  {
    value: "62%",
    label: "Average Cost Per Lead Reduction",
    icon: TrendingDown,
    accent: "#7c3aed",
    gradient: "from-violet-500/10 to-violet-500/5",
    border: "border-violet-500/20",
  },
  {
    value: "12K+",
    label: "Leads Generated for Dubai Brands",
    icon: Users,
    accent: "#ea580c",
    gradient: "from-orange-500/10 to-orange-500/5",
    border: "border-orange-500/20",
  },
  {
    value: "350+",
    label: "Meta Campaigns Managed",
    icon: BarChart3,
    accent: "#0284c7",
    gradient: "from-sky-500/10 to-sky-500/5",
    border: "border-sky-500/20",
  },
];

function Result_In_Number() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Dotted background */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="global-container md:px-4 relative z-10">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between gap-6 mb-10">
          <div className="max-w-lg">
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase mb-4">
                <span className="text-[#117C75]">✦</span> Proven Results
              </span>
            </motion.div>
            <motion.h2
              {...fadeUp(0.01)}
              className="h3 font-[500] leading-[1.15] text-[#000000] mb-3"
            >
              Results You Can Expect
            </motion.h2>
          </div>
          <motion.p
            {...fadeUp(0.15)}
            className="text-[16px] text-zinc-600 leading-relaxed text-right"
          >
            Top UAE advertisers achieve 4–6x return on ad spend with the right
            Advantage+ setup and creative. Our job is to move you toward that
            top tier and keep you there.
          </motion.p>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                {...fadeUp(0.1 + idx * 0.08)}
                className={`group relative bg-white border ${stat.border} rounded-2xl p-5 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-default flex flex-col justify-between`}
              >
                {/* Top row: icon + number */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${stat.accent}15` }}
                  >
                    <Icon size={18} style={{ color: stat.accent }} />
                  </div>
                  <span className="text-[14px] font-mono text-zinc-400 tracking-wider">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  {/* Value */}
                  <p
                    className="text-3xl md:text-[2rem] font-bold tracking-tight leading-none py-2"
                    style={{ color: stat.accent }}
                  >
                    {stat.value}
                  </p>

                  {/* Divider */}
                  <div
                    className="w-6 h-[2px] rounded-full mb-2 transition-all duration-300 group-hover:w-10"
                    style={{ backgroundColor: `${stat.accent}40` }}
                  />

                  {/* Label */}
                  <p className="text-[16px] text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom note ── */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-center text-[16px] text-zinc-500 mt-8 max-w-lg mx-auto"
        >
          Results vary by industry, offer, and budget. We&apos;ll share relevant
          benchmarks for your specific vertical during the consultation.
        </motion.p>
      </div>
    </section>
  );
}

export default Result_In_Number;
