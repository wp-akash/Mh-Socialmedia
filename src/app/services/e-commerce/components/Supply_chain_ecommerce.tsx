"use client";
import Image from "next/image";
import React, { useState } from "react";

const processSteps = [
  {
    title: "Automated Inventory Management",
    desc: (
      <>
        Say goodbye to manual stock counts and overselling. We build systems
        that track your inventory in real time across multiple channels and
        warehouses. You’ll know exactly how many units are in stock and where
        they are located. We can implement features like low-stock alerts,
        automated purchase order generation when inventory runs low, and
        synchronization with your online store (so the website shows “out of
        stock” when an item sells out). This level of automation reduces human
        error and ensures you’re always updated on inventory status, preventing
        missed sales or overstocking.
      </>
    ),
  },
  {
    title: "Smart Logistics & Order Fulfillment",
    desc: (
      <>
        Our supply chain software can optimize the order fulfillment process
        from start to finish. This includes integrating with shipping carriers
        for real-time rate shopping and label printing, as well as routing
        algorithms to optimize delivery routes if you operate your own fleet.
        For example, we can incorporate route optimization that helps your
        delivery drivers or third-party logistics pick the fastest, most
        cost-efficient routes – cutting down delivery times and fuel costs. We
        can also set up rules to automatically split orders across warehouses
        (ship from the location closest to the customer) to speed up delivery.
        The goal is to use technology to make your logistics smarter, so you can
        deliver products to customers faster and at lower cost.
      </>
    ),
  },
  {
    title: "Data-Driven Decision Making",
    desc: (
      <>
        We infuse AI and analytics into your supply chain management. By
        analyzing historical sales data and trends, our software can help
        forecast demand so you can stock the right amount of product at the
        right time. This prevents both stockouts and excess inventory. In fact,
        leveraging advanced supply chain software can increase forecast accuracy
        significantly – by around 26%, according to industry studies. Better
        forecasts and real-time data can also reduce operating costs by ~16%,
        improving your bottom line. We provide dashboards that let you monitor
        key supply chain metrics (like order fulfillment times, shipping costs,
        warehouse picking efficiency) so you can continuously identify
        bottlenecks and areas for improvement. Data-driven insights ensure your
        supply chain isn’t just running, but continuously evolving to be more
        efficient.
      </>
    ),
  },
];

function Supply_chain_ecommerce() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // ✅ Typed correctly

  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      {/* Intro */}
      <div className="global-container md:px-4 space-y-6">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="h3">
            Supply Chain Software
            <br /> Development Services
          </h3>
          <p className="primary_header_content md:mt-0 mt-5 paragraph">
            Efficient supply chain management is a backbone of any successful
            e-commerce business. That’s why The ICT Hub offers supply chain
            software development services to streamline your operations from end
            to end. We understand that as your online orders grow, so do the
            complexities of warehousing, inventory tracking, shipping, and
            fulfillment. Our custom supply chain solutions help you optimize
            these processes, reduce costs, and deliver orders to customers
            faster.
            <br />
            Efficient warehouse management and logistics software can streamline
            operations for e-commerce companies. Efficient logistics and
            inventory management are key to e-commerce success. Our team can
            develop tailored software tools or integrate existing platforms to
            give you better control and visibility over your supply chain.
            Here’s what our supply chain solutions offer:
          </p>
        </div>
      </div>

      {/* Accordion + Image */}
      <div className="global-container md:px-4 mt-16">
        <div className="md:grid md:grid-cols-2 md:gap-12 items-start">
          {/* LEFT: Accordion */}
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-5 py-4 flex justify-between items-center secondary_header bg-white hover:bg-gray-50 transition"
                  onClick={() => toggleStep(index)}
                >
                  {step.title}
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4 secondary_header_content paragraph">{step.desc}</div>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center">
            <div className="relative w-full h-[400px] rounded-xl shadow-lg overflow-hidden">
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
        </div>

        {/* Bottom paragraph */}
        <p className="paragraph mt-8 secondary_header_content max-w-3xl mx-auto text-center">
          By implementing these supply chain solutions, The ICT Hub helps your
          e-commerce business achieve a more{" "}
          <b>efficient, resilient, and scalable</b> operation...
        </p>
      </div>
    </section>
  );
}

export default Supply_chain_ecommerce;
