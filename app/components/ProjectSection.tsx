import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
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
      className="pb-12 md:pb-48"
    >
      <h1 className="my-10 text-left font-bold text-3xl text-primaryColor dark:text-secondaryColor">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project: Project, idx: number) => {
          const isOdd = idx % 2 !== 0;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isOdd ? 50 : -50 }} 
              animate={isInView ? { opacity: 1, x: 0 } : {}} 
              transition={{ duration: 0.5, delay: idx * 0.2 }} 
            >
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2 flex items-center">
                  <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl"
                  />
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-2xl font-bold mb-3">{project.name}</h1>
                  <p className="text-md leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link
                      href={{ pathname: "/pages/", query: { id: project.id } }}
                    >
                      <div className="text-primaryColor dark:text-secondaryColor underline flex justify-between w-full items-center transition-transform hover:translate-x-3">
                        <span className="mr-2">Explore</span> <FaArrowRight />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;