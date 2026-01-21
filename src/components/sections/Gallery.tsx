'use client';

import { galleryImages } from "@/lib/data";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

export default function Gallery() {
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
                        {galleryImages.map((src, index) => (
                            <SwiperSlide key={index} className="w-[280px] sm:w-[350px] md:w-[400px] !h-[400px] relative">
                                <div
                                    className="relative w-full h-full group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl transition-transform duration-300 hover:scale-105"
                                >
                                    {/* Image - Direct Child of Relative Container */}
                                    <Image
                                        src={src}
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
                                        Polinema Robotics
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
                    <button className="group relative px-8 py-3 bg-slate-900 border border-slate-700 hover:border-cyan-500 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                        <span className="relative z-10 flex items-center gap-2 font-mono font-bold">
                            LIHAT SEMUA<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </motion.div>
            </motion.div>


        </section>
    );
}
