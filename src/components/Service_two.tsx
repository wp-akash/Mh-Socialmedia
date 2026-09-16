import React from "react";

type ServiceTwoProps = {
  limit?: number;
};

function Service_two({ limit }: ServiceTwoProps) {
  const services = [
    {
      title: "Software Support And Service",
      url: "/services/software-support",
      description:
        "We assist you to keep your software running smoothly with ongoing support, providing end-to-end software maintenance with troubleshooting and timely updates. Our team ensures your systems stay reliable, safe and secure.",
      expertise: [
        "24/7 Technical Support",
        "Performance Monitoring",
        "Bug Fixes & Updates",
        "System Maintenance",
        "Security Patches",
        "User Training & Documentation",
      ],
    },
    {
      title: "Custom Software Solutions",
      url: "/services/custome-software-development",
      description:
        "Every business is different. We develop custom software that fits your processes and meets your goals , making sure it’s practical, scalable, and easy to use.",
      expertise: [
        "Custom Software Solutions",
        "Scalable Architecture",
        "Cloud Integration",
        "API Development",
        "Database Optimization",
        "Agile Development",
      ],
    },
    {
      title: "Web Application",
      url: "/services/web-application",
      description:
        "From simple tools to complex platforms, we build modern web applications that are efficient, user-friendly, and tailored to your needs, delivering seamless experiences across all devices.",
      expertise: [
        "Modern UI/UX",
        "Progressive Web Apps",
        "API Integration",
        "Performance Optimization",
      ],
    },
    {
      title: "E-Commerce & Marketplace Development",
      url: "/services/e-commerce",
      description:
        "We create e-commerce platforms and marketplace solutions that driv youre sales and customer engagement more effectively and manage operations with ease. Our solutions can seamlessly integrate with our ERP systems to automate processes and keep inventory management simple and accurate.",
      expertise: [
        "WooCommerce & Shopify",
        "Multi-Vendor Platforms",
        "Payment Gateway Integration",
        "Inventory Management",
      ],
    },
    {
      title: "Mobile App Development",
      url: "/services/mobile-app-development",
      description:
        "Whether for iOS, Android, or both, we develop mobile apps that strengthen customer interaction and bring your services closer to them through feature-rich and engaging applications.",
      expertise: [
        "iOS & Android Apps",
        "Cross-Platform Solutions",
        "Push Notifications",
        "App Store Deployment",
      ],
    },
    {
      title: "Enterprise Software Development",
      url: "/services/enterprise-software",
      description:
        "We provide strong, dependable enterprise solutions that fuel business growth, improve efficiency, and simplify complex business operations. Our ready-to-use products are already trusted by many customers, proving their reliability in real-world use cases.",
      expertise: [
        "ERP Solutions",
        "Workflow Automation",
        "Business Intelligence",
        "Data Security",
      ],
    },
    {
      title: "Game Development",
      url: "/services/game-development",
      description:
        "From concept to release, we design and develop engaging games with a focus on creativity, performance, and player experience.",
      expertise: [
        "2D & 3D Games",
        "Unity & Unreal Engine",
        "Multiplayer Functionality",
        "Cross-Platform Deployment",
      ],
    },
  ];

  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <div className="bg-gray-50 dark:bg-zinc-950 card-item-count">
      {displayedServices.map((service, index) => (
        <section
          key={index}
          className="bg-white py-2 md:py-4 rounded-2xl mb-8"
        >
          <div className="md:px-6 px-4">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 space-y-3 py-7">
              {/* Left Column */}
              <div className="h4 sm:text-lg font-semibold">
                <a
                  href={service.url}
                  className="group flex gap-2 text-black hover:text-[#d92d45] transition-colors duration-200"
                >
                  <h4 className="h4 secondary_header">{service.title}</h4>
                </a>
              </div>

              {/* Right Column */}
              <div className="col-span-2">
              
                <p className="text-muted-foreground secondary_header_content">
                  {service.description}
                </p>

                {service.expertise && service.expertise.length > 0 && (
                  <>
                    <h4 className="text-lg py-4 ">
                      Our Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {service.expertise.map((item, idx) => (
                        <span
                          key={idx}
                          className="md:px-4 md:py-2 px-2 py-1 relative overflow-hidden text-black rounded-full flex items-center gap-3 group transition-all duration-300 border border-gray-300 md:text-[13px] text-[10px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Service_two;
