'use client'

// import Breadcrumbs from '@/components/Breadcrumbs'
import Branding_and_design_Faq from './components/Branding_and_design_Faq';
// import WhyChoose_web_application from './components/WhyChoose_web_application';
// import Web_application_call_to_action from './components/Web_application_call_to_action';
import Branding_and_design_core_service from './components/Branding_and_design_core_service';
// import Web_application_software_info from './components/Web_application_software_info';
import Branding_and_design_Result_In_Number from './components/Branding_and_design_Result_In_Number';
import Branding_and_design_Investment from './components/Branding_and_design_Investment';
// import Database from './components/Database';
import Booking from '@/components/Booking';
import Branding_and_design_Hero_Section from './components/Branding_and_design_Hero_Section';
import Branding_and_design_report from './components/Branding_and_design_report';
import Branding_and_design_Services from './components/Branding_and_design_Services';
import Branding_and_design_Process from './components/Branding_and_design_Process';
import Branding_and_design_Call_to_Action from './components/Branding_and_design_Call_to_Action';



export default function SoftwareSupportAndServices() {
  return (
    <>
      {/* <Breadcrumbs
        pageTitle="Web Application"
        sectionTitle="Your Business, Automated & Effortless – Through Custom Web Applications"
        sectionDescription="From managing clients to streamlining operations, our tailored web applications do the heavy lifting, letting you focus on growth – no tech skills required." /> */}
      {/* <Web_application_software_info /> */}
      <Branding_and_design_Hero_Section />
      <Branding_and_design_report />
      <Branding_and_design_Services />
      <Branding_and_design_Result_In_Number />
      {/* <Database /> */}
      {/* <WhyChoose_web_application /> */}

      <Branding_and_design_core_service />
      <Branding_and_design_Process />
      {/* <Web_application_call_to_action/> */}
      <Branding_and_design_Investment />

      <Branding_and_design_Faq />

      <Booking />
      <Branding_and_design_Call_to_Action />

    </>
  );
}
