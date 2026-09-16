import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import Details_info from './components/Details_info'
// import Social_media from './components/Social_media'
import CallToAction from '../components/Call-to-action'

function page() {
  return (
   <>
    <Breadcrumbs pageTitle="What is the Advantage of ERP + E-Commerce Combined Solution? | ERP + E-commerce একসাথে ব্যবহারের সুবিধা কী?" sectionDescription=""/>
    <Details_info/>
    {/* <Social_media/> */}
    <CallToAction/>
   </>
  )
}

export default page