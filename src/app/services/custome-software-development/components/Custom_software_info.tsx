import { useRef } from "react";
import Image from "next/image";

function Custom_software_info() {
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <section className="md:py-20 py-10">
      <div className="global-container md:px-4">
        <div className="grid md:grid-cols-2">
          {/* Left Column: Text Content */}
          <h3 className="h3 gap-4">
            Custom Software Development
            <br />
            &amp; Enterprise Apps
          </h3>
          <div>
            <p className="primary_header_content max-w-3xl md:mt-0 mt-5 paragraph">
              At The ICT HUB, we help UK and international companies turn ideas
              into reality. Our expert in-house team of developers and UX
              designers works closely with you to fully understand your needs
              and integrate all systems. Showing our service “in action” is key
              – we use hero images and demos so clients immediately see how we
              solve problems. With concise copy and clear CTAs front and center,
              visitors instantly grasp our unique selling points: a dedicated
              team, rapid MVP delivery, and 99.9% uptime. We highlight these
              benefits boldly and simply, using short paragraphs and bullet
              lists to keep visitors engaged. Above the fold, we feature a
              strong headline and a prominent “Get a Quote” button so prospects
              can start a conversation without scrolling too far.
            </p>
          </div>
          {/* Right Column (optional) */}
          <div></div>
        </div>

        {/* Image Section */}
        <div className="pt-16">
          <div className="global-container md:px-4">
            <div ref={imageRef}>
              <Image
                src="/erp.png"
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
  );
}

export default Custom_software_info;
