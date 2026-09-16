import React, { useState } from 'react';
import Image from 'next/image';

const processSteps = [
  {
    title: "End-to-End Development",
    desc: "We build e-commerce solutions for both business-to-consumer (B2C) and business-to-business (B2B) models. Each model has its nuances – for instance, B2B platforms might need features like bulk pricing, quote requests, or restricted logins for different client tiers. B2C sites might focus more on visual appeal and one-click purchasing. We have experience with both and can tailor the platform accordingly. The result is an online store that provides an optimal experience for your target customers, whether they're everyday shoppers or corporate buyers.",
    expandedDesc: "Our development process includes custom integrations, payment gateway setup, inventory management, and scalable architecture that grows with your business. We use modern frameworks and ensure cross-platform compatibility.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    bgColor: "bg-black"
  },
  {
    title: "Ongoing Maintenance & Support", 
    desc: "From initial concept and architecture to launch, we handle the full cycle. Our process uses \"mobile-first\" responsive design and continuous feedback to ensure a perfect fit. We break features into scannable chunks and agile sprints, so you always know what we're building.",
    expandedDesc: "Our comprehensive support includes 24/7 monitoring, regular updates, security patches, performance optimization, and dedicated support channels to ensure maximum uptime and efficiency.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600"
  },
  {
    title: "Consulting & Architecture",
    desc: "Unsure how to modernize legacy systems or move to the cloud? Our architects analyze your current setup and map out an optimized solution, focusing on cost reduction and future scalability. We emphasize transparent workflow and regular reporting so you're in control.",
    expandedDesc: "We provide technology assessment, migration planning, cloud architecture design, security audits, and optimization strategies to help you make informed technology investment decisions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    bgColor: "bg-gradient-to-br from-gray-300 to-gray-500"
  },
  {
    title: "Staff Augmentation",
    desc: "Need extra hands? We offer flexible staffing models. Quickly scale your team with our seasoned developers. This model is like having an \"on-call\" expert team without hiring permanently.",
    expandedDesc: "Our developers seamlessly integrate with your existing team, bringing specialized skills in various technologies including front-end, back-end, DevOps, and project management expertise.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    bgColor: "bg-black"
  },
];

function Custome_software_core_service() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null); // ✅ fixed typing

  const toggleCard = (index: number) => { // ✅ fixed typing
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto global-container md:px-4">
        {/* Services Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
          {processSteps.map((step, idx) => {
            const isExpanded = expandedCard === idx;
            return (
              <div 
                key={idx} 
                className={`relative overflow-hidden transition-all duration-700 rounded-lg shadow-lg ${
                  isExpanded ? 'col-span-full md:col-span-2' : ''
                } ${step.bgColor}`}
                style={{ minHeight: isExpanded ? '400px' : '500px' }}
              >
                {/* Background Image (only for certain cards) */}
                {(idx === 1 || idx === 2) && !isExpanded && (
                  <div className="absolute inset-0">
                    <Image 
                      src={step.image} 
                      alt={step.title}
                      fill
                      unoptimized
                      style={{ objectFit: 'cover' }}
                      priority={idx === 1}
                    />
                    {idx === 2 && <div className="absolute inset-0 bg-black/20"></div>}
                  </div>
                )}
                
                {/* Full black background when expanded */}
                {isExpanded && (
                  <div className="absolute inset-0 bg-black"></div>
                )}
                
                {/* Content */}
                <div className={`relative z-10 p-8 h-full flex flex-col justify-between transition-all duration-700 ${
                  isExpanded ? 'justify-center text-center' : ''
                }`}>
                  
                  {/* Plus/Minus Button */}
                  <button 
                    onClick={() => toggleCard(idx)}
                    className="absolute top-6 left-6 w-8 h-8 flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      {isExpanded ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      )}
                    </svg>
                  </button>

                  {/* Decorative circles (top right) */}
                  {!isExpanded && (
                    <div className="absolute top-6 right-6">
                      <div className="flex space-x-1">
                        {[...Array(7)].map((_, i) => (
                          <div 
                            key={i} 
                            className={`w-3 h-3 rounded-full border border-white/50 ${
                              i === 3 ? 'bg-white' : 'bg-transparent'
                            }`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Minus icon in circle (when expanded, top right) */}
                  {isExpanded && (
                    <button 
                      onClick={() => toggleCard(idx)}
                      className="absolute top-6 right-6 w-8 h-8 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
                      </svg>
                    </button>
                  )}
                  
                  {/* Main Content */}
                  <div className="flex-1 flex flex-col justify-end">
                    {/* Title */}
                    <h3 className={`secondary_header text-white mb-4 leading-tight transition-all duration-500 ${
                      isExpanded ? 'secondary_header text-center mb-8' : 'text-xl md:text-2xl'
                    }`}>
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <div className={`text-white/90 leading-relaxed transition-all duration-500 ${
                      isExpanded ? 'text-center max-w-4xl mx-auto' : ''
                    }`}>
                      <p className="paragraph !text-white">
                        {step.desc}
                      </p>
                      
                      {isExpanded && (
                        <div className="animate-fadeIn">
                          <p className="secondary_header_content text-white/70 mb-8">
                            {step.expandedDesc}
                          </p>
                          <button className="bg-white text-black px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-gray-200 transition-all duration-300">
                            Learn More
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}

export default Custome_software_core_service;