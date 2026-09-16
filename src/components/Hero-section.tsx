"use client";
import React from "react";
import Link from "next/link";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { motion } from "framer-motion";
import { HeroHeader } from "@/components/HeroHeader";
import ContactButton from "./ContactButton";
import HeroSectionbg from "./HeroSectionbg";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden z-10 relative">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section className="h-[80vh] pt-28 pb-14 flex items-center justify-center bg-white">
          <div className="global-container md:px-8">
            <div className="relative">
              <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
              <div className="mx-auto max-w-8xl px-6">
                <div className="text-center lg:mt-8">
                  <div className="flex justify-center">
                    {/* <ContactButton href="/support" text="150+ trusted Clients"/> */}
                    <button className="relative overflow-hidden text-black px-6 py-2 rounded-full flex items-center gap-3 group transition-all duration-300 border border-gray-300">
                      <Link href="" className="flex items-center gap-2">
                        <span className="relative z-10">
                          150+ trusted Clients
                        </span>
                      </Link>
                    </button>
                  </div>

                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="h1"
                    className="mt-4 max-w-5xl text-balance h1 text-center mx-auto"
                  >
                    We Build Software That Powers Global Businesses
                  </TextEffect>
                  <TextEffect
                    per="line"
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.5}
                    as="p"
                    className="mx-auto mt-2 max-w-3xl text-balance text-lg"
                  >
                    Custom ERP, AI, Mobile Apps & Software Solutions designed
                    for scale, efficiency & growth.
                  </TextEffect>

                  <motion.div
                    variants={transitionVariants}
                    className="mt-7 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8"
                    initial="hidden"
                    animate="visible"
                  >
                    <ContactButton
                      href="/contact"
                      text="Book a Free Consultation"
                      variant="primary"
                    />
                    <ContactButton
                      href="/services"
                      text="Explore Our Services"
                      variant="secondary"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HeroSectionbg />
      </main>
    </>
  );
}
