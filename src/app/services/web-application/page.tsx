'use client'
import Breadcrumbs from '@/components/Breadcrumbs'
import Web_application_Faq from './components/Web_application_Faq';
import WhyChoose_web_application from './components/WhyChoose_web_application';
// import Web_application_call_to_action from './components/Web_application_call_to_action';
import Web_application_core_service from './components/Web_application_core_service';
import Web_application_software_info from './components/Web_application_software_info';
import Frontend from './components/Frontend';
import Backend from './components/Backend';
import Database from './components/Database';
import Booking from '@/components/Booking';


export default function SoftwareSupportAndServices() {
  return (
    <>
    <Breadcrumbs
  pageTitle="Web Application"
  sectionTitle="Your Business, Automated & Effortless – Through Custom Web Applications"
  sectionDescription="From managing clients to streamlining operations, our tailored web applications do the heavy lifting, letting you focus on growth – no tech skills required."/>
    <Web_application_software_info/>

    <Frontend/>
    <Backend/>
    <Database/>
    <WhyChoose_web_application/>
    <Web_application_core_service/>
   
    {/* <Web_application_call_to_action/> */}
    
    <Web_application_Faq/>

    <Booking/>

    </>
  );
}
