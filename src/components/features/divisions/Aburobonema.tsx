'use client';

import { teams, galleryImages } from "@/lib/data";
import { ArrowLeft, Trophy, Star, Medal, Github, Linkedin, Instagram, User } from "lucide-react";
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

    // Mock Data for Team Members
    const teamMembers = [
        { name: "Mochamad Widdad El Aufany", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Moh. Rif'at Nur Fahri", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Muhammad Alif Nugroho", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Muhammad Orri' Syahputra", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Zahrina Rana Nadhila", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Putri Wahyu Ilahi", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Syahrul Fauzi", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Husnil Al Fajri", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Nizam Agatha Lukito Putra", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Bintang Yoga Samiaji", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Tjipto Aria Bima", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Ananda Vito Nur Islam", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Handi Riswanto", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Siti Nikmatus Sholihah", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Reny Ambarwati", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Mohammad Al Hafis Hidayatulloh", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Naufal Faqih Ramadhan", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Muhammad Fitroh Amin", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "M Ergiansyah S", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "M. Baharudin Fajar Ramadan", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Faqih Azhar Fathurrochman", role: "Anggota ABUROBONEMA", image: "", socials: {} },
        { name: "Moh. Nafis Ali Fahri", role: "Anggota ABUROBONEMA", image: "", socials: {linkedin: "#"} },
        { name: "Imam Mustaqim", role: "Anggota ABUROBONEMA", image: "", socials: {github: "#", instagram: "#"} },
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



                    <div className="space-y-12">
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
                                    <motion.ul
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                    >
                                        {['Mekanik Presisi CAD/CAM', 'Sistem Kontrol PID & Fuzzy', 'Computer Vision AI', 'Mikrokontroler STM32/ESP32'].map((item, i) => (
                                            <motion.li
                                                key={i}
                                                variants={itemVariants}
                                                className="flex items-center gap-3 text-slate-400 p-3 rounded-xl bg-slate-950/50 border border-slate-900 hover:border-cyan-500/30 transition-colors group"
                                            >
                                                <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-shadow" />
                                                {item}
                                            </motion.li>
                                        ))}
                                    </motion.ul>
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

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="space-y-4"
                                >
                                    {achievements.map((ach, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="group flex items-center p-4 rounded-2xl bg-slate-900/30 border border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 transition-all cursor-default"
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
                                </motion.div>
                            </section>

                            {/* Section: Anggota Tim */}
                            <section>
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
                                >
                                    <span className="w-10 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full" />
                                    Anggota Tim
                                </motion.h2>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                                >
                                    {teamMembers.map((member, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="group relative bg-slate-900/50 rounded-2xl p-5 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 rounded-full bg-slate-800 border mr-1 border-slate-700 flex items-center justify-center overflow-hidden group-hover:border-cyan-500 transition-colors">
                                                    {member.image ? (
                                                        <Image
                                                            src={member.image}
                                                            alt={member.name}
                                                            width={64}
                                                            height={64}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    ) : (
                                                        <User className="w-8 h-8 text-slate-500" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                                                        {member.name}
                                                    </h4>
                                                    <p className="text-slate-400 text-sm font-mono">{member.role}</p>
                                                </div>
                                            </div>

                                            {/* Social Links Overlay */}
                                            <div className="absolute top-5 right-5 flex gap-2">
                                                {member.socials.github && (
                                                    <Link href={member.socials.github} className="text-slate-600 hover:text-white transition-colors">
                                                        <Github className="w-4 h-4" />
                                                    </Link>
                                                )}
                                                {member.socials.linkedin && (
                                                    <Link href={member.socials.linkedin} className="text-slate-600 hover:text-white transition-colors">
                                                        <Linkedin className="w-4 h-4" />
                                                    </Link>
                                                )}
                                                {member.socials.instagram && (
                                                    <Link href={member.socials.instagram} className="text-slate-600 hover:text-white transition-colors">
                                                        <Instagram className="w-4 h-4" />
                                                    </Link>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </section>

                            {/* Section: Galeri Kegiatan */}
                            <section>
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="text-3xl font-bold text-white mb-8 flex items-center gap-3"
                                >
                                    <span className="w-10 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                                    Galeri Kegiatan
                                </motion.h2>

                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="grid grid-cols-2 md:grid-cols-3 gap-4"
                                >
                                    {galleryImages.slice(0, 6).map((src, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="relative aspect-square rounded-2xl overflow-hidden group border border-slate-800 cursor-pointer"
                                        >
                                            <Image
                                                src={src}
                                                alt={`Galeri ${index + 1}`}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                                sizes="(max-width: 768px) 50vw, 33vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <div className="absolute bottom-0 left-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-500/30">
                                                    DOKUMENTASI
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
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
