import React from "react";
import { Link } from "react-scroll";

const STACK = ["PHP", "C#", ".NET", "React", "TypeScript", ".NET Core", "JavaScript"];

// Delay helper for the one orchestrated load sequence
const d = (ms: number) => ({ animationDelay: `${ms}ms` });

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 pb-16">
      <h1 className="font-display font-black uppercase leading-[0.8] tracking-tight text-[clamp(2.75rem,12vw,9.25rem)]">
        <span className="reveal-mask">
          <span className="block animate-rise" style={d(300)}>Jimmy</span>
        </span>
        <span className="reveal-mask">
          <span className="flex items-end gap-4 md:gap-6 animate-rise" style={d(420)}>
            <span className="hidden sm:block h-[0.08em] w-[0.6em] bg-signal mb-[0.12em] shrink-0" />
            <span>Camangon<span className="text-signal">.</span></span>
          </span>
        </span>
      </h1>

      <div className="h-px bg-line/15 mt-12 origin-left animate-draw" style={d(600)} />

      <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="font-display font-bold uppercase leading-none tracking-tight text-3xl sm:text-4xl md:text-5xl animate-fade" style={d(750)}>
            <span className="text-signal">Software Developer</span>
          </p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base text-muted animate-fade" style={d(850)}>
            {STACK.map((tech, i) => (
              <li key={tech} className="flex items-center gap-3">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-signal" aria-hidden="true" />}
                <span className="hover:text-ink transition-colors">{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-3 animate-fade" style={d(950)}>
          <Link
            to="experience"
            smooth={true}
            offset={-80}
            duration={600}
            className="group inline-flex items-center gap-3 rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium cursor-pointer hover:bg-signal transition-colors duration-300"
          >
            View my work
            <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={800}
            className="inline-flex items-center rounded-full bg-panel px-6 py-3 text-sm font-medium cursor-pointer hover:bg-signal/10 hover:text-signal transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
