import React from "react"
import Image from "next/image"
import Avatar from "../../public/J-C Avatar.png"

const skills = [
    { name: "JAVA", image: "JAVA.png" },
    { name: "C++", image: "C++.png" },
    { name: "HTML", image: "HTML.png" },
    { name: "CSS", image: "CSS.png" },
    { name: "PHP", image: "PHP.png" },
    { name: "MYSQL", image: "MYSQL.png" },
    { name: "JAVASCRIPT", image: "JAVASCRIPT.png" },
    { name: "TAILWIND CSS", image: "TAILWIND.png" },
    { name: "REACT JS", image: "REACT.png" },
    { name: "C#", image: "C#.png" },
    
]

const AboutSection = () => {
    return (
        <section id="about">
            <div className="pb-12 md:pb-48">
                <h1 className="text-center font-bold text-3xl text-primaryColor dark:text-secondaryColor">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/6 flex justify-center items-center">
                        <Image src={Avatar} alt="Avatar" width={150} height={150} />
                    </div>

                    <div className="text-center md:w-5/6 md:text-left flex items-center">
                        Hello, I`m Jimmy Camangon, a dedicated Programmer with a Bachelor`s degree in Information and Technology. My programming journey began during Senior High School when I chose the ICT track, igniting my passion for coding. This experience has driven me to pursue a rewarding career in software engineering.
                    </div>
                </div>
                <h1 className="text-center pt-10 font-bold text-3xl text-primaryColor dark:text-secondaryColor md:p-6 p-8">
                    Basic Tech Skills
                </h1>
                <div className="space-y-5">
                    <div className="flex md:flex-row flex-wrap justify-center items-center">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="p-2 flex justify-center flex-col items-center">
                                <Image
                                    src={skill.image}
                                    alt={`${skill.name} logo`}
                                    width={90}
                                    height={90}
                                    className="shadow-xl rounded-full"
                                />
                                <h1 className="text-center p-2 font-bold mb-6">{skill.name}</h1>
                            </div>
                        ))}
                    </div>

                    <p className="italic opacity-80">
                        Note: The listed skills represent my foundational proficiencies. I am continuously learning and expanding my knowledge to stay current with industry trends and advancements.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
