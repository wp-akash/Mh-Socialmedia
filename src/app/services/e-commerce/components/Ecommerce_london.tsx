"use client";

import React, { useState } from "react";

const processSteps = [
  {
    title: "Local Market Insight",
    desc: "We know what UK consumers expect. Our London-based experts design with British audiences in mind, from using familiar terminology and UK English, to supporting local payment methods. We also pay attention to UK e-commerce trends and seasonal events (like Boxing Day sales) to help your site capitalize on what resonates with local shoppers. This market-specific understanding means your online store will feel right at home for your customers.",
  },
  {
    title: "SEO & Performance Optimization",
    desc: "Standing out in London’s competitive e-commerce scene requires more than just good looks – your site also needs to be easily found and fast. We implement UK-focused SEO strategies (so your site ranks high on Google.co.uk) and ensure pages load quickly. Our development process includes optimizing images, code, and hosting for speed and reliability. A faster site not only improves user experience but also boosts your search rankings. We’ll make sure your e-commerce site not only looks great, but also scores high in performance tests and SEO, helping you attract and retain more customers.",
  },
  {
    title: "Custom Features",
    desc: "London’s diverse and savvy customer base means you may need unique features to differentiate your business. Whether you need a multi-vendor marketplace, a loyalty rewards system, or AI-driven product recommendations, we can build it. Our developers have experience implementing bespoke features like AR try-ons for products, subscription membership areas, and more. Whatever your vision – from an AI-powered recommendation engine to integration with UK-specific shipping services – we have the capability to develop it. The result is a website that isn’t a one-size-fits-all template, but a platform with custom functionality tailored to your brand and customers.",
  },
];

export default function Ecommerce_london() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpanded((prev) => (prev === idx ? null : idx));
  };

  const truncateText = (text: string, maxLength = 220) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section className="bg-white py-16 md:py-32 dark:bg-transparent">
      <div className="global-container md:px-4">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="h3">
            E-Commerce Website
            <br /> Development in London
          </h3>
          <p className="primary_header_content md:mt-0 mt-5 paragraph">
            London is a global hub for e-commerce, making the market highly
            competitive. There were around 580,000 e-commerce-enabled websites
            in the UK in the past year, and this number keeps growing. To stand
            out in this crowded space, you need an innovative, high-performance
            website that offers something special. Our team in London
            understands the local market dynamics and consumer behaviors. (UK
            shoppers have sky-high expectations for fast loading, mobile
            optimization, and smooth checkout experiences, so a generic template
            website won’t cut it.)
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-3 lg:gap-20 lg:px-0 mt-20">
          {processSteps.map((step, idx) => {
            const isExpanded = expanded === idx;

            return (
              <div
                key={idx}
                className={`bg-white rounded-xl shadow p-6 flex flex-col h-full relative border-b-0 border-[#d82d45] mb-[25px] ${
                  idx === 1 ? "mt-[15px]" : ""
                }`}
              >
                {/* Circle Icon */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8 text-center">
                  <h4 className="secondary_header mb-3">{step.title}</h4>
                  <p className="secondary_header_content paragraph text-justify">
                    {isExpanded ? step.desc : truncateText(step.desc)}
                  </p>

                  {step.desc.length > 220 && (
                    <div className="mt-3 flex justify-end">
                      <button
                        onClick={() => toggleExpand(idx)}
                        className="flex items-center gap-1 text-[#d92d45] font-medium hover:text-black transition-all duration-200 ease-in-out group"
                      >
                        {isExpanded ? "Show less" : "Show more"}
                        <svg
                          className={`w-4 h-4 transform transition-transform duration-200 ease-in-out ${
                            isExpanded ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
