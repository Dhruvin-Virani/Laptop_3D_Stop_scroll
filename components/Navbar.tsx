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
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                        : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold tracking-tighter text-white">
                            ALIENWARE
                        </span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide uppercase"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:block px-6 py-2 bg-white text-black text-sm font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                            Pre-Order
                        </button>
                        <button
                            className="md:hidden text-white p-2"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <div className="space-y-1.5">
                                <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                                <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                                <span className={`block w-6 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-white/90 hover:text-white tracking-tight"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button className="mt-4 w-full py-4 bg-white text-black font-bold uppercase tracking-widest">
                                Pre-Order Now
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
