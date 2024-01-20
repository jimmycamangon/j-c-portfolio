import React from "react"
import Image from "next/image"
import AMSPEC from "../../public/AMSPEC LOGO.png"

const ExperienceSection = () => {
    return(
<section id="experience">
    <div className="pb-12 md:pb-60 relative">
        <h1 className="text-center font-bold text-3xl text-primaryColor dark:text-secondaryColor">
            Work Experience
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        {/* Flex Section */}
        <div className="w-full py-4">
            <div className="flex space-y-10 justify-center align-top md:space-x-10 md:flex-row md:text-left relative">
                <div className="absolute left-0 top-0 flex justify-center items-center dark:bg-darkTheme bg-whiteColor rounded-md shadow-md md">
                    <Image src={AMSPEC} alt="Company Logo" width={450} height={100} className="rounded-md" />
                </div>
                <div className="text-center md:w-full md:text-left pt-24 flex flex-col"> 
                    <div className="text-primaryColor font-bold text-2xl py-2 dark:text-secondaryColor">Programmer</div>
                    <span className="font-bold">Amalgamated Specialties Corporation (AMSPEC) • Muntinlupa, Metro Manila</span><br />
                    <span className="font-normal italic">September 2023 to Present</span><br />
                    <li className="text-left">Contributed as a part of the MIS team, devising strategies to uphold compliance with the technology industry.</li>
                    <li className="text-left">Effectively managed daily bug fixes and incorporated new features into WinForms applications using C# Language and MVC methodology.</li>
                    <li className="text-left">Implemented Crystal Reports (SAP) for streamlined report generation, guaranteeing accuracy and polished presentation of data.</li>
                    <li className="text-left">Successfully transitioned from PHP to C# in a short period, demonstrating adaptability and a strong learning curve.</li>
                    <li className="text-left">Proficient in using Stored Procedures to optimize database operations.</li>
                    <li className="text-left">Executed Object-Oriented Programming (OOP) procedures to improve code structure and maintainability.</li>
                </div>
            </div>
        </div>
        <div className="border-2 text-widthGray"></div>

        {/* End */}
        <h1 className="pt-10 font-bold text-1xl text-primaryColor dark:text-secondaryColor md:p-6 p-8">
            Core Technologies: <span className="text-grayColor font-semibold dark:text-whiteColor">C# | SQL Server | SAP Report | MVC</span>
        </h1>
    </div>
</section>


    )
}


export default ExperienceSection