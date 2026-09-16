import React from "react";

function WhyChoose_web_application() {
  return (
    <>
      <section className="py-20 md:py-20 bg-gray-50">
        <div className="global-container md:px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="h3 primary_header">Our Web Solutions</h3>
              <p className="paragraph mt-4 primary_header_content">
                We offer a range of professional web design services tailored to
                small and mid-sized businesses. Our offerings cover everything
                from sleek brochure sites to advanced e-commerce platforms,
                always implemented with a mobile-first mindset for maximum
                reach. Key services include
              </p>
            </div>
            <div>
              <div className="grid grid-cols-1 gap-6 pt-10">
                {/* Card 1 */}
                <div
                  className="mb-5 flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-black"
                >

                  <div>
                    <h4 className="h4 mb-2 secondary_header">Responsive Website Design</h4>
                    <p className="paragraph secondary_header_content">
                      Modern, mobile-friendly website designs that adapt to any
                      device. We ensure your site is fully responsive and
                      user-friendly on smartphones, tablets, and desktops —
                      vital since over 60% of UK internet traffic now comes from
                      mobile devices. A mobile-first design not only improves UX
                      but also boosts SEO under Google’s mobile-first indexing.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div
                  className="mb-5 flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-black"
                >

                  <div>
                    <h4 className="h4 mb-2 secondary_header">
                      E-Commerce Development Shopify & WooCommerce
                    </h4>
                    <p className="paragraph secondary_header_content">
                      Scalable online stores with secure checkout and
                      conversion-focused layouts. We specialise in{" "}
                      <b>Shopify development for startups</b>, offering the
                      technical setup and UX optimisations that new e-commerce
                      businesses need to succeed. We also create bespoke
                      WooCommerce solutions, integrating your store seamlessly
                      into your WordPress site.
                    </p>
                  </div>
                </div>
                {/* Card 3 */}
                <div
                  className="mb-5 flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-black"
                >

                  <div>
                    <h4 className="h4 mb-2 secondary_header">CMS Integration (WordPress)</h4>
                    <p className="paragraph secondary_header_content">
                      Flexible content management solutions with{" "}
                      <b>WordPress design</b> that’s both beautiful and easy to
                      update. We provide affordable <b>WordPress design</b> for
                      small businesses, ensuring you get a professional site
                      without enterprise-level costs. You’ll be able to publish
                      blogs, update text and images, or add pages through an
                      intuitive CMS – no coding required.
                    </p>
                  </div>
                </div>
                {/* Card 4 */}
                <div
                  className="mb-5 flex items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-black"
                >

                  <div>
                    <h4 className="h4 mb-2 secondary_header">Custom Web Applications</h4>
                    <p className="paragraph secondary_header_content">
                      When you need functionality beyond a standard website, our
                      developers build <b>custom web applications</b> (e.g.
                      React frontends with Django backends) tailored to your
                      processes. Whether it’s an interactive portal or a booking
                      system, we deliver robust web apps that integrate with
                      your business workflows. Each custom project is built with
                      scalability in mind, so your platform can grow with you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhyChoose_web_application;