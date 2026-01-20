'use client';

import dynamic from 'next/dynamic';
import { motion } from "framer-motion";


// Dynamically import the 3D component with no SSR to avoid hydration mismatch
const TechCore = dynamic(() => import('@/components/3d/TechCore'), { ssr: false });

export default function About() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="about">
            {/* Seamless Transition Gradients */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />

            {/* Background Decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-violet-500/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-mono leading-tight">
                            <span className="block text-2xl md:text-3xl font-gochi text-slate-400 mb-2">Mengenal Lebih Dekat</span>
                            <span className="text-cyan-400">POLINEMA ROBOTICS</span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                            Kami adalah <strong className="text-white">tim minat bakat</strong> resmi di Politeknik Negeri Malang yang menjadi pusat inovasi dan riset teknologi robotika.
                        </p>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Bukan sekadar perakit mesin, kami adalah inisiator masa depan. Melalui paduan <strong>kode cerdas, sirkuit presisi, dan mekanika kokoh</strong>, kami mengubah ide menjadi juara di kancah nasional maupun internasional.
                        </p>


                    </motion.div>

                    {/* Right Visual with 3D Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
                    >
                        {/* 3D Scene */}
                        <div className="w-full h-full z-10">
                            <TechCore />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
