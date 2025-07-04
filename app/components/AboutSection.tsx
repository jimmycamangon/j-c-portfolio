import React, { useRef } from "react";
import Image from "next/image";
import Avatar from "../../public/J-C Avatar.png";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaDocker, FaDatabase, FaFileAlt } from "react-icons/fa";
import { SiAzuredevops, SiVisualstudiocode, SiVisualstudio, SiMysql } from "react-icons/si";

// const skills = [
//   { name: "JAVA", image: "/JAVA.png" },
//   { name: "C++", image: "/C++.png" },
//   { name: "HTML", image: "/HTML.png" },
//   { name: "CSS", image: "/CSS.png" },
//   { name: "PHP", image: "/PHP.png" },
//   { name: "MYSQL", image: "/MYSQL.png" },
//   { name: "JAVASCRIPT", image: "/JAVASCRIPT.png" },
//   { name: "TAILWIND CSS", image: "/TAILWIND.png" },
//   { name: "REACT JS", image: "/REACT.png" },
//   { name: "C#", image: "/C_LOGO.png" },
//   { name: ".NETCore", image: "/NET_CORE.png" },
// ];
const skills = [
  { 
    name: "Github",
    icon: FaGithub,
    color: "text-[#2b3137] dark:text-[#f0f6fc]"
  },
  { 
    name: "Azure DevOps",
    icon: SiAzuredevops,
    color: "text-[#0078d4]"
  },
  { 
    name: "Docker",
    icon: FaDocker,
    color: "text-[#2496ED]"
  },
  { 
    name: "SQL Server",
    icon: FaDatabase,
    color: "text-[#CC2927]"
  },
  { 
    name: "MySQL",
    icon: SiMysql,
    color: "text-[#00758F]"
  },
  { 
    name: "Crystal Reports",
    icon: FaFileAlt,
    color: "text-[#14A44D]"
  },
  { 
    name: "VS Code",
    icon: SiVisualstudiocode,
    color: "text-[#007ACC]"
  },
  { 
    name: "Visual Studio",
    icon: SiVisualstudio,
    color: "text-[#5C2D91]"
  }
];
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  return (
    <motion.section
      id="about"
      ref={ref} 
      initial={{ opacity: 0, y: 50 }} 
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5 }} 
      className="min-h-screen flex flex-col py-16 md:py-32"
    >
      <div className="flex-grow">
        <h1 className="text-left font-bold text-3xl text-gray-900 dark:text-white">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/6 flex justify-center items-center">
            <Image src={Avatar} alt="Avatar" width={150} height={150} />
          </div>

          <div className="text-center md:w-5/6 md:text-left">
            <span className="font-bold text-gray-900 dark:text-white">
              Jimmy Camangon | BSc in Information Technology
            </span>
            <br />
            <br />
            <p className="text-description-light dark:text-description-dark">
              Passionate about code since Senior High (ICT). I build scalable
              solutions, solve real problems, and turn ideas into efficient
              reliable software. Now shipping robust software that just works.~
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <h1 className="text-center pt-10 font-bold text-3xl text-gray-900 dark:text-white md:p-6 p-8">
          Development Tools
        </h1>
        <div className="space-y-5">
          <div className="flex md:flex-row flex-wrap justify-center items-center gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  className="p-4 flex flex-col items-center justify-center group transition-all duration-300 hover:transform hover:scale-110"
                >
                  <Icon className={`text-5xl ${skill.color} mb-2 transition-all duration-300 group-hover:opacity-80`} />
                  <span className="text-sm text-description-light dark:text-description-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

          <p className="italic text-description-light dark:text-description-dark text-center mt-8">Tools of my trade.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
