import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Gochi_Hand } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${gochiHand.variable} scroll-smooth`}>
            <body className="font-sans bg-slate-950 antialiased" suppressHydrationWarning>
                {children}
            </body>
        </html>
    );
}
