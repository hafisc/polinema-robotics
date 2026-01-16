'use client';

import Navbar from "@/pages/partials/Navbar";
import Footer from "@/pages/partials/Footer";
import Hero from "@/pages/landing/Hero";
import DivisionGrid from "@/pages/landing/DivisionGrid";
import AchievementTimeline from "@/pages/landing/AchievementTimeline";
import TeamMembers from "@/pages/landing/TeamMembers";
import Gallery from "@/pages/landing/Gallery";

export default function MainLayout() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar />
            <Hero />
            <DivisionGrid />
            <AchievementTimeline />
            <TeamMembers />
            <Gallery />
            <Footer />
        </main>
    );
}
