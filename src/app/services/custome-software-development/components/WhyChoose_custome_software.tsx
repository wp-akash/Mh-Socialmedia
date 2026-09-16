"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import type { SwiperRef } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const WhyChooseCustomSoftware = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const features = [
    {
      id: "01",
      title: "Specialist In-House Team",
      description:
        "We assign a cross-functional team to each project so your developers, designers and DevOps work only for you. This focus and expertise yields faster, higher-quality result. Dedicated teams are proven to speed up delivery without sacrificing quality. We hand-pick skilled specialists so you get exactly the expertise you need.",
      borderColor: "border-indigo-500",
    },
    {
      id: "02",
      title: "Rapid MVP & Agile Process",
      description:
        "When time is critical, our agile approach keeps you ahead of schedule. By working in short iterations with frequent client feedback, we deliver working prototypes and MVPs quickly. This shortcut to launch lets you test ideas and enter the market faster.",
      borderColor: "border-purple-500",
    },
    {
      id: "03",
      title: "99.9% Uptime & 24/7 Support",
      description:
        "Your business doesn't sleep, and neither do we. Our robust cloud architecture (AWS, Azure, GCP) and monitoring tools guarantee near-zero downtime. 24/7 maintenance and support means issues are fixed before they impact you.",
      borderColor: "border-emerald-500",
    },
    {
      id: "04",
      title: "Custom Integrations",
      description:
        "We make all your software talk to each other. From bespoke ERP systems for retail to APIs that connect legacy databases, our engineers handle seamless integration. Visual demos show how new modules plug into your workflows.",
      borderColor: "border-red-500",
    },
    {
      id: "05",
      title: "Scalability",
      description:
        "As your business grows, our solutions grow too. We use scalable cloud services so your software never outgrows its infrastructure. Whether you have 10 users or 10,000, performance remains fast and reliable.",
      borderColor: "border-purple-500",
    },
    {
      id: "06",
      title: "Budget-Friendly Models",
      description:
        "You only pay for the skills you need — no hidden overheads like full-time HR or office costs. This efficient model helps reduce costs and maximize your ROI.",
      borderColor: "border-emerald-500",
    },
    {
      id: "07",
      title: "Trust & Proof",
      description:
        "We back up claims with case studies and testimonials. Seeing real stories of how we solved problems builds credibility and trust with clients.",
      borderColor: "border-indigo-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-zinc-50">
      <div className="w-full px-4 md:px-6">
        <div className="max-w-6xl mx-auto mb-12 text-center">
          <h3 className="h3">
            Why The ICT HUB? Dedicated
            <br />
            Team & Fast Delivery
          </h3>
        </div>

        <div className="max-w-full mx-auto relative overflow-hidden">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, FreeMode, Autoplay]}
            spaceBetween={20}
            slidesPerView="auto"
            loop={true}
            grabCursor
            freeMode={{ enabled: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={600}
            resistance
            resistanceRatio={0.85}
            className="pb-16 !overflow-visible"
          >
            {features.map((feature) => (
              <SwiperSlide key={feature.id} className="!w-96 h-auto">
                <div
                  className={`bg-black text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300  border-l-4 h-[450px] flex flex-col w-full`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-gray-400">{feature.id}</div>
                  </div>
                  <h5 className="secondary_header mb-6 leading-tight">{feature.title}</h5>
                  <p className="secondary_header_content !text-gray-300 leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all duration-300 hover:scale-110 md:flex hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/80 hover:bg-black text-white p-3 rounded-full transition-all duration-300 hover:scale-110 md:flex hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 secondary_header_content mt-8">
            Our team&#39;s coding expertise is on display – from front-end UI to back-end cloud
            architecture. We showcase real integrations and product mockups to build trust and clarity.
            Our agile, scalable development leads to modern, reliable solutions that grow with your business.
          </p>
        </div>
      </div>

      {/* Floating Dots */}
      {/* <div className="absolute top-10 left-10 w-2 h-2 bg-gray-400/20 rounded-full animate-pulse" /> */}
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-green-400/40 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default WhyChooseCustomSoftware;


