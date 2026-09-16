"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into spans
    const chars = textRef.current.innerText.split("").map((char) => {
      const span = document.createElement("span");
      span.innerText = char;
      span.style.display = "inline-block";
      span.style.marginRight = "8px";
      return span;
    });

    textRef.current.innerHTML = "";
    chars.forEach((span) => textRef.current?.appendChild(span));

    // GSAP Timeline
    const tl = gsap.timeline();

    tl.from(chars, {
      opacity: 0,
      scale: 1.2,
      duration: 0.5,
      stagger: 0.1,
      ease: "circ.out",
    })
      .to(chars, {
        opacity: 0.5,
        duration: 1,
        stagger: 0.02,
        ease: "circ.out",
      })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <section className="loderbg" ref={loaderRef}>
      <h2 id="loading-text" ref={textRef}>
        The ICT HUb
      </h2>
    </section>
  );
}
