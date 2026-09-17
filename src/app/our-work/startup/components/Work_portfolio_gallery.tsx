"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Web Design", "App Dev", "Marketing"];

const portfolioData = [
    { id: 1, title: "E-Commerce App", category: "App Dev", src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80" },
    { id: 2, title: "Corporate Website", category: "Web Design", src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" },
    { id: 3, title: "Social Media Campaign", category: "Marketing", src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" },
    { id: 4, title: "Fitness Tracker App", category: "App Dev", src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80" },
    { id: 5, title: "Real Estate Portal", category: "Web Design", src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" },
    { id: 6, title: "SEO Optimization", category: "Marketing", src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80" },
];

function Work_portfolio_gallery() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredPortfolio = activeCategory === "All"
        ? portfolioData
        : portfolioData.filter(item => item.category === activeCategory);

    return (
        <section className="py-20 bg-gray-50">
            <div className="global-container px-4">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-[600] tracking-tight mb-4">
                        Our Work
                    </h2>
                    <p className="text-gray-600 text-lg mb-8">
                        Take a look at some of our recent projects and see how we've helped businesses like yours achieve their goals.
                    </p>
                    
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                                    activeCategory === category
                                        ? "bg-[#117C75] text-white shadow-md"
                                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-100"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredPortfolio.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                className="relative group rounded-2xl overflow-hidden cursor-pointer aspect-video bg-gray-200"
                                onClick={() => setSelectedImage(item.src)}
                            >
                                {/* We use standard img here to avoid next/image domain configuration issues with Unsplash, 
                                    replace with next/image if you switch to local assets! */}
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-[#117C75]">{item.category}</p>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox Popup */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-5xl w-full max-h-[90vh] aspect-video"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Popup view"
                                className="w-full h-full object-contain rounded-lg"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default Work_portfolio_gallery;