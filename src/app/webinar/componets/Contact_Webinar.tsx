"use client";

import React, { useState } from 'react';

export default function Contact_Webinar() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
    whatsapp: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/webinar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Inquiry sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          location: "",
          whatsapp: "",
          message: "",
        });
      } else {
        alert("❌ Error: " + data.error);
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#F5F2E9] py-24 font-sans" id="contactWebinar">
      <div className="global-container overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Left Side: Content */}
          <div className='lg:w-2/3 flex flex-col justify-between'>
            <div>
              <h3 className="h3 font-black text-4xl leading-tight">
                Register for the webinar or contact us for more information.
              </h3>
              <p className="mt-4 primary_header_content mb-8 font-medium text-[#1A1614]/70">
                Whether you have questions about the webinar or want to explore how our solutions can benefit your business, we're here to help. Reach out to us today!
              </p>
            </div>

            <div className="mt-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF3B51] rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div>
                <p className="text-sm font-black  tracking-wider">Support Email</p>
                <p className="text-[#1A1614]/60 font-medium">info@theicthub.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-black/5 border border-black/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Full Name */}
              <div className="relative">
                <label htmlFor='name' className="block text-sm font-medium text-gray-700  mb-2">Full Name</label>
                <input 
                  id="name"
                  name="name"
                  type="text" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="David Harrison"
                  className="w-full bg-transparent border-b border-[#1A1614]/10 py-3 outline-none focus:border-[#FF3B51] transition-colors placeholder:text-[#1A1614]/20 font-medium text-black"
                />
              </div>

              {/* Row: Company & Location */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <label htmlFor='company' className="block text-sm font-medium text-gray-700  mb-2">Company Name</label>
                  <input 
                    id="company"
                    name="company"
                    type="text" 
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ex. Exista Digital"
                    className="w-full bg-transparent border-b border-[#1A1614]/10 py-3 outline-none focus:border-[#FF3B51] transition-colors placeholder:text-[#1A1614]/20 font-medium text-black"
                  />
                </div>
                <div className="relative">
                  <label htmlFor='location' className="block text-sm font-medium text-gray-700  mb-2">Location</label>
                  <input 
                    id="location"
                    name="location"
                    type="text" 
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Dhaka, Bangladesh"
                    className="w-full bg-transparent border-b border-[#1A1614]/10 py-3 outline-none focus:border-[#FF3B51] transition-colors placeholder:text-[#1A1614]/20 font-medium text-black"
                  />
                </div>
              </div>

              {/* Row: WhatsApp & Email */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <label htmlFor='whatsapp' className="block text-sm font-medium text-gray-700  mb-2">WhatsApp Number*</label>
                  <input 
                    id="whatsapp"
                    name="whatsapp"
                    type="tel" 
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="01708591899"
                    className="w-full bg-transparent border-b border-[#1A1614]/10 py-3 outline-none focus:border-[#FF3B51] transition-colors placeholder:text-[#1A1614]/20 font-medium text-black"
                  />
                </div>
                <div className="relative">
                  <label htmlFor='email' className="block text-sm font-medium text-gray-700  mb-2">Email Address*</label>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="You@Example.Com"
                    className="w-full bg-transparent border-b border-[#1A1614]/10 py-3 outline-none focus:border-[#FF3B51] transition-colors placeholder:text-[#1A1614]/20 font-medium text-black"
                  />
                </div>
              </div>

              {/* Question / Comments */}
              <div className="relative">
                <label htmlFor='message' className="block text-sm font-medium text-gray-700  mb-2">Any Question or Comments*</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry"
                  className="w-full bg-transparent border-b border-[#1A1614]/10 py-3 outline-none focus:border-[#FF3B51] transition-colors placeholder:text-[#1A1614]/20 font-medium resize-none text-black"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full cursor w-full bg-primary text-white py-4 px-8 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors duration-200 cursor-pointer bg_hover"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>

            </form>
          </div>

        </div>

        <div className="mt-24 text-center">
          <p className="text-xl font-bold opacity-80 max-w-xl mx-auto leading-relaxed">
            "We don't just sell software. We partner with you for long-term growth."
          </p>
          <p className="mt-6 uppercase text-[11px] tracking-[0.4em] font-black text-[#FF3B51]">
            — THE ICT HUB
          </p>
        </div>
      </div>
    </section>
  );
}