import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import 'material-symbols';
import 'dotenv/config'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Switch 🥣',
  description: 'Mechanical Switches Galore',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
