"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, PhoneCall } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.65, delay, ease: [0.25, 0.4, 0.25, 1] },
});

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        className={className}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.835.494 3.554 1.356 5.032L2 22l5.031-1.321A9.957 9.957 0 0 0 12.001 22C17.524 22 22 17.523 22 12S17.524 2 12.001 2zm0 18c-1.436 0-2.812-.377-4.023-1.083l-.725-.423-2.4 .655.653-2.401-.422-.724A7.95 7.95 0 0 1 4 12c0-4.418 3.582-8 8.001-8 4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8zm4.485-6.019c-.246-.123-1.455-.718-1.68-.8-.225-.082-.389-.123-.553.123s-.635.8-.779.964c-.143.164-.287.185-.533.062s-1.042-.384-1.985-1.225c-.734-.655-1.23-1.464-1.373-1.71-.144-.246-.015-.379.108-.501.111-.111.246-.287.369-.431.123-.144.164-.246.246-.41.082-.164.041-.308-.021-.431s-.553-1.334-.758-1.826c-.2-.48-.403-.415-.553-.423l-.472-.008c-.164 0-.431.062-.656.308s-.862.842-.862 2.053.882 2.381 1.005 2.545c.123.164 1.737 2.652 4.208 3.719.588.254 1.047.406 1.405.52.59.188 1.128.161 1.553.098.474-.071 1.455-.595 1.66-1.169.205-.574.205-1.066.144-1.169-.062-.102-.226-.164-.472-.287z" />
    </svg>
);

const Web_development_Call_to_Action = () => {
    return (
        <section
            className="relative w-full overflow-hidden min-h-[480px] md:min-h-[560px] flex items-center justify-center py-20 px-4 sm:px-6 md:px-12 bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/Campaign.jpg')" }}
        >
            {/* Lighter overlay to keep the background image crisp & clear */}
            <div className="absolute inset-0 bg-black/35 z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/40 z-0" />

            {/* ── Centered Content Over Full-Width Image ── */}
            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">

                {/* Badge */}
                <motion.div {...fadeUp(0)}>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-[400] tracking-widest uppercase text-white bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-5">
                        <span className="text-[#25D366]">✦</span> Web Development
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h2
                    {...fadeUp(0.1)}
                    className="h2 text-white mb-3"
                >
                    Ready to Build Something Better?
                </motion.h2>

                {/* Description */}
                <motion.p
                    {...fadeUp(0.2)}
                    className="paragraph !text-white mb-6 max-w-2xl"
                >
                    Your website may be the first serious interaction someone has with your business. Let's build one that is beautiful, fast, secure, discoverable and designed to convert.
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    {...fadeUp(0.3)}
                    className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full"
                >
                    {/* Primary Button */}
                    <Link
                        href="https://calendly.com/theicthub-info/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-[#117C75] text-white font-medium text-sm sm:text-base pl-6 pr-2 py-2.5 rounded-full transition-all duration-300 hover:bg-[#0e6860] border border-[#117C75] shadow-lg shadow-[#117C75]/40"
                    >
                        Web Development Consultation
                        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-[#0e6860] transition-colors duration-300">
                            <ArrowUpRight size={16} className="text-black group-hover:text-white" />
                        </span>
                    </Link>

                    {/* WhatsApp Us */}
                    <Link
                        href="https://wa.me/971500000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-white/15 hover:bg-[#25D366] text-white font-medium text-sm sm:text-base pl-6 pr-2 py-2.5 rounded-full transition-all duration-300 border border-white/30 hover:border-[#25D366] backdrop-blur-md"
                    >
                        WhatsApp Us
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                            <WhatsAppIcon className="w-4 h-4 text-white group-hover:text-[#25D366] transition-colors" />
                        </span>
                    </Link>

                    {/* Call Us Today */}
                    <Link
                        href="tel:+971500000000"
                        className="group inline-flex items-center gap-3 bg-white/15 hover:bg-white hover:text-zinc-900 text-white font-medium text-sm sm:text-base pl-6 pr-2 py-2.5 rounded-full transition-all duration-300 border border-white/30 hover:border-white backdrop-blur-md"
                    >
                        Call Us Today
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-zinc-900 transition-colors duration-300">
                            <PhoneCall size={16} className="text-white group-hover:text-white transition-colors" />
                        </span>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default Web_development_Call_to_Action;
