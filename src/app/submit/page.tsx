import Link from "next/link";
import React from "react";
const page = () => {
  return (
    <>
      <section className="bg-[#fafafa]">
        <div className="global-container mx-auto py-32">
          <div className="grid md:grid-cols-2 gap-4 px-6">
            <div className="grid content-between">
              <div>
              <h3 className="h3">Let’s start the dialogue now!</h3>
              <p className="paragraph mt-2">
                Are you ready to elevate your brand’s digital presence? I lead
                an exceptional team of Software development, researchers, ui/ux,
                and webmasters.
              </p>
              </div>
              <div className="mt-4">
                <div className="box w-24 h-24 bg-black"></div>
                <h5 className="h5 py-1 mt-2">Sadik Ahammed</h5>
                <p>Chief Technology Officer</p>
              </div>
            </div>
            <div className="">
              <form className="grid grid-cols-1 gap-6 bg-white p-4 rounded-lg shadow-md">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Jane Cooper"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Ex. Tesla Inc"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="You@Example.Com"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="serviceRequired"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Service Required*
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                      required
                    >
                      <option value="">Select Your Service</option>
                      <option value="webDevelopment">Web Development</option>
                      <option value="uiUxDesign">UI/UX Design</option>
                      <option value="softwareDevelopment">
                        Software Development
                      </option>
                      <option value="research">Research</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="projectBudget"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Project Budget*
                    </label>
                    <select
                      id="projectBudget"
                      name="projectBudget"
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                      required
                    >
                      <option value="">Select Your Range</option>
                      <option value="below10k">Below $10,000</option>
                      <option value="10kTo50k">$10,000 - $50,000</option>
                      <option value="above50k">Above $50,000</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Project Details*
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    placeholder="Tell us more about your idea"
                    rows={4}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-800"
                >
                  Send Inquiry
                </button>
              </form>
              <h5 className="h5 mt-4 text-center">
                Not Interested to submit the form? <Link href="#"
                  className="text-primary hover:underline">Book A Call Directly</Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default page;
