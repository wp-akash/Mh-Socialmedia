import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import Ecommerce_info from './components/ecommerce_info'
// import Ecommerce_businessNeed from '../mobile-app-development/components/Ecommerce_businessNeed'
import Ecommerce_london from './components/Ecommerce_london'
import Ecommerce_work_process from './components/Ecommerce_work_process'
import Custome_ecommerce_work_process from './components/Custome_ecommerce_work_process'
import Saudi_arabia_ecommerce from './components/Saudi_arabia_ecommerce'
import Supply_chain_ecommerce from './components/Supply_chain_ecommerce'
import WhyChoose_ecommerce from './components/WhyChoose_ecommerce'
import Ecommerce_Faq from './components/Ecommerce_Faq'
// import Build_ecommerce_together from './components/Build_ecommerce_together'
import Booking from '@/components/Booking'
import Ecommerce_businessNeed from './components/Ecommerce_businessNeed'

function page() {
  return (
    <>
    <Breadcrumbs
  pageTitle="E-Commerce & Marketplace Development"
  sectionTitle="Scale Seamlessly with Next-Generation E-Commerce Solutions"
  sectionDescription="Empowering high-growth businesses to expand globally with intelligence, automation, and unmatched reliability. Designed for those who think big
"
/>
      <Ecommerce_info />
      {/* <Ecommerce_businessNeed />
       */}
      <Ecommerce_businessNeed/>
      <Ecommerce_london/>
      <Ecommerce_work_process/>
      <Custome_ecommerce_work_process/>
      <Saudi_arabia_ecommerce/>
      <Supply_chain_ecommerce/>
      <WhyChoose_ecommerce/>
      {/* <Build_ecommerce_together/> */}
      <Ecommerce_Faq/>
      <Booking/>
      
      
    </>
  )
}

export default page
