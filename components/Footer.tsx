"use client";

import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-white/40 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-4">Alienware</h4>
                    <p className="text-sm">
                        Defying limits since 1996.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-4">Shop</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Laptops</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Desktops</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Monitors</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-4">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Drivers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Manuals</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-4">Stay Connected</h4>
                    <div className="flex gap-4">
                        {/* Placeholders for social icons */}
                        <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer"></div>
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center text-xs font-mono uppercase tracking-widest">
                © 2026 Alienware Corporation. All rights reserved.
            </div>
        </footer>
    );
}
