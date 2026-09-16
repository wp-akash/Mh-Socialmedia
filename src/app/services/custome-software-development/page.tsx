'use client'
import Breadcrumbs from '@/components/Breadcrumbs'
import Custom_software_info from './components/Custom_software_info';
import WhyChoose_custome_software from './components/WhyChoose_custome_software';
import Custome_software_core_service from './components/Custome_software_core_service';
import Custome_call_to_action from './components/Custome_call_to_action';
import Custome_software_Faq from './components/Custome_software_Faq';
import Booking from '@/components/Booking';

export default function SoftwareSupportAndServices() {
  return (
    <>
    <Breadcrumbs
  pageTitle="Custom Software Development"
  sectionTitle="Your Business Deserves Software That Works as Hard as You Do"
  sectionDescription="With our dedicated team, you get more than code — you get a long-term partner ensuring growth, stability, and success."/>
    <Custom_software_info/>
    <WhyChoose_custome_software/>     
    <Custome_software_core_service/>
    <Custome_call_to_action/>

    {/* <Enterprise_process/>
    <Enterprise_support/>
    <Enterprise_why_choose/>
    <Enterprise_build_together/>
    <Testimonials/>
    <Enterprise_how_it_work/>
    <Enterprise_call_to_action/>
    <Enterprise_Faq/> */}
    <Custome_software_Faq/>
    <Booking/>

    </>
  );
}
