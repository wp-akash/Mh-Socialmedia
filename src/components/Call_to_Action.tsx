"use client";
import Image from "next/image";
import ContactButton from "./ContactButton";

const Call_to_Action = () => {
  return (
    <section className="h-[475px] md:h-screen bg-black text-white relative z-0 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-[-1] overflow-hidden">
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 w-full h-full z-[1]"
          style={{
            backgroundImage:
              "radial-gradient(62.22% 62.22% at 50% 62.25%, rgba(11, 0, 71, 0.4) 0%, rgb(0, 0, 0) 100%)",
          }}
        ></div>

        {/* Scrolling Background Images */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="relative w-full h-full overflow-hidden">
            {/* CSS Animation for scrolling effect */}
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateY(0);
                }
                100% {
                  transform: translateY(-100%);
                }
              }
              .scrolling-images {
                position: absolute;
                width: 100%;
                height: 400%;
                animation: scroll 20s linear infinite;
              }
              .scroll-image {
                position: absolute;
                width: 100%;
                height: 25%;
                object-fit: cover;
                object-position: center;
              }
            `}</style>

            {/* Wrapper for scrolling images */}
            <div className="scrolling-images">
              {/* Image 1 */}
              <div className="scroll-image" style={{ top: "0%" }}>
                <Image
                  alt="scroll image"
                  src="/scroll.jpg"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>

              {/* Image 2 */}
              <div className="scroll-image" style={{ top: "25%" }}>
                <Image
                  alt="scroll image"
                  src="/scroll.jpg"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>

              {/* Image 3 */}
              <div className="scroll-image" style={{ top: "50%" }}>
                <Image
                  alt="scroll image"
                  src="/scroll.jpg"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>

              {/* Image 4 */}
              <div className="scroll-image" style={{ top: "75%" }}>
                <Image
                  alt="scroll image"
                  src="/scroll.jpg"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container global-container md:px-4 mx-auto h-full flex flex-col items-center justify-center relative z-10 px-4">
        <div className="mb-6 md:mb-8 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 leading-tight">
            Have a project idea in mind?
            <br />
            <span> Let&apos;s get started</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-center text-gray-200 leading-relaxed max-w-2xl mx-auto">
            We&apos;ll schedule a call to discuss your idea. After discovery
            sessions,
            <br/>
            <span>
              we&apos;ll send a proposal, and upon approval, we&apos;ll get
              started.
            </span>
          </p>
        </div>

        <div className="w-full max-w-xs sm:max-w-none sm:w-auto text-center">
          <ContactButton
            text="Let's Talk Business"
            href="/contact"/>
        </div>
      </div>
    </section>
  );
};

export default Call_to_Action;
