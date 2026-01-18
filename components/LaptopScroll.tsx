"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";

const frameCount = 120;
const framePath = (index: number) => {
    const paddedIndex = String(index).padStart(3, "0");
    return `/ezgif-split/frame_${paddedIndex}_delay-0.04s.webp`;
};

export default function LaptopScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loaded, setLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Modified Logic:
    // Animation finishes at 85% of the scroll container.
    // The frames stay static at the last frame from 85% to 100%.
    const currentIndex = useTransform(scrollYProgress, [0, 0.85], [1, frameCount]);

    // Preload images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            let loadedCount = 0;

            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                img.src = framePath(i);
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });
                loadedImages[i - 1] = img;
                loadedCount++;
                setLoadProgress(Math.round((loadedCount / frameCount) * 100));
            }

            setImages(loadedImages);
            setLoaded(true);
        };

        loadImages();
    }, []);

    // Draw to canvas
    const render = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!canvas || !ctx || images.length === 0) return;

        // Use the floored index to get the distinct frame
        // Clamp index between 1 and frameCount
        const frameIndex = Math.min(
            frameCount,
            Math.max(1, Math.floor(index))
        );

        const image = images[frameIndex - 1];
        if (!image) return;

        // "Cover" fit logic
        const canvasRatio = canvas.width / canvas.height;
        const imageRatio = image.width / image.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imageRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imageRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imageRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#151515"; // Seamless blending
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Update canvas on scroll
    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (loaded) {
            requestAnimationFrame(() => render(latest));
        }
    });

    // Initial render when loaded
    useEffect(() => {
        if (loaded) render(1);
    }, [loaded]);


    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame after resize
                render(currentIndex.get());
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [loaded, currentIndex]);


    // Text Overlays Animation Logic
    const opacityTitle = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const yTitle = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const opacityP2 = useTransform(scrollYProgress, [0.15, 0.25, 0.35, 0.45], [0, 1, 1, 0]);
    const xP2 = useTransform(scrollYProgress, [0.15, 0.25], [-100, 0]);

    const opacitySpecs = useTransform(scrollYProgress, [0.4, 0.5, 0.65, 0.75], [0, 1, 1, 0]);

    // CTA / "Gaming Beast" logic adjustment
    // Finishes fading in at 0.85 (when scroll stops)
    // Stays visible until the very end (1.0)
    const opacityCTA = useTransform(scrollYProgress, [0.8, 0.85, 0.98, 1], [0, 1, 1, 0]);
    const scaleCTA = useTransform(scrollYProgress, [0.8, 0.85], [0.8, 1]);


    if (!loaded) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-[#151515] text-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                    <p className="font-mono text-xl tracking-widest">LOADING ASSETS {loadProgress}%</p>
                </div>
            </div>
        );
    }

    return (
        <div ref={containerRef} className="h-[700vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlays Container */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-center">

                    {/* Section 1: Title */}
                    <motion.div style={{ opacity: opacityTitle, y: yTitle }} className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white/90 drop-shadow-2xl">
                            ASUS <span className="text-white/50">ALIENWARE</span>
                        </h1>
                    </motion.div>

                    {/* Section 2: Precision Engineering */}
                    <motion.div style={{ opacity: opacityP2, x: xP2 }} className="absolute inset-0 flex items-center justify-start p-12 md:p-24">
                        <div>
                            <h2 className="text-4xl md:text-7xl font-mono uppercase tracking-widest text-white/90">
                                Precision<br />Engineering
                            </h2>
                            <div className="h-1 w-24 bg-white/50 mt-4"></div>
                        </div>
                    </motion.div>

                    {/* Section 3: Specs */}
                    <motion.div style={{ opacity: opacitySpecs }} className="absolute inset-0 flex flex-col justify-center px-6 md:px-24">
                        <div className="flex flex-col md:flex-row justify-between w-full gap-12">
                            {/* Left Side Specs */}
                            <div className="text-left space-y-4">
                                <SpecRow label="CPU" value="INTEL CORE i9" />
                                <SpecRow label="GPU" value="RTX 4050" />
                                <SpecRow label="DISPLAY" value="4K 144Hz" />
                            </div>

                            {/* Right Side Specs */}
                            <div className="text-right space-y-4">
                                <SpecRow label="RAM" value="16 GB" align="right" />
                                <SpecRow label="BATTERY" value="120 Wh" align="right" />
                                <SpecRow label="STORAGE" value="1 TB SSD" align="right" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Section 4: CTA */}
                    <motion.div style={{ opacity: opacityCTA, scale: scaleCTA }} className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 glow-text">
                                Gaming Beast
                            </h2>
                            <button className="pointer-events-auto px-8 py-3 bg-white text-black font-bold text-lg hover:bg-white/90 transition-colors uppercase tracking-widest">
                                Pre-Order Now
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

const SpecRow = ({ label, value, align = "left" }: { label: string, value: string, align?: "left" | "right" }) => (
    <div className={`flex flex-col ${align === "right" ? "items-end" : "items-start"}`}>
        <span className="text-white/40 font-mono text-sm tracking-widest mb-1">{label}</span>
        <span className="text-white/90 text-2xl md:text-4xl font-bold tracking-tight">{value}</span>
    </div>
);
