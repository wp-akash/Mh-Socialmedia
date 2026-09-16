import React from "react";
import Image from "next/image";

function Details_info() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="blog_info">
            <p className="paragraph mb-10">
              ব্যবসায় ইনভেস্টমেন্ট মানে শুধু নতুন প্রোডাক্ট বা মার্কেটিং না।
              সবচেয়ে গুরুত্বপূর্ণ ইনভেস্টমেন্ট হলো সিস্টেমে ইনভেস্ট করা। কারণ
              সিস্টেমই ঠিক করে দেয় — আপনার ব্যবসা কতদূর যাবে, আর কোথায় গিয়ে আটকে
              যাবে।
              <br />
              <h3 className="h3">সমস্যাটা কোথায়?</h3>
              <p>
                বাংলাদেশের অনেক ব্যবসা ভালো চলে, কিন্তু ভিতরে ভিতরে দুর্বল থাকে।
                কারণ
              </p>
              <ul className="mt-4">
                <li>● সেলস এক জায়গায়</li>
                <li>● স্টক অন্য জায়গায়</li>
                <li>● একাউন্টস আলাদা</li>
                <li>● রিপোর্ট বানাতে সময় লাগে</li>
                <li>● সিদ্ধান্ত আসে দেরিতে</li>
              </ul>
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
            <h4 className="h4 mb-5">ছোট উদাহরণ</h4>
            <p className="paragraph mt-3">
              ধরুন, আপনি মাসে ১০ লাখ টাকার পণ্য বিক্রি করছেন। কিন্তু—
              <br />
              <ul>
                <li>● ১ লাখ টাকার স্টক গড়মিল </li>
                <li> ● ৫০ হাজার টাকার হিসাব গরমিল</li>
                <li> ● কিছু বাকি টাকা আদায় হয়নি</li>
              </ul>
              আপনি বুঝতেই পারলেন না আসল লাভ কত। এটাই সবচেয়ে বড় সমস্যা। বিক্রি
              বাড়ছে, কিন্তু কন্ট্রোল নেই।
            </p>
          </div>
          <div className="blog_content py-6">
            <h4 className="h4 mb-5">ERP কীভাবে এই সমস্যাগুলো সমাধান করে?</h4>
            <p className="paragraph mt-3">
              ERP আপনার পুরো ব্যবসাকে এক জায়গায় নিয়ে আসে। একটা সিস্টেমে—
              <br />
              <ul>
                <li>● সেলস</li>
                <li> ● ইনভেন্টরি</li>
                <li> ● পারচেজ</li>
                <li> ● একাউন্টিং</li>
                <li> ● কাস্টমার ডাটা</li>
              </ul>
              সব একসাথে যুক্ত থাকে।
            </p>
          </div>
          <div className="blog_content py-6">
            <h4 className="h4 mb-5">বাস্তবভাবে কী পরিবর্তন হয়?</h4>

            <ul>
              <li>● স্টক অটোমেটিক আপডেট হয়</li>
              <li> ● একাউন্টস রিয়েল-টাইমে দেখা যায়</li>
              <li> ● রিপোর্ট মিনিটেই পাওয়া যায়</li>
              <li> ● ভুল কমে যায়</li>
              <li> ● কাজের গতি বাড়ে</li>
            </ul>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">ERP-তে ইনভেস্ট করা মানে খরচ না, লাভ</h4>
            <p className="paragraph mb-10">
              অনেকে ভাবেন ERP মানে খরচ। আসলে ERP না থাকাটাই বড় খরচ।
              <b>কীভাবে?</b>
              <ul>
                <li>● ভুলের কারণে লস</li>
                <li>● সময় নষ্ট</li>
                <li>● ডুপ্লিকেট কাজ</li>
                <li>● সিদ্ধান্ত নিতে দেরি</li>
                <li>● কর্মীদের উপর অতিরিক্ত চাপ</li>
              </ul>
              এগুলোর সব মিলিয়ে যে ক্ষতি হয়, সেটা ERP এর খরচের চেয়ে অনেক বেশি।
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">ERP আপনাকে কীভাবে এগিয়ে রাখে?</h4>
            <b>১. পুরো ব্যবসা চোখের সামনে আসে</b>
            <p className="paragraph mb-10">
              আপনি যেকোনো সময় জানতে পারবেন— আজ কত বিক্রি হলো, কত স্টক আছে, লাভ
              কত।
            </p>
          </div>
          <div className="blog_info">
            <b>২. দ্রুত সিদ্ধান্ত নিতে পারবেন</b>
            <p className="paragraph mb-10">
              ডাটা থাকলে সিদ্ধান্ত নিতে দেরি হয় না।
            </p>
          </div>
          <div className="blog_info">
            <b>৩. ব্যবসা সহজে স্কেল করা যায়</b>
            <p className="paragraph mb-10">
              একটা দোকান থেকে ৫টা, ১০টা ব্রাঞ্চ — ERP থাকলে কন্ট্রোল হারাতে হয়
              না।
            </p>
          </div>
          <div className="blog_info">
            <b>৪. টিম ম্যানেজমেন্ট সহজ হয়</b>
            <p className="paragraph mb-10">
              সবাই একই সিস্টেমে কাজ করলে ভুল কমে যায়।
            </p>
          </div>

          <div className="blog_info">
            <h4 className="h4 mb-5">কখন ERP-তে ইনভেস্ট করা উচিত?</h4>
            <p className="paragraph mb-10">
              নিজেকে এই প্রশ্নগুলো করুন—
              <ul>
                <li>● ব্যবসা দ্রুত বাড়ছে</li>
                <li>● স্টক মেলাতে সমস্যা হচ্ছে</li>
                <li>● রিপোর্ট দেরিতে আসছে</li>
                <li>● একাউন্টিং জটিল হয়ে যাচ্ছে</li>
                <li>● মনে হচ্ছে “কিছু একটা ঠিকভাবে হচ্ছে না</li>
              </ul>
              তখন দেরি না করে ERP নিয়ে ভাবা উচিত।
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">সবচেয়ে গুরুত্বপূর্ণ সত্য</h4>
            <p className="paragraph mb-10">
              ERP কিনে ফেললেই ব্যবসা ঠিক হয়ে যাবে—এটা সত্য না। কিন্তু সঠিক ERP
              ইমপ্লিমেন্ট করলে
              <ul>
                <li>● আপনার ব্যবসা কন্ট্রোলে চলে আসবে</li>
                <li>● ভুল কমবে</li>
                <li>● লাভ পরিষ্কার বোঝা যাবে</li>
              </ul>
              গ্রোথ টেকসই হবে
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">শেষ কথা</h4>
            <p className="paragraph mb-10">
              ব্যবসা বড় করতে চাইলে <b>শুধু পরিশ্রম যথেষ্ট না</b>। সঠিক সিস্টেম
              দরকার।
            </p>
            <p>
              ERP সেই সিস্টেম, যা আপনার ব্যবসাকে
              <b>অগোছালো অবস্থা থেকে স্ট্রাকচারড গ্রোথে নিয়ে যায়।</b>
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">এখন প্রশ্নটা আপনার</h4>
            <p className="paragraph mb-10">
             আপনি কি এখনও ম্যানুয়াল সিস্টেমে চলবেন, নাকি আপনার ব্যবসাকে পরবর্তী লেভেলে নিতে প্রস্তুত?

            </p>
            <p>
              আমরা আপনার ব্যবসা বিশ্লেষণ করে দেখিয়ে দিতে পারি—
              আপনার কোথায় সমস্যা, এবং ERP কীভাবে সেটি ঠিক করবে।
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details_info;
