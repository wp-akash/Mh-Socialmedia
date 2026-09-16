"use client";
import React from "react";

const processSteps = [
  {
    title: "Free Consultation",
    desc: "We start with a friendly chat to understand your needs and current challenges. No tech jargon – just tell us what’s bothering you in running your business.",
  },
  {
    title: "Tailored Proposal",
    desc: "Our experts analyze your situation and propose a solution custom-fit to your business. Whether it’s upgrading your existing software or building a new platform, you’ll get a clear plan and quote.",
  },
  {
    title: "Agile Development",
    desc: "Once you’re on board, our team gets to work. We use an agile approach – meaning you see progress in short cycles, can give feedback, and watch your solution take shape. You stay in control without doing the heavy lifting.",
  },
  {
    title: "Seamless Delivery",
    desc: "We handle deployment, training, and transition carefully so there’s minimal downtime or disruption to your business. If it’s an ERP or management system, we’ll even help import your old data.",
  },
  {
    title: "Continuous Support",
    desc: "After launch, we remain your on-call tech team. Need a new feature next month? Found a bug? Want to scale to more users? We’re just a message away. Our support is ongoing – we grow with you as a long-term partner.",
  },
];

export default function Enterprise_how_it_work() {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="global-container md:px-4">
        {/* Section Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="h3 primary_header">
            How It Works – From Chaos<br /> to Clarity
          </h3>
          <p className="mt-5 md:mt-0 text-justify primary_header_content text-right paragraph">
            Working with ICT Hub UK is simple and transparent
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid gap-x-8 gap-y-[50px] md:grid-cols-3 lg:grid-cols-3 mt-20">
          {processSteps.map((step, idx) => (
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
                <h4 className="mb-3 secondary_header">{step.title}</h4>
                <p className="secondary_header_content paragraph text-justify">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
