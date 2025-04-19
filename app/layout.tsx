'use client'

import { useState, useEffect } from 'react'
import { cn } from "@/lib/utils"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Instagram, ShoppingBag, Facebook, Menu } from "lucide-react"
import AgeVerificationModal from "@/components/AgeVerificationModal"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { Analytics } from '@vercel/analytics/next';
// Metadata needs to be handled differently for client components, or moved to page level
// For simplicity, we remove the static export for now.
// import { Metadata } from "next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// export const metadata: Metadata = {
//   title: "Vinařství Dva Smysly",
//   description: "Vinařství Dva Smysly - Rodinné vinařství ze Znojemska. Ochutnejte naše vína.",
// }

const LOCAL_STORAGE_KEY = 'ageVerified' // Define key here as well

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isVerified, setIsVerified] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true) // Add loading state

  useEffect(() => {
    const alreadyVerified = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (alreadyVerified) {
      setIsVerified(true)
    }
    setIsLoading(false) // Mark loading as complete
  }, [])

  const handleVerificationConfirm = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, 'true')
    setIsVerified(true)
  }

  // Don't render anything until client-side check is complete
  if (isLoading) {
    return (
      <html lang="cs" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-background", fontSans.variable)}> 
          {/* Optional: Add a loading indicator if desired */}
        </body>
      </html>
    );
  }

  // Navigation Links Data
  const navLinks = [
    { href: "/#about", label: "O nás" },
    { href: "/degustace", label: "Degustace" },
    { href: "/#sklep", label: "Sklep" },
    { href: "/vina", label: "Vína" },
    { href: "/#kontakt", label: "Kontakt" },
  ];

  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
         {/* Basic metadata for client component layout */}
        <title>Vinařství Dva Smysly</title>
        <meta name="description" content="Vinařství Dva Smysly - Rodinné vinařství ze Znojemska. Ochutnejte naše vína." />
        {/* Include link to favicon */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {isVerified ? (
          <>
            {/* Responsive Header */}
            <header className="sticky top-0 z-50 w-full bg-[#1a472a]/90 backdrop-blur-sm">
              <div className="container flex h-16 items-center justify-between"> {/* Reduced height for mobile */}
                {/* Logo */}
                <div className="flex items-center gap-2">
                  <Link href="/">
                    <Image 
                      src="/logo/dvasmysly.svg" 
                      alt="Dva Smysly" 
                      width={100} // Slightly smaller logo for header
                      height={32} 
                      className="h-auto filter invert brightness-0" 
                    />
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-medium text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Social Links & Mobile Menu Trigger */}
                <div className="flex items-center gap-4">
                  {/* Social Links (always visible) */}
                  <a
                    href="https://www.instagram.com/vinarstvi_dvasmysly/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                    aria-label="Instagram Dva Smysly"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61560188686793&mibextid=wwXIfr&rdid=9A9gfCkdPdZKpmOn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                     aria-label="Facebook Dva Smysly"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <Link
                    href="/vina"
                    className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                    aria-label="Nabídka vín Dva Smysly"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    <span className="hidden md:inline text-sm font-medium">Nabídka vín</span>
                  </Link>

                  {/* Mobile Menu Button */}
                  <Sheet>
                    <SheetTrigger asChild className="md:hidden">
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Otevřít menu</span>
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#1a472a] text-white border-l-0"> {/* Styling the sheet */}
                      <SheetHeader className="mb-6">
                        <SheetTitle>
                           <Link href="/">
                              <Image 
                                src="/logo/dvasmysly.svg" 
                                alt="Dva Smysly" 
                                width={120} 
                                height={40} 
                                className="h-auto filter invert brightness-0" 
                              />
                           </Link>
                        </SheetTitle>
                      </SheetHeader>
                      <nav className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                          <SheetClose asChild key={link.href}> 
                            <Link
                              href={link.href}
                              className="text-lg font-medium hover:text-gray-300 transition-colors flex items-center gap-3 py-2"
                            >
                              {link.label}
                            </Link>
                          </SheetClose>
                        ))}
                        <SheetClose asChild>
                          <Link
                            href="/vina"
                            className="text-lg font-medium hover:text-gray-300 transition-colors flex items-center gap-3 py-2"
                          >
                            <ShoppingBag className="h-5 w-5" />
                            Nabídka vín
                          </Link>
                        </SheetClose>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </header>

            <main className="min-h-screen flex flex-col">
              {children}
            </main>
            
            {/* Footer - přesunutý dovnitř body tagu */}
            <footer className="py-8 border-t">
              <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Image src="/logo/dvasmysly.svg" alt="Dva Smysly" width={100} height={40} className="h-auto" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Vinařství Dva Smysly. Všechna práva vyhrazena.
                  </p>
                  <nav className="flex items-center gap-6">
                    <Link href="/#about" className="text-sm text-muted-foreground hover:text-[#1a472a] transition-colors">
                      O nás
                    </Link>
                    <Link href="/#vina" className="text-sm text-muted-foreground hover:text-[#1a472a] transition-colors">
                      Vína
                    </Link>
                    <Link href="/#kontakt" className="text-sm text-muted-foreground hover:text-[#1a472a] transition-colors">
                      Kontakt
                    </Link>
                  </nav>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/vinarstvi_dvasmysly/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#1a472a] transition-colors"
                      aria-label="Instagram Dva Smysly"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61560188686793"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-[#1a472a] transition-colors"
                      aria-label="Facebook Dva Smysly"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <Link 
                      href="/vina" 
                      className="text-muted-foreground hover:text-[#1a472a] transition-colors"
                      aria-label="Nabídka vín Dva Smysly"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      <span className="sr-only">Nabídka vín</span>
                    </Link>
                  </div>
                </div>
              </div>
              <Analytics />
            </footer>
          </>
        ) : (
          <AgeVerificationModal onConfirm={handleVerificationConfirm} />
        )}
      </body>
    </html>
  )
}
