"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSectionbg() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const img = imageRef.current;
    const isMobile = window.innerWidth < 640;

    if (!isMobile) {
      // Desktop/Tablet: Animate from circle to rectangle
      gsap.fromTo(
        el,
        {
          width: "800px",
          height: "800px",
          borderRadius: "50%",
        },
        {
          width: "100%",
          height: "100vh",
          borderRadius: "16px",
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
            pin: false,
            anticipatePin: 1,
          },
        }
      );

      // Animate image opacity and clip-path
      gsap.fromTo(
        img,
        {
          opacity: 0.3,
          clipPath: "circle(35% at 50% 50%)",
        },
        {
          opacity: 1,
          clipPath: "circle(100% at 50% 50%)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
          },
        }
      );
    } else {
      // Mobile: Animate from circle to rectangle
      gsap.fromTo(
        el,
        {
          width: "100%",
          height: "300px",
          borderRadius: "50%",
        },
        {
          height: "50vh",
          borderRadius: "16px",
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
            pin: false,
          },
        }
      );

      // Animate image opacity and clip-path on mobile
      gsap.fromTo(
        img,
        {
          opacity: 0.3,
          clipPath: "circle(35% at 50% 50%)",
        },
        {
          opacity: 1,
          clipPath: "circle(100% at 50% 50%)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mx-auto flex items-center text-center text-white overflow-hidden w-full"
      style={{ borderRadius: "50%" }}
    >
      {/* Image Background with circle reveal animation */}
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/heroarea.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 800px"
        />
      </div>

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content goes here */}
    </section>
  );
}