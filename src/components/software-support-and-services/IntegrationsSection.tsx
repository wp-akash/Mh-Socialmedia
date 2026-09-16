"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const features = [
  {
    id: "01",
    title: "IT Support Services",
    description:
      "Our expert IT support team is here to provide comprehensive technical support—24/7. From routine maintenance to urgent troubleshooting, we ensure your systems are secure and always operational.",
  },
  {
    id: "02",
    title: "Scalable Cloud Services",
    description:
      "Move your business to the cloud with our managed services. Enjoy reduced costs, increased efficiency, and enhanced collaboration while scaling effortlessly as your business grows.",
  },
  {
    id: "03",
    title: "Custom Business Software Solutions",
    description:
      "We provide custom software solutions designed to meet your specific business challenges. From ERP systems to CRM software, our solutions are built to optimize operations and improve productivity.",
  },
  {
    id: "04",
    title: "Compliance Management Solutions",
    description:
      "Our compliance management software helps businesses stay on top of ever-evolving regulations, ensuring that your organization remains compliant with industry standards.",
  },
  {
    id: "05",
    title: "Network Security Solutions",
    description:
      "Your data and systems deserve the best protection. Our cybersecurity services include audits, vulnerability assessments, and custom security solutions, such as firewalls and encryption, to keep your organization secure.",
  },
  {
    id: "06",
    title: "Managed IT Services",
    description:
      "Let us take care of your IT management—from system monitoring and maintenance to project deployment. We offer end-to-end services, freeing you up to focus on your core business.",
  },
  {
    id: "07",
    title: "Disaster Recovery Services",
    description:
      "Prepare for the unexpected with our disaster recovery services. From data backup to system restoration, we ensure your data is always protected and your business can bounce back quickly.",
  },
];

const IntegrationsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="global-container mx-auto relative z-10 w-full">
        {/* Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8 mb-10">
          <h3 className="h3">What We Offer</h3>
          <p className="mt-6 md:mt-0 paragraph text-justify primary_header_content">
            At The ICT HUB, we deliver a full range of technology services designed to empower your business. From reliable IT support and advanced cybersecurity to scalable cloud solutions and custom software, we provide the tools and expertise you need to stay ahead. Our goal is to help you operate efficiently, securely, and confidently in today’s digital world.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {features.map((feature) => (
            <SwiperSlide
              key={feature.id}
              style={{ width: "360px" }}
              className="transition-all duration-1000 opacity-100 translate-y-0 py-8"
            >
              <div className="bg-black backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-black/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl h-[420px] flex flex-col">
                {/* Number */}
                <div className="flex items-center mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  <span className="text-white font-semibold text-xl">
                    {feature.id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white secondary_header mb-6 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed secondary_header_content flex-1">
                  {feature.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Floating Decorative Dots (same aesthetic as Development_Process) */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-black/10 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-green-400/20 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-400/20 rounded-full animate-pulse delay-1000" />
    </section>
  );
};

export default IntegrationsSection;
