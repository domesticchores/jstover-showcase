'use client'

import { inter } from './fonts'
import './globals.css'
import Footer from './footer'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'


import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'My Page Title',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {

  const pathname = usePathname();
  return (
    <html lang="en" className={(pathname == '/' ? 'hideScroll ' : ' ') + inter.className + " overflow-x-hidden"}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}