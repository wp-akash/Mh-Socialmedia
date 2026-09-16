"use client";

import React from "react";

const whyChooseReasons = [
  {
    title: "Experience & Expertise",
    desc: "We have decades of combined experience in e-commerce and software development. Our portfolio includes projects for clients in the UK, Europe, the Middle East, and the USA. From fashion retail websites to B2B wholesale portals, our developers have seen it all. This experience helps us anticipate challenges and deliver battle-tested solutions.",
  },
  {
    title: "End-to-End Solutions",
    desc: "The ICT Hub is your one-stop shop — from strategy, design, development to deployment and maintenance. Whether it's branding, hosting, or CRM/ERP integrations — we handle it all to keep your project smooth and cohesive.",
  },
  {
    title: "Scalable & Future-Proof Tech",
    desc: "Our solutions are modular and scalable — built to evolve with trends like AR/VR or voice shopping. We avoid outdated tech and use clean, forward-compatible code to future-proof your platform.",
  },
  {
    title: "24/7 Support & Maintenance",
    desc: "Your success doesn't stop at launch. We offer round-the-clock support, performance monitoring, security updates, and technical help — so you're never left alone managing your e-commerce platform.",
  },
  {
    title: "Conversion-Focused Design",
    desc: "Our design is built to convert — clear CTAs, mobile-friendly layout, trust signals, simplified checkout, and CRO best practices ensure your visitors become customers and your sales grow steadily.",
  },
];

export default function WhyChoose_ecommerce() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="global-container md:px-4">
        {/* Section Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="h3">
            Why Choose The ICT Hub for <br /> E-Commerce Development?
          </h3>
          <p className="primary_header_content mt-6 md:mt-0 text-justify paragraph">
            At The ICT Hub, we specialize in e-commerce software development
            services, delivering cutting-edge solutions for businesses
            worldwide. Whether it&#39;s building a stunning front-end storefront, a
            powerful mobile app, or a complex back-end integration, our team has
            the expertise to make it happen. Here are some reasons to partner
            with us:
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-x-8 gap-y-[50px] md:grid-cols-3 lg:grid-cols-3 mt-16">
          {whyChooseReasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col h-full relative border-b-0 border-[#d82d45] mb-[25px]"
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
                <h4 className="secondary_header mb-3">{reason.title}</h4>
                <p className="secondary_header_content paragraph text-justify">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Paragraph */}
        <p className="paragraph mt-8 secondary_header_content max-w-3xl mx-auto text-center">
          In summary, choosing The ICT Hub means choosing a partner who is
          experienced, comprehensive, forward-thinking, reliable, and focused on
          your business growth. We measure our success by your success. When you
          work with us, you get more than just developers – you get a dedicated
          team invested in turning your e-commerce vision into reality.
        </p>
      </div>
    </section>
  );
}
