'use client'

// import Breadcrumbs from '@/components/Breadcrumbs'
import Social_media_application_Faq from './components/Social_media_application_Faq';
// import WhyChoose_web_application from './components/WhyChoose_web_application';
// import Web_application_call_to_action from './components/Web_application_call_to_action';
import Web_application_core_service from './components/Web_application_core_service';
// import Web_application_software_info from './components/Web_application_software_info';
import Result_In_Number from './components/Result_In_Number';
import Social_mediaads_Investment from './components/Social_medialeads_Investment';
// import Database from './components/Database';
import Booking from '@/components/Booking';
import Social_media_Hero_Section from './components/Social_media_Hero_Section';
import Social_media_report from './components/Social_media_report';
import Social_media_Services from './components/Social_media_Services';
import Social_media_Work_Process from './components/Social_media_Work_Process';
import Social_mediaAds_Call_to_Action from './components/Social_media_Call_to_Action';



export default function SoftwareSupportAndServices() {
  return (
    <>
      {/* <Breadcrumbs
        pageTitle="Web Application"
        sectionTitle="Your Business, Automated & Effortless – Through Custom Web Applications"
        sectionDescription="From managing clients to streamlining operations, our tailored web applications do the heavy lifting, letting you focus on growth – no tech skills required." /> */}
      {/* <Web_application_software_info /> */}
      <Social_media_Hero_Section />
      <Social_media_report />
      <Social_media_Services />
      <Result_In_Number />
      {/* <Database /> */}
      {/* <WhyChoose_web_application /> */}

      <Web_application_core_service />
      <Social_media_Work_Process />
      {/* <Web_application_call_to_action/> */}
      <Social_mediaads_Investment />

      <Social_media_application_Faq />

      <Booking />
      <Social_mediaAds_Call_to_Action />

    </>
  );
}
