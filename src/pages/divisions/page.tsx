'use client';

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
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-mono">
                        DIVISI <span className="text-cyan-400">KAMI</span>
                    </h2>
                    <div className="h-1 w-20 bg-orange-500 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[300px]">
                    {teams.map((team, index) => (
                        <motion.div
                            key={team.id}
                            id={team.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors",
                                // Bento Grid Logic: Make first item span 3 cols, others span 2 or 3 dynamically
                                index === 0 ? "lg:col-span-4" : index === 1 ? "lg:col-span-2" : "lg:col-span-2"
                            )}
                        >
                            {/* Background Gradient/Image Placeholder */}
                            <div className={cn(
                                "absolute inset-0 opacity-20 bg-gradient-to-br transition-opacity duration-500 group-hover:opacity-40",
                                team.color
                            )} />

                            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                                <div className="p-2 bg-white/10 backdrop-blur rounded-full">
                                    <ArrowUpRight className="w-5 h-5 text-white" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 bg-slate-950/50 backdrop-blur rounded-full text-xs font-semibold text-slate-300 border border-slate-800 mb-2">
                                    {team.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all font-mono">
                                    {team.name}
                                </h3>
                            </div>

                            <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-slate-400 line-clamp-3 group-hover:text-slate-300">
                                    {team.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
