import React, { useRef } from "react";
import Image from "next/image";
import Avatar from "../../public/J-C Avatar.png";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { FaGithub, FaDocker, FaDatabase, FaFileAlt } from "react-icons/fa";
import { SiAzuredevops, SiVisualstudiocode, SiVisualstudio, SiMysql, SiCsharp, SiPhp, SiDotnet, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si";

const languages = [
  { name: "C#",           icon: SiCsharp,       color: "group-hover:text-[#239120]" },
  { name: "PHP",          icon: SiPhp,          color: "group-hover:text-[#777BB4]" },
  { name: ".NET",         icon: SiDotnet,       color: "group-hover:text-[#512BD4]" },
  { name: "React",        icon: SiReact,        color: "group-hover:text-[#61DAFB]" },
  { name: "TypeScript",   icon: SiTypescript,   color: "group-hover:text-[#3178C6]" },
  { name: "JavaScript",   icon: SiJavascript,   color: "group-hover:text-[#F7DF1E]" },
  { name: "Tailwind CSS", icon: SiTailwindcss,  color: "group-hover:text-[#06B6D4]" },
  { name: "Bootstrap",   icon: SiBootstrap,    color: "group-hover:text-[#7952B3]" },
];

const skills = [
  { name: "Github",          icon: FaGithub,          color: "group-hover:text-fg" },
  { name: "Azure DevOps",    icon: SiAzuredevops,      color: "group-hover:text-[#0078d4]" },
  { name: "Docker",          icon: FaDocker,           color: "group-hover:text-[#2496ED]" },
  { name: "SQL Server",      icon: FaDatabase,         color: "group-hover:text-[#CC2927]" },
  { name: "MySQL",           icon: SiMysql,            color: "group-hover:text-[#00758F]" },
  { name: "Crystal Reports", icon: FaFileAlt,          color: "group-hover:text-[#14A44D]" },
  { name: "VS Code",         icon: SiVisualstudiocode, color: "group-hover:text-[#007ACC]" },
  { name: "Visual Studio",   icon: SiVisualstudio,     color: "group-hover:text-[#5C2D91]" },
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
      <SectionHeading>About Me</SectionHeading>

      {/* Bio */}
      <div className="flex items-start gap-5 mb-12">
        <Image
          src={Avatar}
          alt="Jimmy Camangon"
          width={56}
          height={56}
          className="rounded-full object-cover shrink-0"
        />
        <div className="flex flex-col gap-2">
          <span className="font-bold text-sm text-fg">
            Jimmy Camangon — BSc in Information Technology
          </span>
          <p className="text-sm text-muted leading-relaxed">
            Passionate about code since Senior High (ICT). I build scalable
            solutions, solve real problems, and turn ideas into efficient
            reliable software. Now shipping robust software that just works.~
          </p>
        </div>
      </div>

      <div className="w-full h-px bg-line mb-10" />

      {/* Languages & Frameworks */}
      <p className="font-mono text-2xs uppercase tracking-[0.2em] text-muted mb-8">
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
              className="flex flex-col items-center gap-2 group"
            >
              <Icon className={`text-2xl text-muted ${lang.color} transition-colors duration-200`} />
              <span className="font-mono text-2xs text-muted">
                {lang.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="w-full h-px bg-line mb-10" />

      {/* Tools */}
      <p className="font-mono text-2xs uppercase tracking-[0.2em] text-muted mb-8">
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
              className="flex flex-col items-center gap-2 group"
            >
              <Icon className={`text-2xl text-muted ${skill.color} transition-colors duration-200`} />
              <span className="font-mono text-2xs text-muted">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      <p className="italic text-xs text-muted mt-10">
        Tools of my trade.
      </p>
    </motion.section>
  );
};

export default AboutSection;
