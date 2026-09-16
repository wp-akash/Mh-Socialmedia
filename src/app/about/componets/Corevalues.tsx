"use client";
import React from "react";
import {
  Handshake,
  Heart,
  BadgeCheck,
  Users,
  DollarSign,
  ThumbsUp,
  Lightbulb,
  Smile,
} from "lucide-react";

const whyChooseReasons = [
  {
    title: "High Integrity",
    desc: "“It’s not faith in Technology it’s faith in People” – Steve Jobs",
    icon: BadgeCheck,
  },
  {
    title: "110% Customer Satisfaction",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: Smile,
  },
  {
    title: "Cost Effective",
    desc: "Every Service, Product and Project’s success depends on their cost effectiveness. We always remember it.",
    icon: DollarSign,
  },
  {
    title: "Collaboration",
    desc: "Our success comes after our team work and Team Collaboration. We can Feel it.",
    icon: Users,
  },
  {
    title: "Compassion",
    desc: "Every of our team member takes their passion as profession, so they love to do their job and push their limit with handholding their buddies.",
    icon: Heart,
  },
  {
    title: "Stakeholders Satisfaction",
    desc: "We Believe in Eco System where every part of system is most important and perfect. Our Stakeholders not only our power but also our Strength. It matters most.",
    icon: Handshake,
  },
  {
    title: "Quality",
    desc: "This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    icon: ThumbsUp,
  },
  {
    title: "Innovation & Adaptability",
    desc: "We cultivate innovation and research mindset. Our dynamic and cooperative organizational culture always awards and promotes in-depth innovation.",
    icon: Lightbulb,
  },
];

export default function Corevalues() {
  return (
    <section className="bg-white py-24">
      <div className="global-container md:px-4">
        {/* Section Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="h3">Our Core Values</h3>
          <p className="primary_header_content mt-6 md:mt-0 text-justify">
            At The ICT Hub, we are driven by integrity, collaboration, and a deep commitment to customer satisfaction. We value cost-effective, high-quality solutions, and approach every project with compassion and creativity. Our team thrives on innovation, adaptability, and putting clients and stakeholders at the heart of everything we do.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-x-8 gap-y-[50px] md:grid-cols-3 lg:grid-cols-3 mt-16">
          {whyChooseReasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 flex flex-col h-full relative border-b-0 border-[#d82d45] mb-[25px]"
              >
                {/* Circle Icon */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#D72D45] text-white shadow">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8 text-center">
                  <h4 className="secondary_header mb-3">{reason.title}</h4>
                  <p className="secondary_header_content">{reason.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
