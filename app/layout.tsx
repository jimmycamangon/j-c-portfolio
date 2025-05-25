// filepath: d:\JimFiles\j-c-portfolio\j-c-portfolio\app\layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientWrapper from './components/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Jims',
    description: 'My Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* Favicon */}
                <link rel="icon" href="/j-c-logo-v2.png" />
            </head>
            <body>
                <ClientWrapper>
                    {children}
                </ClientWrapper>
            </body>
        </html>
    );
}