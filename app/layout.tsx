import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram, ShoppingBag, Facebook } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Vinařství Dva Smysly',
  description: 'Vinařství ze Znojemské vinařské podoblasti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        {/* Globální navigace */}
        <header className="sticky top-0 z-50 w-full bg-[#1a472a]/90 backdrop-blur-sm">
          <div className="container flex h-20 items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/">
                <Image src="/logo/dvasmysly.svg" alt="Dva Smysly" width={120} height={40} className="h-auto filter invert brightness-0" />
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-6">
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
        
        {children}
      </body>
    </html>
  )
}
