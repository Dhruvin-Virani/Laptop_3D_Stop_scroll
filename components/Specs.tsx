"use client";

import React from "react";

export default function Specs() {
    const specs = [
        { label: "Processor", value: "13th Gen Intel® Core™ i9-13900HK" },
        { label: "Operating System", value: "Windows 11 Home" },
        { label: "Graphics Card", value: "NVIDIA® GeForce RTX™ 4090, 16 GB GDDR6" },
        { label: "Display", value: "18\" QHD+ (2560 x 1600) 165Hz, 3ms" },
        { label: "Memory", value: "64 GB, 2 x 32 GB, DDR5, 4800 MHz" },
        { label: "Hard Drive", value: "4 TB, M.2, PCIe NVMe, SSD" },
        { label: "Color", value: "Lunar Silver" },
    ];

    return (
        <section id="specs" className="py-24 bg-[#0a0a0a] text-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-mono uppercase tracking-widest text-white/90">
                        Technical Specifications
                    </h2>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-8" />
                </div>

                <div className="space-y-4">
                    {specs.map((spec, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-white/10 hover:bg-white/5 px-4 transition-colors rounded-lg"
                        >
                            <span className="text-white/50 font-mono text-sm uppercase tracking-wider mb-2 md:mb-0">
                                {spec.label}
                            </span>
                            <span className="text-white/90 font-medium text-lg md:text-xl text-right">
                                {spec.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
