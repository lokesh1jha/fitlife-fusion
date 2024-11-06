import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Footer from '../components/Footers'
import Header from '@/components/Headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FitLife Pro',
  description: 'Your personal fitness companion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}