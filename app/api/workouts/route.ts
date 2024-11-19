import { NextResponse } from  'next/server'
import { PrismaClient } from '@prisma/client'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../auth/auth.config'

const prisma = new PrismaClient()

export async function GET(request: Request) {
    console.log('GET /api/workouts', JSON.stringify(request).substring(0, 10))
  const session = await getServerSession(authOptions)

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const workouts = await prisma.workout.findMany({
    where: {
      userId: session.user.id
    }
  })

  return NextResponse.json(workouts)
}

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { title, description, duration } = body

  if (!title || !description || !duration) {
    return NextResponse.json({ message: 'Missing fields' }, { status: 400 })
  }

  const workout = await prisma.workout.create({
    data: {
      title,
      description,
      duration,
      userId: session.user.id
    }
  })

  return NextResponse.json(workout, { status: 201 })
}