import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll/modules'
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
            
            <header className="fixed top-0 left-0 h-screen flex flex-col justify-between items-center p-4 z-50">
                {/* Logo at the top */}
                <div className={`p-4 flex justify-center items-center transition-all duration-300 ${navbar ? 'w-screen' : 'w-16'} nav:w-48 ${!navbar && 'bg-gray-100 dark:bg-gray-800'} nav:bg-gray-100 nav:dark:bg-gray-800`}>
                    <Image src={Logo} width={70} height={70} alt='J-C-LOGO' className='p-2' />
                </div>

                {/* Navigation in the middle */}
                <nav className={`p-4 rounded-l-lg transition-all duration-300 ${navbar ? 'w-screen' : 'w-16'} nav:w-48 ${!navbar && 'bg-gray-100 dark:bg-gray-800'} nav:bg-gray-100 nav:dark:bg-gray-800`}>
                    <div className='flex flex-col items-center space-y-8'>
                        {/* Hamburger button - only visible below 1300px */}
                        <button 
                            onClick={() => setNavbar(!navbar)} 
                            className="text-gray-600 dark:text-gray-300 nav:hidden fixed top-6 right-6"
                            style={{ zIndex: 60 }}
                        >
                            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={24} />}
                        </button>
                        
                        {/* Navigation items - always visible on desktop, controlled by navbar state below 1300px */}
                        <div className={`flex flex-col items-center space-y-8 nav:opacity-100 nav:pointer-events-auto ${navbar ? 'opacity-100 mt-8' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
                            {NAV_ITEMS.map((item, idx) => {
                                return (
                                    <Link
                                        key={idx}
                                        to={item.page}
                                        className="text-gray-600 dark:text-gray-300 hover:text-primaryColor dark:hover:text-secondaryColor transition-colors cursor-pointer text-xl nav:text-base"
                                        activeClass="text-primaryColor dark:text-secondaryColor"
                                        spy={true}
                                        smooth={true}
                                        offset={-50}
                                        duration={500}
                                        spyThrottle={100}
                                        onClick={() => setNavbar(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </nav>

                {/* Theme toggler at the bottom */}
                <div className={`p-4 flex justify-center items-center transition-all duration-300 ${navbar ? 'w-screen' : 'w-16'} nav:w-48 ${!navbar && 'bg-gray-100 dark:bg-gray-800'} nav:bg-gray-100 nav:dark:bg-gray-800`}>
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
