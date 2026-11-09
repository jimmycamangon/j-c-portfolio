import React from "react";
import Image from "next/image";
import Avatar from "../../public/J-C Avatar.png";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaGithub, FaDocker, FaDatabase, FaFileAlt } from "react-icons/fa";
import { SiAzuredevops, SiVisualstudiocode, SiVisualstudio, SiMysql, SiCsharp, SiPhp, SiDotnet, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiBootstrap } from "react-icons/si";
import SectionHeader from "./SectionHeader";

type Part = { name: string; icon: IconType };

const languages: Part[] = [
  { name: "C#",           icon: SiCsharp },
  { name: "PHP",          icon: SiPhp },
  { name: ".NET",         icon: SiDotnet },
  { name: "React",        icon: SiReact },
  { name: "TypeScript",   icon: SiTypescript },
  { name: "JavaScript",   icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap",    icon: SiBootstrap },
];

const skills: Part[] = [
  { name: "Github",          icon: FaGithub },
  { name: "Azure DevOps",    icon: SiAzuredevops },
  { name: "Docker",          icon: FaDocker },
  { name: "SQL Server",      icon: FaDatabase },
  { name: "MySQL",           icon: SiMysql },
  { name: "Crystal Reports", icon: FaFileAlt },
  { name: "VS Code",         icon: SiVisualstudiocode },
  { name: "Visual Studio",   icon: SiVisualstudio },
];

const StackGroup = ({ title, parts }: { title: string; parts: Part[] }) => (
  <div>
    <p className="label mb-4">{title}</p>
    <ul className="flex flex-wrap gap-2">
      {parts.map((part, idx) => {
        const Icon = part.icon;
        return (
          <motion.li
            key={part.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.04 }}
            className="group inline-flex items-center gap-2 rounded-full bg-panel px-4 py-2 text-sm font-medium text-ink/80 hover:bg-signal/10 hover:text-signal transition-colors"
          >
            <Icon className="text-base text-muted group-hover:text-signal transition-colors" />
            {part.name}
          </motion.li>
        );
      })}
    </ul>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <SectionHeader index="03" title="About" />

      <div className="grid md:grid-cols-12 gap-12 md:gap-10">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <div className="flex items-center gap-4">
            <Image
              src={Avatar}
              alt="Jimmy Camangon"
              width={72}
              height={72}
              className="w-[72px] h-[72px] rounded-full object-cover bg-panel"
            />
            <div>
              <p className="font-semibold">Jimmy Camangon</p>
              <p className="text-sm text-muted">BSc in Information Technology</p>
            </div>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-ink/75">
            Passionate about code since Senior High (ICT). I build scalable solutions
            and turn ideas into reliable software that just works.
          </p>
        </motion.div>

        {/* Stack */}
        <div className="md:col-span-7 space-y-8">
          <StackGroup title="Languages & Frameworks" parts={languages} />
          <StackGroup title="Tools" parts={skills} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
