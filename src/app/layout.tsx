import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Gochi_Hand } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains",
    display: "swap",
});

const gochiHand = Gochi_Hand({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-gochi",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Polinema Robotics",
    description: "Official Polinema Robotics Team Landing Page. Innovating Beyond Limits.",
    icons: {
        icon: "/images/logo polinema robotics.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${gochiHand.variable}`}>
            <body className="font-sans bg-slate-950 antialiased" suppressHydrationWarning>
                <Preloader />
                <SmoothScroll />
                {children}
            </body>
        </html>
    );
}
