'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { teams } from '@/lib/data';

interface NavLink {
    name: string;
    href: string;
    children?: { name: string; href: string }[];
}

const navLinks: NavLink[] = [
    { name: 'Beranda', href: '/' },
    {
        name: 'Divisi',
        href: '#', // Set to # to prevent scrolling
        children: teams.map(t => ({ name: t.name, href: `/divisions/${t.id}` }))
    },
    { name: 'Prestasi', href: '#achievements' },
    { name: 'Tim', href: '#team' },
    { name: 'Galeri', href: '#gallery' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const [showRecruitmentPopup, setShowRecruitmentPopup] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-slate-950/80 backdrop-blur-md py-4'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between relative">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/images/logo polinema robotics.png"
                                alt="Polinema Robotics Logo"
                                fill
                                className="object-contain group-hover:scale-110 transition-transform duration-300"
                                sizes="40px"
                            />
                        </div>
                        <span className="text-lg sm:text-xl font-bold text-white font-mono tracking-tighter">
                            Polinema<span className="text-cyan-400"> Robotics</span>
                        </span>
                    </Link>

                    {/* Desktop Nav - Centered */}
                    <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => setHoveredNav(link.name)}
                                onMouseLeave={() => setHoveredNav(null)}
                            >
                                {link.children ? (
                                    <button
                                        type="button"
                                        className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors py-2 cursor-pointer bg-transparent border-0 font-inherit"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        {link.name}
                                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors py-2"
                                    >
                                        {link.name}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {link.children && hoveredNav === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48"
                                        >
                                            <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-xl overflow-hidden shadow-xl p-2 flex flex-col gap-1">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all ${!link.children ? 'group-hover:w-full' : ''}`} />
                            </div>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setShowRecruitmentPopup(true)}
                            className="hidden md:block px-5 py-2 bg-slate-100 text-slate-950 text-sm font-bold rounded-full hover:bg-cyan-400 transition-colors"
                        >
                            Bergabung
                        </button>

                        {/* Mobile Toggle */}
                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-x-0 top-[72px] z-40 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 md:hidden overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    <div className="flex items-center justify-between group">
                                        {link.children ? (
                                            <button
                                                onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                                                className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 flex items-center justify-between w-full"
                                            >
                                                {link.name}
                                                <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpanded === link.name ? 'rotate-180' : ''}`} />
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2 block w-full"
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>

                                    <AnimatePresence>
                                        {link.children && mobileExpanded === link.name && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden pl-4 flex flex-col gap-2 border-l border-slate-800 ml-2"
                                            >
                                                {link.children.map(child => (
                                                    <Link
                                                        key={child.name}
                                                        href={child.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="block py-2 text-slate-400 hover:text-cyan-400 text-sm"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                            <button
                                onClick={() => setShowRecruitmentPopup(true)}
                                className="w-full py-3 bg-slate-100 text-slate-950 font-bold rounded-xl mt-4"
                            >
                                Bergabung
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Recruitment Popup */}
            <AnimatePresence>
                {showRecruitmentPopup && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowRecruitmentPopup(false)}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[60]"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-6 z-[70] shadow-2xl"
                        >
                            <button
                                onClick={() => setShowRecruitmentPopup(false)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-2">Info Recruitment</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Mohon maaf, pendaftaran anggota baru <strong>belum dibuka</strong>. Pantau terus Instagram kami untuk informasi terupdate!
                                </p>
                            </div>

                            <a
                                href="https://www.instagram.com/polinemarobotics/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                            >
                                <Instagram className="w-5 h-5" />
                                Instagram
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
