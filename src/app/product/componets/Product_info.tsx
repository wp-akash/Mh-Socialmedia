import React from 'react'

function Product_info() {
  return (
    <>
    <section className="py-20 md:py-20 bg-gradient-to-b">
            <div className="global-container md:px-4">
            {/* Content Column (merged left + middle) */}
            <div className="grid md:grid-cols-2 ">
                <div>
                <h3 className="h3 text-center md:text-left">About Lifestyle ERP</h3>
                </div>
                <div>
                <p className="primary_header_content mt-3">
                    Lifestyle ERP Lifestyle ERP by The ICT Hub is an industry-specific ERP solution designed for lifestyle organizations. Product management, product classification, inventory management, supply chain process, customer data management, data reporting and analytics are some examples of the solutions we can provide. These are adaptable to the specific requirements of any organization in the lifestyle industry. Not only that, you can also benefit from the e-commerce integration, workflow automation, and our dedicated support to maximize your organizational efficiency and fuel growth.
                </p>
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Product_info
