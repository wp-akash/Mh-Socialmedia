import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import Client_list from './componets/Client_list'

function page() {
  return (
    <>
      <Breadcrumbs pageTitle="Clients"/>

      <Client_list/>
    </>
  )
}

export default page
