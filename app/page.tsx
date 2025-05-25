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
    const [showIntro, setShowIntro] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check if this is the first visit
        const hasSeenIntro = localStorage.getItem('hasSeenIntro');
        if (!hasSeenIntro) {
            setShowIntro(true);
        }
        // Add loaded class to html element
        document.documentElement.classList.add('loaded');
    }, []);

    const handleIntroFinish = () => {
        setShowIntro(false);
        // Save that we've shown the intro
        localStorage.setItem('hasSeenIntro', 'true');
    };

    if (!mounted) return null;

    return (
        <div className={showIntro ? 'bg-lightTheme dark:bg-darkTheme' : ''}>
            {showIntro ? (
                <IntroScreen onFinish={handleIntroFinish} />
            ) : (
                <ThemeProvider enableSystem={true} attribute="class">
                    <Navbar />
                    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl overflow-x-hidden">
                        <HeroSection />
                        <ProjectsSection />
                        <ExperienceSection />
                        <AboutSection />
                        <ContactSection />
                        <Footer />
                        <ScrollToTopButton />
                    </main>
                </ThemeProvider>
            )}
        </div>
    );
}