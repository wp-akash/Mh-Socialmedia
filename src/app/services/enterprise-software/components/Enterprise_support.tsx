"use client";
import React from "react";

const processSteps = [
  {
    title: "Custom Software & ERP Development",
    desc: "Need a new system or an overhaul? We build user-friendly management software (ERP, web or mobile apps) exactly to your requirements. Say goodbye to one-size-fits-all tools.",
  },
  {
    title: "Legacy System Modernization",
    desc: "Have an old system you can’t update? We can revive or rebuild your software using modern, scalable technologies – even if you lack source code or original developers.",
  },
  {
    title: "Dedicated Support & Maintenance",
    desc: "Enjoy peace of mind with our 24/7 support. We monitor, troubleshoot, and improve your software continuously, so you experience minimal downtime and no chaos.",
  },
  {
    title: "Tech Team Extension (Offshore Developers)",
    desc: "Get your own experienced development team in Bangladesh at a fraction of the cost. Our remote team works as if we’re part of your in-house staff, handling updates, new features, and more. (For what you’d pay one UK developer, you can have a team of 3 experts on your project!)",
  },
  {
    title: "IT Consultancy & Partnership",
    desc: "Not sure what you need? We offer free consultations to analyze your business needs. We’ll recommend the best technology plan – whether it’s optimizing your current setup or building something new – and guide you every step of the way.",
  },
];

export default function Enterprise_support() {
  return (
    <section className="py-24">
      <div className="global-container md:px-4">
        {/* Section Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <h3 className="h3 primary_header">
            Affordable Modern<br /> Software Support
          </h3>
          <p className="md:mt-0 mt-5 text-justify primary_header_content paragraph">
            The ICT Hub UK provides the perfect blend of local understanding and global talent. We act as your tech partner, delivering tailored IT solutions without breaking the bank. Here’s how we help
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
