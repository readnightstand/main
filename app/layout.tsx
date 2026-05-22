import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nightstand — Book recommendations that feel right',
  description: 'Nightstand is a conversational book recommendation engine for avid readers. Tell us how you want to feel, and we\'ll find the book that fits.',
  generator: 'v0.app',
  openGraph: {
    title: 'Nightstand — Book recommendations that feel right',
    description: 'Tell us how you want to feel, and we\'ll find the book that fits.',
    url: 'https://readnightstand.com',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
