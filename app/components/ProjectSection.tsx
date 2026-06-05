import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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
      <h1 className="text-left font-bold text-3xl text-gray-900 dark:text-white mb-3">
        Projects
      </h1>
      <div className="w-6 h-0.5 bg-primaryColor mb-12 rounded-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project: Project, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group rounded-xl border border-widthGray dark:border-grayColor/30 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden h-48">
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
              <h2 className="font-bold text-lg text-gray-900 dark:text-white leading-snug">
                {project.name}
              </h2>

              <p className="text-base text-description-light dark:text-description-dark leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="text-xs px-2.5 py-0.5 rounded-full border border-primaryColor/40 text-primaryColor dark:border-secondaryColor/30 dark:text-secondaryColor"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-1">
                <Link
                  href={{ pathname: "/pages/", query: { id: project.id } }}
                  className="group/btn inline-flex items-center gap-2 text-sm text-primaryColor dark:text-secondaryColor border border-primaryColor dark:border-secondaryColor px-4 py-1.5 rounded-full hover:bg-primaryColor hover:text-whiteColor dark:hover:bg-secondaryColor dark:hover:text-textDark transition-all duration-200"
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
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-primaryColor text-primaryColor dark:border-secondaryColor dark:text-secondaryColor hover:bg-primaryColor hover:text-whiteColor dark:hover:bg-secondaryColor dark:hover:text-textDark transition-all duration-200"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                ) : (
                  <span className="text-sm italic text-description-light dark:text-description-dark">
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
