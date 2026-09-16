"use client";

import ContactButton from "@/components/ContactButton";
import { Code2, Cpu, Rocket } from "lucide-react";

export default function SoftwareCompanyCTA() {
  return (
    <section className="w-full py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* MAIN CTA BOX */}
        <div className="relative bg-[#000000] text-white p-14 rounded-3xl overflow-hidden">

          {/* Gradient Accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-transparent pointer-events-none"></div>

          {/* Tag */}
          <span className="text-sm inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 mb-4">
            Transform Your Ideas Into Reality
          </span>

          {/* Heading */}
          <h3 className="h3 text-white mb-4">
            Let’s Build Your  
            <span className="text-[#d82d45]"> Digital Future</span> Together
          </h3>

          {/* Subheading */}
          <p className="text-gray-300 max-w-2xl">
            We help startups, agencies, and enterprises build powerful software solutions —
            from product design to full-stack development.  
            Partner with our expert team and accelerate your success.
          </p>

          {/* Feature Icons */}
          <div className="flex flex-wrap gap-6 my-8">
            <div className="flex items-center gap-3 text-gray-300">
              <Cpu className="text-[#d82d45]" />
              <span>Custom Software Development</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Code2 className="text-[#d82d45]" />
              <span>Web & Mobile App Solutions</span>
            </div>

            <div className="flex items-center gap-3 text-gray-300">
              <Rocket className="text-[#d82d45]" />
              <span>Product Strategy & Scaling</span>
            </div>
          </div>

          {/* CTA Button */}
          <ContactButton
                      href="/contact"
                      text="Start Your Project"
                      variant="primary"
                    />
        </div>

        {/* TRUST LINE */}
        <div className="w-full bg-[#02070E] text-center py-3 px-6 rounded-full mt-6 text-white font-medium">
          Join 100+ Clients Who Built Their Digital Products With Us.
        </div>
      </div>
    </section>
  );
}
