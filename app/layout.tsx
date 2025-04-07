import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Vinařství Dva Smysly',
  description: 'Malé vinařství ze Znojemska',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <header className="sticky top-0 z-50">
          <nav className="bg-[#1a472a]/90 backdrop-blur-sm">
            <div className="container flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.png" alt="Dva Smysly" width={120} height={48} className="h-auto" />
              </Link>
              <div className="flex items-center gap-6">
                <Link href="/vina" className="text-white hover:text-white/80 transition-colors">
                  Vína
                </Link>
                <Link href="/degustace" className="text-white hover:text-white/80 transition-colors">
                  Degustace
                </Link>
                <Link href="/#kontakt" className="text-white hover:text-white/80 transition-colors">
                  Kontakt
                </Link>
              </div>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-[#1a472a] text-white py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Dva Smysly Winery</h3>
                <p className="text-white/80">
                  Mladé vinařství ze Znojemské vinařské podoblasti, které vzniklo v roce 2020.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Kontakt</h3>
                <div className="space-y-2">
                  <p className="text-white/80">info@dvasmysly.cz</p>
                  <p className="text-white/80">+420 777 888 999</p>
                  <p className="text-white/80">Znojemská vinařská podoblast</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Sledujte nás</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/dvasmysly"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-white/80 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/60">
              <p>&copy; {new Date().getFullYear()} Dva Smysly Winery. Všechna práva vyhrazena.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
