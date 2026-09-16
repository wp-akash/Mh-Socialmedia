import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import Details_info from './components/Details_info'
// import Social_media from './components/Social_media'
import CallToAction from '../components/Call-to-action'

function page() {
  return (
   <>
    <Breadcrumbs pageTitle="ERP কী? আর এটা আপনার ব্যবসায় কীভাবে কাজ করে?" sectionDescription=""/>
    <Details_info/>
    {/* <Social_media/> */}
    <CallToAction/>
   </>
  )
}

export default page