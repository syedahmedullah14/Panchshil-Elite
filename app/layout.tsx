import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React
import CarouselDemo from "@/components/Crousel"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Panchshil Elite",
  description: "Luxury Residential Project by Panchshil Group",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
      {/* <CarouselDemo /> */}
    
    </html>
  )
}

