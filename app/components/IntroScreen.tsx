"use client";

import React, { useEffect, useState } from "react";
import "./IntroScreen.css";

const DURATION = 2600;

const IntroScreen = ({ onFinish }: { onFinish: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [leaving, setLeaving] = useState(false);
    const name = "Jimmy Camangon";

    useEffect(() => {
        const start = performance.now();
        let frame = 0;

        const tick = (now: number) => {
            const p = Math.min(1, (now - start) / DURATION);
            setProgress(Math.round(p * 100));
            if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);

        const leave = setTimeout(() => setLeaving(true), DURATION);
        const done = setTimeout(onFinish, DURATION + 600);

        return () => {
            cancelAnimationFrame(frame);
            clearTimeout(leave);
            clearTimeout(done);
        };
    }, [onFinish]);

    return (
        <div className={`intro-container fixed inset-0 z-[300] bg-paper text-ink flex flex-col justify-end gap-10 p-6 sm:p-10 ${leaving ? "leaving" : ""}`}>

            <h1 className="intro-text font-display font-black uppercase leading-[0.85] tracking-tight">
                {/* Each word stays whole so a wrap never splits it mid-word */}
                {name.split(" ").map((word, w, words) => {
                    const offset = words.slice(0, w).join(" ").length + (w > 0 ? 1 : 0);
                    return (
                        <React.Fragment key={word}>
                            {w > 0 && " "}
                            <span className="inline-block whitespace-nowrap">
                                {word.split("").map((char, i) => (
                                    <span key={i} className="intro-letter" style={{ animationDelay: `${(offset + i) * 45}ms` }}>
                                        {char}
                                    </span>
                                ))}
                            </span>
                        </React.Fragment>
                    );
                })}
            </h1>

            <div>
                <div className="flex justify-end items-end mb-3">
                    <span className="font-display font-black text-5xl sm:text-7xl tabular-nums leading-none">
                        {String(progress).padStart(3, "0")}
                        <span className="text-signal">%</span>
                    </span>
                </div>
                <div className="h-px bg-line/20">
                    <div className="h-px bg-signal" style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    );
};

export default IntroScreen;
