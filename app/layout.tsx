import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Dva Smysly Winery',
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
        {children}
      </body>
    </html>
  )
}
