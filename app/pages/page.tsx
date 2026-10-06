"use client";

import { useSearchParams, useRouter } from "next/navigation";
import projects from "../components/projects";
import Image from "next/image";
import Footer from "../components/Footer";
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import { IoCloseSharp } from "react-icons/io5";

const DisplayProject: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");
  const projectId = id ? parseInt(id, 10) : null;
  const project = projectId !== null ? projects.find((p) => p.id === projectId) : null;

  const handleImageClick = (screenshot: string, index: number) => {
    setSelectedImage(screenshot);
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  const handlePrevImage = useCallback(() => {
    if (project && currentImageIndex > 0) {
      const newIndex = currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(project.screenshots[newIndex]);
    }
  }, [project, currentImageIndex]);

  const handleNextImage = useCallback(() => {
    if (project && currentImageIndex < project.screenshots.length - 1) {
      const newIndex = currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setSelectedImage(project.screenshots[newIndex]);
    }
  }, [project, currentImageIndex]);

  const handleCloseModal = () => setShowModal(false);

  // Keyboard navigation
  useEffect(() => {
    if (!showModal) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal, handlePrevImage, handleNextImage]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showModal]);

  if (project) {
    return (
      <div className="min-h-screen">

        {/* Back button */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl pt-8">
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center gap-2 text-sm text-accent hover:opacity-70 transition-opacity duration-200"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back
          </button>
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl py-10">

          {/* Title + external link */}
          <div className="mb-8">
            <h2 className="font-bold text-2xl md:text-3xl tracking-tight text-fg mb-4">
              {project.name}
            </h2>
            <div className="flex items-center gap-3">
              {project.projectUrl ? (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} online`}
                  className="group inline-flex items-center gap-2 text-xs text-accent border border-accent/50 px-3.5 py-1.5 rounded-full hover:bg-accent hover:text-bg transition-all duration-200"
                >
                  <FaExternalLinkAlt className="text-xs group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                  View Live
                </a>
              ) : (
                <span className="text-xs text-muted italic">
                  Not available online
                </span>
              )}
            </div>
          </div>

          {/* Problem */}
          <div className="mb-6 pl-4 border-l border-accent/60">
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-accent mb-2">
              Problem
            </p>
            <p className="text-muted leading-7">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-8 pl-4 border-l border-accent/60">
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-accent mb-2">
              Solution
            </p>
            <ul className="space-y-2">
              {project.solution.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-muted leading-7"
                >
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="mb-12">
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-accent mb-3">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-2xs px-2 py-0.5 rounded-md border border-line text-muted font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          <div>
            <p className="font-mono text-2xs uppercase tracking-[0.2em] text-accent mb-6">
              Screenshots
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(screenshot, index)}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-line hover:border-accent/50 transition-colors duration-300"
                >
                  <Image
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />

        {/* Modal / Lightbox */}
        {showModal && (
          <div
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            {/* Close */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-surface text-fg border border-line hover:text-accent hover:border-accent/60 transition-all duration-200"
            >
              <IoCloseSharp size={20} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums select-none">
              {currentImageIndex + 1} / {project.screenshots.length}
            </div>

            {/* Desktop: side prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              disabled={currentImageIndex === 0}
              className={`hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-surface text-fg border border-line transition-all duration-200 ${
                currentImageIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:text-accent hover:border-accent/60"
              }`}
            >
              <FaChevronLeft size={18} />
            </button>

            {/* Image */}
            <div
              className="relative w-full px-4 md:px-20 max-h-[70vh] md:max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt={`Screenshot ${currentImageIndex + 1}`}
                width={1920}
                height={1080}
                quality={100}
                priority
                sizes="(max-width: 768px) calc(100vw - 32px), calc(100vw - 160px)"
                className="rounded-lg object-contain max-h-[70vh] md:max-h-[80vh] w-full"
              />
            </div>

            {/* Desktop: side next button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              disabled={currentImageIndex === project.screenshots.length - 1}
              className={`hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-surface text-fg border border-line transition-all duration-200 ${
                currentImageIndex === project.screenshots.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:text-accent hover:border-accent/60"
              }`}
            >
              <FaChevronRight size={18} />
            </button>

            {/* Mobile: bottom row with prev / dots / next */}
            <div className="flex md:hidden items-center gap-4 mt-5" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={handlePrevImage}
                disabled={currentImageIndex === 0}
                className={`p-3 rounded-full bg-surface text-fg border border-line transition-all duration-200 ${
                  currentImageIndex === 0 ? "opacity-30 cursor-not-allowed" : "active:scale-95"
                }`}
              >
                <FaChevronLeft size={16} />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {project.screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentImageIndex(idx);
                      setSelectedImage(project.screenshots[idx]);
                    }}
                    className={`rounded-full transition-all duration-200 ${
                      idx === currentImageIndex
                        ? "w-4 h-2 bg-white"
                        : "w-2 h-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextImage}
                disabled={currentImageIndex === project.screenshots.length - 1}
                className={`p-3 rounded-full bg-surface text-fg border border-line transition-all duration-200 ${
                  currentImageIndex === project.screenshots.length - 1 ? "opacity-30 cursor-not-allowed" : "active:scale-95"
                }`}
              >
                <FaChevronRight size={16} />
              </button>
            </div>

            {/* Desktop: dot indicators */}
            <div className="hidden md:flex absolute bottom-6 items-center gap-2">
              {project.screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                    setSelectedImage(project.screenshots[idx]);
                  }}
                  className={`rounded-full transition-all duration-200 ${
                    idx === currentImageIndex
                      ? "w-4 h-2 bg-white"
                      : "w-2 h-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Not found fallback
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-lg font-bold text-fg">Project not found</p>
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-sm text-accent hover:opacity-70 transition-opacity"
      >
        <FaArrowLeft />
        Go back
      </button>
    </div>
  );
};

export default DisplayProject;
