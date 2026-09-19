"use client";

import React, { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Contra Materia",
        categories: ["Design", "Marketing"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2000&auto=format&fit=crop",
        ],
        size: "large" as const,
        href: "#",
    },
    {
        id: 2,
        title: "AI Technology",
        categories: ["Branding", "Design"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2000&auto=format&fit=crop",
        ],
        size: "small" as const,
        href: "#",
    },
    {
        id: 3,
        title: "Dexa Technology",
        categories: ["Design", "Marketing"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
        ],
        size: "small" as const,
        href: "#",
    },
    {
        id: 4,
        title: "Green Innovations",
        categories: ["Web Development"],
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1473773508845-188df298d2d1?q=80&w=2000&auto=format&fit=crop",
        ],
        size: "large" as const,
        href: "#",
    },
    {
        id: 5,
        title: "Brand Identity",
        categories: ["Branding", "Strategy"],
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2000&auto=format&fit=crop",
        ],
        size: "small" as const,
        href: "#",
    },
    {
        id: 6,
        title: "Digital Campaign",
        categories: ["Marketing", "Social Media"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&auto=format&fit=crop",
        ],
        size: "small" as const,
        href: "#",
    },
];

type Project = typeof projects[number];

/* ─── Lightbox Popup ─── */
const Lightbox = ({
    project,
    onClose,
}: {
    project: Project;
    onClose: () => void;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoomLevel, setZoomLevel] = useState(1);

    const goNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % project.gallery.length);
        setZoomLevel(1);
    }, [project.gallery.length]);

    const goPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
        setZoomLevel(1);
    }, [project.gallery.length]);

    const zoomIn = useCallback(() => {
        setZoomLevel((prev) => Math.min(prev + 0.5, 3));
    }, []);

    const zoomOut = useCallback(() => {
        setZoomLevel((prev) => Math.max(prev - 0.5, 1));
    }, []);

    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "+" || e.key === "=") zoomIn();
            if (e.key === "-") zoomOut();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose, goNext, goPrev, zoomIn, zoomOut]);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            <div
                className="absolute inset-0 bg-black/95"
                onClick={onClose}
            />

            <div className="absolute top-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 py-4">
                <button
                    onClick={onClose}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-20 py-20 pointer-events-none">
                <div
                    className="pointer-events-auto"
                    style={{
                        transform: `scale(${zoomLevel})`,
                        maxWidth: "100%",
                        maxHeight: "100%",
                    }}
                >
                    <img
                        key={currentIndex}
                        src={project.gallery[currentIndex]}
                        alt={`${project.title} - ${currentIndex + 1}`}
                        className="max-w-full max-h-[80vh] object-contain rounded-lg select-none"
                        draggable={false}
                    />
                </div>
            </div>

            <button
                onClick={goPrev}
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            >
                <ChevronLeft size={22} />
            </button>

            <button
                onClick={goNext}
                className="pointer absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            >
                <ChevronRight size={22} />
            </button>

            <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center gap-4 px-4 sm:px-6 py-5">
                <div className="flex items-center gap-2">
                    {project.gallery.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`rounded-full ${idx === currentIndex
                                ? "w-7 h-2.5 bg-white"
                                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
                                }`}
                        />
                    ))}
                </div>

                <div className="absolute right-4 sm:right-6 bottom-5 flex items-center gap-2">
                    <button
                        onClick={zoomIn}
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                        <ZoomIn size={16} />
                    </button>
                    <button
                        onClick={zoomOut}
                        className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                        <ZoomOut size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

/* ─── Portfolio Card ─── */
const PortfolioCard = ({
    project,
    onOpen,
}: {
    project: Project;
    onOpen: (project: Project) => void;
}) => {
    const isFirst = project.id === 1;

    return (
        <motion.div
            onClick={() => onOpen(project)}
            className="group relative overflow-hidden rounded-[20px] cursor-pointer bg-[#1a1a1a]"
            style={{
                height: project.size === "large" ? "clamp(350px, 50vw, 550px)" : "clamp(280px, 35vw, 420px)",
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="absolute inset-0 overflow-hidden rounded-[20px]">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-opacity duration-500 ${isFirst ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
            />

            <div
                className={`absolute top-5 right-5 flex gap-2 transition-all duration-500 ease-out z-10 ${isFirst
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }`}
            >
                {project.categories.map((cat, i) => (
                    <span
                        key={i}
                        className="px-4 py-1.5 rounded-full border border-white/30 text-[13px] font-medium text-white backdrop-blur-md bg-white/10"
                    >
                        {cat}
                    </span>
                ))}
            </div>

            <div
                className={`absolute bottom-6 left-6 transition-all duration-500 ease-out delay-75 z-10 ${isFirst
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                    }`}
            >
                <h3 className="text-white text-lg sm:text-xl font-semibold tracking-tight">
                    {project.title}
                </h3>
            </div>
        </motion.div>
    );
};

function Work_portfolio_gallery() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const rows: Project[][] = [];
    let i = 0;
    while (i < projects.length) {
        if (projects[i].size === "large") {
            rows.push([projects[i]]);
            i++;
        } else {
            rows.push(projects.slice(i, i + 2));
            i += 2;
        }
    }

    return (
        <section className="pb-20">
            <div className="global-container md:px-4">
                <div className="flex flex-col gap-5">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`grid gap-5 ${row.length === 1
                                ? "grid-cols-1"
                                : "grid-cols-1 sm:grid-cols-2"
                                }`}
                        >
                            {row.map((project) => (
                                <PortfolioCard
                                    key={project.id}
                                    project={project}
                                    onOpen={setSelectedProject}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-3 bg-transparent text-zinc-900 font-medium text-sm pl-6 pr-2 py-2 rounded-full w-fit transition-colors duration-300 border border-[#117C75] hover:border-[#117C75] hover:text-[#117C75]"
                    >
                        Free Consultation
                        <span className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-[#117C75] transition-colors duration-300">
                            <ArrowUpRight size={16} className="text-zinc-600 group-hover:text-white" />
                        </span>
                    </Link>
                </motion.div>
            </div>

            {typeof document !== 'undefined' &&
                selectedProject &&
                createPortal(
                    <Lightbox
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />,
                    document.body
                )}
        </section>
    );
}

export default Work_portfolio_gallery;