"use client";
import { Code2, Cpu, Rocket } from "lucide-react";

import { useState, useEffect } from "react";
import { Sun, ArrowUpRight } from "lucide-react";
import ContactButton from "@/components/ContactButton";

export default function LocationSection() {
  const [dubaiTime, setDubaiTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      const timeString = d.toLocaleString("en-US", {
        timeZone: "Asia/Dubai",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setDubaiTime(timeString);
    };

    updateTime(); // Initial run
    const interval = setInterval(updateTime, 60000); // update every 1 min

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="py-12 bg-white">
        <div className="global-container md:px-4 md:py-16 px-0 py-0">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-0">
            {/* LEFT — TIME */}
            <div className="flex flex-col items-center justify-center">
              <Sun size={58} className="text-black opacity-80" />
              <p id="demo" className="secondary_header mt-4">
                {dubaiTime}
              </p>
            </div>

            {/* RIGHT — INFO */}
            <div className="col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10 md:pt-0 md:mt-0 mt-10 pt-10 border-b lg:border-t-0 border-t-1 border-black/10">
                <div className="col-span-2">
                  <h4 className="secondary_header mb-4">Dubai</h4>

                  <p className="text-gray-600 leading-relaxed">
                    Wadi Al Safa 1212-R19
                  </p>
                </div>
                <div className="md:text-right text-center">
                  <ContactButton
                    href="https://maps.app.goo.gl/HWpcQVCxStVKURG1A"
                    text="Map Location"
                    variant="primary"
                    target="_blank"
                  />
                </div>
              </div>

              <div className="mt-10">
                <h4 className="text-sm tracking-widest text-gray-500 mb-5">
                  CONTACT US
                </h4>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-2">

                  <a
                    href="tel:+971521400224"
                    className="flex items-center group gap-3 mb-4"
                  >
                    <span className="w-8 h-8 flex items-center justify-center border border-black/20 rounded-full group-hover:border-black/40 transition">
                      <ArrowUpRight size={16} />
                    </span>
                    <span className="paragraph hover:underline font-light group-hover:opacity-70 transition">
                      +971-52-1400224
                    </span>
                  </a>



                  <a
                    href="mailto:info@mhsocialmedia.ae"
                    className="flex items-center group gap-3"
                  >
                    <span className="w-8 h-8 flex items-center justify-center border border-black/20 rounded-full group-hover:border-black/40 transition">
                      <ArrowUpRight size={16} />
                    </span>
                    <span className="paragraph hover:underline font-light group-hover:opacity-70 transition">
                      info@mhsocialmedia.ae
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
