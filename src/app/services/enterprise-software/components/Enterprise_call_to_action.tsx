import React from "react";

function Enterprise_call_to_action() {
  return (
    <>
      <section className="bg-primary text-white py-20 px-6">
        <div className="global-container mx-auto text-center">
          <h3 className="h3 mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg sm:text-xl text-white mb-6">
            It’s time to stop patching old systems or overpaying for limited
            local support. With <strong>ICT Hub UK</strong>,<br/> your business gains
            a long-term tech partner who treats your success as our mission.
          </p>
          <p className="text-base sm:text-lg text-white mb-8">
            Imagine smoother operations, happier customers, and more freedom to
            focus on what you do best — all<br/> powered by modern, efficient
            technology. Save up to{" "}
            <span className="font-semibold text-white">70% on IT costs</span>{" "}
            with solutions that simply work.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-100 hover:text-black transition"
            >
              🚀 Get Started Now
            </a>
            <a
              href="tel:+441234567890"
              className="inline-block px-8 py-4 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-blue-900 transition"
            >
              📞 Call Us Today
            </a>
          </div>

          <p className="mt-6 text-sm text-black italic text-white">
            No pressure, just a friendly chat to explore your options.
          </p>
        </div>
      </section>
    </>
  );
}

export default Enterprise_call_to_action;
