"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Cryo-Tech Cooling",
        description: "Advanced thermal engineering ensures peak performance.",
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        title: "Cherry MX Keys",
        description: "Low-profile mechanical switches for tactile precision.",
        colSpan: "col-span-1",
    },
    {
        title: "Dolby Atmos",
        description: "Immersive 3D audio that puts you inside the game.",
        colSpan: "col-span-1",
    },
    {
        title: "Hyper-Efficiency",
        description: "Voltage regulation for sustained turbo speeds.",
        colSpan: "col-span-1 md:col-span-2",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-[#111] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
                        Forged in Silence
                    </h2>
                    <div className="h-1 w-20 bg-blue-500" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`${feature.colSpan} p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group`}
                        >
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
