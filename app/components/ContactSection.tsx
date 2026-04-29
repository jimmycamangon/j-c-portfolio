import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoGmail, BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";
import Link from "next/link";

const contacts = [
  {
    label: "Email",
    value: "jimmycamangon7@gmail.com",
    icon: BiLogoGmail,
    href: "mailto:jimmycamangon7@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/jimmycamangon",
    icon: BiLogoGithub,
    href: "https://github.com/jimmycamangon",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/camangon-jimmy",
    icon: BiLogoLinkedinSquare,
    href: "https://www.linkedin.com/in/camangon-jimmy-jr-b-b88003294/",
    external: true,
  },
];

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
      className="flex flex-col py-24 md:py-32"
    >
      <h1 className="text-left font-bold text-3xl text-gray-900 dark:text-white mb-3">
        Contact
      </h1>
      <div className="w-6 h-0.5 bg-primaryColor mb-12 rounded-full" />

      <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Collab? Sure. Need code? Done.
      </p>
      <p className="text-base text-description-light dark:text-description-dark mb-10">
        I&apos;m all in — sleep is optional.
      </p>

      <div className="w-full h-px bg-widthGray dark:bg-grayColor/30 mb-10" />

      <div className="flex flex-col gap-3">
        {contacts.map((contact, idx) => {
          const Icon = contact.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.1 }}
            >
              <Link
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 rounded-xl border border-widthGray dark:border-grayColor/30 hover:border-primaryColor dark:hover:border-secondaryColor transition-all duration-200 hover:shadow-md"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primaryColor/10 dark:bg-secondaryColor/10 text-primaryColor dark:text-secondaryColor shrink-0 group-hover:bg-primaryColor group-hover:text-whiteColor dark:group-hover:bg-secondaryColor dark:group-hover:text-textDark transition-all duration-200">
                  <Icon className="text-xl" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primaryColor dark:text-secondaryColor">
                    {contact.label}
                  </span>
                  <span className="text-base text-description-light dark:text-description-dark group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                    {contact.value}
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default ContactSection;
