import React from "react";
import { motion } from "framer-motion";
import { BiLogoGmail, BiLogoLinkedinSquare, BiLogoGithub } from "react-icons/bi";
import Link from "next/link";
import SectionHeader from "./SectionHeader";

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
  return (
    <section id="contact" className="py-24 md:py-32">
      <SectionHeader index="04" title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <p className="font-display font-black uppercase leading-[0.9] text-4xl md:text-6xl">
          Collab? Sure.<br />
          <span className="text-signal">Need code? Done.</span>
        </p>
      </motion.div>

      <div className="border-t border-line/10">
        {contacts.map((contact, idx) => {
          const Icon = contact.icon;
          return (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <Link
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group relative grid grid-cols-[auto_1fr_auto] md:grid-cols-[8rem_1fr_auto] items-center gap-4 md:gap-8 py-6 border-b border-line/10 overflow-hidden"
              >
                {/* Fill sweep */}
                <span className="absolute inset-0 bg-signal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)]" />

                <span className="relative label group-hover:!text-paper transition-colors inline-flex items-center gap-2 pl-1">
                  <Icon className="text-base" />
                  <span className="hidden sm:inline">{contact.label}</span>
                </span>
                <span className="relative font-display font-bold uppercase text-xl sm:text-3xl md:text-4xl leading-none tracking-tight truncate group-hover:text-paper transition-colors">
                  {contact.value}
                </span>
                <span className="relative font-display text-3xl md:text-5xl leading-none pr-1 group-hover:text-paper group-hover:rotate-45 transition-all duration-500">
                  ↗
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ContactSection;
