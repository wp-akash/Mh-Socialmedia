'use client'

const processSteps = [
  {
    title: "Consultation",
    desc: "We understand your needs and provide a tailored tech solution.",
  },
  {
    title: "Implementation",
    desc: "Our team works seamlessly with yours to deploy the best software.",
  },
  {
    title: "Ongoing Support",
    desc: "We’re with you every step of the way with continuous support and system updates.",
  },
];

export default function WorkFlow() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="global-container md:px-4">
        {/* Section Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="h3">How It Works</h3>
          <p className="paragraph mt-5 md:mt-0 text-justify primary_header_content">
            We make technology simple. First, we start with a detailed consultation to understand your goals and challenges. Next, our experts design and implement the best-fit solutions tailored to your business. Once everything is up and running, we provide ongoing support, maintenance, and updates—ensuring your systems stay secure, efficient, and ready to grow with you.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid gap-x-8 gap-y-[50px] md:grid-cols-3 lg:grid-cols-3 mt-16">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 flex flex-col h-full relative border-b-0 border-[#d82d45] mb-[25px]"
            >
              {/* Circle Icon */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="mt-8 text-center">
                <h4 className="h4 mb-3 secondary_header">{step.title}</h4>
                <p className="paragraph secondary_header_content ">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
