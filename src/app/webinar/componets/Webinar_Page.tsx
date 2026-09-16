'use client';

// app/webinar/page.tsx
import React from 'react';
import { Poppins } from 'next/font/google';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';
import ContactButton from '@/components/ContactButton';
import { ShoppingBag, Store, TrendingUp, Zap } from 'lucide-react';

// Configuring Poppins with necessary weights
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins' 
});

export default function Webinar_Page() {
  return (
    <div className={`${poppins.variable} font-sans bg-[#ffffff] text-[#1A1614] selection:bg-[#d82d45]/30`}>
      

      {/* Hero Section */}
      <section className="py-24 global-container md:px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[#d82d45] text-xs font-black uppercase tracking-[0.2em] border-l-4 border-[#d82d45] pl-3">
            Free Live Webinar • 10 May 2026
          </span>
          <h1 className="mt-8 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
            How clothing brands are <span className="text-[#d82d45]">scaling faster</span> with ERP.
          </h1>
          <p className="mt-10 text-lg text-[#1A1614]/70 max-w-md leading-relaxed font-medium">
            Stock mismatches. Delayed reports. Staff chaos. Outdated software. They silently cost you sales. Let’s fix that in 60 minutes.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-6 items-center">
            <ContactButton  href="#contactWebinar"
              text="Register Now" />

              <ContactButton  href="#whatYouLlearn"
              text="See What You'll Learn" variant="tertiary"
               />
            
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-[#1A1614]/10 pt-8 uppercase text-[10px] tracking-[0.15em] font-black">
            <div><p>Date</p><p className="text-sm text-[#000000] mt-1">10 May 2026</p></div>
            <div><p>Time</p><p className="text-sm text-[#000000] mt-1">4:00 PM</p></div>
            <div><p>Platform</p><p className="text-sm text-[#000000] mt-1">Zoom</p></div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-neutral-800 overflow-hidden shadow-2xl relative rounded-sm">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
             <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" 
              alt="Retail" 
              className="object-cover w-full h-full grayscale-[0.2]"
            />
            <div className="absolute bottom-8 left-8 z-20 bg-[#1A1614] p-6 border-l-4 border-[#d82d45]">
              <span className="text-[#ffffff] text-4xl font-black">60min</span>
              <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">Consultancy Session</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee (Ticker) - Infinite Slider */}
      <div className="bg-[#1A1614] py-6 border-y border-white/5">
        <InfiniteSlider gap={64} speed={50}>
          {["Stock Management", "POS & Sales", "HR & Payroll", "Accounts", "Multi Branch"].map((item) => (
            <span key={item} className="flex items-center whitespace-nowrap text-white/50 text-[11px] font-black uppercase tracking-[0.3em]">
              {item} <span className="ml-6 text-[#d82d45] text-lg leading-none">★</span>
            </span>
          ))}
        </InfiniteSlider>
      </div>

      {/* Pain Points Section */}
      <section className="md:py-32 py-16 global-container md:px-4 overflow-hidden grid lg:grid-cols-3 gap-20">
        <div className="lg:col-span-1">
          <h2 className="h2">
            Running a brand wasn't supposed to feel this <span className="text-[#d82d45]">heavy.</span>
          </h2>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-16">
          {[
            { id: "01", t: "Stock mismatch", d: "Branches show different numbers. You can't trust anything." },
            { id: "02", t: "Delayed reports", d: "By the time you see numbers, it's too late to act." },
            { id: "03", t: "Staff & HR chaos", d: "Manual attendance, messy payroll, no accountability." },
            { id: "04", t: "Outdated software", d: "Tools that fight you instead of helping you grow." }
          ].map((item) => (
            <div key={item.id} className="group border-l border-[#1A1614]/10 pl-6">
              <span className="text-[#d82d45] font-black text-sm tracking-tighter">{item.id}</span>
              <h3 className="text-xl font-bold mt-2">{item.t}</h3>
              <p className="mt-3 text-[#1A1614]/60 text-sm leading-relaxed font-medium">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dark Consultancy Section */}
      <section className="bg-[#1A1614] text-[#F5F2E9] md:py-32 py-16" id="whatYouLlearn">
        <div className="global-container md:px-4 overflow-hidden">
          <span className="text-[#d82d45] text-[11px] font-black uppercase tracking-[0.25em]">What you'll learn</span>
          <h2 className="h2 mt-6 text-white">
            A consultancy-led session — <br/>
            <span className="text-[#d82d45] underline decoration-4 underline-offset-8">not</span> a product demo.
          </h2>
          
          <div className="mt-24 grid md:grid-cols-2 gap-x-20 gap-y-6">
            {[
              "Solving fashion & retail pain points",
              "One system: stock, sales, HR & accounts",
              "Why consultancy comes before software",
              "How brands in Bangladesh are scaling"
            ].map((text, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-[#d82d45] font-black text-2xl opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                <p className="text-xl font-semibold leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Targets Section */}
      <section className="md:py-32 py-16 global-container md:px-4 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="h2">
            Who Should Join?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { text: "Clothing & Lifestyle brand owners", icon: ShoppingBag },
            { text: "Retail chain managers", icon: Store },
            { text: "Entrepreneurs planning to scale", icon: TrendingUp },
            { text: "Anyone tired of manual management", icon: Zap }
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-[#1A1614]/5 hover:border-[#d82d45] transition-all group">
                <div className="w-12 h-12 bg-[#F5F2E9] rounded-full flex items-center justify-center text-[#d82d45] mb-6 group-hover:bg-[#d82d45] group-hover:text-white transition-colors">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <p className="font-bold text-lg leading-tight">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Card */}
      <section className="global-container md:px-4 overflow-hidden pb-24">
        <div className="bg-[#1A1614] rounded-3xl p-12 lg:p-20 relative overflow-hidden text-[#F5F2E9]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#d82d45] blur-[120px] opacity-20 -mr-32 -mt-32" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Reserve your seat. <br/>
                <span className="text-[#d82d45]">Seats are limited.</span>
              </h2>
              <div className="mt-12 flex gap-5 md:gap-10 uppercase ">
                <div><p>Date</p><p className="text-base text-white mt-1">10 May</p></div>
                <div><p>Time</p><p className="text-base text-white mt-1">4:00 PM</p></div>
                <div><p>Platform</p><p className="text-base text-white mt-1">Zoom</p></div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
                
                <a href="#contactWebinar" rel="noopener noreferrer" className='!pointer'>
              <button className="bg-[#d82d45] text-white py-3 rounded-full font-semibold hover:scale-[1.02] transition-transform shadow-lg shadow-[#d82d45]/20 w-full !pointer hover:bg-black">
                Register Now For Free
              </button>
              </a>
              <a href="https://wa.me/8801708591899" rel="noopener noreferrer">
              <button className="bg-[#1DAA61] border border-white/10 py-3 rounded-full font-semibold  font-black hover:bg-black transition-all w-full hover:scale-[1.02]">
                WhatsApp 
              </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}