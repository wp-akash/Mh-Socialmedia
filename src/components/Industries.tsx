'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Industries = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 1024)
    }
  }, [])

  const industries = [
    {
      name: "Performance-first, always",
      description: "We optimize for leads, sales, and ROI — not vanity metrics. Every dirham of your budget is accountable to results."
    },
    {
      name: "Everything under one roof",
      description: "Strategy, creative, ads, SEO, and web — one aligned team, no finger-pointing between vendors."
    },
    {
      name: "We know this market",
      description: "We understand Dubai and GCC audiences, culture, and buying behavior — including the reality that 40% of UAE audiences prefer Arabic-language content, a gap most English-first brands miss."
    },
    {
      name: "Transparent reporting",
      description: "You'll always know where your budget goes and what it delivers, with clear numbers you can take to any boardroom."
    },
    {
      name: "A real partner",
      description: "We're invested in your long-term growth, not a one-off project."
    },

  ]

  return (
    <section className="bg-white py-20 bg-zinc-50">
      <div className="global-container md:px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Header */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <h3 className="h3 primary_header">Why Choose MH Social</h3>
            </div>

            <div className="max-w-md">
              <p className="paragraph primary_header_content">
                You’re in Dubai. You need customers. You need growth. You don’t need more noise, more confusion, or another vendor who “understands the market” but can’t prove it.
              </p>
            </div>
          </div>

          {/* Right Column - Industries List */}
          <div className="space-y-0 ">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="group cursor-pointer border-b border-gray-200 py-6 px-4 -mx-4"

                // Desktop hover
                onHoverStart={() => !isMobile && setHoveredIndustry(index)}
                onHoverEnd={() => !isMobile && setHoveredIndustry(null)}

                // Mobile click
                onClick={() => {
                  if (isMobile) {
                    setHoveredIndustry(hoveredIndustry === index ? null : index)
                  }
                }}

                whileHover={{ x: isMobile ? 0 : 8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="h4 text-gray-900 secondary_header">
                      {industry.name}
                    </h4>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: hoveredIndustry === index ? 'auto' : 0,
                        opacity: hoveredIndustry === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-3 text-sm lg:text-base paragraph secondary_header_content">
                        {industry.description}
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex-shrink-0 ml-6"
                    animate={{
                      rotate: hoveredIndustry === index ? 45 : 0,
                      scale: hoveredIndustry === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center group-hover:border-gray-900 transition-colors duration-200">
                      <svg
                        className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Industries
