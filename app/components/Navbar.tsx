import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll/modules'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Logo from "../../public/J-C-LOGO.png"

interface NavItem {
    label: string
    page: string
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "Projects",
        page: "projects",
    },
    {
        label: "Experience",
        page: "experience",
    },
    {
        label: "About",
        page: "about",
    },
    {
        label: "Contact",
        page: "contact",
    },
]

const Navbar = () => {
    const [mounted, setMounted] = useState(false)
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }


    return (
        <header className="w-full mx-auto px-5">
            <div className="justify-between md:items-center md:flex">
                <div className='flex justify-between w-full items-center'>
                    <div>
                        <Image src={Logo} width={80} height={80} alt='J-C-LOGO' className='p-2' />
                    </div>
                    <div className='md:hidden'>
                        <button onClick={() => setNavbar(!navbar)}>
                            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                        </button>
                    </div>
                </div>

                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 border-b-2 md:border-none  ${navbar ? "block" : "hidden"
                        }`}
                >
                    <div className='items-center justify-center space-y-7 md:flex md:space-x-6 md:space-y-0 dark:border-white-600'>
                        {NAV_ITEMS.map((item, idx) => {
                            return (
                                <Link
                                    key={idx}
                                    to={item.page}
                                    className={
                                        "block lg:inline-block cursor-pointer transition-transform hover:translate-y-[-5px]" +
                                        (navbar ? '' : '')
                                    }
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                        <div className='py-4'>
                            {currentTheme === "dark" ? (
                                <button onClick={() => setTheme("light")} className='p-2 rounded bg-lightTheme transition-transform hover:translate-y-[-5px]'>
                                    <RiSunLine color='black' title={"Light Mode"} />
                                </button>
                            ) : (
                                <button onClick={() => setTheme("dark")} className='p-2 bg-primaryColor rounded-md transition-transform hover:translate-y-[-5px]'>
                                    <RiMoonFill color='white' title={"Dark Mode"} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Navbar
