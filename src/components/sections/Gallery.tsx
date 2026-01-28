'use client';

import { useState } from 'react';
import { galleryImages } from "@/lib/data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function Gallery() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("Semua");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Extract unique categories from data
    const categories = Array.from(new Set(galleryImages.map(img => img.category))).filter(Boolean) as string[];
    
    // Extract unique years from data, sort descending
    const years = ["Semua", ...Array.from(new Set(galleryImages.map(img => img.year))).sort().reverse()];

    const filteredImages = activeFilter === "Semua"
        ? galleryImages
        : galleryImages.filter(img => img.year === activeFilter);
    
    // Get images for selected category with year filter
    const categoryImages = selectedCategory 
        ? filteredImages.filter(img => img.category === selectedCategory)
        : [];
    
    // Get categories with year filter
    const categoriesInYear = Array.from(new Set(filteredImages.map(img => img.category))).filter(Boolean) as string[];

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="gallery">
            {/* Seamless Transition Gradients */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />

            {/* Background Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>

            {/* Subtle Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
                className="container mx-auto px-4 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="mb-20 flex flex-col items-center justify-center gap-6 text-center"
                >
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white poppins leading-none mb-4">
                            GALERI
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Mengabadikan jejak inovasi, atmosfer kompetisi, dan momen berharga dalam perjalanan teknologi kami.
                        </p>
                    </div>
                </motion.div>

                {/* Swiper Slider Layout */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, scale: 0.95 },
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
                    }}
                    className="w-full relative px-4 md:px-12"
                >
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCoverflow, Autoplay]}
                        className="w-full py-12"
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        {galleryImages.map((item, index) => (
                            <SwiperSlide key={index} className="w-[280px] sm:w-[350px] md:w-[400px] !h-[400px] relative">
                                <div
                                    className="relative w-full h-full group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl transition-transform duration-300 hover:scale-105"
                                >
                                    {/* Image - Direct Child of Relative Container */}
                                    <Image
                                        src={item.src}
                                        alt={`Dokumentasi ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                        priority={index < 3} // Load first few images eagerly
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />

                                    {/* Persistent Corner Decor */}
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm border border-white/10 px-2 py-1 rounded text-[10px] font-mono text-slate-300 uppercase z-10">
                                        {item.year}
                                    </div>
                                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-white font-mono text-sm bg-cyan-500/20 border border-cyan-500/50 px-2 py-1 rounded">
                                            {item.category || 'Documentation'}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>

                {/* View All Button */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="mt-20 flex justify-center"
                >
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group relative px-8 py-3 bg-slate-900 border border-slate-700 hover:border-cyan-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                    >
                        <span className="relative z-10 flex items-center gap-2 font-mono font-bold">
                            LIHAT SEMUA<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </motion.div>
            </motion.div>

            {/* FULLSCREEN GALLERY MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl overflow-y-auto"
                    >
                        <div className="container mx-auto px-4 pb-8 min-h-screen flex flex-col">
                            {/* Modal Header */}
                            {/* Modal Header Navbar */}
                            <div className="sticky top-0 z-50 -mx-4 px-4 py-4 mb-8 bg-slate-950/80 backdrop-blur-md border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 relative">
                                        <Image
                                            src="/images/logo%20polinema%20robotics.png"
                                            alt="Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white poppins tracking-wide">
                                        GALERI <span className="text-cyan-400">ROBOTICS</span>
                                    </h3>
                                </div>

                                {/* Filters */}
                                <div className="flex flex-wrap gap-2 justify-center bg-slate-900/50 p-1.5 rounded-full border border-white/5">
                                    {years.map(year => (
                                        <button
                                            key={year}
                                            onClick={() => setActiveFilter(year)}
                                            className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all duration-300 ${activeFilter === year
                                                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25'
                                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>

                                {/* Close Button */}
                                <button
                                    onClick={() => {
                                        setIsModalOpen(false);
                                        setSelectedCategory(null);
                                    }}
                                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/50 transition-all font-mono text-sm"
                                >
                                    <span>TUTUP</span>
                                    <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            {/* Grid Layout - Show Categories or Photos */}
                            {selectedCategory === null ? (
                                // Show Category Cards
                                <motion.div
                                    layout
                                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-20"
                                >
                                    <AnimatePresence mode="popLayout">
                                        {categoriesInYear.map((category) => {
                                            const categoryCount = filteredImages.filter(img => img.category === category).length;
                                            const categoryThumbnail = filteredImages.find(img => img.category === category)?.src;
                                            return (
                                                <motion.button
                                                    key={category}
                                                    onClick={() => setSelectedCategory(category)}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    layout
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="relative group h-64 rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-700 hover:border-cyan-500 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                                                >
                                                    {/* Background Image */}
                                                    {categoryThumbnail && (
                                                        <Image
                                                            src={categoryThumbnail}
                                                            alt={category}
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                                                        />
                                                    )}
                                                    
                                                    {/* Dark Overlay */}
                                                    <div className="absolute inset-0 bg-slate-950/70 group-hover:bg-slate-950/60 transition-all duration-300" />
                                                    
                                                    {/* Gradient overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    
                                                    {/* Content */}
                                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                                                        <h3 className="text-2xl md:text-3xl font-bold text-white poppins mb-2 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-lg">
                                                            {category}
                                                        </h3>
                                                        <p className="text-slate-300 text-sm font-mono mb-4 drop-shadow-md">
                                                            {categoryCount} {categoryCount === 1 ? 'foto' : 'foto'}
                                                        </p>
                                                        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            LIHAT
                                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                        </div>
                                                    </div>
                                                </motion.button>
                                            );
                                        })}
                                    </AnimatePresence>
                                </motion.div>
                            ) : (
                                // Show Photos in Category Box
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="pb-20"
                                >
                                    {/* Category Header */}
                                    <div className="mb-8 flex items-center justify-between">
                                        <h3 className="text-3xl font-bold text-white poppins">
                                            {selectedCategory}
                                        </h3>
                                        <button
                                            onClick={() => setSelectedCategory(null)}
                                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white transition-all font-mono text-sm"
                                        >
                                            <span>KEMBALI</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                                        </button>
                                    </div>

                                    {/* Photos Grid */}
                                    <motion.div
                                        layout
                                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                                    >
                                        <AnimatePresence mode="popLayout">
                                            {categoryImages.map((item, idx) => (
                                                <motion.div
                                                    key={`${item.src}-${idx}`}
                                                    layout
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    exit={{ opacity: 0, scale: 0.8 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="relative group aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 break-inside-avoid"
                                                >
                                                    <Image
                                                        src={item.src}
                                                        alt={`Gallery ${idx}`}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    />
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                                                        <span className="text-cyan-400 font-bold text-lg mb-1">{item.year}</span>
                                                        <span className="text-slate-300 text-sm">{item.category}</span>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </AnimatePresence>
                                    </motion.div>

                                    {categoryImages.length === 0 && (
                                        <div className="text-center py-20 text-slate-500 font-mono">
                                            Tidak ada foto di kategori ini.
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
