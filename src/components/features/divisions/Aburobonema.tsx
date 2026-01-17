'use client';

import { teams } from "@/lib/data";
import { ArrowLeft, Cpu, Trophy, Star, Medal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function Aburobonema() {
    const team = teams.find((t) => t.id === 'aburobonema');

    if (!team) {
        return <div>Team not found</div>;
    }

    const achievements = [
        { year: "2024", title: "Juara Harapan", level: "Regional 2" },
        { year: "2023", title: "Juara 2", level: "Nasional" },
        { year: "2023", title: "Juara 2", level: "Regional 2" },
        { year: "2022", title: "Juara Harapan", level: "Nasional" },
        { year: "2022", title: "Juara 3", level: "Regional 2" },
        { year: "2021", title: "Juara 3", level: "Nasional" },
        { year: "2021", title: "Juara Harapan", level: "Regional 2" },
        { year: "2020", title: "Juara Harapan", level: "Nasional" },
    ];

    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 flex flex-col font-sans selection:bg-cyan-500/30">
            <Navbar />

            <div className="flex-grow">
                {/* Hero Section Immersive */}
                <div className="relative min-h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={team.image}
                            alt={team.name}
                            fill
                            className="object-cover opacity-30 blur-sm scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/50" />
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    </div>

                    <div className="container mx-auto px-4 relative z-10 pt-20 text-center">
                        

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 mb-6 font-mono tracking-tighter"
                        >
                            {team.name}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
                        >
                            {team.description}
                        </motion.p>
                    </div>
                </div>

                <div className="container mx-auto px-4 relative z-10 -mt-20 pb-24">
                    
                    

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content Area */}
                        <div className="lg:col-span-2 space-y-12">
                            <section>
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl font-bold text-white mb-6 flex items-center gap-3"
                                >
                                    <span className="w-10 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                                    Fokus Pengembangan
                                </motion.h2>
                                <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/50">
                                    <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                                        Tim <strong>{team.name}</strong> mendedikasikan diri untuk mendorong batas kemampuan robotika. Kami menggabungkan <em>engineering</em> presisi dengan algoritma cerdas untuk menciptakan robot yang adaptif dan tangguh.
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {['Mekanik Presisi CAD/CAM', 'Sistem Kontrol PID & Fuzzy', 'Computer Vision AI', 'Mikrokontroler STM32/ESP32'].map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-center gap-3 text-slate-400 p-3 rounded-xl bg-slate-950/50 border border-slate-900 hover:border-cyan-500/30 transition-colors"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-cyan-500" />
                                                {item}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl font-bold text-white mb-6 flex items-center gap-3"
                                >
                                    <span className="w-10 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
                                    Hall of Fame
                                </motion.h2>

                                <div className="space-y-4">
                                    {achievements.map((ach, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05 }}
                                            className="group flex items-center p-4 rounded-2xl bg-slate-900/30 border border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 transition-all"
                                        >
                                            <div className="w-16 font-mono text-slate-500 font-bold text-xl group-hover:text-cyan-400 transition-colors">{ach.year}</div>
                                            <div className="flex-grow">
                                                <h4 className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors flex items-center gap-2">
                                                    {ach.title}
                                                    {ach.title.includes('1') || ach.title.includes('Juara 2') || ach.title.includes('Juara 3') ? <Medal className="w-4 h-4 text-amber-500" /> : <Star className="w-4 h-4 text-slate-600 group-hover:text-amber-400" />}
                                                </h4>
                                                <p className="text-slate-400 text-sm">Tingkat {ach.level}</p>
                                            </div>
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                                                <Trophy className="w-5 h-5 text-amber-500" />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Sidebar Visual */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                <div className="aspect-[3/4] rounded-3xl overflow-hidden relative border border-slate-800 group shadow-2xl shadow-cyan-900/20">
                                    <Image
                                        src={team.image}
                                        alt={team.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                                    <div className="absolute bottom-0 left-0 p-8 w-full">
                                        <p className="text-slate-400 text-sm uppercase tracking-widest mb-1">Maskot Tim</p>
                                        <h3 className="text-3xl font-bold text-white font-mr-robot">ABUROBOT</h3>
                                    </div>
                                </div>

                                <Link href="/#divisions" className="block p-4 rounded-xl bg-slate-800 text-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                                    <span className="flex items-center justify-center gap-2">
                                        <ArrowLeft className="w-4 h-4" />
                                        Kembali ke Beranda
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
