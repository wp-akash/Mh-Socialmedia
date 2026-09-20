import HeroSction from "@/components/Hero-sction";
import Services from "@/components/service-section";
import Choose_us from "@/components/Choose_us";
// import Testimonials from "@/components/software-support-and-services/testimonials-section";
// import Call_to_Action from "@/components/Call_to_Action";
import About_info from "@/components/About_info";
import Industries from "@/components/Industries";
// import Worldwide from "@/components/Worldwide";
// import Blog_two from "./case-study/components/Blog_two";
import Free_consultation from "@/components/Free_consultation";
import Development_Process from "@/components/Development_Process";
import CEO_Word from "@/components/CEO_Word";
import Connect_With_Us from "@/components/Connect_With_Us";
import Testimonials from "@/components/Testimonials";
import Why_choose_MH from "@/components/ui/Why_choose_MH";

export default function Home() {
  return (
    <>
      <HeroSction />
      <About_info />
      <Services />
      <Free_consultation />
      <CEO_Word />
      {/* <Industries /> */}
      <Why_choose_MH />
      <Development_Process />
      {/* <Worldwide /> */}
      {/* <Testimonials/> */}
      <Testimonials />

      {/* ClientSection,Interactive,Tech_Stacks */}

      <Choose_us />
      {/* <Blog_two /> */}
      {/* <Call_to_Action /> */}
      <Connect_With_Us />
    </>
  );
}
