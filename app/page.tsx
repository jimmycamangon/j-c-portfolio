"use client"

import { ThemeProvider } from "next-themes"
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import the new component
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Navbar />
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl overflow-x-hidden">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
          <ScrollToTopButton /> {/* Include the new component */}
        </main>
      </ThemeProvider>
    </div>

  );
}
