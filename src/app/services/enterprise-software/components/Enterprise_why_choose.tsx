import React from 'react'
export default function Enterprise_why_choose() {
  const features = [
    {
      title: "UK-Friendly Communication",
      bgColor: "bg-muted/50",
      icon: (
       <svg
  className="w-5 h-5 text-[#000000]"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
</svg>


      ),
      desc: (
        <>
          We operate on UK business hours for meetings and support. Our team speaks fluent English and understands London business culture. You can reach us via email, phone, WhatsApp – whatever you prefer – and always get a friendly, prompt response.
        </>
      ),
    },
    {
      title: "Local Presence & Reliability",
      bgColor: "bg-muted/50",
      icon: (
        <svg
          className="w-5 h-5 text-[#000000]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 11c-1.657 0-3 1.343-3 3v1h6v-1c0-1.657-1.343-3-3-3z" />
          <path d="M17 8V6a5 5 0 00-10 0v2m10 0H7m10 0a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2" />
        </svg>
      ),
      desc: (
        <>
         We are a registered business and a trusted name in tech since 2015. While our development center is in Bangladesh, we have a foothold in the UK market. This means you get the cost benefits of an offshore team with the accountability of a local provider. No trust issues – we’re in it for the long run as your partner.
        </>
      ),
    },
    {
      title: "Top Talent & Modern Tech",
      bgColor: "bg-muted/50",
      icon: (
        <svg
          className="w-5 h-5 text-[#000000]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
        </svg>
      ),
      desc: (
        <>
          Our developers are experienced in the latest technologies (think Python, Django, React, cloud platforms, you name it). We ensure your software isn’t just up-to-date now, but future-proof. If you already have IT staff, we collaborate smoothly; if not, we handle everything for you.
        </>
      ),
    },
    {
      title: "Cost-Effective Scaling",
      bgColor: "bg-muted/50",
      icon: (
        <svg
          className="w-5 h-5 text-[#000000]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M21 12a9 9 0 10-18 0 9 9 0 0018 0z" />
        </svg>
      ),
      desc: (
        <>
          With us, you reduce your tech budget without compromising. Hiring in the UK is costly; with The ICT Hub, you get world-class engineers at a much lower rate. Scale your team up or down as needed, with no long-term overhead like pensions or office space.
        </>
      ),
    },
    {
      title: "Quality & Satisfaction",
      bgColor: "bg-muted/50",
      icon: (
        <svg
          className="w-5 h-5 text-[#000000]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
        </svg>
      ),
      desc: (
        <>
          We follow global best practices – from agile development to rigorous testing and data security. Every project is delivered on-time and to the highest standard. Our process includes planning, prototyping, and regular check-ins with you. The result? 100% client satisfaction is our pride, and we’re not happy until you are.
        </>
      ),
    },
    {
      title: "Ongoing Support & Security",
      bgColor: "bg-muted/50",
      icon: (
        <svg
          className="w-5 h-5 text-[#000000]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5.121 17.804A7 7 0 0112 15a7 7 0 016.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M21 12a9 9 0 10-18 0 9 9 0 0018 0z" />
        </svg>
      ),
      desc: (
        <>
          Post-launch, we don’t disappear. You get continuous support, regular updates, and quick fixes via our ticketing system. Security is paramount – we implement high-level security measures and backups (with multi-layer data protection) to keep your business safe. No more worrying about crashes or breaches while you sleep.
        </>
      ),
    },
  ];

  return (
    <section className="bg-zinc-50 py-16 md:px-4">
      <div className="global-container">
        {/* Intro */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="primary_header">
            Why Choose <br /> The ICT Hub UK?
          </h3>
          <p className="max-w-3xl mx-auto md:mt-0 mt-5 primary_header_content paragraph">
            We know trust is a big concern when partnering with an external team. Here are key reasons UK businesses choose us as their IT partner
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:px-12 md:grid-cols-3 lg:gap-10 lg:px-0 md:mt-20 mt-10 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md border border-gray-200 p-8 hover:shadow-lg transition-shadow overflow-hidden"
            >
              {/* Icon in top-right corner (no gap) */}
              <div className={`absolute -top-2 -right-2 ${feature.bgColor} p-8 rounded-full`}>
                {feature.icon}
              </div>

              <h4 className="mb-3 mt-4 secondary_header">{feature.title}</h4>
              <p className="secondary_header_content paragraph text-justify">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
