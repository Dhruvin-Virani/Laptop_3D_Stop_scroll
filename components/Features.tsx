"use client";

import React from "react";
import { motion } from "framer-motion";
import { Snowflake, Keyboard, Speaker, Zap } from "lucide-react";

const features = [
    {
        title: "Cryo-Tech Cooling",
        description: "Advanced thermal engineering ensures peak performance even under heavy loads. Vapor chamber technology meets quad-fan design.",
        icon: Snowflake,
        colSpan: "col-span-1 md:col-span-2",
        color: "text-blue-400",
    },
    {
        title: "Cherry MX Keys",
        description: "Low-profile mechanical switches for tactile precision and 1.8mm travel distance.",
        icon: Keyboard,
        colSpan: "col-span-1",
        color: "text-red-400",
    },
    {
        title: "Dolby Atmos",
        description: "Immersive 3D audio that puts you inside the game with pinpoint accuracy.",
        icon: Speaker,
        colSpan: "col-span-1",
        color: "text-purple-400",
    },
    {
        title: "Hyper-Efficiency",
        description: "Voltage regulation for sustained turbo speeds. 12-phase graphics voltage regulation.",
        icon: Zap,
        colSpan: "col-span-1 md:col-span-2",
        color: "text-yellow-400",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-32 bg-[#0a0a0a] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
                        Forged in <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Silence</span>
                    </h2>
                    <div className="h-1 w-24 bg-blue-500 mx-auto md:mx-0" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`${feature.colSpan} relative p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group overflow-hidden`}
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute -right-12 -top-12 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />

                            <feature.icon className={`w-12 h-12 ${feature.color} mb-6`} />

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-white/60 leading-relaxed max-w-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
