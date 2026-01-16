'use client';

import Navbar from "@/pages/partials/Navbar";
import Footer from "@/pages/partials/Footer";
import Hero from "@/pages/hero/page";
import About from "@/pages/about/page";
import DivisionGrid from "@/pages/divisions/page";
import AchievementTimeline from "@/pages/achievements/page";
import TeamMembers from "@/pages/team/page";
import Gallery from "@/pages/gallery/page";

export default function MainLayout() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar />
            <Hero />
            <About />
            <DivisionGrid />
            <AchievementTimeline />
            <TeamMembers />
            <Gallery />
            <Footer />
        </main>
    );
}
