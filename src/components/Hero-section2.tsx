"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface TextEffectProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}

const TextEffect: React.FC<TextEffectProps> = ({ 
  as = "div", 
  className, 
  children, 
  delay = 0
}) => {
  const MotionComponent = motion(as);
  
  return (
    <MotionComponent
      initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};

interface ContactButtonProps {
  href: string;
  text: string;
  variant: "primary" | "tertiary";
}

const ContactButton: React.FC<ContactButtonProps> = ({ href, text, variant }) => {
  return (
    <motion.a
      href={href}
      className={`
        relative px-8 py-3 rounded-full font-semibold text-sm sm:text-base
        transition-all duration-300 overflow-hidden
        ${variant === "primary" 
          ? "bg-[#d92d45] text-white hover:bg-[#000000]" 
          : "border-2 border-gray-800 text-gray-800 hover:bg-[#000000] hover:text-white"
        }
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.a>
  );
};

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <main className="overflow-hidden z-10 relative ">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden contain-strict lg:block"
        >
          {/* Background gradients - only visible on large screens */}
        </div>

        <section 
          className="bg-pallet-9 h-[80vh] md:h-[100vh] m-auto grid grid-cols-1 content-center"
          style={{backgroundImage: "url('https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8')", backgroundSize: "cover", backgroundPosition: "center"}}
        >
          <div className="global-container sm:px-6 md:px-8 lg:px-4">
            <div className="relative m-auto ">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-12">
             
                {/* Text Content */}
                <div className="text-left flex flex-col justify-center order-2 md:order-1">
                  <motion.div 
                    className="flex justify-center md:justify-start mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <motion.button 
                      className="relative overflow-hidden text-pallet-2 px-4 sm:px-6 py-2 rounded-full flex items-center gap-3 group transition-all duration-300 border border-gray-300 text-sm sm:text-base"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link href="" className="flex items-center gap-2">
                        <span className="relative z-10">
                          150+ trusted Clients
                        </span>
                      </Link>
                    </motion.button>
                  </motion.div>

                  <TextEffect
                    as="h1"
                    className="mt-2 max-w-full text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold leading-tight text-center md:text-left"
                    delay={0.3}
                  >
                    We Build Software That Powers Global Businesses
                  </TextEffect>
                  
                  <TextEffect
                    delay={0.5}
                    as="p"
                    className="mt-4 md:mt-5 max-w-md primary_header_content leading-relaxed text-center md:text-left text-pallet-2"
                  >
                    Custom ERP, AI, Mobile Apps & Software Solutions designed
                    for scale, efficiency & growth.
                  </TextEffect>

                  <motion.div
                    variants={transitionVariants.item}
                    className="mt-6 md:mt-6 flex flex-col sm:flex-row justify-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8 main_button hide_items"
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.7 }}
                  >
                    <ContactButton
                      href="/contact"
                      text="Book a Free Consultation"
                      variant="primary"
                    />
                    <ContactButton
                      href="/services"
                      text="Explore Our Services"
                      variant="tertiary"
                    />
                  </motion.div>
                </div>
                
                {/* Image Content */}
                {/* <div className="flex items-center justify-center relative bg-pallet-3 order-1 md:order-2">
                  <div className="relative w-full max-w-md sm:max-w-lg md:max-w-full">
                    <Image 
                      src="/Loop_Glow.gif" 
                      alt="Free Consultation" 
                      width={500} 
                      height={500} 
                      className="w-full h-auto object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div> */}
              
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}