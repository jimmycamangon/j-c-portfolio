"use client";

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from './head'

import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Jims',
  description: 'My Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
          <body>
              <ThemeProvider enableSystem={true} attribute="class">
                  {children}
              </ThemeProvider>
          </body>
      </html>
  );
}