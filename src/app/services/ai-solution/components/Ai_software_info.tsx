"use client";
import { useRef } from "react";
import Image from "next/image";
function Ai_software_info() {
  const imageRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <section className="mt-20 mb-16">
        <div className="global-container md:px-4">
          <div className="grid md:grid-cols-2">
            {/* Left Column: Text Content */}
            <h3 className="h3 gap-4">
              The ICT Hub – Transform Your Business with<br/>
                Custom AI Solutions
            </h3>
            <div>
              <p className="paragraph primary_header_content max-w-3xl mt-5 md:mt-0">
                Unlock AI-Powered Growth Without the Headache – At The ICT Hub, we build bespoke AI solutions that solve your business’s unique challenges. From intelligent chatbots to predictive analytics, we help UK companies streamline operations and stay ahead of the competition. Get started today with a free AI strategy consultation – just drop your email to talk to an AI expert and discover what’s possible.
              </p>
            </div>
          </div>

          <div className="pt-16">
            <div className="global-container md:px-4">
              <div ref={imageRef}>
                <Image
                  src="/a.jpg"
                  alt="Mobile Apps"
                  width={1200}
                  height={490}
                  className="rounded-[var(--radius)] grayscale w-full"
                  priority={false}
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ai_software_info;
