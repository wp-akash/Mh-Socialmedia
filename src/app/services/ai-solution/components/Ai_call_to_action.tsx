import ContactButton from "@/components/ContactButton";
import Image from "next/image";
import React from "react";

function Ai_call_to_action() {
  return (
    <>
      <section className="bg-white py-20 md:px-6">
        <div className="global-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 justify-center items-center">
            <div className="relative w-full h-96 lg:h-[500px]">
              <Image
                src="/a.jpg"
                alt="AI Expert"
                className="rounded-lg shadow-lg object-cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <h3 className="h3 mb-4">Talk to an AI Expert</h3>
              <p className="paragraph mb-6 max-w-5xl mx-auto primary_header_content">
                By now, you’re probably imagining what AI can do for you – let’s
                turn that into reality. Ready to elevate your business with a
                custom AI solution? Don’t wait for competitors to leap ahead. Talk
                to an AI Expert Today Schedule a free, no-obligation call with our
                AI specialists. We’ll discuss your goals and brainstorm potential
                AI approaches for your business. (It’s your opportunity to get
                tailored insights – and it’s completely free!)
              </p>
              <ContactButton
                text="Book An Appointment"
                href="https://calendly.com/theicthub-info/30min"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ai_call_to_action;
