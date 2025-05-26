import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import Logo from "../../public/j-c-logo-v2.png"

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
        label: "Background",
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
        <>
            {/* Full screen overlay when nav is open on mobile */}
            <div 
                className={`fixed inset-0 transition-all duration-300 nav:hidden ${
                    navbar ? 'opacity-100 visible' : 'opacity-0 invisible'
                } ${currentTheme === 'dark' ? 'bg-darkTheme text-whiteColor' : 'bg-lightTheme text-textDark'}`} 
                style={{ zIndex: 40 }}
            />
            
            <header className={`fixed top-0 inset-x-0 nav:inset-x-auto nav:left-0 ${navbar ? 'h-screen' : 'h-auto'} nav:h-screen flex flex-col justify-between items-center p-4 z-50`}>
                {/* Top bar container for mobile */}
                <div className="flex justify-between items-center w-full nav:block">
                    {/* Logo */}
                    <div className={`flex justify-start nav:justify-start transition-all duration-300 nav:w-48 nav:bg-gray-100 nav:dark:bg-gray-800 ${navbar ? 'bg-gray-100 dark:bg-gray-800' : ''}`}>
                        <Link
                            to="home"
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="cursor-pointer transition-transform hover:scale-110 z-50"
                            onClick={() => setNavbar(false)}
                        >
                            <Image src={Logo} width={70} height={70} alt='J-C-LOGO' className='p-2' priority />
                        </Link>
                    </div>

                    {/* Hamburger button - only visible below 1300px */}
                    <button 
                        onClick={() => setNavbar(!navbar)} 
                        className="text-gray-600 dark:text-gray-300 nav:hidden pointer-events-auto p-2"
                        style={{ zIndex: 60 }}
                    >
                        {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={24} />}
                    </button>
                </div>

                {/* Navigation in the middle */}
                <nav className={`p-4 rounded-l-lg transition-all duration-300 ${navbar ? 'w-screen pointer-events-auto' : 'w-16 pointer-events-none'} nav:w-48 ${!navbar && 'bg-gray-100 dark:bg-gray-800'} nav:bg-gray-100 nav:dark:bg-gray-800 nav:pointer-events-auto ${navbar ? 'opacity-100' : 'opacity-0 nav:opacity-100'} ${!navbar && 'hidden nav:flex'}`}>
                    <div className='flex flex-col items-center space-y-8'>
                        {/* Navigation items - always visible on desktop, controlled by navbar state below 1300px */}
                        <div className={`flex flex-col items-center space-y-8 nav:opacity-100 nav:pointer-events-auto ${navbar ? 'opacity-100 mt-8' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        to={item.page}
                                        className="text-gray-600 dark:text-gray-300 hover:text-primaryColor dark:hover:text-secondaryColor transition-colors cursor-pointer text-xl nav:text-base relative group"
                                        activeClass="!text-primaryColor dark:!text-secondaryColor after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primaryColor dark:after:bg-secondaryColor"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        spyThrottle={100}
                                        onClick={() => setNavbar(false)}
                                    >
                                        {item.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryColor dark:bg-secondaryColor transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </nav>

                {/* Theme toggler at the bottom */}
                <div className={`p-4 flex justify-start w-full nav:justify-start transition-all duration-300 nav:w-48 ${!navbar && 'bg-gray-100 dark:bg-gray-800'} nav:bg-gray-100 nav:dark:bg-gray-800 ${navbar ? 'opacity-100' : 'opacity-0 nav:opacity-100'} ${!navbar && 'hidden nav:flex'}`}>
                    {currentTheme === "dark" ? (
                        <button 
                            onClick={() => setTheme("light")} 
                            className='p-2 rounded bg-lightTheme transition-transform hover:translate-y-[-5px]'
                        >
                            <RiSunLine size={20} color='black' title={"Light Mode"} />
                        </button>
                    ) : (
                        <button 
                            onClick={() => setTheme("dark")} 
                            className='p-2 rounded bg-primaryColor rounded-md transition-transform hover:translate-y-[-5px]'
                        >
                            <RiMoonFill size={20} color='white' title={"Dark Mode"} />
                        </button>
                    )}
                </div>
            </header>
        </>
    )
}

export default Navbar
