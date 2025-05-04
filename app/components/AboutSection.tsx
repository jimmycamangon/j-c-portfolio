import React, { useRef } from "react";
import Image from "next/image";
import Avatar from "../../public/J-C Avatar.png";
import { motion, useInView } from "framer-motion";

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
  { name: "Github" },
  { name: "Azure DevOps" },
  { name: "Docker" },
  { name: "SQL Server" },
  { name: "MySQL" },
  { name: "Crystal Reports" },
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
    >
      <div className="pb-60 md:pb-48">
        <h1 className="text-left font-bold text-3xl text-primaryColor dark:text-secondaryColor">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/6 flex justify-center items-center">
            <Image src={Avatar} alt="Avatar" width={150} height={150} />
          </div>

          <div className="text-center md:w-5/6 md:text-left">
            <span className="font-bold">
              Jimmy Camangon | BSc in Information Technology
            </span>
            <br />
            <br />
            Passionate about code since Senior High (ICT). I build scalable
            solutions, solve real problems, and turn ideas into efficient
            reliable software. Now shipping robust software that just works.~
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <h1 className="text-center pt-10 font-bold text-3xl text-primaryColor dark:text-secondaryColor md:p-6 p-8">
          Development Tools
        </h1>
        <div className="space-y-5">
          <div className="flex md:flex-row flex-wrap justify-center items-center">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-2 flex justify-center flex-col items-center"
              >
                <h1 className="text-center shadow-md p-2 rounded bg-grayColor text-whiteColor">
                  {skill.name}
                </h1>
              </div>
            ))}
          </div>

          <p className="italic opacity-80 text-center">Tools of my trade.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
