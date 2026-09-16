import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
function Web_development_Investment() {
  return (
    <>
      <section className="py-20 md:py-20 bg-gray-50">
        <div className="global-container md:px-4">
          {/* Content Column (merged left + middle) */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="">
              <h3 className="h3 text-center md:text-left primary_header">
                Industries We Serve
              </h3>
              <p className="paragraph mt-3 primary_header_content">
                We create industry-specific websites for: Real Estate, Hospitality, Healthcare, E-commerce, Finance, Education, Construction, Technology, Automotive, Restaurants, Professional Services.

              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#117C75] text-white font-medium text-sm pl-6 pr-2 py-2 rounded-full w-fit transition-colors duration-300 border border-[#117C75] hover:bg-[#0e6860] mt-4"
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
                    alt="Meta Ads — Facebook & Instagram Campaigns"
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

export default Web_development_Investment;
