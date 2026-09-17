"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Country {
  name: string;
  image: string;
}

const GlobalOperations: React.FC = () => {
  const [currentCountry, setCurrentCountry] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null); // ✅ FIXED

  const countries: Country[] = [
    { name: "Bangladesh", image: "/a.jpg" },
    { name: "Africa", image: "/a.jpg" },
    { name: "USA", image: "/a.jpg" },
    { name: "Canada", image: "/a.jpg" },
    { name: "Saudi Arabia", image: "/a.jpg" },
    { name: "Japan", image: "/a.jpg" },
    { name: "France", image: "/a.jpg" },
  ];

  const goToCountry = (index: number): void => {
    setCurrentCountry(index);
    swiperRef.current?.slideToLoop(index);
  };

  const handleSlideChange = (swiper: SwiperType): void => {
    setCurrentCountry(swiper.realIndex);
  };

  return (
    <section className="bg-black min-h-screen text-white overflow-hidden">
      <div className="global-container md:px-6 py-20">
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-medium">WE Works</p>
          <h2 className="h2 text-white mb-8 primary_header">
            Our Global Foot Print
          </h2>
          <div className="w-32 h-0.5 bg-white"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-y-4">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg primary_header_content">
              At MH Social Media, we’re proud to serve happy customers in Africa, the
              USA, Canada, Saudi Arabia, Japan, and France – and we’re just
              getting started!
            </p>

            {/* Current Country Name */}
            <div className="flex items-center gap-4 h3  font-light">
              <span className="text-gray-500">in</span>
              <span className="text-white transition-all duration-500 ">
                {countries[currentCountry].name}
              </span>
            </div>

            {/* Country Navigation Dots */}
            <div className="flex items-center gap-3 pt-8">
              {countries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToCountry(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 secondary_header ${index === currentCountry
                    ? "bg-white scale-110"
                    : "bg-gray-600 hover:bg-gray-400"
                    }`}
                  aria-label={`Go to ${countries[index].name}`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Swiper Slider & Country List */}
          <div className="relative">
            {/* Image Swiper */}
            <div className="relative h-[100px] w-full rounded-lg overflow-hidden">
              <Swiper
                modules={[Pagination, EffectFade, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={700}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                onSlideChange={handleSlideChange}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                className="h-full w-full"
              >
                {countries.map((country, index) => (
                  <SwiperSlide key={country.name}>
                    <div className="relative w-full h-full">
                      <Image
                        src={country.image}
                        alt={`${country.name} office location`}
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                      <div className="absolute inset-0 z-10 flex items-center justify-center">
                        <h3 className="h3 font-light !text-white text-center">
                          {country.name}
                        </h3>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Country Name List Buttons */}
            <div className="mt-8 space-y-2">
              {countries.map((country, index) => (
                <button
                  key={country.name}
                  onClick={() => goToCountry(index)}
                  className={`block text-left w-full py-3 px-4 rounded-lg transition-all duration-300 ${index === currentCountry
                    ? "bg-white/10 text-white border-l-4 border-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent hover:border-gray-600"
                    }`}
                >
                  <div className="secondary_header_content font-light ">{country.name}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default GlobalOperations;
