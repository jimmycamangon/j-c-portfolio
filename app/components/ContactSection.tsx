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

      <div className="grid md:grid-cols-12 gap-10 md:gap-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 text-2xl md:text-3xl font-bold leading-snug"
        >
          Collab? Sure.<br />
          <span className="text-signal">Need code? Done.</span>
        </motion.p>

        <ul className="md:col-span-7 border-t border-line/10">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.li
                key={contact.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Link
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 py-4 border-b border-line/10"
                >
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-panel text-muted shrink-0 group-hover:bg-signal/10 group-hover:text-signal transition-colors">
                    <Icon className="text-lg" />
                  </span>
                  <span className="flex flex-col min-w-0">
                    <span className="text-xs text-muted">{contact.label}</span>
                    <span className="font-medium truncate group-hover:text-signal transition-colors">
                      {contact.value}
                    </span>
                  </span>
                  <span className="ml-auto text-muted group-hover:text-signal group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all">
                    ↗
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
