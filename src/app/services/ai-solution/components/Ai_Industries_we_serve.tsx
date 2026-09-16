import React from 'react'
const processSteps = [
  {
    title: "Healthcare",
    desc: (
      <>
        AI can assist with patient queries, appointment scheduling, and even preliminary symptom checking via chatbots. We help healthcare providers improve patient engagement and streamline admin tasks, all while maintaining privacy and compliance.
      </>
    ),
  },
  {
    title: "E-Commerce",
    desc: (
      <>
      From personalised product recommendations to AI-powered customer support, we boost online sales and customer loyalty. Imagine an AI that can suggest the perfect product to each shopper and answer their questions instantly – that’s what we deliver for online retailers.
      </>
    ),
  },
  {
    title: "Education ",
    desc: (
      <>
       Engage students with intelligent tutoring systems or automate administrative chores. Whether it’s an AI chatbot answering student FAQs or analytics predicting at-risk students, we help educational institutions leverage AI to enhance learning outcomes.
      </>
    ),
  },
  {
    title: "Financial Services",
    desc: (
      <>
         Fraud detection, automated portfolio management, or a smart chatbot for banking customers – we’ve done it. Our AI solutions help financial firms increase security, improve decision-making, and offer better customer service in a highly regulated environment.
      </>
    ),
  },
  {
    title: "Manufacturing",
    desc: (
      <>
         From predictive maintenance (forecasting machine failures before they happen) to optimising supply chain logistics, AI can save manufacturing companies time and money. We build custom AI agents that monitor production lines, ensuring maximum efficiency and minimal downtime.

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
const Ai_Industries_we_serve = () => {
  return (
    <>
    <section className="py-16 md:py-24 bg-zinc-50">
        <div className="global-container md:px-4">
            <h3 className="h3 text-center">Industries We Serve</h3>
            <p className='paragraph text-center mt-4'>
             We design AI solutions for businesses across <b>various industries</b> – chances are, we’ve got you covered:

            </p>
        </div>
      <div className="global-container mx-auto md:px-4 mt-12">
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <div className="paragraph">{step.desc}</div>
            </div>
          ))}
        </div>

        <p className='paragraph mt-5'>
          Don’t see your sector? Don’t worry – our expertise likely extends to it. From <b>startups to enterprises</b>, the principles are the same: we tailor AI to your business model. The UK’s AI boom is touching every field the UK’s AI market was valued at <b>£72 billion in 2024</b> – the largest in Europe, and we’re here to help your organisation be part of that growth.
        </p>
      </div>
    </section>
    </>
  )
}

export default Ai_Industries_we_serve