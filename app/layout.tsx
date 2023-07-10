import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.className + " overflow-x-hidden"}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}