import type { Metadata } from 'next'
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
      <body>{children}</body>
    </html>
  )
}
