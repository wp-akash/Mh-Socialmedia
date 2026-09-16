import Breadcrumbs from '@/components/Breadcrumbs'
import React from 'react'
import Product_info from './componets/Product_info'
import Erp_Modul from './componets/Erp_Modul'
import Product_section from './componets/Product_section'
// import Modules from './componets/modules'

function page() {
  return (
    <>
    <Breadcrumbs pageTitle="Products"/>
    <Product_info/>
    {/* <Modules/> */}

    <Erp_Modul/>
    <Product_section/>
    </>
  )
}

export default page