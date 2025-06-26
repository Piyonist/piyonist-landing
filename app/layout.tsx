import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Piyonist - AI Destekli Satranç Koçu",
  description:
    "Yapay zeka destekli satranç koçluk sistemi. Hamlelerinizi analiz eder, stratejik hatalarınızı tespit eder ve kişiye özel eğitim önerileri sunar."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.className} flex flex-col items-center`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
