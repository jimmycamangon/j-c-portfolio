"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "./IntroScreen.css";

const IntroScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [fadeState, setFadeState] = useState<'initial' | 'fadeIn' | 'fadeOut'>('initial');
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    const name = "Jimmy Camangon";

    useEffect(() => {
        // Start fade in immediately
        setTimeout(() => {
            setFadeState('fadeIn');
        }, 100);

        // Finish after 3 seconds
        setTimeout(() => {
            onFinish();
        }, 3000);

        return () => {
            // Cleanup any timeouts if component unmounts
        };
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center intro-container ${fadeState} ${
                currentTheme === "dark" ? "bg-darkTheme text-whiteColor" : "bg-lightTheme text-textDark"
            }`}
        >
            <h1 className={`intro-text ${fadeState}`}>
                {name}
            </h1>
        </div>
    );
};

export default IntroScreen;