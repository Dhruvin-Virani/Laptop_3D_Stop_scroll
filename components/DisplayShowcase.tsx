"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function DisplayShowcase() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const opacityText = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0]);

    return (
        <section ref={sectionRef} className="relative h-[120vh] overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center"
            >
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <div className="relative z-10 h-full flex items-center justify-center p-6">
                <motion.div
                    style={{ opacity: opacityText }}
                    className="text-center max-w-4xl backdrop-blur-sm bg-black/30 p-12 rounded-3xl border border-white/10"
                >
                    <h2 className="text-sm font-mono text-white/60 tracking-widest mb-4">VISUAL PERFECTION</h2>
                    <h3 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-8">
                        Canvas of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Pure Color</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
                        <div>
                            <div className="text-4xl font-bold text-white">100%</div>
                            <div className="text-sm font-mono text-white/50 mt-2">DCI-P3 GAMUT</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white">500</div>
                            <div className="text-sm font-mono text-white/50 mt-2">NITS BRIGHTNESS</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-white">165Hz</div>
                            <div className="text-sm font-mono text-white/50 mt-2">REFRESH RATE</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
