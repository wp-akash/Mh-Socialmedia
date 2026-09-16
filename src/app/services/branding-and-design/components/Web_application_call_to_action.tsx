import React from 'react'
import Link from "next/link";
function Web_application_call_to_action() {
  return (
    <>
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="h3">
            Ready to Elevate Your Website?
          </h3>
          <p className="paragraph !text-white py-4">
            Your website should be your <b>hardest-working business asset</b> – attracting clients, impressing them with your brand, and generating leads around the clock. If your current site is slow, outdated, or not delivering the results you want, <b>The ICT HUB</b> is here to help you turn it around. <b>Get in touch with us today</b> for a free discovery call or to request a tailored quote. We’ll discuss your goals, audit your current web presence, and give you honest, strategic recommendations (no obligation). Let’s craft a high-converting, beautiful website that gives your business in the UK the competitive edge it deserves.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#contact"
              className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-100 hover:text-black transition"
            >
              🚀 Get Started Now
            </Link>
            <Link
              href="tel:+441234567890"
              className="inline-block px-8 py-4 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-900 transition"
            >
              📞 Call Us Today
            </Link>
          </div>

          <p className="mt-6 text-sm text-white italic">
            Transform your digital experience and start driving growth now!
          </p>
        </div>
      </section>
    </>
  )
}

export default Web_application_call_to_action
