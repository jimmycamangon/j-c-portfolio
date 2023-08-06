
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from './head'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'JimJim',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
