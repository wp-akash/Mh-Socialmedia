'use client'

// import Breadcrumbs from '@/components/Breadcrumbs'
import Web_development_application_Faq from './components/Web_development_application_Faq';
// import WhyChoose_web_application from './components/WhyChoose_web_application';
// import Web_application_call_to_action from './components/Web_application_call_to_action';
import Web_application_core_service from './components/Web_application_core_service';
// import Web_application_software_info from './components/Web_application_software_info';
import Result_In_Number from './components/Result_In_Number';
import WebDevelopmentInvestment from './components/Web_development_Investment';
// import Database from './components/Database';
import Booking from '@/components/Booking';
import WebDevelopmentHeroSection from './components/Web_development_Hero_Section';
import WebDevelopmentReport from './components/Web_development_report';
import WebDevelopmentServices from './components/Web_development_Services';
import WebDevelopmentWorkProcess from './components/Web_development_Work_Process';
import WebDevelopmentCallToAction from './components/Web_development_Call_to_Action';



export default function SoftwareSupportAndServices() {
  return (
    <>
      {/* <Breadcrumbs
        pageTitle="Web Application"
        sectionTitle="Your Business, Automated & Effortless – Through Custom Web Applications"
        sectionDescription="From managing clients to streamlining operations, our tailored web applications do the heavy lifting, letting you focus on growth – no tech skills required." /> */}
      {/* <Web_application_software_info /> */}
      <WebDevelopmentHeroSection />
      <WebDevelopmentReport />
      <WebDevelopmentServices />
      <Result_In_Number />
      {/* <Database /> */}
      {/* <WhyChoose_web_application /> */}

      <Web_application_core_service />
      <WebDevelopmentWorkProcess />
      {/* <Web_application_call_to_action/> */}
      <WebDevelopmentInvestment />

      <Web_development_application_Faq />

      <Booking />
      <WebDevelopmentCallToAction />

    </>
  );
}
