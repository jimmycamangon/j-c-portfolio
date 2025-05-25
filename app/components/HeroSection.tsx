import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-scroll";
import { FaCaretDown } from "react-icons/fa";

const HeroSection = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="home"
      ref={ref} 
      initial={{ opacity: 0, y: 50 }} 
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5 }} 
      className="min-h-screen flex flex-col items-center justify-center py-16 sm:py-32 md:flex-row md:justify-between md:items-center"
    >
      {/* Left Section: Heading */}
      <motion.div
        className="md:w-3/4 lg:w-2/3 space-y-5 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">
          Hey 👋, I&apos;m{" "}
          <span className="text-primaryColor font-bold dark:text-secondaryColor">
            Jim
          </span>{" "}
          —
        </h1>
        <h2 className="text-3xl">Software Developer</h2>
        <hr className="w-full border-t-2 dark:border-secondaryColor my-4" />
        <p className="text-md">PHP · C# · .NET · React · TypeScript</p>
        <div className="flex items-center justify-center space-x-4">
          <Link
            to="projects"
            smooth={true}
            offset={-100}
            duration={500}
            className="cursor-pointer transition-transform hover:translate-y-[-5px] text-3xl"
          >

            <motion.div
              animate={{
                y: [0, 10, 0], 
              }}
              transition={{
                duration: 2,
                repeat: Infinity, 
              }}
            >
              <Link
                to="projects"
                smooth={true}
                offset={-100}
                duration={500}
                className="cursor-pointer text-4xl "
              >
                <FaCaretDown title={"Projects"} />
              </Link>
            </motion.div>
          </Link>
        </div>
      </motion.div>


      <motion.div
        className="hidden md:block md:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
      >
        {/* Temporary Empty */}
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
