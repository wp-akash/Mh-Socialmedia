"use client";

import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-32">
      <div className="global-container md:px-4">

        {/* TITLE */}
        <h3 className="h3">
          Drop us an email for collaborations or career opportunities.
        </h3>

        {/* DIVIDER */}
        <div className="mt-16 mb-20 h-px w-full bg-white/10"></div>

        <div className="space-y-16">

          {/* PROJECT EMAIL */}
          <div>
            <p className="text-xs tracking-widest text-white/40 mb-4">
              PROJECTS · PARTNERSHIPS · QUERIES
            </p>

            <a
              href="mailto:info@theicthub.com"
              className="group flex items-center gap-4"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 group-hover:border-white/40 transition">
                <ArrowUpRight size={18} />
              </span>

              <span className="secondary_header font-light group-hover:opacity-70 transition">
                info@mhsocialmedia.ae
              </span>
            </a>
          </div>

          {/* CAREER EMAIL */}
          <div>
            <p className="text-xs tracking-widest text-white/40 mb-4">
              CAREERS · JOIN OUR TEAM
            </p>

            <a
              href="mailto:career@mhsocialmedia.ae"
              className="group flex items-center gap-4"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 group-hover:border-white/40 transition">
                <ArrowUpRight size={18} />
              </span>

              <span className="secondary_header font-light group-hover:opacity-70 transition">
                career@mhsocialmedia.ae
              </span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
