'use client'
import React from "react";
import Link from "next/link";
import ContactButton from "./ContactButton";
import { TextEffect } from "@/components/motion-primitives/text-effect";

interface BreadcrumbsProps {
  pageTitle?: string;
  sectionTitle?: string;
  sectionDescription?: string;
}

function Breadcrumbs({
  pageTitle = "",
  sectionTitle,
  sectionDescription = "Services designed around your lifestyle & goals",
}: BreadcrumbsProps) {
  const effectiveSectionTitle = sectionTitle || pageTitle;

  return (
    <>
      <section className="relative bg-gradient-to-b from-[#f3f2ec] to-[#eafafc] py-20 md:py-30 text-center overflow-hidden">
        {/* Foreground content */}
        <div className="relative z-10 pt-9 global-container mx-auto text-center max-w-4xl md:px-4 sm:px-6 lg:px-8">
          <button className="relative overflow-hidden text-black px-6 py-2 rounded-full flex items-center gap-3 group transition-all duration-300 border border-gray-300 mx-auto inline-block  mb-3 disabled:cursor-not-allowed">
            <Link href="" className="flex items-center gap-2">
              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="span"
                className="relative z-10"
              >
                {pageTitle}
              </TextEffect>
            </Link>
          </button>
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h1"
            className="h2 py-2"
          >
            {effectiveSectionTitle}
          </TextEffect>

          {sectionDescription && (
            <TextEffect
              className="mt-2 paragraph px-8"
              preset="fade-in-blur"
              speedSegment={0.3}
              as="p"
            >
              {sectionDescription}
            </TextEffect>
          )}
          <div className="flex justify-center mt-5">
            <ContactButton
              href="/contact"
              text="Contact Us"
              variant="tertiary"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Breadcrumbs;
