"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// ✅ Process Steps with inline SVGs
const processSteps = [
  {
    title: "Backdated systems",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-[#d82d45]"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    desc: "Existing software that feels stuck in the past, lacking updates or web integration.",
  },
  {
    title: "No in-house IT team",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-[#d82d45]"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 9a3 3 0 11-6 0 3 3 0 016 0zM6 9a3 3 0 11-6 0 3 3 0 016 0zm0 6a6 6 0 00-6 6h6v-6zm12 0a6 6 0 00-6 6h6v-6z"
        />
      </svg>
    ),
    desc: "You might not have dedicated tech staff, or your team is overwhelmed keeping things running.",
  },
  {
    title: "Scaling issues",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-[#d82d45]"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3v18h18M7 16l4-4 4 4M11 4h2v8h-2V4z"
        />
      </svg>
    ),
    desc: "As your business grows, the software can’t keep up – it’s not scalable or runs painfully slow under load.",
  },
  {
    title: "High costs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-[#d82d45]"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-2 0-3 .667-3 2s1 2 3 2 3 .667 3 2-1 2-3 2m0-8V4m0 16v-4"
        />
      </svg>
    ),
    desc: "Local IT support is expensive, and you’re watching your tech budget skyrocket for minimal improvements.",
  },
];

export default function Enterprise_process() {
  return (
    <section className="bg-zinc-50 py-16 md:py-32">
      <div className="global-container md:px-4">
        {/* Intro */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="h3">
            We Understand
            <br /> Your Challenges
          </h3>
          <p className="md:mt-0 mt-5 primary_header_content paragraph">
            Many UK businesses – from boutiques and salons to garages and
            charities – face similar IT headaches. Typically, our clients are
            founders or managers who depend on software to run their operations
            but encounter problems like:
          </p>
        </div>

        {/* Slider */}
        <div className="mt-20">
          <Swiper
  grabCursor={true}
  loop={true}
  spaceBetween={30}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  modules={[Pagination, Autoplay]}
  className="mySwiper"
  style={{ paddingBottom: "3rem" }}
  breakpoints={{
    1024: { slidesPerView: 3 },
    768: { slidesPerView: 1 },
    0: { slidesPerView: 1 },
  }}
>

            {processSteps.map((step, idx) => (
              <SwiperSlide
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col h-full"
              >
                <div className="flex flex-col justify-start items-start h-full text-left">
                  <h4 className="h4 mb-4 font-semibold text-lg text-gray-900 flex items-center gap-4 secondary_header">
                    <div className="w-[60px] h-[60px] rounded-full bg-muted/50 flex items-center justify-center">
                      {step.icon}
                    </div>
                    {step.title}
                  </h4>

                  <p className="  leading-relaxed secondary_header_content paragraph">
                    {step.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Outro */}
        <p className="mt-8 text-gray-800 max-w-5xl mx-auto text-center secondary_header_content">
          These challenges can lead to lost productivity and endless
          frustration. In fact, studies show companies often spend 60–80% of
          their IT budgets just maintaining outdated systems! You deserve
          better.
        </p>
      </div>
    </section>
  );
}
