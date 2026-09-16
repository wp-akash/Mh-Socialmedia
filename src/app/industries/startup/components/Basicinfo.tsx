import React from 'react'
import Image from "next/image";

function Basicinfo() {
  return (
    <>
    <section className="bg-white py-12 sm:py-16 lg:pt-20">
        <div className="mx-auto global-container px-6">
          <div className="blog_info">
            <h3 className="h3 mb-3">Startup</h3> 
            <p className="paragraph">
              The ICT Hub gives various IT Solutions and Technical and Technological Support and Services. We also give Digital Business Strategy Plan and Execution Process and Promotional Strategy Plan. Our experienced and dedicated team have enough capabilities to handhold your Business Engagements solution to build up and stable your business Startup phase by phase, step by step.
            </p>

            <div className="w-full block mt-10">
            <Image
              src="/industry/Startup.jpg"
              alt="Blog Cover"
              width={500}
              height={500}
              className="w-full h-100 object-cover rounded-lg"
              priority
            />
          </div>
          </div>
          <div className="blog_content py-6">
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, cumque, quia, voluptates quibusdam incidunt
              asperiores doloremque magnam laboriosam, nobis doloribus
              architecto. Doloribus, cumque! Quisquam voluptatibus, cumque,
              quia, voluptates quibusdam incidunt asperiores doloremque magnam
              laboriosam, nobis doloribus architecto. Doloribus, cumque!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Basicinfo