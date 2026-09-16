import React from 'react'
// import Link from "next/link";
import ContactButton from '@/components/ContactButton';
function Custome_call_to_action() {
  return (
    <>
      <section className="bg-zinc-50 text-white py-20 px-6">
        <div className="mx-auto global-container">
          <h3 className="h3 text-black mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="paragraph mb-6">
           Ready to build a custom solution that <b>lowers costs, scales effortlessly, and launches fast</b>? <b>Talk to an expert at The ICT HUB</b> today. Fill out the form (Name, Email, Company, Phone) on this page to get a personalized quote. Optional fields let you share your budget and timeline, so we can tailor our proposal. We’ll follow up promptly to discuss your project — backed by our 24/7 support promise and SLA guarantee. Don’t forget: you can also <b>download our brochure</b> for more case studies and service details. Let’s start transforming your ideas into a powerful software reality!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <ContactButton href="/contact" text="Get Started Now"/>
            <ContactButton variant="tertiary" href="tel:01708591899" text="Call Us Today"/>

          </div>

        </div>
      </section>
    </>
  )
}

export default Custome_call_to_action
