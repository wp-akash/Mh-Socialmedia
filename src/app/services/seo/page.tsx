'use client'

// import Breadcrumbs from '@/components/Breadcrumbs'
import Seo_application_Faq from './components/Seo_application_Faq';
// import WhyChoose_web_application from './components/WhyChoose_web_application';
// import Web_application_call_to_action from './components/Web_application_call_to_action';
import Web_application_core_service from './components/Seo_core_service';
// import Web_application_software_info from './components/Web_application_software_info';
import Result_In_Number from './components/Result_In_Number';
import Googleads_Investment from './components/Seo_Investment';
// import Database from './components/Database';
import Booking from '@/components/Booking';
import Seo_Hero_Section from './components/Seo_Hero_Section';
import Seo_report from './components/Seo_report';
import Seo_Services from './components/Seo_Services';
import Seo_Work_Process from './components/Seo_Work_Process';
import SeoAds_Call_to_Action from './components/SeoAds_Call_to_Action';



export default function SoftwareSupportAndServices() {
  return (
    <>
      {/* <Breadcrumbs
        pageTitle="Web Application"
        sectionTitle="Your Business, Automated & Effortless – Through Custom Web Applications"
        sectionDescription="From managing clients to streamlining operations, our tailored web applications do the heavy lifting, letting you focus on growth – no tech skills required." /> */}
      {/* <Web_application_software_info /> */}
      <Seo_Hero_Section />
      <Seo_report />
      <Seo_Services />
      <Result_In_Number />
      {/* <Database /> */}
      {/* <WhyChoose_web_application /> */}

      <Web_application_core_service />
      <Seo_Work_Process />
      {/* <Web_application_call_to_action/> */}
      <Googleads_Investment />

      <Seo_application_Faq />

      <Booking />
      <SeoAds_Call_to_Action />

    </>
  );
}
