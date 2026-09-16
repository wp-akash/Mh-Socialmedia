'use client'

import Testimonials from '@/components/software-support-and-services/testimonials-section'
import IntegrationsSection from '@/components/software-support-and-services/IntegrationsSection'
import ChooseUs from '@/components/software-support-and-services/ChooseUs'
import Intro from '@/components/software-support-and-services/Intro'
import WorkFlow from '@/components/software-support-and-services/work-flow'
import AccordionMenu from '@/components/software-support-and-services/AccordionMenu'
import Problem from '@/components/software-support-and-services/Problem'
import Breadcrumbs from '@/components/Breadcrumbs'
import Booking from '@/components/Booking'
// import Mobileapp_development from '../mobile-app-development/components/Mobileapp_development'

export default function SoftwareSupportAndServices() {


  return (
    <>
    <Breadcrumbs
  pageTitle="Software Support And Service"
  sectionTitle="From Outdated to Outstanding – We Upgrade Your Software, You Upgrade Your Business"
  sectionDescription="Seamless software updates and expert maintenance, so your business stays secure, modern, and always running at its best – without lifting a finger."/>
    <Intro/>
    <Problem/>
    <IntegrationsSection />

    {/* <Mobileapp_development/> */}
    <ChooseUs/>
    <Testimonials />
    <WorkFlow/>
    <AccordionMenu/>
    
    <Booking/>
         
         
         
    </>
  );
}
