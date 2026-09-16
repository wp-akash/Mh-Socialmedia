import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
function Branding_and_design_Investment() {
  return (
    <>
      <section className="py-20 md:py-20 bg-gray-50">
        <div className="global-container md:px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="">
              <h3 className="h3 text-center md:text-left primary_header">
                Results You Can Expect
              </h3>
              <p className="paragraph mt-3 primary_header_content">
                A strategic brand can help your business:
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2 text-zinc-700">
                <li>Look more credible</li>
                <li>Strengthen recognition</li>
                <li>Differentiate from competitors</li>
                <li>Build customer trust</li>
                <li>Support premium positioning</li>
                <li>Improve marketing consistency</li>
                <li>Make content easier to scale</li>
                <li>Create stronger customer experiences</li>
                <li>Attract better-fit customers</li>
              </ul>



              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#117C75] text-white font-medium text-sm pl-6 pr-2 py-2 rounded-full w-fit transition-colors duration-300 border border-[#117C75] hover:bg-[#0e6860] mt-8"
              >
                Custom Quote
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#0e6860] transition-colors duration-300">
                  <ArrowUpRight size={16} className="text-black group-hover:text-white" />
                </span>
              </Link>

            </div>

            <div className="">
              <div className="technology_icon">
                <div className="grid grid-cols-1 gap-6 md:gap-12">
                  <Image
                    src="/Investment.jpg"
                    alt="Branding and Design"
                    width={700}
                    height={700}
                    className="object-cover object-top rounded"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Branding_and_design_Investment;
