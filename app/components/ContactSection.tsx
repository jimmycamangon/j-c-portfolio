import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  BiLogoGmail,
  BiLogoLinkedinSquare,
  BiLogoGithub,
} from "react-icons/bi";
import Link from "next/link";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }} 
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5 }} 
      className="pb-12 md:pb-48 text-center"
    >
      <section id="contact" className="py-12 md:py-24">
        <h1 className="text-3xl text-left font-bold text-primaryColor dark:text-secondaryColor mb-4">
          Contact
        </h1>

        <p className="text-lg text-left dark:text-whiteColor mb-2">
          Collab? Sure. Need code? Done.
        </p>
        <p className="text-left text-gray-500 dark:text-gray-400 mb-6">
          I’m all in — coffee helps.
        </p>

        <div className="text-left space-y-4">
          <p className="flex items-start justify-start gap-2 text-sm dark:text-secondaryColor">
            <BiLogoGmail className="text-xl" />
            hi@jimmycamangon121801@gmail.com
          </p>

          <div className="flex items-start justify-start gap-4 text-primaryColor dark:text-secondaryColor text-sm">
            <Link
              href="https://github.com/jimmycamangon"
              target="_blank"
              className="hover:underline flex items-center gap-1"
            >
              <BiLogoGithub className="text-xl" />
              GitHub
            </Link>
            <span>|</span>
            <Link
              href="https://www.linkedin.com/in/camangon-jimmy-jr-b-b88003294/"
              target="_blank"
              className="hover:underline flex items-start gap-1"
            >
              <BiLogoLinkedinSquare className="text-xl" />
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </motion.section>
  );
};

export default ContactSection;
