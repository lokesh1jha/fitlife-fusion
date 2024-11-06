'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, {session?.user?.name}!</h1>
      {session?.user?.image && (
        <div className="mb-4">
          <Image
            src={session.user.image}
            alt={`${session.user.name}'s profile picture`}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      )}
      <p className="mb-4">This is your personal dashboard. Here you can view your workouts, track your progress, and manage your account.</p>
      {/* Add more dashboard content here */}
    </div>
  )
}