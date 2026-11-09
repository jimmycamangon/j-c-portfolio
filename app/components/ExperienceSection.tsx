import React from "react";
import Image, { StaticImageData } from "next/image";
import AMSPEC from "../../public/logo-amspec.jpg";
import ITM from "../../public/logo-itm.jpeg";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

type Experience = {
  role: string;
  company: string;
  period: string;
  logo: StaticImageData;
  current?: boolean;
  highlights: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    role: ".NET Developer",
    company: "IT Managers Inc. (Agency) | Client: Toyota Motor Philippines",
    period: "Nov 2025 – Present",
    logo: ITM,
    current: true,
    highlights: [
      "Delivered 10 modules on VIMS (Vehicle Import Management System), built with React, ASP.NET Core and SQL Server, covering shipment monitoring, cost reporting and dashboards",
      "Wrote the endpoint that receives shipment data from another Toyota system into staging tables and moves it to the main ones, built and deployed on a short deadline to unblock another team",
      "On the Production Scheduling System, wrote the sequence reports and the line-leveling logic for lot sequencing, and moved data access to an API layer",
    ],
    tech: [".NET", "ASP.NET Core", "C#", "SQL Server", "Azure DevOps", "Razor", "React", "Javascript"],
  },
  {
    role: "Programmer",
    company: "Amalgamated Specialties Corporation (AMSPEC) · Muntinlupa, Metro Manila",
    period: "Sep 2023 – Oct 2025",
    logo: AMSPEC,
    highlights: [
      "Upgraded and maintained enterprise WinForms applications including Payroll and Financial Systems",
      "Completed unfinished Accounts Receivable module and migrated ~70% of Accounts Payable from a legacy system",
      "Developed critical financial reports: Sales Comparison, Placement & Undelivered, and PO Inventory Summary",
      "Implemented dynamic pricing system and admin portal with CRUD operations and audit logging for the company website",
    ],
    tech: ["C#", "PHP", "SQL Server", "Crystal Report"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 md:py-32">
      <SectionHeader index="01" title="Experience" />

      <div className="border-t border-line/10">
        {experiences.map((exp, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
            className="group grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 border-b border-line/10"
          >
            {/* Meta column */}
            <div className="md:col-span-3 flex md:flex-col items-start justify-between md:justify-start gap-4">
              <div className="space-y-2">
                <p className="text-sm text-muted tabular-nums">{exp.period}</p>
                {exp.current && (
                  <p className="inline-flex items-center gap-2 text-xs font-medium text-signal">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal animate-blink" />
                    Current
                  </p>
                )}
              </div>
              <Image
                src={exp.logo}
                alt={exp.company}
                width={56}
                height={56}
                className="w-14 h-14 object-contain rounded-lg bg-white p-1 ring-1 ring-line/10"
              />
            </div>

            {/* Body column */}
            <div className="md:col-span-9">
              <h3 className="font-display font-black uppercase text-4xl md:text-5xl leading-[0.9] tracking-tight group-hover:text-signal transition-colors duration-300">
                {exp.role}
              </h3>
              <p className="mt-3 text-muted">{exp.company}</p>

              <ul className="mt-6 space-y-3">
                {exp.highlights.map((point, j) => (
                  <li key={j} className="flex gap-3 leading-relaxed text-ink/75">
                    <span className="mt-[0.6rem] w-1.5 h-1.5 rounded-full bg-signal shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
