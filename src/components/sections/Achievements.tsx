'use client';

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Trophy, Award, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AchievementTimeline() {
    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="achievements">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-gochi">
                        Prestasi <span className="text-yellow-400">Robotika</span>
                    </h2>
                    <p className="text-slate-400">Membuktikan keunggulan melalui kompetisi nasional dan internasional.</p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent" />

                    <div className="space-y-12">
                        {achievements.map((ach, index) => {
                            const isEven = index % 2 === 0;
                            const isGold = ach.medal === "Gold";

                            return (
                                <motion.div
                                    key={ach.id}
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={cn(
                                        "relative flex w-full",
                                        isEven ? "md:flex-row-reverse" : "md:flex-row" // Alternating sides
                                    )}
                                >
                                    {/* Empty space for alignment */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Connection Node */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center z-10">
                                        <div className={cn(
                                            "w-3 h-3 rounded-full",
                                            isGold ? "bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.5)]" : "bg-slate-500"
                                        )} />
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                                        <div className={cn(
                                            "p-6 rounded-2xl bg-slate-900/50 backdrop-blur border transition-all hover:bg-slate-900",
                                            isGold ? "border-yellow-500/50 shadow-[0_0_20px_-10px_rgba(250,204,21,0.3)]" : "border-slate-800"
                                        )}>
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-sm font-mono text-slate-500">{ach.year}</span>
                                                {isGold && <Trophy className="w-4 h-4 text-yellow-500" />}
                                                {ach.medal === "Silver" && <Award className="w-4 h-4 text-slate-300" />}
                                                {ach.medal === "Bronze" && <Medal className="w-4 h-4 text-amber-700" />}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-1">{ach.title}</h3>
                                            <p className="text-slate-400 text-sm">{ach.category}</p>
                                            <div className={cn(
                                                "mt-3 inline-block px-2 py-0.5 rounded textxs font-bold uppercase",
                                                isGold ? "bg-yellow-500/10 text-yellow-500" :
                                                    ach.medal === "Silver" ? "bg-slate-300/10 text-slate-300" :
                                                        "bg-amber-700/10 text-amber-600"
                                            )}>
                                                {ach.medal} Medali
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
