import React from 'react'
import { BiLogoGmail, BiSolidPhone, BiLogoLinkedinSquare, BiLogoGithub } from 'react-icons/bi'
import Image from 'next/image'
import Link from 'next/link'


const contacts = [
    {
        name: "GMAIL",
        icon: <BiLogoGmail />,
        desc: "jimmycamangon7@gmail.com",
    },
    {
        name: "PHONE",
        icon: <BiSolidPhone />,
        desc: "+639365220532",
    },
    {
        name: "LINKED IN",
        icon: <BiLogoLinkedinSquare />,
        desc: "www.linkedin.com/in/jimmy-jr-c-89b41918b",
    },
    {
        name: "GITHUB",
        icon: <BiLogoGithub />,
        desc: "https://github.com/jimmycamangon",
    },
]


const ContactSection = () => {
    return (
        <section id='contact'>
            <div className='pb-12 md:pb-48'>
                <h1 className="my-10 text-center font-bold text-3xl text-primaryColor dark:text-secondaryColor">
                    Contact
                </h1>

                <div className='flex flex-wrap md:flex-row  justify-center items-center'>
                    {contacts.map((contact, idx) => {
                        return (
                            <div key={idx}>
                                <div className='w-52 text-center space-y-9'>
                                    <div className='flex justify-center'>
                                        <div className='w-24 h-24 text-6xl text-primaryColor dark:text-darkTheme rounded-full dark:bg-lightTheme flex justify-center items-center shadow-xl'>{contact.icon}</div>
                                    </div>

                                    <div className='flex flex-col justify-center items-center space-y-5 pb-6'>
                                        <h1 className='font-semibold'>{contact.name}</h1>
                                        {contact.name === "PHONE" || contact.name === "GMAIL" ? (
                                            <div className='w-52 dark:text-secondaryColor'>
                                                <p>{contact.desc}</p>
                                            </div>
                                        ) : (
                                            <Link href={contact.desc}>
                                                <div className='underline text-primaryColor w-52 overflow-hidden dark:text-secondaryColor'>
                                                    <p className='truncate '>{contact.desc}</p>
                                                </div>
                                            </Link>

                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ContactSection
