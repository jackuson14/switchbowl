import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import 'material-symbols';
import 'dotenv/config'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Switch 🥣',
  description: 'Mechanical Switches Galore',
}

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
