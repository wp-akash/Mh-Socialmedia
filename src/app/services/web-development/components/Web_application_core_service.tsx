"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const processSteps = [
  {
    title: "Business Goals Before Technology",
    desc: "We don't choose technology because it's fashionable. We choose the platform and architecture that fit your business model, budget and growth plans.",
  },
  {
    title: "Design + Development Together",
    desc: "Our designers and developers work together to ensure the final website performs as well as the original design.",
  },
  {
    title: "SEO Built Into Development",
    desc: "Technical SEO is considered from the beginning—not added months after launch.",
  },
  {
    title: "Built for Mobile",
    desc: "We design mobile-first experiences that work across phones, tablets and desktops. This is particularly important in the UAE's highly mobile digital environment.",
  },
  {
    title: "Performance Matters",
    desc: "We optimize images, code, caching, fonts, scripts, databases and infrastructure to create faster, more usable websites.",
  },
  {
    title: "Arabic & Multilingual Ready",
    desc: "We can support English, Arabic, RTL layouts and multilingual SEO, helping Dubai businesses serve diverse audiences effectively.",
  },
  {
    title: "Ready for Modern Search & AI",
    desc: "Clear information architecture, structured data, semantic content and entity clarity help create stronger foundations for traditional search and emerging AI-powered discovery.",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

function Web_application_core_service() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    // Calculate which "page" we're on based on card width
    const cardWidth = el.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 0;
    const gap = 24; // gap-6 = 24px
    const scrollPos = el.scrollLeft;
    const idx = Math.round(scrollPos / (cardWidth + gap));
    setActiveIndex(Math.min(idx, processSteps.length - 1));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardEl = el.querySelector<HTMLElement>("[data-card]");
    if (!cardEl) return;
    const cardWidth = cardEl.offsetWidth + 24; // card width + gap
    el.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  // Total dot count: on large screens 3 visible at once out of 5 → 3 positions (0,1,2)
  // We'll just use the raw index for dots since snap aligns per-card
  const totalDots = processSteps.length;

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden border-b-[0.5px] border-color">
      <div className="global-container md:px-4">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h3 className="h3 primary_header">
            Why Choose Mh Social Media?
          </h3>

          {/* Desktop Nav Arrows */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${canScrollLeft
                ? "border-zinc-300 text-zinc-700 hover:bg-[#117C75] hover:border-[#117C75] hover:text-white cursor-pointer"
                : "border-zinc-200 text-zinc-300 cursor-not-allowed"
                }`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${canScrollRight
                ? "border-zinc-300 text-zinc-700 hover:bg-[#117C75] hover:border-[#117C75] hover:text-white cursor-pointer"
                : "border-zinc-200 text-zinc-300 cursor-not-allowed"
                }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* ── Horizontal Scroll Track ── */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {processSteps.map((step, idx) => (
            <motion.div
              key={idx}
              data-card
              {...fadeUp(0.08 * idx)}
              className="group relative flex-shrink-0 snap-start bg-[#fafafa] rounded-2xl p-8 flex flex-col justify-between border border-zinc-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
              style={{
                minHeight: "280px",
              }}
            >
              {/* Number badge */}
              <div className="w-10 h-10 rounded-full bg-[#117C75]/10 text-[#117C75] flex items-center justify-center text-sm font-bold mb-6 group-hover:bg-[#117C75] group-hover:text-white transition-colors duration-300">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-zinc-900 mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[16px] text-zinc-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-zinc-200 group-hover:border-[#117C75]/30 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* ── Dot Indicators (mobile + desktop) ── */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              aria-label={`Go to card ${i + 1}`}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardEl = el.querySelector<HTMLElement>("[data-card]");
                if (!cardEl) return;
                const cardWidth = cardEl.offsetWidth + 24;
                el.scrollTo({ left: i * cardWidth, behavior: "smooth" });
              }}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex
                ? "w-8 bg-[#117C75]"
                : "w-2 bg-zinc-300 hover:bg-zinc-400"
                }`}
            />
          ))}
        </div>

        {/* ── Mobile Nav Arrows ── */}
        <div className="flex md:hidden justify-center gap-3 mt-5">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${canScrollLeft
              ? "border-zinc-300 text-zinc-700 active:bg-[#117C75] active:border-[#117C75] active:text-white"
              : "border-zinc-200 text-zinc-300"
              }`}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${canScrollRight
              ? "border-zinc-300 text-zinc-700 active:bg-[#117C75] active:border-[#117C75] active:text-white"
              : "border-zinc-200 text-zinc-300"
              }`}
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>

      {/* Hide scrollbar across browsers */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default Web_application_core_service;
