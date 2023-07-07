import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: '300',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}