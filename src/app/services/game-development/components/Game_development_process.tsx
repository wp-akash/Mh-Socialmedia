"use client";

import React from "react";

const processSteps = [
  {
    title: "Conceptualisation",
    desc: "We begin with brainstorming and research. Our team works with you to refine the game idea, define core mechanics, and identify target audiences. By solidifying the concept and scope early, we establish a clear vision that aligns with market needs and player expectations.",
    step: "01"
  },
  {
    title: "Design",
    desc: "Next comes detailed planning and design. This includes creating concept art, storyboards, character designs, and level layouts. We craft the game's look and feel, and design intuitive UIs/UX so players in the UK and around the world find the experience engaging and easy to navigate.",
    step: "02"
  },
  {
    title: "Development",
    desc: "Our programmers bring the game to life by writing code and integrating assets using the chosen game engine. During this phase, we implement gameplay mechanics, graphics, animations, and physics. We utilise efficient game development tools and agile methodologies to rapidly build and iterate on the game.",
    step: "03"
  },
  {
    title: "Testing",
    desc: "Rigorous testing and QA are performed to hunt down bugs and ensure smooth performance. We conduct gameplay testing, compatibility checks on different devices (especially important for mobile), and optimise performance (frame rates, load times, etc.) for a stable, enjoyable experience.",
    step: "04"
  },
  {
    title: "Deployment",
    desc: "Finally, we launch your game on the desired platforms (App Store, Google Play, Steam, consoles, etc.). Our team assists with the release process, including app store submissions and compliance with platform guidelines. Post-launch, we remain available for updates, patches, and support as needed.",
    step: "05"
  },
];

function Game_development_process() {
  return (
    <section className="py-24">
      <div className="global-container md:px-4">
        {/* Section Header */}
        <div className="md:grid md:grid-cols-2 md:gap-8 items-center mb-16">
          <h3 className="h3">Our Process</h3>
          <p className="primary_header_content mt-6 md:mt-0 text-justify">
            Understanding the <b>game development lifecycle</b> is key to a
            successful project. We follow a structured game development pipeline that
            keeps everything on track.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-black transform md:-translate-x-0.5"></div>
          
          {/* Timeline Steps */}
          <div className="space-y-12">
            {processSteps.map((step, idx) => (
              <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#000000] shadow-lg transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#d92d45]">{step.step}</span>
                </div>
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${idx % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#d92d45]">
                    <div className="flex items-center mb-3">
                      <div className="bg-[#FAFAFA] text-gray-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                        Step {step.step}
                      </div>
                      <h4 className="secondary_header">{step.title}</h4>
                    </div>
                    <p className="secondary_header_content text-gray-600">{step.desc}</p>
                  </div>
                </div>
                
                {/* Spacer for desktop */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom paragraph */}
        <div className="mt-16 text-center">
          <p className="paragraph mt-8 secondary_header_content max-w-3xl mx-auto text-center">
            Each stage of this pipeline is handled with care and
            professionalism. This structured approach minimises risks,
            maintains quality, and keeps development on schedule.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Game_development_process;