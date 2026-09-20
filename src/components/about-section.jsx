"use client";

import { motion } from "framer-motion";
import { Users, Lightbulb, Headphones } from "lucide-react";

const stats = [
  { value: "320", suffix: "+", label: "Successful projects delivered" },
  { value: "32M", suffix: "+", label: "Ad impressions managed" },
  { value: "92", suffix: "%", label: "Client satisfaction rate" },
  { value: "42", suffix: "+", label: "Experienced Team Members" },
];

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

export default function AboutSection() {
  return (
    <>
      {/* ══════════════════════════════════════
          SECTION 1 — Our Mission
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="global-container md:px-4">

          {/* Badge */}
          <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-zinc-500">
              <span className="text-[#117C75]">✦</span> Our Mission
            </span>
          </motion.div>

          {/* Large centered mission statement */}
          <motion.p
            {...fadeUp(0.1)}
            className="text-center text-2xl md:text-[1.75rem] font-[500] leading-[1.55] tracking-tight text-zinc-900 max-w-3xl mx-auto"
          >
            To help businesses become more visible, more trusted and more profitable through smart {" "}
            <span className="text-[#117C75] italic">digital growth.</span>
          </motion.p>

          {/* ── Stats Row ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-zinc-100"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.1 + i * 0.08)}
                className="pt-8 pb-4 px-6 border-r border-zinc-100 last:border-r-0"
              >
                <p className="text-4xl md:text-5xl font-[700] tracking-tight text-zinc-900 leading-none mb-3">
                  {stat.value}
                  <span className="text-[#117C75]">{stat.suffix}</span>
                </p>
                <p className="text-sm text-zinc-500 leading-snug max-w-[140px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — Our Guiding Principles
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white border-t border-zinc-100">
        <div className="global-container md:px-4">

          {/* Badge */}
          <motion.div {...fadeUp(0)} className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-zinc-500">
              <span className="text-[#117C75]">✦</span> Our Values
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            {...fadeUp(0.1)}
            className="h2 primary_header text-center mb-4"
          >
            Our Guiding Principles
          </motion.h2>

          {/* Sub-headline */}
          <motion.p
            {...fadeUp(0.15)}
            className="text-center text-sm text-zinc-500 mb-16"
          >
            Integrity, innovation, and collaboration drive our results.
          </motion.p>

          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((val, i) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={i}
                  {...fadeUp(0.1 + i * 0.1)}
                  className="group bg-zinc-50 rounded-2xl p-8 hover:bg-[#117C75] transition-colors duration-400 cursor-default"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white mb-8 group-hover:bg-white/20 transition-colors duration-300">
                    <Icon
                      size={20}
                      className="text-zinc-600 group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] font-[600] text-zinc-900 group-hover:text-white mb-3 transition-colors duration-300">
                    {val.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-500 group-hover:text-white/80 leading-relaxed transition-colors duration-300">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
