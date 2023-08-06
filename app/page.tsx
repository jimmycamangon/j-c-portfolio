"use client"

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import the new component
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <ScrollToTopButton /> {/* Include the new component */}
      </main>
    </div>
  );
}
