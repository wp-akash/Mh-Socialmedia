import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const industries = [
  {
    image: "/industry/Startup.jpg",
    title: "STARTUP",
    desc: `The ICT Hub gives various IT Solutions and Technical and Technological Support and Services. We also give Digital Business Strategy Plan and Execution Process and Promotional Strategy Plan. Our experienced and dedicated team have enough capabilities to handhold your Business Engagements solution to build up and stable your business Startup phase by phase, step by step.`,
    url: "/industries/startup",
  },
  {
    image: "/industry/Health-care.jpg",
    title: "Healthcare",
    desc: `Healthcare industry is one of the critical business industries grappled with human lives and emergency situations. Healthcare has grown exponentially in the last few decades leading to the implementation of cutting-edge medical software. All the healthcare service providers aim to offer the best possible support for patient care and provide optimal medical care. This change has catalyzed the healthcare industry and has taken it to a new horizon.`,
    url: "/industries/enterprise",
  },
  {
    image: "/industry/Garment.png",
    title: "Garment",
    desc: `Garment Factory Bangladesh have been established in order to provide the highest quality clothing items manufacturing for Clients in Asia, but also Africa (RSA), Europe (Russia, EU countries), and other foreign markets in the world. As a manufacturer of many different apparel types we offer you men’s, women’s and children’s clothing products of various sizes and fabrics`,
    url: "/industries/garment",
  },
  {
    image: "/industry/Education.jpg",
    title: "EDUCATION",
    desc: `Education Industry is marching towards cutting-edge digital platforms and technologies for continuous innovation and creative opportunities, thus forging a consistent cycle of learning and development. The aim of developing an education software is to provide better facilities, convenience, flexibility and access to global experts for learners, educators, and management. We Can Provide or build such major apps that makes education more interesting and simpler`,
    url: "/industries/education",
  },
  {
    image: "/industry/Government.png",
    title: "GOVERNMENT",
    desc: `The ICT Hub Is proud to serve Government Agency HEU and director general of nursing and midwifery. Our Dedicated team working hardly for Innovate ideas and short-out many technical problems alongside with Government and semi- Government projects we are very compatible with Government, NOG and International Organizations. We are working in Government projects and also representing our country in the international market through our products and service. We also giving on demand IT Services to our honorable clients. The ICT Hub always ready to serve our government and public agency to reach government digital transformation vision and mission.`,
    url: "/industries/government",
  },
  {
    image: "/industry/Retail.jpg",
    title: "RETAIL",
    desc: `Our expertise in ecommerce app development has benefitted clients to a large extent in optimizing their business performances. Take a look at our Case Studies to understand our service offerings. 
    1. POS System
    2. Modern Inventory Management System`,
    url: "/industries/retail",
  },
  {
    image: "/industry/e-commerce.png",
    title: "E COMMERCE",
    desc: `During this transformation journey, the key challenges faced by the ecommerce Industry are the shortage of integrated systems and trained personnel, Technology upgradation cost, internet access across all devices and lack of subject knowledge expertise. The ICT Hub offers impeccably, Secure and rich e-commerce software solutions that give insights on customer buying patterns right from the discovery of products to what drives them to buy products.
    1. System Integration
    2. B2B, B2C, Multi Model e Commerce Website
    3. Mobile Apps and API
    4. Order Tracking System
    5. Delivery Management
    6. BI Solutions`,
    url: "/industries/e-commerce",
  },
  {
    image: "/industry/Game.jpg",
    title: "GAME",
    desc: `In Bangladesh Gaming Business Sector are Booming. Both Gamer and Developer have highly interest in Made in Bangladesh tagged Game. Our Dedicated Game Developer have robust knowledge and skill set to develop most interesting challenged based intellectual High-Definition Game. We can Provide Android, IOS, TV based game and Simulators. We Can also Develop Caracter based game.`,
    url: "/industries/game",
  },
  {
    image: "/industry/Travel-and-tourism.jpg",
    title: "TRAVEL & TOURISM",
    desc: `For improved and top-notch business results, The ICT Hub offers pioneering Information Technology (IT) solutions in the Travel and Hospitality industry. Our developed solutions have revolutionized the business plans and strategies for our global customers. It has provided customer-focused solutions for all travel-related services and thus serves consumers with best-in-class solutions. While competing with a traditional competitor or with new entrants, some of the key challenges faced by the travel and hospitality industry are:
    1. Understanding ever-increasing demands and expectation of travelers
    2. Developing strategies to encourage and retain employees
    3. Evaluating risks in investments to travel and hospitality infrastructure`,
    url: "/industries/travel-tourism",
  },
  {
    image: "/industry/Automotive.jpg",
    title: "AUTOMOTIVE",
    desc: `Automobile Industry is Booming Remarkably so that there are lots of Services related products are required. Manufacturers, Retails and Servicing Center are more likely take tech services from us for improving and engaging their customers experiences and reviews. We provide web services and applications for inside and outside.Our Core values always makes our clients experience so high.`,
    url: "/industries/automotive",
  },
];

export default function Industries() {
  return (
    <section className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
      <div className="global-container md:px-4">
        <div className="mx-auto grid gap-10 sm:grid-cols-2">
          {industries.map((industry, idx) => (
            <Link href={industry.url} key={idx} className="block">
              <Card className="group relative overflow-hidden shadow-zinc-950/5 sm:rounded-none sm:rounded-tl-xl p-0 h-[465px]">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-2xl">
                  <h3 className="h4 text-white mb-2 z-10">{industry.title}</h3>
                  <p className="paragraph !text-white opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-60 transition-all duration-300 overflow-hidden z-10">
                    {industry.desc}
                  </p>
                  <span className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <svg width="36" height="36" fill="none" viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="12"
                        fill="#fff"
                        fillOpacity="0.15"
                      />
                      <path
                        d="M10 8l4 4-4 4"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}