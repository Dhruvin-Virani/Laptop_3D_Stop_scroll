import LaptopScroll from "@/components/LaptopScroll";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Specs from "@/components/Specs";
import Footer from "@/components/Footer";
import Performance from "@/components/Performance";
import DisplayShowcase from "@/components/DisplayShowcase";

export default function Home() {
    return (
        <main className="bg-[#151515] min-h-screen relative font-sans selection:bg-blue-500/30">
            <Navbar />

            {/* 3D Scroll Hero Section */}
            <LaptopScroll />

            {/* Standard Product Page Sections */}
            <div className="relative z-10 bg-[#0a0a0a]">
                <Performance />
                <DisplayShowcase />
                <Features />
                <Specs />
                <Footer />
            </div>
        </main>
    );
}
