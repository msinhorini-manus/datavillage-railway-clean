import './globals.css'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Data Village ERP Summit 2026 - O Futuro dos Dados',
    template: '%s | Data Village ERP Summit 2026'
  },
  description: 'O maior evento de Business Intelligence e Analytics do Brasil. 17-18 Março 2026, São Paulo. 1.300+ profissionais de dados, palestrantes internacionais e networking qualificado.',
  keywords: [
    'business intelligence',
    'analytics',
    'data science',
    'ERP Summit',
    'São Paulo',
    'evento tecnologia',
    'big data',
    'machine learning',
    'dashboard',
    'relatórios'
  ],
  authors: [{ name: 'Data Village Team', url: 'https://datavillage.vercel.app' }],
  creator: 'Data Village ERP Summit',
  publisher: 'Data Village ERP Summit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://datavillage.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Data Village ERP Summit 2026 - O Futuro dos Dados',
    description: 'O maior evento de Business Intelligence e Analytics do Brasil. 17-18 Março 2026, São Paulo.',
    url: 'https://datavillage.vercel.app',
    siteName: 'Data Village ERP Summit 2026',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Data Village ERP Summit 2026 - O Futuro dos Dados',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Village ERP Summit 2026 - O Futuro dos Dados',
    description: 'O maior evento de Business Intelligence e Analytics do Brasil. 17-18 Março 2026, São Paulo.',
    images: ['/images/twitter-image.jpg'],
    creator: '@datavillage',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0284c7' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
