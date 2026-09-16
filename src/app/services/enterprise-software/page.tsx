'use client'
import Breadcrumbs from '@/components/Breadcrumbs'
import Enterprise_software_info from './components/Enterprise_software_info';
import Enterprise_process from './components/Enterprise_process';
import Enterprise_support from './components/Enterprise_support';
import Enterprise_why_choose from './components/Enterprise_why_choose';
import Enterprise_build_together from './components/Enterprise_build_together';
import Testimonials from '@/components/software-support-and-services/testimonials-section';
import Enterprise_how_it_work from './components/Enterprise_how_it_work';
// import Enterprise_call_to_action from './components/Enterprise_call_to_action';
import Enterprise_Faq from './components/Enterprise_Faq';
import Booking from '@/components/Booking';

export default function SoftwareSupportAndServices() {
  return (
    <>
    <Breadcrumbs
  pageTitle="Enterprise Software"
  sectionTitle="Run Your Business Smarter, Faster, Everywhere"
  sectionDescription="Automate finance, sales, HR & operations with one powerful ERP — trusted by businesses across industries and continents.
"
/>
    <Enterprise_software_info/>
    <Enterprise_process/>
    <Enterprise_support/>
    <Enterprise_why_choose/>
    <Enterprise_build_together/>
    <Testimonials/>
    <Enterprise_how_it_work/>
    {/* <Enterprise_call_to_action/> */}
    <Enterprise_Faq/>
    <Booking/>
    </>
  );
}
