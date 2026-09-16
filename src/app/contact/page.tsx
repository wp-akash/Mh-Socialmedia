// import Breadcrumbs from "@/components/Breadcrumbs";
import Booking from "@/components/Booking";
import LocationSection from "./componets/LocationSection";
import ContactSection from "./componets/ContactSection";
// import PremiumCTA from "./componets/PremiumCTA";
const ContactBanner = () => {
  return (
    <>
      {/* <Breadcrumbs pageTitle="Contact Us" /> */}
      <Booking />

      {/* <div className="bg-white relative overflow-hidden">
  <Image
  src="/Layer_1.webp"
  alt="Background"
  width={1920}
  height={384}
  className="w-full h-72 md:h-96 object-cover"
  style={{}}
  priority
/>
  <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
    
    <div className="mb-2 animate-bounce">
      <MapPin className="w-10 h-10 text-[#D72D45] drop-shadow-lg" />
    </div>
    <div className="inline-block bg-[#D72D45] text-white text-sm p-6 rounded-xl shadow-2xl backdrop-blur-md bg-opacity-90 m-4">
      <h4 className="h4 text-center">The ICT Hub</h4>
      <p className="text-center mt-2 !text-white">
      House no. 8, 2nd Floor,
      Mohammadia Housing<br /> main road, Mohammadpur, Dhaka – 1207
      </p>
    </div>
  </div>
</div> */}
      <ContactSection />
      <LocationSection />
      {/* <PremiumCTA /> */}
      {/* <div className="global-container mx-auto px-0 md:px-4 py-12">
      <div className="bg-white mb-8" >
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Chat For Sales",
              desc: "Get expert guidance on our IT solutions and services.",
              button: "info@theicthub.com",
              href: "mailto:info@theicthub.com",
            },
            {
              title: "Chat For Support",
              desc: "Need help? Our support team is ready to assist you.",
              button: "Get in Touch →",
              href: "#",
            },
            {
              title: "Visit Our Site",
              desc: "Explore our latest IT solutions and innovations.",
              button: "www.theicthub.com",
              href: "https://www.theicthub.com",
            },
            {
              title: "Contact Us",
              desc: "Reach out to us for business inquiries or collaborations.",
              button: "+880 1816221339",
              href: "tel:+01708591899",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition text-center"
            >
              <h4 className="secondary_header mb-2 ">{item.title}</h4>
              <p className="mb-4 paragraph">{item.desc}</p>
              <a
                href={item.href}
                className="text-white bg-black hover-[#D72D45] px-4 py-2 text-sm rounded-md inline-block"
              >
                {item.button}
              </a>
            </div>
          ))}
        </div>
      </div>

     
      <div className="bg-zinc-50 py-16 rounded-lg">
        <div className="px-0 md:px-4 grid md:grid-cols-2 gap-10 px-4">
        
          <div>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full inline-block mb-4">
              Contact Information
            </span>
            <h3 className="h3">
              Let’s Build the Future of{" "}
              <span className="text-[#D72D45]">IT Together</span>,<br/>
               Let’s Connect
            </h3>
            <p className="paragraph mt-4">
              Have questions or need a custom solution? Reach out to us, and our
              team of experts will guide you every step of the way.
            </p>

            <div className="mt-8 space-y-4 paragraph">
              <p>
                <strong>Address:</strong> House no. 8, 2nd Floor, Mohammadia
                Housing main road,<br/> Mohammadpur, Dhaka – 1207
              </p>
              <p>
                <strong>Phone Number: </strong> 
                <a href="tel:+01708591899" className="hover:text-[#000000] hover:underline">
                  01708591899
                </a> , {" "} 
                <a href="tel:+01816221339" className="hover:text-[#000000] hover:underline">
                  01816221339
                </a>
              </p>
              <p>
                <strong>Email Id:</strong>{" "}
                <a href="mailto:info@theicthub.com" className="hover:text-[#000000] hover:underline">
                  info@theicthub.com
                </a>
              </p>
              <p>
                <strong>Opening Hours:</strong> Sat - Thu | 9 AM to 6 PM
              </p>
            </div>
          </div>

       
          <div className="bg-[#D72D45] text-white rounded-lg p-8 shadow-lg">
            <h3 className="h3 mb-4">Get Quotes</h3>
            <p className="paragraph !text-white mb-6">
              Fill out the form below and our team will get in touch with you
              shortly.
            </p>

            <Contact_from />
          </div>
        </div>
      </div>
    </div> */}

    </>



  );
};

export default ContactBanner;
