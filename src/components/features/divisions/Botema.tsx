'use client';

import { teams, galleryImages } from "@/lib/data";
import { ArrowLeft, ArrowRight, Trophy, Star, Medal, Github, Linkedin, Instagram, User, Maximize2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Botema() {
    const team = teams.find((t) => t.id === 'botema');

    if (!team) {
        return <div>Team not found</div>;
    }

    const achievements = [
        { year: "2024", title: "Juara Harapan", level: "Regional 2" },
        { year: "2023", title: "Quarter Finalist", level: "Nasional" },
    ];

    // Mock Data for Team Members
    const teamMembers: { name: string; role: string; image: string; socials: { github?: string; linkedin?: string; instagram?: string } }[] = [
        { name: "Cahya Purna Yudha", role: "Ketua Tim BOTEMA", image: "", socials: {} },
        { name: "Okta Karyamadhani Wibowo", role: "Divisi Elektrik", image: "", socials: {} },
        { name: "Tyo Septyan Eka Ramadhany", role: "Divisi Mekanik", image: "", socials: {} },
        { name: "Sulthon Uvan Maulana", role: "Divisi Software", image: "", socials: {} },
        { name: "Narendra Ramadhana Dava Saputra", role: "Divisi Software", image: "", socials: {} },
        { name: "Adinda Mirza Devani", role: "Divisi Software", image: "", socials: {} },
        { name: "Moh. Suryo Lego A", role: "Divisi Mekanik", image: "", socials: {} },
        { name: "Ricke Dyah Marieta", role: "Divisi Mekanik", image: "", socials: {} },
        { name: "Azaria Khairunnisa Fawwaz", role: "Divisi Mekanik", image: "", socials: {} },
        { name: "Fitri Athaya Nur Azizah", role: "Divisi Manager", image: "", socials: {} },
        { name: "Raya Bagas Wisesa", role: "Divisi Mekanik", image: "", socials: {} },
        { name: "Fata Haidar Aly", role: "Divisi Software", image: "", socials: {} },
        { name: "Aditya Rizky Nurian", role: "Divisi Software", image: "", socials: {} },
        { name: "Dhinda Kusherawati Ardianto", role: "Divisi Manager", image: "", socials: {} },
        { name: "Muhammad Firdaus Alim", role: "Divisi Elektrik", image: "", socials: {} },
        { name: "Ferry Dicky Hermawan", role: "Divisi Elektrik", image: "", socials: {} },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 20
            } as const
        }
    };

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
                            className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-400 to-amber-600 mb-6 font-mono tracking-tighter"
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
                    <div className="space-y-12">
                        {/* Section: Hall of Fame (Prestasi) */}
                        <section>
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold text-white mb-6 flex items-center gap-3"
                            >
                                <span className="w-10 h-1 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full" />
                                Prestasi Tim
                            </motion.h2>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                {achievements.map((ach, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative group p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-600/50 transition-all hover:bg-slate-900/60 overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                                            <Trophy className="w-24 h-24 text-white transform rotate-12" />
                                        </div>

                                        <div className="relative z-10 flex items-start justify-between gap-4">
                                            <div>
                                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-sm font-mono mb-3 group-hover:border-slate-500/50 transition-colors">
                                                    <span className="font-semibold text-white">{ach.year}</span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-500" />
                                                    <span className="text-slate-400">{ach.level}</span>
                                                </div>
                                                <h4 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
                                                    {ach.title}
                                                </h4>
                                                <div className="flex items-center gap-1">
                                                    {ach.title.toLowerCase().includes('juara') ? (
                                                        <>
                                                            {[...Array(ach.title.includes('1') ? 3 : ach.title.includes('2') ? 2 : 1)].map((_, i) => (
                                                                <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                                                            ))}
                                                            <span className="text-xs text-amber-500/80 ml-2 font-mono uppercase tracking-wider">Achievement</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Medal className="w-4 h-4 text-slate-500" />
                                                            <span className="text-xs text-slate-500 ml-2 font-mono uppercase tracking-wider">Participation</span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700 group-hover:border-amber-500/30 transition-colors">
                                                {ach.title.toLowerCase().includes('juara') ? (
                                                    <Trophy className="w-5 h-5 text-amber-500/70 group-hover:text-amber-400 transition-colors" />
                                                ) : (
                                                    <Medal className="w-5 h-5 text-slate-500 group-hover:text-slate-400 transition-colors" />
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </section>

                        {/* Section: Anggota Tim (Struktur Organisasi) */}
                        <section className="py-8">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold text-white mb-12 flex items-center gap-3"
                            >
                                <span className="w-10 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />
                                Struktur Tim
                            </motion.h2>

                            <div className="relative flex flex-col items-center">
                                {/* Leader Node */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative z-10 mb-8 w-full max-w-sm"
                                >
                                    <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)] text-center relative overflow-hidden group">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500" />
                                        <div className="w-24 h-24 mx-auto rounded-full bg-slate-700 border-2 border-cyan-400 flex items-center justify-center mb-4 overflow-hidden shadow-lg">
                                            <User className="w-10 h-10 text-cyan-200" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">{teamMembers[0].name}</h3>
                                        <p className="text-cyan-400 font-mono text-sm uppercase tracking-wider">Ketua BOTEMA</p>
                                    </div>
                                    {/* Vertical connector line from leader */}
                                    <div className="absolute -bottom-8 left-1/2 w-0.5 h-8 bg-slate-600 -translate-x-1/2" />
                                </motion.div>

                                {/* Connection Node Point */}
                                <div className="w-4 h-4 rounded-full bg-slate-600 border-2 border-slate-900 absolute top-[13.5rem] z-20" />

                                {/* Horizontal Divider for Tree */}
                                <div className="w-[85%] h-0.5 bg-slate-600 mb-8 relative">
                                    {/* Vertical lines dropping to grid */}
                                </div>

                                {/* Members Grid */}
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full relative"
                                >
                                    {teamMembers.slice(1).map((member, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="relative group bg-slate-900/50 rounded-xl p-4 border border-slate-800 hover:border-slate-600 transition-all flex items-center gap-4 before:content-[''] before:absolute before:-top-8 before:left-1/2 before:w-0.5 before:h-8 before:bg-slate-700 before:-translate-x-1/2 before:hidden sm:before:block"
                                        >
                                            <div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center flex-shrink-0">
                                                <User className="w-6 h-6 text-slate-500" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold text-sm group-hover:text-cyan-400 transition-colors line-clamp-1">
                                                    {member.name}
                                                </h4>
                                                <p className="text-slate-400 text-xs font-mono">{member.role}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </section>

                        {/* Section: Fokus Pengembangan (Focus) */}
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
                                    Tim <strong>{team.name}</strong> ({team.category}) merupakan salah satu tim dari Polinema Robotics yang berfokus pada ajang Kontes Robot Tematik Indonesia (KRTMI). KRTMI mengambil tema perlombaan sesuai kebutuhan nasional dengan model permainan tradisional. Pada tahun 2024 KRTMI mengambil tema "Robot Pemilah sampah". Masing masing tim bermain menggunakan 2 robot yaitu robot pengumpan yang dapat digerakan secara manual dan robot pemilah yang bergerak secara otomatis, Permainan dilaksanakan antara dua tim yang menggerakkan robot pengumpan untuk mengangkat kotak sampah ke konveyor kemudian robot pemilah memilah sampah sesuai dengan jenisnya. Tema dari perlombaan KRTMI ini diharapkan menjadi wadah untuk mengembangkan dan menyampaikan ide-ide dalam memberikan kontribusi pada penerapan konsep Industri 4.0 melalui otomasi dan robotika. Tim <strong>{team.name}</strong> dibagi menjadi empat divisi yaitu:
                                </p>
                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    {['Divisi Mekanik', 'Divisi Software', 'Divisi Elektrik', 'Divisi Manager'].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            variants={itemVariants}
                                            className="flex items-center gap-3 text-slate-400 p-3 rounded-xl bg-slate-950/50 border border-slate-900 hover:border-amber-500/30 transition-colors group"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-amber-500 group-hover:shadow-[0_0_10px_rgba(245,158,11,0.8)] transition-shadow" />
                                            {item}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </section>

                        {/* Section: Galeri Kegiatan */}
                        <section className="relative">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                                <div>
                                    <motion.h2
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="text-3xl font-bold text-white mb-2 flex items-center gap-3"
                                    >
                                        <span className="w-10 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                                        Galeri Kegiatan
                                    </motion.h2>
                                    <p className="text-slate-400 max-w-lg">
                                        Intip keseruan dan semangat juang tim kami di balik layar maupun saat kompetisi.
                                    </p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <Link href="/gallery" className="hidden md:inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group">
                                        Lihat Semua Galeri
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                                {galleryImages.slice(0, 8).map((src, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className={cn(
                                            "relative rounded-xl overflow-hidden group cursor-pointer bg-slate-900 border border-slate-800",
                                            index === 0 || index === 5 ? "col-span-2 row-span-2 aspect-square" : "col-span-1 aspect-square"
                                        )}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Galeri ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />

                                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/60 transition-colors duration-300" />

                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                                <Maximize2 className="w-5 h-5 text-white" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="mt-8 text-center md:hidden"
                            >
                                <Link href="/gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors">
                                    Lihat Semua Galeri
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </section>
                    </div>

                    {/* Back to Home Button - Moved Before Footer */}
                    <div className="mt-16 mb-12">
                        <Link href="/#divisions" className="block p-4 rounded-xl bg-slate-800 text-center text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
                            <span className="flex items-center justify-center gap-2">
                                <ArrowLeft className="w-4 h-4" />
                                Kembali ke Beranda
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
