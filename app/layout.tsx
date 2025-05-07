import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: '타로카드 점 - 별자리 연애운, 과거-현재-미래, 황도 12궁 타로카드',
  description: '별자리 연애운, 과거-현재-미래 타로카드, 황도 12궁 타로카드 점을 통해 당신의 운명을 알아보세요. 정확한 타로카드 해석과 상세한 운세 분석을 제공합니다.',
  keywords: '타로카드, 타로카드 점, 별자리 연애운, 과거 현재 미래 타로카드, 황도 12궁, 운세, 별자리 운세, 연애운, 타로카드 무료, 타로카드 보기',
  openGraph: {
    title: '타로카드 점 - 별자리 연애운, 과거-현재-미래, 황도 12궁 타로카드',
    description: '별자리 연애운, 과거-현재-미래 타로카드, 황도 12궁 타로카드 점을 통해 당신의 운명을 알아보세요.',
    type: 'website',
    locale: 'ko_KR',
    url: 'https://tarot-reading-virid.vercel.app/',
  },
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
        {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="lazyOnload"
            id="google-adsense"
          />
        )}
      </head>
      <body>{children}</body>
    </html>
  )
}