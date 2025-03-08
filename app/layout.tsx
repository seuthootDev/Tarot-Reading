import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

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
      <head>
        {/* Google AdSense 스니펫 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2741336313830341"
          crossOrigin="anonymous"
          strategy="lazyOnload"
          id="google-adsense"
          onError={(e) => {
            console.error('Script failed to load', e)
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
