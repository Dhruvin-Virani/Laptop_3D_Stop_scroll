import type { Metadata } from "next";
import { Saira, Share_Tech } from "next/font/google";
import "./globals.css";

const saira = Saira({ subsets: ["latin"], weight: ["400", "500", "600"], variable: '--font-saira' });
const shareTech = Share_Tech({ weight: "400", subsets: ["latin"], variable: '--font-share-tech' });

export const metadata: Metadata = {
    title: "Alienware Scrollytelling",
    description: "Experience the power of Alienware.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${saira.variable} ${shareTech.variable} font-sans bg-[#151515] text-white overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}
