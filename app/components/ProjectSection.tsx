import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "./type";
import projects from "./projects";
import SectionHeader from "./SectionHeader";

// Asymmetric 12-col rhythm: wide/narrow, narrow/wide, then thirds
const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-4", "md:col-span-4", "md:col-span-4"];

// "DACCS (Digital Application ...)" -> ["DACCS", "Digital Application ..."]
export const splitName = (name: string): [string, string | null] => {
  const match = name.match(/^(.*?)\s*\((.*)\)\s*$/);
  return match ? [match[1], match[2]] : [name, null];
};

const MAX_TAGS = 4;

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32">
      <SectionHeader index="02" title="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-14">
        {projects.map((project: Project, idx: number) => {
          const [shortName] = splitName(project.name);
          const extra = project.technologies.length - MAX_TAGS;
          const detailsHref = { pathname: "/pages/", query: { id: project.id } };

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className={`group flex flex-col ${SPANS[idx % SPANS.length]}`}
            >
              <Link href={detailsHref} className="block" aria-label={`View details for ${shortName}`}>
                <div className="relative overflow-hidden aspect-[16/10] rounded-xl bg-panel ring-1 ring-line/10">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              </Link>

              <div className="mt-5 flex flex-col gap-3 flex-1">
                <h3 className="font-display font-black uppercase text-3xl md:text-4xl leading-[0.9] tracking-tight group-hover:text-signal transition-colors">
                  {shortName}
                </h3>

                <p className="text-ink/70 leading-relaxed line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, MAX_TAGS).map((tech) => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                  {extra > 0 && <span className="tag !text-muted">+{extra}</span>}
                </div>

                <div className="mt-auto pt-2 flex items-center gap-5 text-sm font-medium">
                  <Link
                    href={detailsHref}
                    className="group/btn inline-flex items-center gap-1.5 hover:text-signal transition-colors"
                  >
                    Details
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </Link>

                  {project.projectUrl && (
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.name} online`}
                      className="group/live inline-flex items-center gap-1.5 text-muted hover:text-signal transition-colors"
                    >
                      Visit
                      <span className="transition-transform duration-300 group-hover/live:-translate-y-0.5 group-hover/live:translate-x-0.5">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
