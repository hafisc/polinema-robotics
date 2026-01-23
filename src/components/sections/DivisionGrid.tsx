'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { teams } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DivisionGrid() {
    return (
        <section className="py-24 bg-slate-950 relative" id="divisions">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 poppins">
                        DIVISI <span className="text-cyan-400">KAMI</span>
                    </h2>
                    <div className="h-1 w-20 bg-orange-500 rounded-full mx-auto" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-2 gap-6 auto-rows-[300px]"
                >
                    {teams.map((team) => (
                        <motion.div
                            key={team.id}
                            id={team.id}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, y: 20 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15
                                    }
                                }
                            }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-0 flex flex-col justify-between hover:border-slate-700 transition-colors bg-grid-slate-800/50"
                            )}
                        >
                            <Link href={`/divisions/${team.id}`} className="block w-full h-full p-6 flex flex-col justify-between">
                                {/* Background Image & Gradient */}
                                <div className="absolute inset-0 z-0 pointer-events-none">
                                    <Image
                                        src={team.image}
                                        alt={team.name}
                                        fill
                                        className={cn(
                                            "opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500",
                                            team.id === 'aburobonema' ? "object-cover" : "object-contain p-4"
                                        )}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                                </div>

                                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                                    <div className="p-2 bg-white/10 backdrop-blur rounded-full">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>

                                <div className="relative z-10 pointer-events-none">
                                    <span className="inline-block px-3 py-1 bg-slate-950/50 backdrop-blur rounded-full text-xs font-semibold text-slate-300 border border-slate-800 mb-2">
                                        {team.category}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all font-mono">
                                        {team.name}
                                    </h3>
                                </div>

                                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                                    <p className="text-slate-400 line-clamp-3 group-hover:text-slate-300">
                                        {team.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section >
    );
}
