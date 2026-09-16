'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function CEO_Word() {
    return (
        <section className="relative w-full min-h-[500px] md:min-h-[650px] flex items-center justify-start overflow-hidden bg-zinc-900 mt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2532&auto=format&fit=crop"
                    alt="CEO Background"
                    className="w-full h-full object-cover object-right-top"
                />
                {/* Dark Overlay - left heavy for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 global-container md:px-4 w-full py-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <span className="inline-block text-[11px] font-semibold tracking-widest uppercase text-[#422C73] bg-[#EBE4FF] rounded px-3 py-1.5">
                            CEO'S WORD
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl md:text-[3.2rem] font-[500] text-white leading-[1.15] tracking-tight mb-12"
                    >
                        "How we helped Radial scale fast with smart and effective marketing strategies that work. Through tailored campaigns, bold creative helped sustainably."
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-xl md:text-2xl font-bold text-white mb-2">Jack Smith</p>
                        <p className="text-white/60 text-sm md:text-base font-medium">CEO of Marke</p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}