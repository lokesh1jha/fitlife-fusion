// layout.tsx
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import Footer from '../components/Footers'
import Header from '@/components/Headers'
import { getServerSession } from 'next-auth' 
import { authOptions } from '@/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FitLife Fusion',
  description: 'Your personal fitness companion',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers session={session}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
