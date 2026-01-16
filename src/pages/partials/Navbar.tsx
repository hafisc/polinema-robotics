'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
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
        href: '#divisions',
        children: teams.map(t => ({ name: t.name, href: `#${t.id}` }))
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
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-xl font-bold text-white font-mono tracking-tighter">
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
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-white transition-colors py-2"
                                >
                                    {link.name}
                                    {link.children && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                                </Link>

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

                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                            </div>
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:block px-5 py-2 bg-slate-100 text-slate-950 text-sm font-bold rounded-full hover:bg-cyan-400 transition-colors">
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
                                        <Link
                                            href={link.href}
                                            onClick={() => !link.children && setIsMobileMenuOpen(false)}
                                            className="text-lg font-medium text-slate-300 hover:text-cyan-400 py-2"
                                        >
                                            {link.name}
                                        </Link>
                                        {link.children && (
                                            <button
                                                onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                                                className="p-2 text-slate-400 hover:text-white"
                                            >
                                                <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpanded === link.name ? 'rotate-180' : ''}`} />
                                            </button>
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
                            <button className="w-full py-3 bg-cyan-500 text-slate-950 font-bold rounded-xl mt-4">
                                Bergabung
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
