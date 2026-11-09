// filepath: d:\JimFiles\j-c-portfolio\j-c-portfolio\app\layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Big_Shoulders_Display, Schibsted_Grotesk, Martian_Mono } from 'next/font/google';
import ClientWrapper from './components/ClientWrapper';

const display = Big_Shoulders_Display({ subsets: ['latin'], weight: ['500', '700', '900'], variable: '--font-display' });
const body = Schibsted_Grotesk({ subsets: ['latin'], variable: '--font-body', adjustFontFallback: false });
const mono = Martian_Mono({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-mono' });

export const metadata: Metadata = {
    title: 'Jimmy Camangon | .NET Developer',
    description: 'Portfolio of Jimmy Camangon — .NET Developer specializing in C#, PHP, ASP.NET Core, React, and SQL Server.',
    openGraph: {
        title: 'Jimmy Camangon | .NET Developer',
        description: 'Portfolio of Jimmy Camangon — .NET Developer specializing in C#, PHP, ASP.NET Core, React, and SQL Server.',
        url: 'https://jimmycamangon.vercel.app',
        siteName: 'Jimmy Camangon Portfolio',
        images: [
            {
                url: '/J-C Avatar.png',
                width: 800,
                height: 800,
                alt: 'Jimmy Camangon',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary',
        title: 'Jimmy Camangon | .NET Developer',
        description: 'Portfolio of Jimmy Camangon — .NET Developer specializing in C#, PHP, ASP.NET Core, React, and SQL Server.',
        images: ['/J-C Avatar.png'],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
            <head>
            </head>
            <body>
                <ClientWrapper>
                    {children}
                </ClientWrapper>
            </body>
        </html>
    );
}
