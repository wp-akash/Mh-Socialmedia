import React from "react";

function Policy_details() {
  return (
    <>
      <section className="bg-zinc-50 py-6 sm:py-6 md:pt-8" id="1">
        <div className="mx-auto global-container px-6">
          <div className="blog_info">
            <h4 className="h4 mb-3">1. Who we are & scope</h4>
            <p className="paragraph">
              <b> Controller:</b> The ICT HUB Ltd (Bangladesh)
              <b>Email:</b> support@theicthub.com
              <b>Website covered:</b> theicthub.com (and sub-pages we operate)
            </p>
            <p className="paragraph">
              This policy covers data collected from website visitors &
              prospects, clients and their users, newsletter subscribers, job
              applicants, and partners/vendors/contractors.
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
      <section className="bg-white py-6 sm:py-6 md:py-8" id="2">
        <div className="mx-auto global-container px-6">
          <div className="blog_info">
            <h4 className="h4 mb-3">2. What data we collect</h4>
            <h5 className="paragraph h5 !text-black">
              A. Information you provide directly
            </h5>
            <ul className="paragraph list-disc pl-5">
              <li>Name</li>
              <li>Work email</li>
              <li>Phone / WhatsApp</li>
              <li>Company name</li>
              <li>Job title / role</li>
              <li>Message / free-text fields</li>
              <li>File uploads (e.g., CVs, briefs)</li>
              <li>Meeting booking details (e.g., Calendly)</li>
            </ul>
          </div>
          <div className="blog_info py-3">
            <h5 className="paragraph h5 !text-black">
              B. Technical data collected automatically
            </h5>
            <ul className="paragraph list-disc pl-5">
              <li>IP address and rough location</li>
              <li>Device type and operating system</li>
              <li>Browser and version</li>
              <li>Log files / request metadata</li>
              <li>Error and diagnostic data</li>
            </ul>
          </div>
          <div className="blog_info mb-3">
            <h5 className="paragraph h5 !text-black">
              C. Usage & behaviour data
            </h5>
            <ul className="paragraph list-disc pl-5">
              <li>Page views and sessions</li>
              <li>Clicks, events, and conversions</li>
              <li>Scroll depth and time on page</li>
              <li>Heatmaps</li>
              <li>Session recordings</li>
              <li>A/B testing data</li>
            </ul>
          </div>
          <p className="paragraph">
            <b>
              We do not intentionally collect sensitive (“special category”)
              personal data. We do not sell personal information.
            </b>
          </p>
        </div>
      </section>
    </>
  );
}

export default Policy_details;
