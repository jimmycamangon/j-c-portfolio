import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";
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
      <SectionHeading>Contact</SectionHeading>

      <p className="text-lg font-bold tracking-tight text-fg mb-1.5">
        Collab? Sure. Need code? Done.
      </p>
      <p className="text-sm text-muted mb-10">
        I&apos;m all in — sleep is optional.
      </p>

      <div className="w-full h-px bg-line mb-10" />

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
                className="group flex items-center gap-4 px-4 py-3 rounded-xl border border-line bg-surface/60 hover:border-accent/60 transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent shrink-0 group-hover:bg-accent group-hover:text-bg transition-all duration-200">
                  <Icon className="text-base" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-2xs uppercase tracking-[0.2em] text-accent">
                    {contact.label}
                  </span>
                  <span className="text-sm text-muted group-hover:text-fg transition-colors duration-200">
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
