"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Dribbble } from "lucide-react";
import Whatsapp from "./Whatsapp";

const footerLinks = [
  {
    group: "Quick Links",
    items: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Services", href: "/services" },
      { title: "Blog", href: "/blog" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    group: "Services",
    items: [
      { title: "Branding & Design", href: "/services/branding-and-design" },
      { title: "Meta Ads Marketing", href: "/services/meta-ads" },
      { title: "Google Ads Marketing", href: "/services/google-ads" },
      { title: "Website Design & Development", href: "/services/web-development" },

    ],
  },
  {
    group: "Our Popular services",
    items: [
      { title: "Search Engine Optimization", href: "/services/seo" },
      { title: "Social Media Marketing", href: "/services/social-media-marketing" },
      { title: "Content Marketing", href: "/services/content-marketing" },
      { title: "Paid Advertising", href: "/services/paid-ads" },
    ],
  },
];

export default function Footertwo() {
  return (
    <>
      <Whatsapp />
      <footer className="bg-[#0A0A0A] text-white pt-20 pb-5">
        <div className="global-container md:px-4">

          {/* ── Top Section ── */}
          <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 mb-20">

            {/* Left: CTA */}
            <div className="max-w-md">
              <h2 className="text-4xl md:text-[3rem] font-[500] leading-[1.2] tracking-tight mb-8">
                Let's Build Your<br /> Growth Today
              </h2>
              <div className="mb-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[#117C75] text-white font-medium text-sm md:text-base pl-6 pr-2 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                >
                  Book A Free Call
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#117C75] transition-colors duration-300">
                    <ArrowUpRight size={16} className="text-black group-hover:text-white" />
                  </span>
                </Link>
              </div>

              {/* Social Icons (Moved below the button) */}
              <div className="flex items-center gap-6 text-white/60">
                <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Youtube size={20} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Dribbble size={20} /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Twitter size={20} /></Link>
              </div>
            </div>

            {/* Right: Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 pt-4">
              {footerLinks.map((col, idx) => (
                <div key={idx} className="space-y-6">
                  <h5 className="font-semibold text-white/90 text-[15px]">{col.group}</h5>
                  <ul className="space-y-4">
                    {col.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Link href={item.href} className="text-white/60 hover:text-white transition-colors text-sm">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* ── Middle Section: Giant Text & Badge ── */}
          <div className="relative mb-12 flex flex-col">

            {/* Badge (positioned above text on right) */}


            {/* Giant Logo Text */}
            <h1 className="text-[10.5vw] font-bold leading-none tracking-tighter text-white uppercase text-center lg:text-left">
              MHSOCIALMEDIA
            </h1>
          </div>

          {/* ── Bottom Section ── */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/100 font-medium">
            <p>© {new Date().getFullYear()} MH Social Powered by <Link className="hover:underline transition-all duration-300" href={"https://www.theicthub.com/"}>The ICT Hub</Link></p>
            <p><Link className="hover:underline transition-all duration-300" href={"/privacy-policy"}>Privacy Policy</Link> | <Link className="hover:underline transition-all duration-300" href={"/contact"}>Contact</Link></p>
          </div>

        </div>
      </footer>
    </>
  );
}