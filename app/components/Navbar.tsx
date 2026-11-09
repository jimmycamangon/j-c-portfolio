import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Work",
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

    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock scroll behind the mobile menu
  useEffect(() => {
    document.body.style.overflow = navbar ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [navbar]);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => setTheme(currentTheme === "dark" ? "light" : "dark");

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled || navbar
            ? "bg-paper/85 backdrop-blur-md border-b border-line/10"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
          {/* Mark */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setNavbar(false)}
            className="group flex items-baseline gap-3 cursor-pointer"
          >
            <span className="font-display font-black text-4xl tracking-tight leading-none">
              JC<span className="text-signal">/</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={item.page}
                to={item.page}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                spyThrottle={100}
                activeClass="!text-ink"
                className="group relative flex items-baseline gap-1.5 cursor-pointer text-sm text-muted hover:text-ink transition-colors"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full bg-signal origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label={currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
              className="grid place-items-center w-9 h-9 rounded-full bg-panel hover:text-signal transition-colors"
            >
              {currentTheme === "dark" ? <RiSunLine size={16} /> : <RiMoonFill size={15} />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setNavbar(!navbar)}
              aria-label="Toggle menu"
              aria-expanded={navbar}
              className="md:hidden relative w-9 h-9 rounded-full bg-panel grid place-items-center"
            >
              <span className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${navbar ? "rotate-45" : "-translate-y-1"}`} />
              <span className={`absolute h-px w-4 bg-ink transition-transform duration-300 ${navbar ? "-rotate-45" : "translate-y-1"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-paper transition-[opacity,visibility] duration-300 ${
          navbar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="h-full flex flex-col justify-center px-6 gap-2">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={item.page}
              to={item.page}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => setNavbar(false)}
              style={{ transitionDelay: navbar ? `${120 + idx * 70}ms` : "0ms" }}
              className={`flex items-baseline gap-4 cursor-pointer border-b border-line/10 py-4 transition-all duration-500 ${
                navbar ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <span className="font-display font-black uppercase text-[clamp(2.5rem,12vw,4rem)] leading-none">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
