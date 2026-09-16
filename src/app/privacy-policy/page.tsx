import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import Policy_details from "./components/Policy_details";
import Policy_two from "./components/Policy_two";
import Policy_three from "./components/Policy_three";
import Policy_four from "./components/Policy_four";

function page() {
  return (
    <>
      <Breadcrumbs pageTitle="Privacy Policy" />
      <section className="bg-white py-12 sm:py-16 lg:pt-20">
        <div className="mx-auto global-container px-6">
          <div className="blog_info">
            <h3 className="h3 mb-3">Overview</h3>
            <p className="paragraph">
              This Privacy Policy explains how The{" "}
              <b>ICT HUB Ltd (Bangladesh)</b> (“<b>The ICT HUB</b>”, “we”, “us”,
              “our”) collects, uses, shares, and protects information when you
              use <b>theicthub.com</b> and related pages. It applies to:
            </p>
            <ul className="paragraph list-disc pl-5">
              <li>Website visitors and prospects (B2B)</li>
              <li>Clients and their users</li>
              <li>Newsletter subscribers</li>
              <li>Job applicants</li>
              <li>Partners, vendors, and contractors</li>
            </ul>
          </div>
          <div className="blog_content py-6">
            <p className="paragraph">
              We serve users in{" "}
              <b>
                Bangladesh, the UK, EU/EEA, the United States (including
                California), the Middle East, Malaysia, and parts of Africa
              </b>
              .<br />
              Contact for privacy queries: <b>support@theicthub.com</b>
            </p>
          </div>
        </div>
      </section>
      {/* <section className="bg-zinc-50 py-12 sm:py-16 lg:pt-20">
        <div className="mx-auto global-container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="blog_info">
            <h3 className="h3 mb-3">Table of contents</h3>
            <ul className="paragraph list-disc pl-5">
              <li>
                <Link href="#1" className="text-blue-500 hover:underline">
                  Who we are & scope
                </Link>
              </li>
              <li>
                <Link href="#2" className="text-blue-500 hover:underline">
                  What data we collect
                </Link>
              </li>
              <li>
                <Link href="#3" className="text-blue-500 hover:underline">
                  How we collect data (forms, cookies, tools)
                </Link>
              </li>
              <li>
                <Link href="#4" className="text-blue-500 hover:underline">
                  How we use your data
                </Link>
              </li>
              <li>
                <Link href="#5" className="text-blue-500 hover:underline">
                  Legal bases (GDPR/UK GDPR)
                </Link>
              </li>
              <li>
                <Link href="#6" className="text-blue-500 hover:underline">
                  Sharing & processors
                </Link>
              </li>
              <li>
                <Link href="#7" className="text-blue-500 hover:underline">
                  International transfers
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="blog_info">
            <div className="mt-7"></div>
            <ul className="paragraph list-disc pl-5">
              
              <li>
                <Link href="#8" className="text-blue-500 hover:underline">
                  Data retention
                </Link>
              </li>
              <li>
                <Link href="#9" className="text-blue-500 hover:underline">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#10" className="text-blue-500 hover:underline">
                  Your rights & choices
                </Link>
              </li>
              <li>
                <Link href="#11" className="text-blue-500 hover:underline">
                  Cookies & consent
                </Link>
              </li>
              <li>
                <Link href="#12" className="text-blue-500 hover:underline">
                  Children’s privacy
                </Link>
              </li>
              <li>
                <Link href="#13" className="text-blue-500 hover:underline">
                  How to contact us
                </Link>
              </li>
              <li>
                <Link href="#14" className="text-blue-500 hover:underline">
                  Changes to this policy
                </Link>
              </li>
              <li>
                <Link href="#15" className="text-blue-500 hover:underline">
                  Appendix: Key tools & vendors
                </Link>
              </li>
            </ul>
          </div>
          </div>
          
        </div>
      </section> */}

      <Policy_details/>
      <Policy_two/>
      <Policy_three/>
      <Policy_four/>
      
    </>
  );
}

export default page;
