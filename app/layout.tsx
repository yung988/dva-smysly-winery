import { cn } from "@/lib/utils"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import ClientShell from "@/components/ClientShell"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
         {/* Basic metadata for client component layout */}
        <title>Vinařství Dva Smysly</title>
        <meta name="description" content="Vinařství Dva Smysly - Rodinné vinařství ze Znojemska. Ochutnejte naše vína." />
        {/* Include link to favicon */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ClientShell bodyClassName={cn("font-sans antialiased", fontSans.variable)}>
          {children}
        </ClientShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
