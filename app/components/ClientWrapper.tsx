
"use client";

import React, { useEffect } from "react";
import ThemeProviderWrapper from "./ThemeProviderWrapper";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        // Reveal the page on every route, including direct visits to project pages
        document.documentElement.classList.add("loaded");

        const ripple = document.getElementById("ripple");

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;

            if (ripple) {
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.classList.add("active");
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <ThemeProviderWrapper>
            {/* Cursor follower */}
            <div id="ripple" className="fixed pointer-events-none"></div>
            {children}
        </ThemeProviderWrapper>
    );
};

export default ClientWrapper;
