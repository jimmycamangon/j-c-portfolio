import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import AMSPEC from "../../public/logo-amspec.jpg";
import ITM from "../../public/logo-itm.jpeg";
import { motion, useInView } from "framer-motion";

type Experience = {
  role: string;
  company: string;
  period: string;
  logo: StaticImageData;
  highlights: string[];
  tech: string[];
};

const experiences: Experience[] = [
  {
    role: ".NET Developer",
    company: "ITM (Agency) · Client: Toyota Motor Philippines",
    period: "Nov 2025 – Present",
    logo: ITM,
    highlights: [
      "Developed report-generation features and production sequence for a Production Scheduling System using .NET / ASP.NET Core",
      "Migrated data access from Razor Page–to–database calls to an API-based architecture",
      "Created and modified SQL Server stored procedures to support reporting and application requirements",
      "Used Azure DevOps for source control, work item tracking, and CI/CD pipelines",
    ],
    tech: [".NET", "ASP.NET Core", "C#", "SQL Server", "Azure DevOps", "Razor"],
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32">
      <h2 className="font-bold text-3xl text-gray-900 dark:text-white mb-3">
        Work Experience
      </h2>
      <div className="w-6 h-0.5 bg-primaryColor mb-12 rounded-full" />

      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="grid grid-cols-[20px_1fr] gap-x-6"
          >
            {/* Timeline column: dot + connecting line */}
            <div className="flex flex-col items-center">
              <div className="mt-1.5 w-2.5 h-2.5 rounded-full bg-primaryColor shrink-0" />
              {i < experiences.length - 1 && (
                <div className="w-0.5 flex-1 bg-widthGray dark:bg-grayColor mt-1 rounded-full" />
              )}
            </div>

            {/* Content column */}
            <div className="pb-12">
              {/* Role + date */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="font-bold text-xl text-gray-900 dark:text-white leading-tight">
                  {exp.role}
                </span>
                <span className="text-sm text-description-light dark:text-description-dark whitespace-nowrap shrink-0 mt-1">
                  {exp.period}
                </span>
              </div>

              {/* Company + logo */}
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={52}
                  height={52}
                  className="rounded-md object-contain shrink-0 border border-gray-200 dark:border-gray-700 p-0.5"
                />
                <p className="text-base text-description-light dark:text-description-dark">
                  {exp.company}
                </p>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-base text-description-light dark:text-description-dark leading-relaxed"
                  >
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-primaryColor shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, k) => (
                  <span
                    key={k}
                    className="text-xs px-2.5 py-0.5 rounded-full border border-primaryColor/40 text-primaryColor dark:border-secondaryColor/30 dark:text-secondaryColor"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
