import ContactButton from '@/components/ContactButton'
import React from 'react'

function CallToAction() {
  return (
    <>
      <section className="bg-[#8080800a]">
        <div className="global-container md:px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">

            <div className="blog_info">
              <h3 className="h3 mb-3">
                Ready to Scale Your Business?
              </h3>

              <p className="paragraph mb-0">
                We don't just help run your business—we help scale it the right way.
              </p>
            </div>

            <div className="shrink-0">
              <ContactButton />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default CallToAction
