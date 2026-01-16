'use client';

import { motion } from "framer-motion";
import { members } from "@/lib/data";
import { Github, Linkedin, Instagram, User } from "lucide-react";

export default function TeamMembers() {
    return (
        <section className="py-24 bg-slate-950" id="team">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-mono">
                        <span className="text-violet-500">INSINYUR</span> KAMI
                    </h2>
                    <p className="text-slate-400">Berkenalan dengan para ahli di balik mesin.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-violet-500/50 transition-colors text-center"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-slate-700 group-hover:border-violet-500 transition-colors bg-slate-800 flex items-center justify-center">
                                {member.image ? (
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                ) : (
                                    <User className="w-16 h-16 text-slate-600 group-hover:text-violet-400 transition-colors" />
                                )}
                            </div>

                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-sm text-slate-500 font-mono mb-6">{member.role}</p>

                            <div className="flex justify-center gap-4">
                                {member.socials.linkedin && (
                                    <a href={member.socials.linkedin} className="text-slate-400 hover:text-white hover:scale-110 transition-all">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {member.socials.github && (
                                    <a href={member.socials.github} className="text-slate-400 hover:text-white hover:scale-110 transition-all">
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {member.socials.instagram && (
                                    <a href={member.socials.instagram} className="text-slate-400 hover:text-white hover:scale-110 transition-all">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
