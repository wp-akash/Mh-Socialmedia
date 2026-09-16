"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

// Data
const processSteps = [
  {
    title: "B2B & B2C Platforms",
    desc: "We build e-commerce solutions for both business-to-consumer (B2C) and business-to-business (B2B) models. Each model has its nuances – for instance, B2B platforms might need features like bulk pricing, quote requests, or restricted logins for different client tiers. B2C sites might focus more on visual appeal and one-click purchasing. We have experience with both and can tailor the platform accordingly. The result is an online store that provides an optimal experience for your target customers, whether they’re everyday shoppers or corporate buyers.",
  },
  {
    title: "Multi-Vendor Marketplaces",
    desc: "Want to create the next Amazon, Etsy, or a niche marketplace? We can develop multi-vendor marketplace functionality that allows third-party sellers to list products on your site. This includes building vendor management dashboards, product approval workflows, commission fee structures, and search/filter features. Our solution ensures each vendor can manage their own inventory and orders, while you maintain oversight. We handle scalability to support many products and users seamlessly.",
  },
  {
    title: "Subscription-Based E-Commerce",
    desc: "Subscription boxes and recurring delivery services are increasingly popular. If your business runs on a subscription model – whether it’s weekly meal kits, monthly curated products, or digital content subscriptions – we can build that functionality. We implement recurring billing, account management, flexible subscription plans, and renewal reminders. Support the booming subscription economy and secure predictable revenue streams.",
  },
  {
    title: "E-Commerce Analytics & Reporting",
    desc: "Data-driven decision making is crucial for growth. We integrate robust analytics tools into your admin panel. Track real-time sales, monitor inventory, and analyze customer behavior. Custom dashboards can highlight KPIs like conversion rates and customer lifetime value. With these insights, you can continually optimize your store and improve customer experience based on real data.",
  },
];

export default function Custome_ecommerce_work_process() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="global-container md:px-4">
        {/* Intro Section */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="h3">
            Custom E-Commerce
            <br /> Development Services
          </h3>
          <p className="primary_header_content md:mt-0 mt-5 paragraph">
            Every business has unique requirements, which is why custom
            e-commerce development is one of our core offerings. We don’t just
            deploy generic templates – we craft powerful digital commerce
            experiences tailored to your specific business model and goals.
          </p>
        </div>

        {/* Slider Section */}
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
                  <h4 className="secondary_header mb-4 font-semibold text-lg text-gray-900">
                    {step.title}
                  </h4>
                  <p className="secondary_header_content text-gray-700 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Outro Section */}
        <p className="secondary_header_content mt-8 text-gray-800 max-w-5xl mx-auto text-center">
          By offering these custom development services, <b>The ICT Hub</b>{" "}
          ensures you get an e-commerce platform that perfectly aligns with your
          business goals and operational needs. You won’t be constrained by the
          limitations of off-the-shelf systems. Instead, you’ll have a scalable,
          tailor-made solution that can adapt as your business evolves.
        </p>
      </div>
    </section>
  );
}
