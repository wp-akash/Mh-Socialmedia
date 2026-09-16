// import Breadcrumbs from "@/components/Breadcrumbs";
import Connect_With_Us from "@/components/Connect_With_Us";
import Services from "@/components/service-section";
import Service_story from "@/components/Service_story";
export default function About() {
  return (
    <>
      {/* <Breadcrumbs pageTitle="Services" /> */}
      <Service_story />
      <Services bgColor="bg-white" textColor="text-black" />
      <Connect_With_Us />


    </>
  );
}
