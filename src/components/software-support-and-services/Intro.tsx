"use client";
import { useRef } from "react";
import Image from "next/image";
function Intro() {
  const imageRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <section className="mt-20 mb-16">
        <div className="global-container md:px-4">
          <div className="grid md:grid-cols-2">
            {/* Left Column: Text Content */}
            <h3 className="h3 gap-4">
              Unlock Your Business Potential with<br/> Reliable IT & Software Support
            </h3>
            <div>
              <p className="primary_header_content max-w-3xl mt-5 md:mt-0 paragraph">
                Tailored Technology Solutions to Keep Your Business Secure,
            Scalable, and Ahead of the Competition.
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

export default Intro;
