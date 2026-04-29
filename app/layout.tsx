// filepath: d:\JimFiles\j-c-portfolio\j-c-portfolio\app\layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientWrapper from './components/ClientWrapper';

const inter = Inter({ subsets: ['latin'] });

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
        <html lang="en" suppressHydrationWarning>
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