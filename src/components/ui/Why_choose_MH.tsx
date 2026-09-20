'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Briefcase, Rocket } from 'lucide-react'

const Why_choose_MH = () => {
    const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 1024)
        }
    }, [])

    const industries = [
        {
            name: "Strategy First",
            description: "We start with your business goals—not generic marketing packages."
        },
        {
            name: "Creative + Performance",
            description: "We combine strong creative ideas with measurable marketing performance."
        },
        {
            name: "Built for 2026",
            description: "From SEO, AEO, AIO and GEO to AI-powered advertising and digital experiences, we stay focused on where digital marketing is heading."
        },
        {
            name: "Dubai & Beyond",
            description: "We understand the UAE market while building strategies that can scale across the GCC, MENA and global markets."
        },
        {
            name: "A real partner",
            description: "We're invested in your long-term growth, not a one-off project."
        }

    ]

    return (
        <section className="bg-white py-20 bg-zinc-50">
            <div className="global-container md:px-4">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
                    {/* Left Column - Header */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <h3 className="h3 primary_header">Why Choose MH Social ?</h3>
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

                {/* Our Results Section */}
                <div className="mt-24">
                    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-zinc-50 rounded-full opacity-50 pointer-events-none"></div>

                        <div className="mb-12 text-center relative z-10">
                            <h3 className="h3 text-center md:text-center primary_header mb-2">Our Impact in Numbers</h3>
                            <p className="text-gray-500 max-w-2xl mx-auto">We measure our success by the growth of our clients. Here is a snapshot of what we've achieved together.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
                            <div className="text-center flex flex-col items-center">
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
                                    <Users size={32} strokeWidth={1.5} />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">1,500+</div>
                                <div className="text-gray-600 font-medium text-sm md:text-base">Leads generated for clients</div>
                            </div>
                            <div className="text-center flex flex-col items-center">
                                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
                                    <TrendingUp size={32} strokeWidth={1.5} />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">5x</div>
                                <div className="text-gray-600 font-medium text-sm md:text-base">Average return on ad spend</div>
                            </div>
                            <div className="text-center flex flex-col items-center">
                                <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
                                    <Briefcase size={32} strokeWidth={1.5} />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">50+</div>
                                <div className="text-gray-600 font-medium text-sm md:text-base">Brands served across the UAE</div>
                            </div>
                            <div className="text-center flex flex-col items-center">
                                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform hover:scale-110 duration-300">
                                    <Rocket size={32} strokeWidth={1.5} />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">200+</div>
                                <div className="text-gray-600 font-medium text-sm md:text-base">Campaigns launched & optimized</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why_choose_MH
