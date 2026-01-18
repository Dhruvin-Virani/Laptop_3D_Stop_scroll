import LaptopScroll from "@/components/LaptopScroll";
import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Specs from "@/components/Specs";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-[#151515] min-h-screen relative">
            <Navbar />

            {/* 3D Scroll Hero Section */}
            <LaptopScroll />

            {/* Standard Product Page Sections */}
            <div className="relative z-10 bg-[#151515]">
                <Features />
                <Specs />
                <Footer />
            </div>
        </main>
    );
}
