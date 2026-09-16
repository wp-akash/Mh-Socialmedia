import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import Details_info from './components/Details_info'
// import Social_media from './components/Social_media'
import CallToAction from '../components/Call-to-action'

function page() {
  return (
   <>
    <Breadcrumbs pageTitle="ERP আর POS সফটওয়্যার: পার্থক্য কোথায়? কোনটা আপনার ব্যবসার জন্য সঠিক?" sectionDescription=""/>
    <Details_info/>
    {/* <Social_media/> */}
    <CallToAction/>
   </>
  )
}

export default page