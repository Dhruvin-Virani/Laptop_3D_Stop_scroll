"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Specs", href: "#specs" },
        { name: "Reviews", href: "#" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                        ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg"
                        : "bg-transparent py-8"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3 group cursor-pointer">
                        {/* Logo Icon */}
                        <div className="relative w-8 h-8">
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white relative z-10">
                                <path d="M12 2L2 19h20L12 2zm0 3.27L18.73 17H5.27L12 5.27z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold tracking-tighter text-white">
                            ALIENWARE
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-medium text-white/60 hover:text-white transition-colors tracking-widest uppercase group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:block px-8 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
                            Pre-Order
                        </button>
                        <button
                            className="md:hidden text-white p-2 z-50 relative"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className="space-y-1.5 w-6">
                                <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                                <span className={`block w-full h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                                <span className={`block w-full h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex items-center justify-center"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-bold text-white hover:text-blue-400 transition-colors tracking-tight"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 px-12 py-4 bg-white text-black font-bold uppercase tracking-widest"
                            >
                                Pre-Order Now
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
