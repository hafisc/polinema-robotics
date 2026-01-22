'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time or wait for window load
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center overflow-hidden"
                    initial={{ y: 0 }}
                    exit={{
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    <div className="relative flex flex-col items-center gap-4 z-10">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="relative w-24 h-24 md:w-32 md:h-32"
                        >
                            <Image
                                src="/images/logo%20polinema%20robotics.png"
                                alt="Preloader Logo"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 96px, 128px"
                            />
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="text-2xl md:text-4xl font-bold font-mono text-white tracking-widest text-center"
                            >
                                POLINEMA <span className="text-cyan-400">ROBOTICS</span>
                            </motion.h1>
                        </div>

                        {/* Loading Bar / Tech Decoration */}
                        <div className="w-48 h-1 bg-slate-800 rounded-full mt-4 overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-cyan-400"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                            />
                        </div>

                        {/* <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-cyan-500/60 font-mono text-sm mt-2 tracking-widest"
                        >
                            SYSTEM INITIALIZING...
                        </motion.p> */}
                    </div>

                    {/* Background Tech Grip Pattern (Optional subtle detail) */}
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
