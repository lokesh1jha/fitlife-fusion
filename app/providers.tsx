'use client'

import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner';

interface ProvidersProps {
  children: React.ReactNode;
  session: any; // Adjust type as needed
}

export function Providers({ children, session }: ProvidersProps) {
  return (
    <SessionProvider session={session}>
      <Toaster closeButton duration={3000} richColors />
      {children}
    </SessionProvider>
  )
}
