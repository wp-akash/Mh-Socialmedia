'use client';
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
// import Corevalues from "./componets/Corevalues";
// import WhatweOffer from "./componets/WhatweOffer";
// import Breadcrumbs from "../../components/Breadcrumbs";
import Worldwide from "@/components/Worldwide";
import Story_countrt from "@/components/Story_countrt";
import Testimonials from "@/components/Testimonials";
// import About_info from "@/components/About_info";
// import OurJourneyTimeline from "@/components/OurJourneyTimeline";


export default function About() {
  return (
    <>
      {/* <Breadcrumbs pageTitle="About Us" /> */}
      <Story_countrt />
      {/* <About_info /> */}
      <AboutSection />
      {/* <OurJourneyTimeline/> */}
      {/* <Corevalues /> */}
      <Worldwide />
      {/* <WhatweOffer /> */}
      <TeamSection />

      <Testimonials />
    </>
  );
}
