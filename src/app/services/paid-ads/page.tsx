'use client'

// import Breadcrumbs from '@/components/Breadcrumbs'
import Paid_ads_Faq from './components/Paid_ads_Faq';
// import WhyChoose_web_application from './components/WhyChoose_web_application';
// import Web_application_call_to_action from './components/Web_application_call_to_action';
import Web_application_core_service from './components/Web_application_core_service';
// import Web_application_software_info from './components/Web_application_software_info';
import Paid_ads_report from './components/Paid_ads_report';
import Paid_ads_Investment from './components/Paid_ads_Investment';
import Paid_ads_Result_In_Number from './components/Paid_ads_Result_In_Number';
import Booking from '@/components/Booking';
import Paid_ads_Hero_Section from './components/Paid_ads_Hero_Section';
// import Paid_ads_report from './components/Paid_ads_report';
import Paid_ads_Services from './components/Paid_ads_Services';
import Paid_ads_Process from './components/Paid_ads_Process';
import Paid_ads_Call_to_Action from './components/Paid_ads_Call_to_Action';



export default function SoftwareSupportAndServices() {
  return (
    <>
      {/* <Breadcrumbs
        pageTitle="Web Application"
        sectionTitle="Your Business, Automated & Effortless – Through Custom Web Applications"
        sectionDescription="From managing clients to streamlining operations, our tailored web applications do the heavy lifting, letting you focus on growth – no tech skills required." /> */}
      {/* <Web_application_software_info /> */}
      <Paid_ads_Hero_Section />
      <Paid_ads_report />
      <Paid_ads_Services />
      <Paid_ads_Result_In_Number />
      {/* <WhyChoose_web_application /> */}

      <Web_application_core_service />
      <Paid_ads_Process />
      {/* <Web_application_call_to_action/> */}
      <Paid_ads_Investment />

      <Paid_ads_Faq />

      <Booking />
      <Paid_ads_Call_to_Action />

    </>
  );
}
