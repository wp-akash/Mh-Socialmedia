import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import Basicinfo from './components/Basicinfo'
import Tabcontent from './components/Tabcontent'

function page() {
  return (
    <>
      <Breadcrumbs pageTitle="Startup" />
      <Basicinfo/>
      <Tabcontent/>
    </>
  )
}

export default page
