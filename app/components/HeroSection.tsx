"use client"

import Image from 'next/image'
import Hero from '../../public/hero-image.png'
import Button from './Button'
import { Link } from 'react-scroll';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 sm:py-32 md:flex-row md:space-x-4 md:text-left">
                <div className="md:mt-2 md:w-3/5 space-y-5">
                    <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl text-center">👋 Hi, I’m <span className='text-primaryColor font-bold dark:text-secondaryColor'>Jimmy!</span></h1>
                    <p className='text-md w-full md:w-full '>
                        I am an aspiring <span className='text-primaryColor font-semibold dark:text-secondaryColor'>Software Engineer</span> who is passionate about coding, innovation, and building web applications.
                    </p>
                    <Button buttonText='Projects' />
                    <div className='w-full flex justify-center text-3xl py-5'>
                        <Link
                            to='about'  // This should match the 'id' attribute in the ProjectsSection
                            smooth={true}
                            offset={-100}   // Adjust this offset to align with your Navbar height
                            duration={500}
                            className='cursor-pointer transition-transform hover:translate-y-[-5px]'
                        >
                            <FaArrowDown title={"About Me"} />
                        </Link>
                    </div>
                </div>
                <div className="md:mt-2 md:w-1/2">
                    <Image
                        src={Hero}
                        alt=""
                        width={425}
                        height={425}
                        priority={false} // {false} | {true}
                    />
                </div>
            </div>
        </section>
    )
}

export default HeroSection
