import React from "react";
import Image from "next/image";

function Details_info() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="blog_info">
            
              <h2 className="h2">অনলাইনে ব্যবসা করছেন? তাহলে নিশ্চয়ই এই সমস্যাগুলো চেনা লাগছে -</h2>
              <p className="paragraph mb-10">
              <ul className="mt-4">
                <li>● অর্ডার এক জায়গায়</li>
                <li>● স্টক অন্য জায়গায়</li>
                <li>● হিসাব আলাদা</li>
                <li>● ভুল হওয়ার ঝুঁকি বেশি</li>
                <li>● এই জায়গাতেই ERP দরকার হয়।</li>
              </ul>
              এই সমস্যার সহজ সমাধান হলো{" "}
              <b>ERP + E-Commerce Combined Solution।</b>
              চলুন খুব সহজভাবে বুঝে নেই।
            </p>

            <div className="w-full bg-amber-100">
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
            <h4 className="h4 mb-5">ERP + E-Commerce Combined Solution কী?</h4>
            <p className="paragraph mt-3">
              <ul>
                <li>● Online Store (E-commerce Website) এবং</li>
                <li> ● ERP Software (ব্যবসা ম্যানেজমেন্ট সিস্টেম)</li>
              </ul>
              দুটো একসাথে যুক্ত থাকবে। অর্ডার, স্টক, হিসাব - সব কিছু
              Automatically Sync হবে।
            </p>
          </div>
          <div className="blog_content py-6">
            <h4 className="h4 mb-5">
              সহজ উদাহরণ (বাংলাদেশি ব্যবসার বাস্তব চিত্র)
            </h4>
            <p className="paragraph mt-3">
              ধরুন আপনি ফেসবুক ও ওয়েবসাইটে পোশাক বিক্রি করেন।
              <b> যদি ERP সংযুক্ত না থাকে:</b>
              <br />
              <ul className="py-5">
                <li>● কাস্টমার অর্ডার দিলো</li>
                <li> ● আপনাকে হাতে স্টক কমাতে হলো</li>
                <li> ● আলাদা করে Invoice বানাতে হলো</li>
                <li> ● হিসাব আলাদা করে লিখতে হলো</li>
              </ul>
              <b> ফলাফল:</b>
              <ul className="pt-5">
                <li>● স্টক ভুল হওয়া</li>
                <li> ● ডাবল সেল</li>
                <li> ● সময় নষ্ট</li>
                <li> ● কর্মচারীর উপর চাপ</li>
              </ul>
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">যদি ERP + E-commerce একসাথে যুক্ত থাকে:</h4>
            <p className="paragraph mb-10">
              <ul>
                <li>● কাস্টমার অর্ডার করলো</li>
                <li>● স্টক নিজে থেকেই কমে গেল</li>
                <li>● Invoice অটোমেটিক তৈরি হলো</li>
                <li>● Payment হিসাব আপডেট হলো</li>
                <li>● রিপোর্ট সাথে সাথে দেখা গেল</li>
              </ul>
            </p>
          </div>
          <div className="blog_info">
            <b>ফলাফল</b>
            <p className="paragraph mt-5 mb-10">
              <ul>
                <li>● কম ভুল</li>
                <li>● কম ঝামেলা</li>
                <li>● বেশি নিয়ন্ত্রণ</li>
                <li>● দ্রুত ব্যবসা পরিচালনা</li>
              </ul>
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">
              ERP + E-Commerce একসাথে ব্যবহারের বড় সুবিধাগুলো
            </h4>
            <p className="paragraph mb-10">
              <b>Real-Time Inventory Control</b>
              <ul className="pb-5">
                <li>● একটি পণ্য বিক্রি হলেই স্টক আপডেট।</li>
                <li>● Out of stock পণ্য ভুল করে বিক্রি হবে না।</li>
              </ul>
              <b> Automatic Order Processing</b>
              <ul className="pb-5">
                <li>● অর্ডার নিজে থেকেই ERP-তে চলে যায়।</li>
                <li>● ডাবল এন্ট্রি করতে হয় না।</li>
              </ul>
              <b> Accurate Accounting & Reports</b>
              <ul className="pb-5">
                <li>● প্রতিটি বিক্রি সরাসরি হিসাব বিভাগে যুক্ত হয়। </li>
                <li>● Profit, Expense, Sales Report—সব এক জায়গায়।</li>
              </ul>
              <b> দ্রুত ব্যবসা বড় করা (Scalability)</b>
              <ul className="pb-5">
                <li>● অর্ডার বাড়লেও সিস্টেম সামলাতে পারবে।</li>
                <li>● ম্যানুয়াল ঝামেলা বাড়বে না।</li>
              </ul>
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">গ্রাহকের সন্তুষ্টি বাড়ে</h4>
            <ul>
              <li>● সঠিক স্টক</li>
              <li>● দ্রুত ডেলিভারি</li>
              <li>● কম ভুল</li>
            </ul>
            <p>খুশি গ্রাহক মানেই Repeat Customer।</p>
          </div>
          <div className="blog_info">
            <h4 className="h4 py-5">
              কারা এই Combined Solution ব্যবহার করবেন?
            </h4>
            <p className="paragraph mb-10">আপনার যদি থাকে:
            <ul>
              <li>● অনলাইন শপ</li>
              <li>● দৈনিক হাই ভলিউম অর্ডার</li>
              <li>● বড় ইনভেন্টরি</li>
              <li>● একাধিক সেলস চ্যানেল</li>
            </ul><br/>
            <p>
              তাহলে <b>ERP + E-commerce Integration</b> আপনার জন্য উপকারী।
              
              ছোট ব্যবসা শুরুতে সাধারণ সিস্টেম ব্যবহার করতে পারে, কিন্তু ব্যবসা
              বড় হলে এই সমাধান খুব গুরুত্বপূর্ণ।
            </p>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details_info;
