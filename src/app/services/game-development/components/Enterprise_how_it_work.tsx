import React from "react";
function Enterprise_how_it_work() {
  return (
    <>
      <section className="bg-zinc-50">
        <div className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
            <div className="relative z-10 mx-auto max-w-6xl space-y-6 px-4">
              <h3 className="h3 text-center">
                How It Works – From Chaos to Clarity
              </h3>
              <p className="paragraph text-center">
                Working with ICT Hub UK is simple and transparent
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-l-4 border-indigo-500">
                <h5 className="h5 mb-3">Free Consultation</h5>
                <p className="text-small">
                  We start with a friendly chat to understand your needs and current challenges. No tech jargon – just tell us what’s bothering you in running your business.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-l-4 border-purple-500">
                <h5 className="h5 mb-3">Tailored Proposal</h5>
                <p className="text-small">
                  Our experts analyze your situation and propose a solution <b>custom-fit to your business</b>. Whether it’s upgrading your existing software or building a new platform, you’ll get a clear plan and quote.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-l-4 border-emerald-500">
                <h5 className="h5 mb-3">Agile Development</h5>
                <p className="text-small">
                  Once you’re on board, our team gets to work. We use an agile approach – meaning you see progress in short cycles, can give feedback, and watch your solution take shape. <b>You stay in control</b> without doing the heavy lifting.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-l-4 border-red-500">
                <h5 className="h5 mb-3">Seamless Delivery</h5>
                <p className="text-small">
                  We handle deployment, training, and transition carefully so there’s <b>minimal downtime or disruption</b> to your business. If it’s an ERP or management system, we’ll even help import your old data.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-l-4 border-yellow-500">
                <h5 className="h5 mb-3">Continuous Support</h5>
                <p className="text-small">
                  After launch, we remain your <b>on-call tech team</b>. Need a new feature next month? Found a bug? Want to scale to more users? We’re just a message away. Our support is ongoing – we grow with you as a long-term partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      

    </>
  );
}

export default Enterprise_how_it_work;
