"use client";

import React from "react";
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white/40 py-20 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-1">
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6">Alienware</h4>
                    <p className="text-sm leading-relaxed mb-6">
                        Pushing the boundaries of what's possible in gaming technology. Join the evolution.
                    </p>
                    <div className="flex gap-4">
                        <Facebook className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                        <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                        <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                        <Youtube className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6">Explore</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Laptops</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Desktops</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Monitors</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Accessories</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6">Support</h4>
                    <ul className="space-y-3 text-sm">
                        <li><a href="#" className="hover:text-white transition-colors">Drivers & Downloads</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-6">Stay Updated</h4>
                    <p className="text-xs mb-4">Subscribe for the latest drops and exclusive offers.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-full"
                        />
                        <button className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-blue-500 hover:text-white transition-colors">
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs font-mono uppercase tracking-widest flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6">
                <span>© 2026 Alienware Corporation. All rights reserved.</span>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Legal</a>
                </div>
            </div>
        </footer>
    );
}
