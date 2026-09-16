"use client";

const processSteps = [
  {
    title: "AI Chatbots & Virtual Assistants",
    desc: "24/7 chatbots that handle customer inquiries, support, and FAQs in a human-like manner. Improve customer satisfaction and reduce support workload by providing instant responses anytime. (Imagine your website visitor getting answers from an AI assistant at 2 AM – no waiting until morning!)",
  },
  {
    title: "AI Process Automation",
    desc: "Streamline repetitive tasks and workflows using AI. From automated data entry to intelligent email sorting, we help you save time and cut costs by letting AI handle the busywork. Your team is freed up to focus on higher-value tasks, boosting productivity.",
  },
  {
    title: "Predictive Analytics",
    desc: "Turn your data into actionable insights. Our AI models analyze historical data to forecast trends and customer behaviour, helping you make smarter decisions. For example, predict inventory demand, identify sales opportunities, or detect potential issues before they happen – all tailored to your business data.",
  },
  {
    title: "Autonomous AI Agents",
    desc: "Sophisticated AI agents that can perform complex, multi-step tasks or decision-making with minimal human intervention. These could be personalised recommendation engines, AI schedulers, or monitoring agents that adapt and learn. In short, we create an “extra pair of hands” for your business that works intelligently and tirelessly.",
  },
  
];

export default function Ai_service_information() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="global-container md:px-4">
        {/* Section Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
          <h3 className="h3">
            Our AI Services & Features
          </h3>
          <p className="paragraph mt-6 md:mt-0 text-justify primary_header_content">
            We offer a range of AI-powered services to drive your business forward. Each solution is customised to deliver tangible benefits
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
                <p className="paragraph secondary_header_content text-justify">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
