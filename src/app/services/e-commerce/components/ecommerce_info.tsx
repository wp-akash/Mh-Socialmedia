"use client";
import { useRef } from "react";
import Image from "next/image";

function Ecommerce_info() {
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <section className="md:py-20 py-10">
      <div className="global-container md:px-4">
        <div className="grid md:grid-cols-2">
          {/* Left Column: Text Content */}
          <h3 className="h3 gap-4">
            Why E-Commerce Marketplace Design<br/> & Development Matters
          </h3>
          <div>
            <p className="primary_header_content max-w-3xl md:mt-0 mt-5 text-align-justify paragraph">
             Modern e-commerce platforms must provide seamless shopping experiences across all devices, from desktops to mobile, to meet customer expectations. In today’s digital world, businesses need more than just a basic website—they need a fully optimized e-commerce solution that attracts customers, streamlines operations, and scales effortlessly. Whether you’re a startup or an enterprise, having the right technology in place is key to success. In the UK, e-commerce adoption is nearly universal (over 85% of UK consumers shop online), which means customer expectations are higher than ever. A well-designed online marketplace can be the difference between engaging those customers or losing them to competitors. At <b>The ICT Hub</b>, we provide expert e-commerce website development, mobile application development, and custom software solutions to meet these needs. Our services are tailored to help your business thrive by leveraging the latest technologies and best practices in e-commerce.
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
  );
}

export default Ecommerce_info;
