'use client';

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[128px] animate-pulse delay-1000" /> */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-cyan-400 mb-8 backdrop-blur-sm"
                >
                    <Zap className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium tracking-wide">DITENAGAI OLEH GAIRAH</span>
                </motion.div> */}

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-gochi leading-[0.8] py-4"
                >
                    BERINOVASI <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-orange-400 font-gochi tracking-widest px-2">
                        TANPA BATAS
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Website Resmi <span className="text-white font-semibold">Polinema Robotics</span>.
                    Merancang masa depan melalui otonomi, presisi, dan rasa ingin tahu yang tak henti-hentinya.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="group relative px-8 py-4 bg-white text-slate-950 font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-transform duration-300">
                        <span className="relative z-10 flex items-center gap-2">
                            Jelajahi Divisi <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>


                </motion.div>
            </div>

            {/* Decorative Grid Bottom */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-slate-950 to-transparent z-20" />
        </section>
    );
}
