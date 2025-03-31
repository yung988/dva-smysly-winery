import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
