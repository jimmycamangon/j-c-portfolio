import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Image from "next/image";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Logo from "../../public/j-c-logo-v2.png";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Background",
    page: "experience",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Full screen overlay when nav is open on mobile */}
      <div
        className={`fixed inset-0 transition-all duration-300 nav:hidden ${navbar ? "opacity-100 visible" : "opacity-0 invisible"
          } bg-bg`}
        style={{ zIndex: 40 }}
      />

      <header
        className={`fixed top-0 inset-x-0 nav:inset-x-auto nav:left-0 ${navbar ? "h-screen" : "h-auto"
          } nav:h-screen flex flex-col justify-between items-center p-4 z-50`}
      >
        {/* Top bar container for mobile */}
        <div
          className={`flex justify-between items-center w-full nav:block transition-all duration-300
        ${isScrolled && !navbar
              ? "backdrop-blur-md bg-bg/70 border-line nav:backdrop-blur-0 nav:bg-transparent nav:border-transparent"
              : ""
            }
    `}
        >
          {/* Logo */}
          <div
            className={`flex justify-start nav:justify-start transition-all duration-300 nav:w-48`}
          >
            <Link
              to="home"
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer transition-transform hover:scale-110 z-50"
              onClick={() => setNavbar(false)}
            >
              <Image
                src={Logo}
                width={48}
                height={48}
                alt="J-C-LOGO"
                className="p-1.5 invert dark:invert-0"
                priority
              />
            </Link>
          </div>

          {/* Hamburger button - only visible below 1300px */}
          <button
            onClick={() => setNavbar(!navbar)}
            className="text-muted hover:text-fg transition-colors nav:hidden pointer-events-auto p-2"
            style={{ zIndex: 60 }}
          >
            {navbar ? <IoMdClose size={22} /> : <IoMdMenu size={22} />}
          </button>
        </div>

        {/* Navigation in the middle */}
        <nav
          className={`p-4 rounded-l-lg transition-all duration-300 ${navbar ? "w-screen pointer-events-auto" : "w-16 pointer-events-none"
            } nav:w-48 nav:pointer-events-auto ${navbar ? "opacity-100" : "opacity-0 nav:opacity-100"
            } ${!navbar && "hidden nav:flex"}`}
        >
          <div className="flex flex-col items-center space-y-8">
            {/* Navigation items - always visible on desktop, controlled by navbar state below 1300px */}
            <div
              className={`flex flex-col items-center space-y-7 nav:opacity-100 nav:pointer-events-auto ${navbar ? "opacity-100 mt-8" : "opacity-0 pointer-events-none"
                } transition-opacity duration-300`}
            >
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className="font-mono uppercase tracking-[0.2em] text-muted hover:text-accent transition-colors cursor-pointer text-sm nav:text-2xs relative group"
                    activeClass="!text-accent"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={500}
                    spyThrottle={100}
                    onClick={() => setNavbar(false)}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Theme toggler at the bottom */}
        <div
          className={`p-4 flex justify-start w-full nav:justify-start transition-all duration-300 nav:w-48 ${navbar ? "opacity-100" : "opacity-0 nav:opacity-100"
            } ${!navbar && "hidden nav:flex"}`}
        >
          {currentTheme === "dark" ? (
            <button
              onClick={() => setTheme("light")}
              className="p-2 rounded-md border border-line text-muted hover:text-accent hover:border-accent/60 transition-colors"
            >
              <RiSunLine size={16} title={"Light Mode"} />
            </button>
          ) : (
            <button
              onClick={() => setTheme("dark")}
              className="p-2 rounded-md border border-line text-muted hover:text-accent hover:border-accent/60 transition-colors"
            >
              <RiMoonFill size={16} title={"Dark Mode"} />
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
