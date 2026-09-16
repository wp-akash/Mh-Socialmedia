
function Enterprise_software_info() {
const features = [
  {
    title: "Slow & Outdated",
    bgColor: "bg-muted/50",
    icon: (
      <svg
        className="w-8 h-8 text-[#000000]"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.5 12a4.5 4.5 0 00-3.75-4.437 5.995 5.995 0 00-11.5 0A4.5 4.5 0 001.5 12a.5.5 0 00.5.5h1.586l-.793.793a1 1 0 101.414 1.414l2.207-2.207A.997.997 0 006.5 12a3.5 3.5 0 117 0 .997.997 0 00.086.414l2.207 2.207a1 1 0 101.414-1.414l-.793-.793H21a.5.5 0 00.5-.5z" />
      </svg>
    ),
    desc: <>Your software is outdated or slow, making daily tasks a pain.</>,
  },
  {
    title: "No Integration",
    bgColor: "bg-muted/50",
    icon: (
      <svg
        className="w-8 h-8 text-[#000000]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M13.828 10.172a4 4 0 010 5.656l-1.414 1.414a4 4 0 01-5.656-5.656l1.414-1.414" />
        <path d="M10.172 13.828a4 4 0 010-5.656l1.414-1.414a4 4 0 015.656 5.656l-1.414 1.414" />
      </svg>
    ),
    desc: <>You can’t add new features or integrate with modern tools.</>,
  },
  {
    title: "No Access or Team",
    bgColor: "bg-muted/50",
    icon: (
      <svg
        className="w-8 h-8 text-[#000000]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M24 12L18.3431 17.6569L16.9289 16.2426L21.1716 12L16.9289 7.75736L18.3431 6.34315L24 12ZM2.82843 12L7.07107 16.2426L5.65685 17.6569L0 12L5.65685 6.34315L7.07107 7.75736L2.82843 12ZM9.78845 21H7.66009L14.2116 3H16.3399L9.78845 21Z" />
      </svg>
    ),
    desc: <>You don’t have the source code or right team to update it.</>,
  },
  {
    title: "Too Costly",
    bgColor: "bg-muted/50",
    icon: (
      <svg
        className="w-8 h-8 text-[#000000]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 20.0027C16.4232 20.0027 20.0049 16.421 20.0049 12.0027C20.0049 7.58447 16.4232 4.00275 12.0049 4.00275C7.5866 4.00275 4.00488 7.58447 4.00488 12.0027C4.00488 16.421 7.5866 20.0027 12.0049 20.0027ZM8.50488 14.0027H14.0049C14.281 14.0027 14.5049 13.7789 14.5049 13.5027C14.5049 13.2266 14.281 13.0027 14.0049 13.0027H10.0049C8.62417 13.0027 7.50488 11.8835 7.50488 10.5027C7.50488 9.12203 8.62417 8.00275 10.0049 8.00275H11.0049V6.00275H13.0049V8.00275H15.5049V10.0027H10.0049C9.72874 10.0027 9.50488 10.2266 9.50488 10.5027C9.50488 10.7789 9.72874 11.0027 10.0049 11.0027H14.0049C15.3856 11.0027 16.5049 12.122 16.5049 13.5027C16.5049 14.8835 15.3856 16.0027 14.0049 16.0027H13.0049V18.0027H11.0049V16.0027H8.50488V14.0027Z"></path>
      </svg>
    ),
    desc: <>Hiring local developers is too expensive and stretches your budget.</>,
  },
];

  return (
    <>
      <section className="py-16 md:pt-16">
        <div className="global-container md:px-4">
        <div className="grid md:grid-cols-2">
            {/* Left Column: Text Content */}
            <h3 className="h3 gap-4">
              The ICT Hub UK – Your Tech<br/> Partner for Business Growth
            </h3>
            <div>
              <p className="max-w-3xl md:mt-0 mt-5 primary_header_content paragraph">
                Outdated software holding you back? The ICT Hub UK is here to help modernize and support your business technology. We empower
              London-based businesses with affordable, top-quality software solutions so you can focus on growth. Don’t let legacy systems or
              lack of IT support slow you down – our friendly team will handle it for you, end-to-end.
              </p>
            </div>
          </div>


          <div className="text-center">
            

            <section className="bg-zinc-50 py-10 px-6 rounded-2xl mt-12">
              <div className="">
                <h3 className="h3 mb-4 secondary_header">
                  Is Your Current Software Causing Frustration?
                </h3>
                <p className="secondary_header_content text-gray-600 mb-12 max-w-2xl mx-auto">
                  If you answer “yes” to any of the following, it might be time
                  to upgrade your system.
                </p>

                <div className="grid sm:px-12 md:grid-cols-2 lg:gap-10 lg:px-0 mt-10 gap-5">
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
                      <p className="secondary_header_content">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                {/* <div className="mt-14">
                  <a
                    href="#contact"
                    className="inline-block bg-blue-900 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-800 transition"
                  >
                    Let’s Talk Solutions
                  </a>
                </div> */}
              </div>
            </section>

           
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Enterprise_software_info;
