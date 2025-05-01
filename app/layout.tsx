// filepath: d:\JimFiles\j-c-portfolio\j-c-portfolio\app\layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProviderWrapper from './components/ThemeProviderWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Jims',
    description: 'My Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ThemeProviderWrapper>
                    {children}
                </ThemeProviderWrapper>
            </body>
        </html>
    );
}