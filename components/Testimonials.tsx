"use client";

import React from "react";
import { motion } from "framer-motion";

const reviews = [
    {
        name: "Alex R.",
        role: "Pro Gamer",
        text: "The thermal management on this machine is unreal. I've never seen a laptop sustain this level of performance without throttling.",
        rating: 5,
    },
    {
        name: "Sarah K.",
        role: "3D Artist",
        text: "Rendering 4K scenes on the go has never been faster. The color accuracy of the display is also spot on for my workflow.",
        rating: 5,
    },
    {
        name: "Marcus J.",
        role: "Tech Reviewer",
        text: "Alienware has outdone themselves. The build quality is premium, and the keyboard feels like a desktop mechanical board.",
        rating: 5,
    },
    {
        name: "Emily W.",
        role: "Streamer",
        text: "Smooth, quiet, and powerful. My streams look amazing, and I can run everything on max settings.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#111] to-[#0a0a0a] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-mono uppercase tracking-widest text-white/90 mb-4">
                        Elite Performance Approved
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto">
                        Trusted by professionals, gamers, and creators worldwide.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-blue-500 text-lg">★</span>
                                    ))}
                                </div>
                                <p className="text-white/70 italic mb-6 leading-relaxed">
                                    "{review.text}"
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">{review.name}</h4>
                                <p className="text-sm text-white/40 uppercase tracking-wider">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
