import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import AMSPEC from "../../public/logo-amspec.jpg";
import ITM from "../../public/logo-itm.jpeg";
import { motion, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading";

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
    company: "IT Managers Inc. (Agency) | Client: Toyota Motor Philippines",
    period: "Nov 2025 – Present",
    logo: ITM,
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" ref={ref} className="py-24 md:py-32">
      <SectionHeading>Work Experience</SectionHeading>

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
              <div className="mt-1.5 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent)/0.6)] shrink-0" />
              {i < experiences.length - 1 && (
                <div className="w-px flex-1 bg-line mt-2" />
              )}
            </div>

            {/* Content column */}
            <div className="pb-12">
              {/* Role + date */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="font-bold text-base text-fg leading-tight">
                  {exp.role}
                </span>
                <span className="font-mono text-2xs text-muted whitespace-nowrap shrink-0 mt-1">
                  {exp.period}
                </span>
              </div>

              {/* Company + logo */}
              <div className="flex items-center gap-2.5 mb-4">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={36}
                  height={36}
                  className="rounded-md object-contain shrink-0 border border-line p-0.5"
                />
                <p className="text-sm text-muted">
                  {exp.company}
                </p>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-5">
                {exp.highlights.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm text-muted leading-relaxed"
                  >
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-accent shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, k) => (
                  <span
                    key={k}
                    className="text-2xs px-2 py-0.5 rounded-md border border-line text-muted font-mono"
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
