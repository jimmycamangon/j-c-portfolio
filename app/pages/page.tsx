"use client";

import { useSearchParams, useRouter } from "next/navigation";
import projects from "../components/projects";
import { splitName } from "../components/ProjectSection";
import Image from "next/image";
import Footer from "../components/Footer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import { IoCloseSharp } from "react-icons/io5";

// Delay helper for the page's load sequence
const d = (ms: number) => ({ animationDelay: `${ms}ms` });

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
    const [shortName, longName] = splitName(project.name);

    return (
      <div className="relative z-[2] min-h-screen">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          {/* Sheet header */}
          <div className="pt-8 flex items-center justify-between gap-4">
            <button
              onClick={() => router.back()}
              className="group inline-flex items-center gap-2 text-sm font-medium hover:text-signal transition-colors"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              Back
            </button>
          </div>
          <div className="h-px bg-line/10 mt-4 origin-left animate-draw" style={d(100)} />

          {/* Title block */}
          <header className="py-14 md:py-20">
            <h1 className="font-display font-black uppercase leading-[0.85] tracking-tight break-words text-[clamp(3rem,12vw,10rem)]">
              <span className="reveal-mask">
                <span className="block animate-rise" style={d(200)}>{shortName}</span>
              </span>
            </h1>
            {longName && (
              <p className="mt-5 text-muted animate-fade" style={d(400)}>{longName}</p>
            )}
            <div className="mt-8 animate-fade" style={d(500)}>
              {project.projectUrl ? (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} online`}
                  className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-signal transition-colors duration-300"
                >
                  View live
                  <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                </a>
              ) : (
                <span className="text-sm text-muted">Not available online</span>
              )}
            </div>
          </header>

          {/* Problem / Solution / Stack */}
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 border-t border-line/10 pt-12 animate-fade" style={d(600)}>
            <section className="md:col-span-5">
              <p className="label mb-4">Problem</p>
              <p className="text-lg leading-relaxed text-ink/85">{project.problem}</p>
            </section>

            <section className="md:col-span-7">
              <p className="label mb-4">Solution</p>
              <ol className="border-t border-line/10">
                {project.solution.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-3 py-3 border-b border-line/10 leading-relaxed text-ink/75"
                  >
                    <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                    {feature}
                  </li>
                ))}
              </ol>
            </section>

            <section className="md:col-span-12">
              <p className="label mb-4">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </section>
          </div>

          {/* Screenshots */}
          <section className="py-20 md:py-28">
            <div className="label flex items-center gap-4 mb-10">
              <span>Screenshots</span>
              <span className="h-px flex-1 bg-line/10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {project.screenshots.map((screenshot, index) => (
                <button
                  key={screenshot}
                  onClick={() => handleImageClick(screenshot, index)}
                  className="group text-left"
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-panel ring-1 ring-line/10">
                      <Image
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                        className="object-cover object-top group-hover:scale-105 transition-all duration-500"
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </section>

          <Footer />
        </div>

        {/* Modal / Lightbox */}
        {showModal && (
          <div
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0b0b0c]/95 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            {/* Close */}
            <button
              onClick={handleCloseModal}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 grid place-items-center w-10 h-10 border border-white/30 text-white hover:border-[#3FB8C0] hover:text-[#3FB8C0] transition-colors"
            >
              <IoCloseSharp size={18} />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-sm text-white/60 tabular-nums select-none">
              {currentImageIndex + 1} / {project.screenshots.length}
            </div>

            {/* Desktop: side prev button */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
              disabled={currentImageIndex === 0}
              aria-label="Previous image"
              className={`hidden md:grid place-items-center absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white/30 text-white transition-colors ${
                currentImageIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-[#3FB8C0] hover:text-[#3FB8C0]"
              }`}
            >
              <FaChevronLeft size={16} />
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
                className="object-contain max-h-[70vh] md:max-h-[80vh] w-full"
              />
            </div>

            {/* Desktop: side next button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
              disabled={currentImageIndex === project.screenshots.length - 1}
              aria-label="Next image"
              className={`hidden md:grid place-items-center absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 border border-white/30 text-white transition-colors ${
                currentImageIndex === project.screenshots.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-[#3FB8C0] hover:text-[#3FB8C0]"
              }`}
            >
              <FaChevronRight size={16} />
            </button>

            {/* Mobile: bottom row with prev / ticks / next */}
            <div className="flex md:hidden items-center gap-4 mt-5" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={handlePrevImage}
                disabled={currentImageIndex === 0}
                aria-label="Previous image"
                className={`grid place-items-center w-11 h-11 border border-white/30 text-white ${
                  currentImageIndex === 0 ? "opacity-30 cursor-not-allowed" : "active:scale-95"
                }`}
              >
                <FaChevronLeft size={14} />
              </button>

              <div className="flex items-center gap-1.5">
                {project.screenshots.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Go to image ${idx + 1}`}
                    onClick={() => {
                      setCurrentImageIndex(idx);
                      setSelectedImage(project.screenshots[idx]);
                    }}
                    className={`h-0.5 transition-all duration-200 ${
                      idx === currentImageIndex ? "w-5 bg-[#3FB8C0]" : "w-2.5 bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNextImage}
                disabled={currentImageIndex === project.screenshots.length - 1}
                aria-label="Next image"
                className={`grid place-items-center w-11 h-11 border border-white/30 text-white ${
                  currentImageIndex === project.screenshots.length - 1 ? "opacity-30 cursor-not-allowed" : "active:scale-95"
                }`}
              >
                <FaChevronRight size={14} />
              </button>
            </div>

            {/* Desktop: tick indicators */}
            <div className="hidden md:flex absolute bottom-7 items-center gap-1.5">
              {project.screenshots.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Go to image ${idx + 1}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                    setSelectedImage(project.screenshots[idx]);
                  }}
                  className={`h-0.5 transition-all duration-200 ${
                    idx === currentImageIndex ? "w-6 bg-[#3FB8C0]" : "w-3 bg-white/40 hover:bg-white/70"
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
    <div className="relative z-[2] min-h-screen flex flex-col items-center justify-center gap-6 px-5 text-center">
      
      <p className="font-display font-black uppercase text-6xl md:text-8xl leading-none">Not found</p>
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-sm font-medium hover:text-signal transition-colors"
      >
        ← Go back
      </button>
    </div>
  );
};

export default DisplayProject;
