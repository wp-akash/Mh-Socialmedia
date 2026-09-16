'use client'
import Breadcrumbs from '@/components/Breadcrumbs'
import Ai_application_Faq from './components/Ai_application_Faq';
import Ai_call_to_action from './components/Ai_call_to_action';
// import Ai_Industries_we_serve from './components/Ai_Industries_we_serve';
import Ai_software_info from './components/Ai_software_info';
import Ai_service_information from './components/Ai_service_information';
import Why_choose_ai from './components/Why_choose_ai';
import Booking from '@/components/Booking';
import Industries from '@/components/Industries';


export default function SoftwareSupportAndServices() {
  return (
    <>
<Breadcrumbs
  pageTitle="Custom AI Solutions"
  sectionTitle="AI That Works for Your Business – Without the Headache"
  sectionDescription="We create custom AI solutions that save time, delight customers, and grow profits – no tech skills required. Let’s build your AI advantage today."/>
    <Ai_software_info/>
    <Ai_service_information/>
    <Why_choose_ai/>
    
    {/* <Ai_Industries_we_serve/> */}
    <Industries/>
    <Ai_call_to_action/>
    
    <Ai_application_Faq/>
    <Booking/>
    </>
  );
}
