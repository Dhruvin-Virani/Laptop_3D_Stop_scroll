import LaptopScroll from "@/components/LaptopScroll";

export default function Home() {
    return (
        <main className="bg-[#151515] min-h-screen">
            <LaptopScroll />
            <section className="h-screen flex items-center justify-center bg-[#151515] border-t border-white/10">
                <div className="text-center max-w-2xl px-6">
                    <h3 className="text-3xl font-mono text-white/60 mb-6">THE FUTURE IS NOW</h3>
                    <p className="text-white/40 leading-relaxed">
                        Experience uncompromised power in a chassis designed for the elite.
                        The Alienware series redefines portable gaming performance.
                    </p>
                </div>
            </section>
        </main>
    );
}
