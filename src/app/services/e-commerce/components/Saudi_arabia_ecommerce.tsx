'use client'; // Must be first line
import Image from "next/image";
import React, { useState } from "react";

const faqs = [
  {
    question: "Localized Payment Solutions",
    answer:
      "One size does not fit all when it comes to payments. In Saudi Arabia, many customers use Mada (the local debit card network) and other regional payment services. We ensure your e-commerce platform integrates seamlessly with Saudi-specific payment gateways and methods, so customers can pay in whatever way they trust most. A smooth, locally-optimized payment process can significantly increase checkout success rates in Saudi markets.",
  },
  {
    question: "Bilingual & Multi-Currency Support",
    answer:
      "Reaching Saudi customers often means providing content in both Arabic and English. Our e-commerce solutions offer full bilingual support, including proper handling of right-to-left (RTL) text for Arabic. We also implement multi-currency pricing if you plan to sell across different countries or to accommodate shoppers who prefer seeing prices in SAR, USD, etc. An e-commerce site that “speaks the language” – both linguistically and currency-wise – makes it more accessible and trustworthy to local consumers.",
  },
  {
    question: "Scalable Platforms for a Growing Market",
    answer:
      "The Saudi e-commerce market is expanding fast, and your platform must be ready to handle growth. We design scalable, cloud-ready architectures that can cope with traffic spikes during big promotions or holiday seasons (like Ramadan sales). Whether you’re targeting local customers in Riyadh and Jeddah, or planning to expand across the GCC, our solutions can scale accordingly. You won’t outgrow the platform as demand increases. With Saudi Arabia’s number of online shoppers expected to reach ~33 million by 2024 (a 42% jump since 2019), scalability and stability are mission-critical – and we’ve got you covered on that front.",
  },
];

function SaudiArabiaEcommerce() {
  // ✅ First accordion open by default, and type is number | null
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // ✅ Typing the parameter as number
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* INTRO SECTION */}
      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="global-container md:px-4 ">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <h3 className="h3">
              E-Commerce Development
              <br /> in Saudi Arabia
            </h3>
            <p className="primary_header_content md:mt-0 mt-5 paragraph">
              Saudi Arabia’s e-commerce sector is booming, and businesses in the
              Kingdom need top-tier development partners to compete effectively
              in the online space. At <b>The ICT Hub</b>, we have experience
              delivering e-commerce solutions tailored for the Middle East
              market, including Saudi Arabia. We understand the local cultural
              and technical requirements – from language support to payment
              integration – that can make or break an e-commerce venture in this
              region.
              <br />
              Saudi consumers are rapidly embracing online shopping (e-commerce
              sales in Saudi Arabia grew by about 26% year-over-year in 2024, according to arabnews.com), which means the opportunity for online
              retailers is huge. Here’s why you should consider{" "}
              <b>The ICT Hub</b> as one of the leading e-commerce development
              partners for Saudi Arabia
            </p>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-12 items-start mt-16">
            {/* LEFT: IMAGE */}
            <div className="flex justify-center">
              <div className="relative w-full h-full md:h-100 rounded-xl shadow-lg overflow-hidden">
                <Image
                  src="/a.jpg"
                  alt="E-commerce Screenshot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority
                />
              </div>
            </div>

            {/* RIGHT: CONTENT */}
            <div>
              {/* Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border rounded-lg overflow-hidden">
                    <button
                      className="w-full text-left px-5 py-4 flex justify-between items-center secondary_header bg-white hover:bg-gray-50 transition"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <span className="text-xl">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    {openIndex === index && (
                      <div className="px-5 pb-4 secondary_header_content paragraph">{faq.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SaudiArabiaEcommerce;
