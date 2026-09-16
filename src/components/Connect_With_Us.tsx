"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Connect_With_Us() {
    return (
        <section className="py-20 md:py-32 bg-[#0A0E17]">
            <div className="global-container md:px-4">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
                            alt="Connect with us"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right: Content */}
                    <div className="flex flex-col items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-4"
                        >
                            <span className="inline-block text-[11px] font-[500] tracking-widest uppercase text-[#422C73] bg-[#EBE4FF] rounded px-3 py-1.5">
                                CONNECT WITH US
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-[4rem] font-[500] text-white leading-[1.1] tracking-tight mb-6"
                        >
                            Let's elevate<br />
                            your marketing<br />
                            success together
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="mb-8">
                                <Link
                                    href="/contact"
                                    className="group inline-flex items-center gap-3 bg-[#117C75] text-white font-medium text-sm md:text-base pl-6 pr-2 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
                                >
                                    Request a Proposal
                                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#117C75] transition-colors duration-300">
                                        <ArrowUpRight size={16} className="text-black group-hover:text-white" />
                                    </span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    )
}
