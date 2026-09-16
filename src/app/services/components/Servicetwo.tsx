import React from "react";
import Link from "next/link";
import {
  Laptop,
  Globe,
  ShoppingCart,
  Smartphone,
  Building2,
  Gamepad2,
} from "lucide-react";

const services = [
  {
    icon: <Laptop size={40} />,
    title: "Software Development Service",
    desc: "Maximize your potential with our software development services. The ICT Hub infuses operational excellence to deliver robust solutions tailored to your needs.",
    url: "/services/custome-software-development",
  },
  {
    icon: <Globe size={40} />,
    title: "Web Application Service",
    desc: "We specialize in creating efficient and engaging web applications from scratch by utilizing industry-standard web app technologies.",
    url: "/services/web-application",
  },
  {
    icon: <ShoppingCart size={40} />,
    title: "E-Commerce & Marketplace Development",
    desc: "Establish your online presence and effortlessly reach clients with our e-commerce and marketplace-building services.",
    url: "/services/e-commerce",
  },
  {
    icon: <Smartphone size={40} />,
    title: "Mobile App Development Service",
    desc: "Innovate with rapid mobile application development for both established and emerging platforms, including Android and iOS.",
    url: "/services/mobile-app-development",
  },
  {
    icon: <Building2 size={40} />,
    title: "Enterprise Software Development",
    desc: "Transform your business processes with our flexible and enriched enterprise software solutions.",
    url: "/services/enterprise-software",
  },
  {
    icon: <Gamepad2 size={40} />,
    title: "Game Development",
    desc: "We create engaging games for Desktop, Online, Android, iOS, and TV platforms, supporting local gaming businesses.",
    url: "/services/game-development",
  },
  {
    icon: <Gamepad2 size={40} />,
    title: "Software Support And Services",
    desc: "We create engaging games for Desktop, Online, Android, iOS, and TV platforms, supporting local gaming businesses.",
    url: "/services/software-support",
  },
  {
    icon: <Gamepad2 size={40} />,
    title: "Custom AI Solutions",
    desc: "Unlock AI-Powered Growth Without the Headache – At The ICT Hub, we build bespoke AI solutions that solve your business’s unique challenges.",
    url: "/services/ai-solution",
  },
];

function Servicetwo() {
  return (
    <section>
      <div className="py-12 md:py-24">
        <div className="mx-auto global-container px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`
                  group bg-white rounded-xl shadow py-12 px-6 flex flex-col items-center text-center h-full min-h-[340px]
                  transition-colors duration-300
                  hover:bg-[#D82D45]
                `}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  height: "100%",
                }}
              >
                <div
                  className={`
                    mb-4 flex items-center justify-center rounded-full w-18 h-18 transition-all duration-300 group-hover:bg-white
                  `}
                  style={{ width: 72, height: 72 }}
                >
                  {React.cloneElement(service.icon, {
                    className: "text-[#D82D45] group-hover:text-[#D82D45] transition-colors duration-300",
                    size: 40,
                  })}
                </div>
                <h4
                  className={`
                    h4 mb-4 transition-colors duration-300
                    group-hover:text-white
                  `}
                >
                  <Link href={service.url} className="block">
                    {service.title}
                  </Link>
                </h4>
                <p
                className={`
                    paragraph flex-1 text-zinc-700 transition-colors duration-300
                    group-hover:!text-white
                `}
                >
                {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicetwo;