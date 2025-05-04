"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import "./IntroScreen.css";

const IntroScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [startFadeOut, setStartFadeOut] = useState(false);
    const { theme } = useTheme();
    const name = "Jimmy Camangon";


    const slideInDuration = 800; 
    const slideOutDuration = 800; 
    const totalAnimationTime = slideInDuration + slideOutDuration;

    useEffect(() => {

        const fadeOutTimer = setTimeout(() => {
            setStartFadeOut(true);
        }, slideInDuration);


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
                    ? "bg-darkTheme text-white"
                    : "bg-lightTheme text-black"
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