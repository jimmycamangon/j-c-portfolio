import React, { useRef } from "react";
import Image from "next/image";
import AMSPEC from "../../public/logo-amspec.jpg";
import ITM from "../../public/logo-itm.jpeg";
import { motion, useInView } from "framer-motion";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col py-16 md:py-32"
    >
      <div className="flex-grow">
        <h1 className="text-left font-bold text-3xl text-gray-900 dark:text-white">
          Work Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <br />
        {/* Flex Section */}
        <div className="w-full py-4">
          <div className="flex space-y-10 justify-center align-top md:space-x-10 md:flex-row md:text-left relative">
            <div className="absolute left-10 top-0 flex justify-center items-center dark:bg-darkTheme rounded-md md">
              <Image
                src={AMSPEC}
                alt="Company Logo"
                width={180}
                height={50}
                className="rounded-md"
              />
            </div>
            <div className="text-left md:w-full md:text-left pt-4 flex flex-col">
              <div className="text-gray-900 dark:text-white font-bold text-2xl py-2">
                Programmer
              </div>
              <span className="font-bold text-gray-900 dark:text-white">
                Amalgamated Specialties Corporation (AMSPEC) • Muntinlupa, Metro
                Manila
              </span>
              <span className="font-normal italic text-description-light dark:text-description-dark">
                September 2023 to October 2025 (2 years)
              </span>
              <br />
              <ul className="space-y-2 text-description-light dark:text-description-dark">
                <li className="text-left">
                  As <b>primary developer</b> (with consultant mentorship) at
                  AMSPEC:
                  <ul className="ml-5 mt-1 space-y-1 list-disc">
                    <li>
                      Upgraded and maintained enterprise{" "}
                      <b>WinForms applications</b> (Payroll/Financial Systems)
                    </li>
                    <li>
                      Completed unfinished <b>Accounts Receivable</b> module
                    </li>
                    <li>
                      Migrated approximately 70% of the <b>Accounts Payable</b>{" "}
                      module from a legacy system to a new platform
                    </li>
                  </ul>
                </li>

                <li className="text-left">
                  <b className="text-gray-900 dark:text-white">
                    Key Contributions:
                  </b>
                  <ul className="ml-5 mt-1 space-y-1 list-disc">
                    <li>
                      Developed critical financial reports:
                      <ul className="ml-5 mt-1 space-y-1 list-disc">
                        <li>
                          <b>Sales Comparison</b> (decision-making support)
                        </li>
                        <li>
                          <b>Placement & Undelivered</b> (tracking efficiency)
                        </li>
                        <li>
                          <b>PO Inventory Summary</b> (stock management)
                        </li>
                      </ul>
                    </li>
                    <li>
                      Implemented <b>new features</b> for company website:
                      <ul className="ml-5 mt-1 space-y-1 list-disc">
                        <li>
                          <b>Dynamic pricing</b> system (eliminated manual
                          updates)
                        </li>
                        <li>
                          <b>Admin portal</b> with product CRUD operations +
                          audit logging
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* End */}
        <h1 className="pt-10 font-bold text-1xl text-primaryColor dark:text-secondaryColor md:p-6 p-8">
          Core Technologies:{" "}
          <span className="text-grayColor font-semibold dark:text-whiteColor">
            C# | PHP | SQL Server | Crystal Report
          </span>
        </h1>

        <div className="border-2 text-widthGray"></div>

        <div className="w-full py-4">
          <div className="flex space-y-10 justify-center align-top md:space-x-10 md:flex-row md:text-left relative">
            {/* Company Logo */}
            <div className="absolute left-10 top-0 flex justify-center items-center dark:bg-darkTheme rounded-md">
              <Image
                src={ITM}
                alt="ITM Logo"
                width={180}
                height={50}
                className="rounded-md"
              />
            </div>

            {/* Content */}
            <div className="text-left md:w-full pt-4 flex flex-col">
              <div className="text-gray-900 dark:text-white font-bold text-2xl py-2">
                .NET Developer
              </div>

              <span className="font-bold text-gray-900 dark:text-white">
                ITM (Agency) • Client: Toyota Motor Philippines
              </span>

              <span className="font-normal italic text-description-light dark:text-description-dark mt-1">
                November 2025 – Present
              </span>

              <ul className="mt-4 space-y-3 text-description-light dark:text-description-dark">
                <li>
                  <b className="text-gray-900 dark:text-white">
                    Current Responsibilities:
                  </b>
                  <ul className="ml-5 mt-2 space-y-1 list-disc">
                    <li>
                      Onboarded to existing <b> .NET / ASP.NET Core</b>{" "}
                      applications by learning project business flows and
                      development standards
                    </li>
                    <li>
                      Developing assigned report-generation features within the
                      existing codebase
                    </li>
                    <li>
                      Created and modified <b>SQL Server</b> stored procedure
                      to support reporting and application requirements
                    </li>
                    <li>
                      Used Azure DevOps for source control, task tracking, and
                      basic deployment activities
                    </li>
                    <li>
                      Followed internal coding standards and workflows during
                      development
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* End */}
        <h1 className="pt-10 font-bold text-1xl text-primaryColor dark:text-secondaryColor md:p-6 p-8">
          Core Technologies:{" "}
          <span className="text-grayColor font-semibold dark:text-whiteColor">
            .NET / ASP.NET Core | C# | SQL Server | Azure DevOps
          </span>
        </h1>
        <div className="border-2 text-widthGray"></div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
