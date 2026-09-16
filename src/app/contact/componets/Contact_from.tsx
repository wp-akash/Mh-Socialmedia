"use client";

import { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha"; //  Not needed

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const [captchaValue, setCaptchaValue] = useState<string | null>(null); //  Not needed

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleCaptcha = (value: string | null) => {
  //   setCaptchaValue(value);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // if (!captchaValue) {
    //   alert("Please verify that you are not a robot.");
    //   return;
    // }

    console.log("Form Data:", formData);
    // console.log("Captcha Token:", captchaValue);

    // Example fetch to backend
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ ...formData, captcha: captchaValue }), //  Removed captcha
      body: JSON.stringify({ ...formData }), //  Only send form data
    })
      .then((res) => res.json())
      .then(() => {
        alert("✅ Message sent!");
        setFormData({ name: "", email: "", message: "" });
        // setCaptchaValue(null);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-2 p-4 border rounded"
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-2 text-sm rounded bg-white text-black focus:outline-none"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-2 text-sm rounded bg-white text-black focus:outline-none"
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full px-4 py-2 text-sm rounded bg-white text-black focus:outline-none"
        rows={4}
        required
      />
      {/* <ReCAPTCHA
        sitekey="6LeoOckrAAAAADMnaOq9p6PcqxENLDMRgfu7xlpk"
        onChange={handleCaptcha}
      /> */}
      <button
        type="submit"
        className="bg-white text-[#D72D45] hover:bg-black hover:text-white px-6 py-2 rounded font-medium cursor-pointer"
      >
        Submit Now →
      </button>
    </form>
  );
}
