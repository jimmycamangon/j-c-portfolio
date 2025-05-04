"use client";

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProviderWrapper from './components/ThemeProviderWrapper';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Jims',
    description: 'My Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
        <html lang="en">
            <body>
                <ThemeProviderWrapper>
                    {/* Ripple Cursor */}
                    <div id="ripple"></div>
                    {children}
                </ThemeProviderWrapper>
            </body>
        </html>
    );
}