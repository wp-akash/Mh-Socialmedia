'use client'

import React, { useState } from 'react'

const tabs = [
  { label: "Overview", content: <p>The ICT Hub Startup service provides end-to-end IT solutions, digital strategy, and technical support to help new businesses launch and grow with confidence.</p> },
  { label: "Project Goals", content: <p>Our goal is to empower startups with scalable technology, strategic planning, and hands-on support for every stage of their journey.</p> },
  { label: "Design & Development", content: <p>We design and develop modern, user-friendly platforms tailored to each startup&apos;s unique needs, ensuring a seamless digital experience.</p> },
  { label: "Results", content: <p>Startups working with us achieve faster go-to-market, improved operational efficiency, and a strong digital presence.</p> },
  { label: "Client Feedback", content: <p>&quot;The ICT Hub team was instrumental in our launch. Their expertise and support made all the difference!&quot;</p> },
];

function Tabcontent() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white pb-12 sm:pb-16 lg:pt-20">
      <div className="mx-auto global-container px-6">
        <div
          className="flex gap-4 border-b mb-8 justify-center"
          style={{ position: 'sticky', top: 90, background: 'white', zIndex: 30 }}
        >
          {tabs.map((tab, idx) => (
            <a key={tab.label}
              href="#"
              style={{ color: active === idx ? '#D72D45' : '#71717a' }}
              className={`py-2 px-4 h5 font-semibold border-b-2 transition-colors text-center ${
                active === idx
                  ? 'border-primary text-primary'
                  : 'border-transparent hover:text-primary'
              }`}
              onClick={e => {
                e.preventDefault();
                setActive(idx);
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>
        <div className="mt-4 text-zinc-700 text-base space-y-8">
          <div className="mb-8">
            <h4 className="h4">{tabs[active].label}</h4>
            <div className='mt-10'>{tabs[active].content}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tabcontent