import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import Details_info from './components/Details_info'
import CallToAction from '../components/Call-to-action'
// import Social_media from './components/Social_media'

function page() {
  return (
   <>
    <Breadcrumbs pageTitle="কেন ERP সফটওয়্যারে ইনভেস্ট করা উচিত?" sectionDescription=""/>
    <Details_info/>
    {/* <Social_media/> */}
    <CallToAction/>
   </>
  )
}

export default page