import React, { useState } from 'react';

type JourneyYear = 2016 | 2018 | 2019 | 2021 | 2022 | 2023 | 2024 | 2025;

interface JourneyEntry {
  title: string;
  description: string;
  highlights: string[];
}

export default function OurJourneyTimeline() {
  const [selectedYear, setSelectedYear] = useState<JourneyYear>(2016);

  const journeyData: Record<JourneyYear, JourneyEntry> = {
    2016: {
      title: "2016 highlights:",
      description: "Zubaer Ahammed, founded The ICT Hub focusing on startup clients, assembled the initial team, and began executing our mission from the ground up.",
      highlights: [
        "Operated from an apartment office",
        "Secured venture capital partnerships for startup client deal flow",
        "Built and launched the first client startup software product",
        "Established our product development methodology - The ICT Hub Way"
      ]
    },

    2018: {
      title: "2018 highlights:",
      description: "Expanded our team and capabilities, moved to our first professional office space, and established key partnerships in the European market.",
      highlights: [
        "Moved to professional office space in Prague city center",
        "Expanded team to 15+ developers and designers",
        "Launched 5 successful client products",
        "Established partnerships with major European VCs"
      ]
    },
    2019: {
      title: "2019 highlights:",
      description: "Scaled operations significantly, refined our development processes, and began expanding into international markets.",
      highlights: [
        "Reached 25+ team members across multiple disciplines",
        "Opened satellite office in Berlin",
        "Launched 12 client products with 90% success rate",
        "Developed proprietary project management framework"
      ]
    },
    2021: {
      title: "2021 highlights:",
      description: "Adapted to remote-first operations, expanded service offerings, and achieved significant growth milestones during challenging times.",
      highlights: [
        "Successfully transitioned to hybrid remote-office model",
        "Expanded to 40+ team members globally",
        "Launched 18 products including first enterprise clients",
        "Achieved 95% client retention rate"
      ]
    },
    2022: {
      title: "2022 highlights:",
      description: "Strengthened market position, enhanced our technology stack, and established ourselves as a leading development partner.",
      highlights: [
        "Reached 55+ team members with global talent",
        "Launched 22 successful products across various industries",
        "Implemented AI-assisted development workflows",
        "Achieved 4.9/5 average client rating on Clutch"
      ]
    },
    2023: {
      title: "2023 highlights:",
      description: "Continued growth and innovation, expanded service offerings, and solidified our position as industry leaders.",
      highlights: [
        "Grew to 65+ team members with specialized expertise",
        "Launched 25+ products with cutting-edge technologies",
        "Introduced blockchain and Web3 development services",
        "Established innovation lab for emerging technologies"
      ]
    },
    2024: {
      title: "2024 highlights:",
      description: "Achieved new milestones in team growth, client satisfaction, and technological innovation while maintaining our core values.",
      highlights: [
        "Expanded to 10+ highly skilled team members",
        "Maintained 89% client retention post-initial contract",
        "Launched AI-powered development tools internally",
        "Achieved top 0.4% selective hiring rate"
      ]
    },
    2025: {
      title: "2025 highlights:",
      description: "Achieved new milestones in team growth, client satisfaction, and technological innovation while maintaining our core values.",
      highlights: [
        "Expanded to 10+ highly skilled team members",
        "Maintained 89% client retention post-initial contract",
        "Launched AI-powered development tools internally",
        "Achieved top 0.4% selective hiring rate"
      ]
    }
  };

  const years = Object.keys(journeyData).map(Number).sort() as JourneyYear[];

  return (
    <div className="bg-gray-900 text-white py-16 min-h-screen" id='history'>
      <div className="global-container md:px-4">
        <h3 className="h3 mb-12">Our Journey</h3>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Timeline Sidebar */}
          <div className="lg:w-48 flex lg:flex-col flex-row overflow-x-auto lg:overflow-x-visible">
            <div className="relative flex lg:flex-col flex-row">
              
              {/* Vertical Line (center aligned) */}
              <div className="hidden lg:block absolute left-full top-0 bottom-0 w-px bg-gray-600 ml-4"></div>

              {years.map((year) => (
                <div key={year} className="relative flex-shrink-0">
                  <button
                    onClick={() => setSelectedYear(year)}
                    className={`
                      relative z-10 block w-32 lg:w-full px-4 py-3 mb-2 lg:mb-4 rounded
                      transition-all duration-200 border text-center
                      ${selectedYear === year
                        ? 'bg-white text-gray-900 border-white'
                        : 'bg-transparent text-gray-300 border-gray-600 hover:border-gray-400 hover:text-white'}
                    `}
                  >
                    {year}
                  </button>

                  {/* Timeline Dot (aligned with vertical line) */}
                  <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 ml-[13px]">
                    <div className={`
                      w-2 h-2 rounded-full transition-colors duration-200
                      ${selectedYear === year ? 'bg-white' : 'bg-gray-600'}
                    `}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 lg:pl-12 items-center">
            <div className="transition-all duration-300">
              <p className="secondary_header mb-6">
                {journeyData[selectedYear].title}
              </p>

              <p className="text-gray-300 primary_header_content mb-8">
                {journeyData[selectedYear].description}
              </p>

              <ul className="space-y-3">
                {journeyData[selectedYear].highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start paragraph">
                    <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="!text-gray-300 paragraph">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}