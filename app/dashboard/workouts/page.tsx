'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

type Workout = {
  id: string
  title: string
  description: string
  duration: number
}

export default function Workouts() {
  const [workouts, setWorkouts] = useState<Workout[]>([])
  const { data: session, status } = useSession()
  const router = useRouter()
console.log("session",session)
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    } else if (status === 'authenticated') {
      fetchWorkouts()
    }
  }, [status, router])

  const fetchWorkouts = async () => {
    const response = await fetch('/api/workouts')
    if (response.ok) {
      const data = await response.json()
      setWorkouts(data)
    }
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Workouts</h1>
      {workouts.length === 0 ? (
        <p>You haven&apos;t created any workouts yet.</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout.id} className="mb-4 p-4 border rounded">
              <h2 className="text-xl font-semibold">{workout.title}</h2>
              <p>{workout.description}</p>
              <p>Duration: {workout.duration} minutes</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}