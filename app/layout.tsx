'use client'

import { cn } from "@/lib/utils"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Instagram, ShoppingBag, Facebook } from "lucide-react"
import AgeVerificationModal from "@/components/AgeVerificationModal" // Import the modal
import { Metadata } from "next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Vinařství Dva Smysly",
  description: "Vinařství Dva Smysly - Rodinné vinařství ze Znojemska. Ochutnejte naše vína.",
  // Add other metadata as needed
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {/* Globální navigace (původní kód hlavičky) */}
        <header className="sticky top-0 z-50 w-full bg-[#1a472a]/90 backdrop-blur-sm">
          <div className="container flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image 
                  src="/logo/dvasmysly.svg" 
                  alt="Dva Smysly" 
                  width={120} 
                  height={40} 
                  className="h-auto filter invert brightness-0" 
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              {/* Původní navigační odkazy */}
              <Link href="/#about" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                O nás
              </Link>
              <Link href="/#degustace" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                Degustace
              </Link>
              <Link href="/#sklep" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                Sklep
              </Link>
              <Link href="/#vina" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                Vína
              </Link>
              <Link href="/#kontakt" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
                Kontakt
              </Link>
            </nav>
            <div className="flex items-center gap-4">
               {/* Původní ikony v hlavičce */}
               <Link
                href="/vina"
                className="hidden md:flex items-center gap-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
              >
                <ShoppingBag className="h-4 w-4" />
                Nabídka vín
              </Link>
              <a
                href="https://www.instagram.com/vinarstvi_dvasmysly/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61560188686793&mibextid=wwXIfr&rdid=9A9gfCkdPdZKpmOn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>
        </header>

        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
        
        {/* Add the modal component here */}
        <AgeVerificationModal />
      </body>
    </html>
  )
}
