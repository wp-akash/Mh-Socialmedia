import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import Career_info from './componets/Career_info'
import Career_grid from './componets/Career_grid'

function page() {
  return (
    <>
      <Breadcrumbs pageTitle="Career"/>
      <Career_info/>
      <Career_grid/>
    </>
  )
}

export default page
