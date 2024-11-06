import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../auth/auth.config'
import { createOrder } from '@/lib/razorpay'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { amount } = body

  if (!amount) {
    return NextResponse.json({ message: 'Missing amount' }, { status: 400 })
  }

  try {
    const order = await createOrder(amount)
    return NextResponse.json(order)
  } catch (error) {
    console.error('Error creating order:', error)
    return NextResponse.json({ message: 'Error creating order' }, { status: 500 })
  }
}
