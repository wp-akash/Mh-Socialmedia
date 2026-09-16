"use client";
import { useRef } from "react";
import Image from "next/image";
function Game_development_info_info() {
  const imageRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <section className="mt-20 mb-16">
        <div className="global-container md:px-4">
          <div className="grid md:grid-cols-2">
            {/* Left Column: Text Content */}
            <h3 className="h3 gap-4">
              Elevate Your Vision with Next-Gen
              <br /> Game Development
            </h3>
            <div>
              <p className="primary_header_content leading-relaxed max-w-3xl mt-5 md:mt-0 paragraph text-justify">
                Turn your ideas into <b>immersive gaming experiences</b>. Our
                bold and creative game development team provides end-to-end
                services – from mobile apps to large-scale console titles –
                using cutting-edge technology to ensure your game&apos;s
                success. Whether you&apos;re an indie developer, a startup, an
                educational institution, or an enterprise, we tailor our
                approach to <b>bring your vision to life</b>. Let&apos;s build
                the future of gaming together!{" "}
                <b>Fill out the form below to get started!</b>
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

export default Game_development_info_info;
