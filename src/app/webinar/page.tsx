// import Breadcrumbs from '@/components/Breadcrumbs'

import React from 'react'
import Contact_Webinar from './componets/Contact_Webinar'
import Webinar_Page from './componets/Webinar_Page'

function Page() {
  return (
    <>
      {/* <Breadcrumbs pageTitle="Webinar" sectionDescription="Join our free live webinar to learn how clothing brands are scaling faster with ERP."/> */}
      <Webinar_Page/>
      <Contact_Webinar/>
    </>
  )
}

export default Page
