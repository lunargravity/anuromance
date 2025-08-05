import type { Metadata } from 'next'
import './global.css'
 
export const metadata: Metadata = {
  title: 'Anu Romance Portfolio',
  description: 'My personal portfolio showcasing my writing and creative work.',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}