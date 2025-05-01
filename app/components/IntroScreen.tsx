"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "./IntroScreen.css";

const IntroScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [startFadeOut, setStartFadeOut] = useState(false);
    const { theme } = useTheme();
    const name = "Jimmy Camangon";

    // Total animation time (adjust based on your CSS animation durations)
    const slideInDuration = 800; // 3 seconds for slide-in
    const slideOutDuration = 800; // 2 seconds for slide-out
    const totalAnimationTime = slideInDuration + slideOutDuration;

    useEffect(() => {
        // Start the fade-out effect after the slide-in animation completes
        const fadeOutTimer = setTimeout(() => {
            setStartFadeOut(true);
        }, slideInDuration);

        // Trigger the onFinish callback after the slide-out animation completes
        const finishTimer = setTimeout(() => {
            onFinish();
        }, totalAnimationTime);

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish, slideInDuration, totalAnimationTime]);

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center transition-opacity duration-[2000ms] ${
                startFadeOut ? "opacity-0" : "opacity-100"
            } ${
                theme === "dark"
                    ? "bg-black text-white"
                    : "bg-white text-black"
            }`}
        >
            <h1 className="split-text">
                {name.split("").map((letter, index) => (
                    <span key={index} className={`letter`}>
                        {letter === " " ? "\u00A0" : letter}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default IntroScreen;