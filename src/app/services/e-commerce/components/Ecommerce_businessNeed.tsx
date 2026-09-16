"use client";

const processSteps = [
  {
    title: "Tailor-Made Solutions",
    desc: "No two businesses are alike. Our custom development services ensure your platform is uniquely built for your needs, with features and workflows designed around your products and customers. This tailor-made approach provides flexibility that off-the-shelf solutions can’t match, giving you a competitive edge in user experience and functionality.",
  },
  {
    title: "Mobile-First Approach",
    desc: "With the rise of mobile shopping, focusing on the mobile user experience is critical. Over 60% of e-commerce purchases in the UK now happen on mobile devices so we design every site with a mobile-first mindset. From responsive layouts to touch-friendly navigation, our websites look and perform great on smartphones and tablets. This ensures you won’t miss out on the huge segment of customers shopping on the go.",
  },
  {
    title: "Scalable & Secure",
    desc: "As your business grows, your platform should grow with it. We build e-commerce sites that can handle increasing traffic and sales volumes without compromising performance. Scalability is built into the architecture, so your site can handle peak shopping seasons or rapid expansion. Equally important, we implement top-notch security measures—secure payment processing, SSL encryption, data protection best practices—to keep your customers’ data safe and build trust. A platform that is both scalable and secure means you can pursue growth opportunities confidently",
  },
  {
    title: "Advanced Integrations",
    desc: "Modern e-commerce relies on a constellation of tools and integrations. We integrate your website with leading third-party services to enhance operations – from payment gateways and inventory management systems to CRM software and marketing automation. These advanced integrations streamline your workflow (e.g. automatically updating stock levels or syncing orders with fulfillment centers). We also optimize site performance during development; for example, implementing one-page checkout and efficient code so that pages load fast – even a 1-second delay in page load can reduce conversions by about 7% By integrating the right tools and performance optimizations, we ensure your e-commerce site not only has more features, but also runs quickly and reliably for every user.",
  },
];

export default function Ecommerce_businessNeed() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="global-container md:px-4">
        {/* Section Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <h3 className="h3">
            Key Benefits of E-Commerce<br/> Website Development
          </h3>
          <p className="primary_header_content mt-6 md:mt-0 text-justify paragraph">
            Investing in a professionally built e-commerce website offers numerous benefits. Here are some key advantages of our development approach.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid gap-x-8 gap-y-[50px] md:grid-cols-2 lg:grid-cols-2 mt-16">
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
                <h4 className="secondary_header mb-3">{step.title}</h4>
                <p className="secondary_header_content paragraph text-justify">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
