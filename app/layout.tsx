import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: '신비로운 타로 리딩',
  description: '신비로운 타로 리딩',
  icons: {
    icon: [
      // { url: '/favicon.ico', type: 'image/x-icon' },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: ['/favicon.ico'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="lazyOnload"
          id="google-adsense"
        />
      )}
      <body>{children}</body>
    </html>
  )
}
