import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '신비로운 타로 리딩',
  description: '신비로운 타로 리딩',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
