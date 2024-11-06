'use client'

import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>
    <Toaster closeButton duration={3000} richColors />
    {children}
  </SessionProvider>
}