import Image from "next/image";

function Web_application_software_info() {
  return (
    <section className="md:py-20 py-10">
      <div className="global-container md:px-4">
        <div className="grid md:grid-cols-2">
          {/* Left Column: Text Content */}
          <h3 className="h3 gap-4 primary_header">
            The ICT HUB – Crafting<br /> Digital Experiences
          </h3>
          <div>
            <p className="text-gray-700 paragraph md:mt-0 mt-5 primary_header_content">
              Empowering <b>SMEs and SMBs</b> in the UK with beautifully
              functional, high-performance websites that drive growth. We
              combine a straightforward, authoritative approach (“proven web
              solutions, no fluff”) with deep technical expertise to deliver
              sites that <b>look professional, load fast, and convert</b>.
              Whether you’re a non-technical founder or a marketing manager at a
              law firm or consultancy, our goal is to{" "}
              <b>make your website a growth engine</b> for your business.{" "}
              <b>Request a quote</b> or <b>book a free discovery</b> call today
              – and let’s elevate your digital presence.
            </p>
          </div>
          {/* Right Column (optional) */}
          <div></div>
        </div>

        {/* Image Section */}
        <div className="pt-16">
          <div className="global-container md:px-4">
            <div>
              <Image
                src="/a.jpg"
                alt="Mobile Apps"
                width={1200}
                height={490}
                className="rounded-[var(--radius)] grayscale w-full"
                priority={false}
                style={{
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Web_application_software_info;
