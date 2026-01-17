'use client';

import Link from "next/link";
import { MoveLeft, AlertTriangle } from "lucide-react";

export default function NotFoundView() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden font-sans selection:bg-cyan-500/30">
            {/* Background Effects */}
            {/* <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div> */}

            <div className="container mx-auto px-4 relative z-10 text-center">
                {/* Glitch Tech Text */}
                <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-950 relative font-mono select-none">
                    404
                    <span className="absolute inset-0 text-slate-700/50 mix-blend-overlay animate-pulse" aria-hidden="true">404</span>
                </h1>

                <div className="space-y-6 -mt-10 md:-mt-16 relative z-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 backdrop-blur-md">
                        <AlertTriangle className="w-4 h-4" />
                        <span className="text-sm font-bold tracking-widest uppercase">System Error: Path Not Found</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Halaman Hilang dari Radar.
                    </h2>

                    <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
                        Sepertinya koordinat yang Anda tuju tidak valid atau sirkuit kami sedang mengalami gangguan. Silakan kembali ke pangkalan utama.
                    </p>

                    <div className="pt-8 group">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                        >
                            <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Code Lines */}
            <div className="absolute bottom-10 left-10 text-slate-800 font-mono text-xs hidden md:block select-none opacity-50">
                <p>&gt; Initiating search protocol...</p>
                <p>&gt; Error: Target URL unavailable</p>
                <p>&gt; Status: 404 Not Found</p>
                <p>&gt; _</p>
            </div>
        </div>
    );
}
