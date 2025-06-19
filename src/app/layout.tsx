import './globals.css'

import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Cucinarte',
  description: 'Descubrí el arte de cocinar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body >
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
