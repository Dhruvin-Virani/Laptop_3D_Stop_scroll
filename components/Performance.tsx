"use client";

import React from "react";
import { motion } from "framer-motion";

const games = [
    { name: "Cyberpunk 2077", fps: 120, color: "bg-yellow-400" },
    { name: "Call of Duty: MW3", fps: 180, color: "bg-green-500" },
    { name: "Fortnite", fps: 240, color: "bg-purple-500" },
];

export default function Performance() {
    return (
        <section className="py-32 bg-[#0a0a0a] text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-mono text-blue-400 tracking-widest mb-4">UNLEASH THE POWER</h2>
                        <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-6">
                            Dominate Every <br /> <span className="text-white/40">Battlefield</span>
                        </h3>
                        <p className="text-white/60 leading-relaxed text-lg mb-8">
                            Powered by the latest RTX 4090 and 13th Gen Intel Core i9, experience frame rates that give you the competitive edge. DLSS 3.0 enabled.
                        </p>

                        <div className="flex gap-8">
                            <div>
                                <div className="text-4xl font-bold text-white">35%</div>
                                <div className="text-sm text-white/40 font-mono mt-1">FASTER RENDERING</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white">4X</div>
                                <div className="text-sm text-white/40 font-mono mt-1">RAY TRACING PERF</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Charts */}
                    <div className="space-y-8">
                        {games.map((game, idx) => (
                            <div key={idx} className="relative">
                                <div className="flex justify-between text-sm font-bold uppercase tracking-wider mb-2">
                                    <span>{game.name}</span>
                                    <span className="text-white/60">{game.fps} FPS</span>
                                </div>
                                <div className="h-4 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(game.fps / 240) * 100}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.2, delay: idx * 0.2, ease: "easeOut" }}
                                        className={`h-full ${game.color} shadow-[0_0_20px_rgba(255,255,255,0.3)]`}
                                    />
                                </div>
                            </div>
                        ))}
                        <p className="text-xs text-center text-white/30 font-mono mt-8">
                            *Average FPS at 1440p High Settings. Actual performance may vary.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
