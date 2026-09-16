import React from 'react'

function Product_section() {
  return (
    <>
    <section className="py-20 md:py-20 bg-gradient-to-b">
            <div className="global-container md:px-4">
              {/* Content Column (merged left + middle) */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="">
                  <h4 className="secondary_header">E-commerce solutions</h4>
                  <p className="paragraph mt-3">
                    The ICT Hub provides cutting-edge solutions that complement any online retail business. With features like advanced inventory management, order fulfillment, payment processing, logistics, CRM, multi-channel selling, reporting, and analytics, any E-commerce business can perform its business activities efficiently
                  </p>
                </div>
                <div className="">
                    <h4 className="secondary_header">E-learning solutions</h4>
                    <p className="paragraph mt-3">
                        The ICT Hub offers tailored solutions for the online education industry, including course management, student enrollment, progress tracking, student communication, and analytics. Fine-tune your administrative tasks, track student progress, and gain insights through our system’s robust analytics.
                    </p>
                  
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Product_section