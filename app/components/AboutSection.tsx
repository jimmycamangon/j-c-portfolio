import React, { useRef } from "react";
import Image from "next/image";
import Avatar from "../../public/J-C Avatar.png";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaDocker, FaDatabase, FaFileAlt } from "react-icons/fa";
import { SiAzuredevops, SiVisualstudiocode, SiVisualstudio, SiMysql, SiCsharp, SiPhp, SiDotnet, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si";

const languages = [
  { name: "C#",           icon: SiCsharp,       color: "text-[#239120]" },
  { name: "PHP",          icon: SiPhp,          color: "text-[#777BB4]" },
  { name: ".NET",         icon: SiDotnet,       color: "text-[#512BD4]" },
  { name: "React",        icon: SiReact,        color: "text-[#61DAFB]" },
  { name: "TypeScript",   icon: SiTypescript,   color: "text-[#3178C6]" },
  { name: "JavaScript",   icon: SiJavascript,   color: "text-[#F7DF1E]" },
  { name: "Tailwind CSS", icon: SiTailwindcss,  color: "text-[#06B6D4]" },
  { name: "Bootstrap",   icon: SiBootstrap,    color: "text-[#7952B3]" },
];

const skills = [
  { name: "Github",          icon: FaGithub,          color: "text-[#2b3137] dark:text-[#f0f6fc]" },
  { name: "Azure DevOps",    icon: SiAzuredevops,      color: "text-[#0078d4]" },
  { name: "Docker",          icon: FaDocker,           color: "text-[#2496ED]" },
  { name: "SQL Server",      icon: FaDatabase,         color: "text-[#CC2927]" },
  { name: "MySQL",           icon: SiMysql,            color: "text-[#00758F]" },
  { name: "Crystal Reports", icon: FaFileAlt,          color: "text-[#14A44D]" },
  { name: "VS Code",         icon: SiVisualstudiocode, color: "text-[#007ACC]" },
  { name: "Visual Studio",   icon: SiVisualstudio,     color: "text-[#5C2D91]" },
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
      className="flex flex-col py-24 md:py-32"
    >
      <h1 className="text-left font-bold text-3xl text-gray-900 dark:text-white mb-3">
        About Me
      </h1>
      <div className="w-6 h-0.5 bg-primaryColor mb-12 rounded-full" />

      {/* Bio */}
      <div className="flex items-start gap-5 mb-12">
        <Image
          src={Avatar}
          alt="Jimmy Camangon"
          width={80}
          height={80}
          className="rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col gap-2">
          <span className="font-bold text-gray-900 dark:text-white">
            Jimmy Camangon — BSc in Information Technology
          </span>
          <p className="text-base text-description-light dark:text-description-dark leading-relaxed">
            Passionate about code since Senior High (ICT). I build scalable
            solutions, solve real problems, and turn ideas into efficient
            reliable software. Now shipping robust software that just works.~
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-widthGray dark:bg-grayColor/30 mb-10" />

      {/* Languages & Frameworks */}
      <p className="text-xs font-semibold uppercase tracking-widest text-primaryColor dark:text-secondaryColor mb-8">
        Languages &amp; Frameworks
      </p>

      <div className="flex flex-wrap gap-8 mb-12">
        {languages.map((lang, idx) => {
          const Icon = lang.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + idx * 0.06 }}
              className="flex flex-col items-center gap-1.5 group"
            >
              <Icon className={`text-4xl ${lang.color} group-hover:scale-110 transition-transform duration-200`} />
              <span className="text-xs text-description-light dark:text-description-dark">
                {lang.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="w-full h-px bg-widthGray dark:bg-grayColor/30 mb-10" />

      {/* Tools */}
      <p className="text-xs font-semibold uppercase tracking-widest text-primaryColor dark:text-secondaryColor mb-8">
        Tools
      </p>

      <div className="flex flex-wrap gap-8">
        {skills.map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 + idx * 0.06 }}
              className="flex flex-col items-center gap-1.5 group"
            >
              <Icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-200`} />
              <span className="text-xs text-description-light dark:text-description-dark">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      <p className="italic text-sm text-description-light dark:text-description-dark mt-10">
        Tools of my trade.
      </p>
    </motion.section>
  );
};

export default AboutSection;
