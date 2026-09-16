"use client";

const processSteps = [
  {
    title: "Full-Cycle Development",
    desc: "We handle everything from initial concept to final deployment. This includes game design, coding, asset creation, rigorous testing, and post-launch support – a complete game development process that ensures quality at every step.",
  },
  {
    title: "Unity & Unreal Engine Expertise",
    desc: "Our developers specialise in both Unity and Unreal Engine, the industry-leading game development software. Need rapid prototyping with a vast asset store? Unity has you covered. Aiming for photorealistic graphics and advanced rendering? Unreal Engine is our go-to. We leverage the strengths of each engine to suit your project’s needs.",
  },
  {
    title: "Mobile & Cross-Platform Games",
    desc: "Tap into the booming mobile gaming market with our expertise in iOS and Android development. We optimise games for smartphones and tablets so they run smoothly and captivate users on-the-go. Plus, we ensure cross-platform compatibility, bringing your game to PC, console, and VR platforms – widening your reach across devices.",
  },
  {
    title: "Serious Games & Simulations",
    desc: "We also create educational games, simulations, and training programs using game technology. From academic institutions to military and drone training companies, our interactive simulations help users learn and practice skills in a realistic, engaging environment.",
  },
  {
    title: "Outsourcing & Co-Development",
    desc: "Looking to expand your game portfolio without an in-house team? You can outsource your game development to us with confidence. We offer cost-effective co-development services, acting as an extension of your team. Focus on your business and marketing while we handle the technical development behind the scenes.",
  },
];

export default function Game_development_service() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="global-container md:px-4">
        {/* Section Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <h3 className="h3">
            Our Game Development<br/> Services
          </h3>
          <p className="primary_header_content md:mt-0 mt-5 text-justify paragraph">
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
