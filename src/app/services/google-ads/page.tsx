'use client'

// import Breadcrumbs from '@/components/Breadcrumbs'
import Google_application_Faq from './components/Google_application_Faq';
// import WhyChoose_web_application from './components/WhyChoose_web_application';
// import Web_application_call_to_action from './components/Web_application_call_to_action';
import Web_application_core_service from './components/Web_application_core_service';
// import Web_application_software_info from './components/Web_application_software_info';
import Result_In_Number from './components/Result_In_Number';
import Googleads_Investment from './components/Googleads_Investment';
// import Database from './components/Database';
import Booking from '@/components/Booking';
import Google_Hero_Section from './components/Google_Hero_Section';
import Google_report from './components/Google_report';
import Google_Services from './components/Google_Services';
import Google_Work_Process from './components/Google_Work_Process';
import GoogleAds_Call_to_Action from './components/GoogleAds_Call_to_Action';



export default function SoftwareSupportAndServices() {
  return (
    <>
      {/* <Breadcrumbs
        pageTitle="Web Application"
        sectionTitle="Your Business, Automated & Effortless – Through Custom Web Applications"
        sectionDescription="From managing clients to streamlining operations, our tailored web applications do the heavy lifting, letting you focus on growth – no tech skills required." /> */}
      {/* <Web_application_software_info /> */}
      <Google_Hero_Section />
      <Google_report />
      <Google_Services />
      <Result_In_Number />
      {/* <Database /> */}
      {/* <WhyChoose_web_application /> */}

      <Web_application_core_service />
      <Google_Work_Process />
      {/* <Web_application_call_to_action/> */}
      <Googleads_Investment />

      <Google_application_Faq />

      <Booking />
      <GoogleAds_Call_to_Action />

    </>
  );
}
