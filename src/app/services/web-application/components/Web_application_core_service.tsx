import React from 'react'

const processSteps = [
  {
    title: "Blazing-Fast Performance",
    desc: (
      <>
        We build sites that fly. Slow site speeds lead to lost visitors – in fact, if a page takes longer than 3 seconds to load, over half of mobile users will leavehuckabuy.com. Our performance-optimised coding and image compression ensure your pages load lightning fast, reducing bounce rates and keeping visitors engaged. Faster load times also lead to higher conversion rateshuckabuy.com, so a speedy site isn’t just nice to have – it’s mission-critical for lead generation.


      </>
    ),
  },
  {
    title: "Modern, Trust-Building Design",
    desc: (
      <>
      Say goodbye to outdated layouts that hurt your brand perception. Our designs are clean, modern, and tailored to professional services aesthetics – instilling confidence in your visitors from the first impression. We focus on conversion-focused layouts with clear calls-to-action, without the fluff. Every element on the page has a purpose. (And with our 24-hour turnaround on design revisions, we incorporate your feedback rapidly to keep the project moving.)

      </>
    ),
  },
  {
    title: "SEO-Optimised Code",
    desc: (
      <>
       A beautiful site is worthless if no one finds it. We bake in on-site technical SEO best practices from the start – clean HTML structure, proper meta tags, fast load times, and mobile-first responsiveness – to help your site rank higher on Google. Our code adheres to the latest SEO guidelines (Core Web Vitals, schema markup, etc.), giving you a head start in the fight for organic visibility. Higher search visibility means more qualified leads coming to you, addressing the pain of “minimal leads” from an unranked site.

      </>
    ),
  },
  {
    title: "Easy Content Management",
    desc: (
      <>
         Tired of having “no easy way to update content”? We solve that by integrating user-friendly CMS tools (like WordPress or headless CMS options) so you can edit text, images, or add new pages in-house. We’ll tailor the backend to be non-technical friendly, and provide training or documentation if needed. You’ll never be stuck waiting on a developer for simple changes. Keeping your site content fresh and relevant becomes hassle-free – which is also great for SEO.

      </>
    ),
  },
  {
    title: "Scalability & Future-Proofing",
    desc: (
      <>
         Our solutions are built to grow with your business. Starting with a small 10-page site? Great – but as you add services or target new markets, your website can expand easily without a rebuild. We use scalable architectures and up-to-date frameworks, so you won’t outgrow your site. This future-proofing protects your investment and means your site can evolve (new features, more traffic, etc.) whenever you’re ready.


      </>
    ),
  },
  {
    title: "Transparent, Client-Centric Process",
    desc: (
      <>
         We pride ourselves on being straightforward and no-nonsense. From day one, you’ll know exactly what to expect: clear timelines, regular progress updates, and honest communication (no tech jargon to confuse you). Our UK clients appreciate our more formal yet friendly tone – we’re not overly casual, but we’re certainly approachable. We listen to your needs and then use our expertise to meet them, on time and within budget. No surprises, no “scope creep” nightmares – just a smooth path to a website you love.


      </>
    ),
  },
];

function Web_application_core_service() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="global-container md:px-4">
        <h3 className="h3 text-center primary_header">Why Choose The ICT HUB?</h3>
        <p className='paragraph text-center mt-4 primary_header_content'>
          Choosing a web partner is about results. Here’s what sets us apart and how we address your pain points
        </p>
      </div>
      <div className="global-container md:px-4 mt-20">
        <div className="grid gap-x-8 gap-y-[50px] md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col h-full relative border-b-0 border-[#d82d45] mb-[25px]"
            >
              {/* Centered circle icon, overlapping the border top */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-3 text-center secondary_header">{step.title}</h3>
                <div className="paragraph text-center secondary_header_content text-justify">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p className='paragraph mt-8 secondary_header_content max-w-3xl mx-auto text-center'>
          By focusing on these areas – performance, design, SEO, content control, and scalability – The ICT HUB delivers websites that solve real business problems (slow speeds, poor image, low visibility, etc.) and set you up for growth.
        </p>
      </div>
    </section>
  )
}

export default Web_application_core_service
