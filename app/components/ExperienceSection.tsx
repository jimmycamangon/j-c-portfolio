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
    >
      <div className="pb-12 md:pb-60 relative">
        <h1 className="text-left font-bold text-3xl text-primaryColor dark:text-secondaryColor">
          Work Experience
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <br />
        {/* Flex Section */}
        <div className="w-full py-4">
          <div className="flex space-y-10 justify-center align-top md:space-x-10 md:flex-row md:text-left relative">
            <div className="absolute left-10 top-0 flex justify-center items-center dark:bg-darkTheme  rounded-md md">
              <Image
                src={AMSPEC}
                alt="Company Logo"
                width={180}
                height={50}
                className="rounded-md"
              />
            </div>
            <div className="text-left md:w-full md:text-left pt-4 flex flex-col">
              <div className="text-primaryColor font-bold text-2xl py-2 dark:text-secondaryColor">
                Programmer
              </div>
              <span className="font-bold">
                Amalgamated Specialties Corporation (AMSPEC) • Muntinlupa, Metro
                Manila
              </span>
              <br />
              <span className="font-normal italic">
                September 2023 to Present
              </span>
              <br />
              <ul className="space-y-2">
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
                  <b>Key Contributions:</b>
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
                      Optimized 10+ <b>SQL stored procedures</b> (~40% faster
                      queries)
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
