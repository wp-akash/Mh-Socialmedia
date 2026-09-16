"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    title: "Tailored Solutions",
    desc: "We understand that every business is unique. We offer personalized services that align with your needs.",
  },
  {
    title: "24/7 Support",
    desc: "Our dedicated team is always ready to assist you, no matter the hour.",
  },
  {
    title: "Secure & Scalable",
    desc: "We provide solutions that grow with your business, ensuring security and scalability at every step",
  },
  {
    title: "Cost-Effective",
    desc: "Maximize your tech investments with efficient, affordable solutions—without compromising quality.",
  },
];

export default function ChooseUs() {
  return (
    <section className="bg-muted/50 py-16 md:py-24 dark:bg-transparent">
      <div className="global-container md:px-4">
        {/* Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8 mb-12">
          <h3 className="h3">
            Why Choose The ICT HUB?
          </h3>
          <p className="paragraph primary_header_content mt-6 md:mt-0 text-justify">
            At The ICT HUB, we go beyond just providing technology — we deliver trust, innovation, and reliability. Our expert team ensures your business runs smoothly, securely, and efficiently, no matter its size or industry. With personalized solutions, 24/7 support, and scalable systems, we help you stay ahead in a fast-changing digital world — all while keeping your costs optimized.
          </p>
        </div>

        {/* Cards + Image */}
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left: Cards */}
          <div className="flex flex-col gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="group rounded-xl border p-6 shadow transition bg-white hover:bg-black hover:text-white"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-zinc-100 text-black group-hover:bg-white group-hover:text-black transition">
                    <ArrowUpRight className="size-5" />
                  </div>
                  <div>
                    <h4 className="secondary_header">{item.title}</h4>
                    <p className="mt-2 text-zinc-600 group-hover:text-zinc-300 transition secondary_header_content">
                      {item.desc.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Static Image */}
          <div className="rounded-2xl border overflow-hidden shadow-md">
            <Image
              src="/a.jpg" // replace with your image path
              alt="Mobile devices"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

