import React from "react";
import Image from "next/image";

function Details_info() {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 lg:pt-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="blog_info">
            <p className="paragraph mb-10">
              বাংলাদেশের অনেক ব্যবসায় একটি সাধারণ ভুল দেখা যায়। অনেকে মনে করেন <b>POS সফটওয়্যার থাকলেই ERP দরকার নেই</b>। আবার কেউ ভাবেন ERP মানেই POS। বাস্তবে এই দুইটি সম্পূর্ণ আলাদা জিনিস, এবং ভুল সিদ্ধান্তের কারণে অনেক ব্যবসা পরে বড় সমস্যায় পড়ে। চলুন সহজভাবে বুঝার চেষ্টা করি।
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
            <h4 className="h4 mb-5">POS সফটওয়্যার কী?</h4>
            <p className="paragraph mt-3">
             POS (Point of Sale) মূলত <b>বিক্রির সময় ব্যবহৃত সফটওয়্যার</b>।
              যখন আপনি দোকানে বসে পণ্য বিক্রি করেন, তখন POS ব্যবহার হয়।
              এটি সাধারণত করে—

              <br />
              <ul>
                <li>● সেলস বিল তৈরি</li>
                <li> ● ক্যাশ/কার্ড পেমেন্ট নেওয়া</li>
                <li> ● বেসিক স্টক কমানো</li>
                <li> ● দৈনিক সেলস রিপোর্ট দেখানো</li>
              </ul>
            </p>
          </div>
          <div className="blog_content py-6">
            <h4 className="h4 mb-5">ছোট উদাহরণ</h4>
            <p className="paragraph mt-3">
             ধরুন, আপনার একটি মোবাইলের দোকান আছে। একজন কাস্টমার ফোন কিনলো। POS দিয়ে আপনি বিল করলেন, টাকা নিলেন, কাজ শেষ। এখানেই POS এর কাজ শেষ।

              <h4 className="h4"> ERP সফটওয়্যার কী?</h4>
              <p>ERP হলো পুরো ব্যবসা চালানোর সিস্টেম।
এটি শুধু সেলস না, বরং আপনার পুরো অপারেশন একসাথে নিয়ন্ত্রণ করে।
ERP সাধারণত ম্যানেজ করে—
</p>
              <ul>
                <li>● সেলস</li>
                <li> ● ইনভেন্টরি (মাল কোথা থেকে আসলো, কোথায় গেল)</li>
                <li> ● পারচেজ (সাপ্লায়ার থেকে কেনা)</li>
                <li> ● একাউন্টিং</li>
                <li> ● কাস্টমার ডাটা</li>
                <li> ● রিপোর্ট ও অ্যানালিটিক্স</li>
              </ul>
              
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">
              ছোট উদাহরণ
            </h4>
            <p className="paragraph mb-10">
              একই মোবাইল দোকানের উদাহরণ— একটা ফোন বিক্রি হলে ERP-তে—
              <ul>
                <li>● স্টক কমে</li>
                <li>● একাউন্টসে সেলস যোগ হয়</li>
                <li>● আগের ক্রয় (purchase) এর সাথে মিল হয়</li>
                <li>● লাভ কত হলো তা দেখা যায়</li>
                <li>● কাস্টমারের হিস্ট্রি সেইভ হয়</li>
              </ul>
               মানে, শুধু সেলস না - পুরো ব্যবসার চিত্র একসাথে দেখা যায়।
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">কোথায় মানুষ ভুল করে?</h4>
            <p className="paragraph mb-10">
              অনেক ব্যবসা শুরুতে POS দিয়ে কাজ চালায়, যা ঠিক আছে। কিন্তু সমস্যা হয় যখন—
              <ul>
                <li>● একাধিক ব্রাঞ্চ হয়</li>
                <li>● স্টক মেলানো কঠিন হয়</li>
                <li>● লাভ-লস পরিষ্কার বোঝা যায় না</li>
                <li>● একাউন্টস আলাদা রাখতে হয়</li>
                <li>● রিপোর্ট পেতে দেরি হয়</li>
              </ul>
              তখন POS আর যথেষ্ট থাকে না।
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">কখন POS যথেষ্ট?</h4>
            <p className="paragraph mb-10">
           আপনার ব্যবসা যদি—
              <ul>
                <li>● ছোট হয়</li>
                <li>● একটাই দোকান থাকে</li>
                <li>● সীমিত পণ্য থাকে</li>
                <li>● একই কাজ বারবার করতে হচ্ছে?</li>
                <li>● শুধু সেলস ট্র্যাক করতে চান</li>
              </ul>
              তাহলে POS দিয়ে কাজ চালানো যায়।
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">কখন ERP দরকার?</h4>
            <p className="paragraph mb-10">
              আপনার ব্যবসা যদি—
              <ul>
                <li>● দ্রুত বড় হচ্ছে</li>
                <li>● একাধিক ব্রাঞ্চ বা ওয়ারহাউস আছে</li>
                <li>● ইনভেন্টরি জটিল হয়ে যাচ্ছে</li>
                <li>● একাউন্টিং আলাদা সামলাতে হচ্ছে</li>
                <li>● রিপোর্ট দেখে সিদ্ধান্ত নিতে চান</li>
              </ul>
              তাহলে ERP ছাড়া উপায় নেই।
            </p>
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">সবচেয়ে গুরুত্বপূর্ণ বাস্তবতা</h4>
            <p className="paragraph mb-10">
              <ul>
                <li><b>POS আপনাকে বলে</b> — “আজ কত বিক্রি হলো”</li>
                <li><b>ERP আপনাকে বলে</b> — “কোথা থেকে কিনলেন, কত বিক্রি হলো, লাভ কত, কোথায় লস হচ্ছে” </li>
              </ul>
             এই দুইটার পার্থক্যই ব্যবসার ভবিষ্যৎ নির্ধারণ করে।
            </p>
            
          </div>
          <div className="blog_info">
            <h4 className="h4 mb-5">শেষ কথা</h4>
            <ul>
                <li>● POS হলো আপনার দোকানের ক্যাশ কাউন্টার।</li>
                <li>● ERP হলো আপনার পুরো ব্যবসার কন্ট্রোল সেন্টার।</li>
                <li>● আপনি যদি শুধু বিক্রি করতে চান, POS যথেষ্ট।</li>
                <li>● আপনি যদি ব্যবসা বড় করতে চান, ERP অপরিহার্য।
</li>
              </ul>
            
          </div>

          <div className="blog_info mt-10">
            <h4 className="h4 mb-5">আপনার ব্যবসার জন্য কোনটা সঠিক?</h4>
            <p className="paragraph">
             অনেক সময় সঠিক সিদ্ধান্তটাই সবচেয়ে কঠিন হয়।
              আপনি POS-এই থাকবেন, নাকি ERP-তে আপগ্রেড করবেন—
            এটা বুঝতে সঠিক গাইডেন্স দরকার।</p>
            <p>📌 আমরা আপনার ব্যবসা বিশ্লেষণ করে পরিষ্কারভাবে দেখিয়ে দিতে পারি—
 আপনার বর্তমান অবস্থায় কোন সিস্টেম সবচেয়ে উপযোগী।</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details_info;
