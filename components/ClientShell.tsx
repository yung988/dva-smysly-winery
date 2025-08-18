"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, ShoppingBag, Facebook, Menu } from "lucide-react"
import AgeVerificationModal from "@/components/AgeVerificationModal"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
 
import { cn } from "@/lib/utils"

type ClientShellProps = {
  children: React.ReactNode
  bodyClassName?: string
  initialIsVerified?: boolean
}

const COOKIE_KEY = "ageVerified"

export default function ClientShell({ children, bodyClassName, initialIsVerified }: ClientShellProps) {
  const [isVerified, setIsVerified] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleVerificationConfirm = () => {
    try {
      // Persist as cookie so SSR can pick it up next request
      document.cookie = `${COOKIE_KEY}=true; path=/; max-age=${60 * 60 * 24 * 365}`
    } catch {}
    setIsVerified(true)
  }

  if (isLoading) {
    return <div className={cn("min-h-screen bg-background", bodyClassName)} />
  }

  const navLinks = [
    { href: "/#about", label: "O nás" },
    { href: "/degustace", label: "Degustace" },
    { href: "/#sklep", label: "Sklep" },
    { href: "/vina", label: "Vína" },
    { href: "/#kontakt", label: "Kontakt" },
  ]

  return (
    <div className={cn("min-h-screen bg-background", bodyClassName)}>
      {isVerified ? (
        <>
          <header className="sticky top-0 z-50 w-full bg-[#1a472a]/90 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <Link href="/">
                  <Image
                    src="/logo/dvasmysly.svg"
                    alt="Dva Smysly"
                    width={100}
                    height={32}
                    className="h-auto filter invert brightness-0"
                    priority={false}
                  />
                </Link>
              </div>

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

              <div className="flex items-center gap-4">
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

                <Sheet>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Otevřít menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#1a472a] text-white border-l-0">
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

          <main className="min-h-screen flex flex-col">{children}</main>

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
          </footer>
        </>
      ) : (
        <AgeVerificationModal onConfirm={handleVerificationConfirm} />
      )}
    </div>
  )
}
