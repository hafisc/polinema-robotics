'use client';

import { Cpu, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                                <Cpu className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white font-mono">
                                PRT<span className="text-cyan-400">.OFFICIAL</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                            Polinema Robotics Team is a student-led organization dedicated to advancing robotics technology through innovation, competition, and research.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Divisions</h4>
                        <ul className="space-y-4">
                            {['ABUROBONEMA', 'AROC-PL', 'ROBSONEMA', 'ROTAMA', 'ROBOSAREMA'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li>Jln. Soekarno Hatta No.9, Malang</li>
                            <li>sekretariat@polinema.ac.id</li>
                            <li>+62 341 404424</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} Polinema Robotics Team.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
