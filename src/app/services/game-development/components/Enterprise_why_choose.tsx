import React from 'react'

const processSteps = [
  {
    title: "UK-Friendly Communication",
    desc: (
      <>
        We operate on UK business hours for meetings and support. Our team speaks fluent English and understands <b>London business culture</b>. You can reach us via email, phone, WhatsApp – whatever you prefer – and always get a friendly, prompt response.

      </>
    ),
  },
  {
    title: "Local Presence & Reliability",
    desc: (
      <>
        We are a registered business and a <b>trusted name in tech since 2015</b>. While our development center is in Bangladesh, we have a foothold in the UK market. This means you get the <b>cost benefits of an offshore team with the accountability of a local provider</b>. No trust issues – we’re in it for the long run as your partner.

      </>
    ),
  },
  {
    title: "Top Talent & Modern Tech",
    desc: (
      <>
       Our developers are <b>experienced in the latest technologies</b> (think Python, Django, React, cloud platforms, you name it). We ensure your software isn’t just up-to-date now, but future-proof. If you already have IT staff, we collaborate smoothly; if not, we handle everything for you.
      </>
    ),
  },
  {
    title: "Cost-Effective Scaling",
    desc: (
      <>
        With us, you <b>reduce your tech budget</b> without compromising. Hiring in the UK is costly; with The ICT Hub, you get <b>world-class engineers at a much lower rate</b>. Scale your team up or down as needed, with no long-term overhead like pensions or office space.
      </>
    ),
  
  },
  {
    title: "Quality & Satisfaction",
    desc: (
      <>
         We follow global best practices – from <b>agile development</b> to rigorous testing and data security. Every project is delivered <b>on-time and to the highest standard</b>. Our process includes planning, prototyping, and regular check-ins with you. The result? 100% client satisfaction is our pride, and we’re not happy until you are.

      </>
    ),
  
  },
  {
    title: " Ongoing Support & Security",
    desc: (
      <>
         Post-launch, we don’t disappear. You get <b>continuous support</b>, regular updates, and quick fixes via our ticketing system. Security is paramount – we implement high-level security measures and backups (with multi-layer data protection) to keep your business safe. No more worrying about crashes or breaches while you sleep.


      </>
    ),
  
  },
];

function Enterprise_why_choose() {
  return (
    <section className="py-16 md:py-24 bg-zinc-50">
        <div className="relative z-10 mx-auto max-w-6xl space-y-6 px-4">
            <h3 className="h3 text-center">Why Choose The ICT Hub UK?</h3>
        <p className="paragraph text-center">
         We know trust is a big concern when partnering with an external team.<br/> Here are <b>key reasons UK businesses choose us</b> as their IT partner

        </p>
        </div>
      <div className="max-w-6xl mx-auto px-4 mt-12">
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {processSteps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <div className="paragraph">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Enterprise_why_choose