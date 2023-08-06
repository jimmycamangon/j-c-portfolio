import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { FaArrowRight } from 'react-icons/fa';
import { Project } from '../data/type';
import projects from "../data/projects"

const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-12 md:pb-48">
      <h1 className="my-10 text-center font-bold text-3xl text-primaryColor dark:text-secondaryColor">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project: Project, idx: number) => {
          const isOdd = idx % 2 !== 0;
          const fadeInAnimation = isOdd ? "animate-fadeInRight" : "animate-fadeInLeft";

          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className={`flex flex-col ${fadeInAnimation} animation-delay-2 md:flex-row md:space-x-12`}>
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
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection;
