'use client';
import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    countryCode: '+880',
    phoneNumber: '',
    service: '',
    budget: '',
    projectDetails: ''
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed to send form");
      }

      const data = await res.json();
      console.log("✅ Response:", data);

      alert("✅ Message sent!");
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        countryCode: "+880",
        phoneNumber: "",
        service: "",
        budget: "",
        projectDetails: "",
      });
    } catch (err) {
      console.error("❌ Error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-white py-16 md:py-24" id='booking'>
      <div className="global-container md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="flex items-center gap-2 text-sm font-semibold tracking-wider text-gray-900 mb-6 uppercase">
                ✦ CONTACT US
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-medium leading-[1.1] tracking-tight text-gray-900">
                Let’s build something<br />that drives growth.
              </h2>
            </div>

            <div className="mt-12 lg:mt-32">
              <p className="text-gray-500 mb-8 max-w-md text-base leading-relaxed">
                We’d love to hear about your project, your challenges, or your next big idea. Whether you’re looking to revamp your brand, boost performance, or launch something entirely new we’re here to help make it happen.
              </p>
              <a href="https://calendly.com/theicthub-info/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#117C75] text-white pl-6 pr-2 py-2 rounded-full font-medium hover:bg-[#0e6860] transition-colors group w-fit border border-[#117C75]">
                Book A Free Call
                <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black group-hover:bg-[#0e6860] group-hover:text-white transition-colors">
                  <ArrowUpRight size={18} />
                </span>
              </a>
              <p className="mt-8 text-sm text-gray-500">
                Hate forms? <a href="mailto:info@mhsocialmedia.ae" className="font-medium text-black">info@mhsocialmedia.ae</a>
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10">
            {/* Image */}
            <div className="w-[full] h-[280px] md:h-[320px] relative rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/contact.webp"
                fill
                className="object-cover"
                alt="Working at desk"
              />
            </div>

            {/* Form */}
            <div className="bg-white">
              <div className="space-y-4">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:border-black outline-none transition-colors bg-white text-gray-800 placeholder:text-gray-400 text-sm"
                    placeholder="Name*"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:border-black outline-none transition-colors bg-white text-gray-800 placeholder:text-gray-400 text-sm"
                    placeholder="Email Address*"
                  />
                </div>

                {/* Company Name and Phone Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:border-black outline-none transition-colors bg-white text-gray-800 placeholder:text-gray-400 text-sm"
                    placeholder="Company Name (Optional)"
                  />
                  <div className="flex gap-2">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      required
                      className="w-[90px] px-2 py-3.5 border border-gray-200 rounded-lg focus:border-black outline-none transition-colors bg-white text-gray-800 cursor-pointer text-sm"
                    >
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+880">🇧🇩 +880</option>
                      <option value="+86">🇨🇳 +86</option>
                      <option value="+81">🇯🇵 +81</option>
                      <option value="+82">🇰🇷 +82</option>
                      <option value="+33">🇫🇷 +33</option>
                      <option value="+49">🇩🇪 +49</option>
                      <option value="+39">🇮🇹 +39</option>
                      <option value="+34">🇪🇸 +34</option>
                      <option value="+7">🇷🇺 +7</option>
                      <option value="+55">🇧🇷 +55</option>
                      <option value="+52">🇲🇽 +52</option>
                      <option value="+27">🇿🇦 +27</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+966">🇸🇦 +966</option>
                      <option value="+65">🇸🇬 +65</option>
                      <option value="+60">🇲🇾 +60</option>
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3.5 border border-gray-200 rounded-lg focus:border-black outline-none transition-colors bg-white text-gray-800 placeholder:text-gray-400 text-sm w-full"
                      placeholder="Phone*"
                    />
                  </div>
                </div>

                {/* Service Required and Project Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:border-black outline-none transition-colors bg-white text-gray-800 cursor-pointer text-sm"
                  >
                    <option value="">Select Your Service*</option>
                    <option value="custom-software-development">Branding & Design</option>
                    <option value="web-applications">Meta Ads Marketing</option>
                    <option value="mobile-app-development">Google Ads Marketing</option>
                    <option value="e-commerce-solutions">Website Design & Development</option>
                    <option value="enterprise-software">Search Engine Optimization</option>
                    <option value="game-development">Social Media Marketing</option>
                    <option value="software-support">Content Marketing</option>
                    <option value="e-commerce-solutions">E-commerce Marketing</option>
                    <option value="email-marketing">Email Marketing</option>
                  </select>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:border-black outline-none transition-colors bg-white text-gray-800 cursor-pointer text-sm"
                  >
                    <option value="">Select Your Range*</option>
                    <option value="Less Then $5,000">Less Then $5,000</option>
                    <option value="$5k-$10k">$5,000 - $10,000</option>
                    <option value="$10k-$25k">$10,000 - $25,000</option>
                    <option value="$25k-$50k">$25,000 - $50,000</option>
                    <option value="$50k-$100k">$50,000 - $100,000</option>
                    <option value="$100k+">$100,000+</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-lg focus:border-black outline-none transition-colors bg-white text-gray-800 resize-none placeholder:text-gray-400 text-sm"
                    placeholder="Leave us a message*"
                  />
                </div>

                {/* Terms checkbox */}
                <div className="flex items-center gap-2 pt-2 pb-2">
                  <input type="checkbox" id="terms" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" required />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to with friendly <a href="#" className="font-medium underline text-black">privacy policy</a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-black text-white py-3 px-8 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 w-fit text-sm"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}