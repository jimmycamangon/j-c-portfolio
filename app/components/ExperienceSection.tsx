import React, { useRef } from "react";
import Image from "next/image";
import AMSPEC from "../../public/logo-amspec.jpg";
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
              <br />
              <span className="font-normal italic text-description-light dark:text-description-dark">
                September 2023 to November 2025 (2 years)
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
                      Completed unfinished <b>Accounts Receivable</b> system
                    </li>
                    <li>
                      Revamped <b>Accounts Payable</b> module (in progress)
                    </li>
                  </ul>
                </li>

                <li className="text-left">
                  <b className="text-gray-900 dark:text-white">Key Contributions:</b>
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
        <div className="border-2 text-widthGray"></div>

        {/* End */}
        <h1 className="pt-10 font-bold text-1xl text-primaryColor dark:text-secondaryColor md:p-6 p-8">
          Core Technologies:{" "}
          <span className="text-grayColor font-semibold dark:text-whiteColor">
            C# | PHP | SQL Server | Crystal Report
          </span>
        </h1>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
