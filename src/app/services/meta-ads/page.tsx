'use client'

// import Breadcrumbs from '@/components/Breadcrumbs'
import Web_application_Faq from './components/Web_application_Faq';
// import WhyChoose_web_application from './components/WhyChoose_web_application';
// import Web_application_call_to_action from './components/Web_application_call_to_action';
import Web_application_core_service from './components/Web_application_core_service';
// import Web_application_software_info from './components/Web_application_software_info';
import Result_In_Number from './components/Result_In_Number';
import Investment from './components/Investment';
// import Database from './components/Database';
import Booking from '@/components/Booking';
import Meta_Hero_Section from './components/Meta_Hero_Section';
import Meta_report from './components/Meta_report';
import Meta_Services from './components/Meta_Services';
import Facebook_Work_Process from './components/Facebook_Work_Process';
import MetaAds_Call_to_Action from './components/MetaAds_Call_to_Action';



export default function SoftwareSupportAndServices() {
  return (
    <>
      {/* <Breadcrumbs
        pageTitle="Web Application"
        sectionTitle="Your Business, Automated & Effortless – Through Custom Web Applications"
        sectionDescription="From managing clients to streamlining operations, our tailored web applications do the heavy lifting, letting you focus on growth – no tech skills required." /> */}
      {/* <Web_application_software_info /> */}
      <Meta_Hero_Section />
      <Meta_report />
      <Meta_Services />
      <Result_In_Number />
      <Investment />
      {/* <Database /> */}
      {/* <WhyChoose_web_application /> */}

      <Web_application_core_service />
      <Facebook_Work_Process />
      {/* <Web_application_call_to_action/> */}

      <Web_application_Faq />

      <Booking />
      <MetaAds_Call_to_Action />

    </>
  );
}
