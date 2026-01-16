'use client';

import { motion } from "framer-motion";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
    return (
        <section className="py-24 bg-slate-950" id="gallery">
            <div className="container mx-auto px-4">
                <div className="mb-12 flex items-end justify-between">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-mono">
                            LOG <span className="text-cyan-400">VISUAL</span>
                        </h2>
                        <p className="text-slate-400">Mengabadikan momen inovasi.</p>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="relative overflow-hidden rounded-2xl group break-inside-avoid"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10" />

                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-auto bg-slate-900 transform group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                            />

                            <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded">
                                    IMG_LOG_{100 + index}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
