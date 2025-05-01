"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Navbar from "./components/Navbar";
import IntroScreen from "./components/IntroScreen";

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        // Only show the intro the first time the page loads
        const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
        if (hasSeenIntro) {
            setShowIntro(false);
        } else {
            sessionStorage.setItem("hasSeenIntro", "true");
        }
    }, []);

    return (
        <div>
            {showIntro ? (
                <IntroScreen onFinish={() => setShowIntro(false)} />
            ) : (
                <ThemeProvider enableSystem={true} attribute="class">
                    <Navbar />
                    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl overflow-x-hidden">
                        <HeroSection />
                        <AboutSection />
                        <ExperienceSection />
                        <ProjectsSection />
                        <ContactSection />
                        <Footer />
                        <ScrollToTopButton />
                    </main>
                </ThemeProvider>
            )}
        </div>
    );
}