import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "./type";
import projects from "./projects";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col py-24 md:py-32"
    >
      <SectionHeading>Projects</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project: Project, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group rounded-xl border border-line bg-surface/60 overflow-hidden hover:border-accent/50 transition-colors duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden h-44 border-b border-line">
              <Image
                src={project.image}
                alt={project.name}
                width={800}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="font-bold text-base text-fg leading-snug">
                {project.name}
              </h2>

              <p className="text-sm text-muted leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-2xs px-2 py-0.5 rounded-md border border-line text-muted font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-1">
                <Link
                  href={{ pathname: "/pages/", query: { id: project.id } }}
                  className="group/btn inline-flex items-center gap-2 text-xs text-accent border border-accent/50 px-3.5 py-1.5 rounded-full hover:bg-accent hover:text-bg transition-all duration-200"
                >
                  View Details
                  <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>

                {project.projectUrl ? (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name} online`}
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-accent/50 text-accent hover:bg-accent hover:text-bg transition-all duration-200"
                  >
                    <FaExternalLinkAlt className="text-2xs" />
                  </a>
                ) : (
                  <span className="text-xs italic text-muted">
                    Not available online
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
