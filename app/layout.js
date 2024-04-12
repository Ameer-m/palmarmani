import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Armani Beach Residences at Palm Jumeirah, Dubai',
  description: 'Armani Beach Residences is the latest launch in Palm Jumeirah. Developed by Arada, this master project offers exclusive luxury with prices starting at AED 21.5M',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <SpeedInsights />
    </html>
    
  )
}
