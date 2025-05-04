
"use client";

import React, { useEffect } from "react";
import ThemeProviderWrapper from "./ThemeProviderWrapper";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const ripple = document.getElementById("ripple");

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX: x, clientY: y } = e;

            if (ripple) {
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <ThemeProviderWrapper>
            {/* Ripple Cursor */}
            <div id="ripple" className="fixed w-4 h-4 bg-primaryColor rounded-full pointer-events-none"></div>
            {children}
        </ThemeProviderWrapper>
    );
};

export default ClientWrapper;