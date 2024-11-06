import Razorpay from 'razorpay'

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
})

export const createOrder = async (amount: number, currency: string = 'INR') => {
  const options = {
    amount: amount * 100, // Razorpay expects amount in paise
    currency,
    receipt: 'receipt_' + Math.random().toString(36).substring(7),
  }

  try {
    const response = await razorpay.orders.create(options)
    return response
  } catch (error) {
    console.error('Error creating Razorpay order:', error)
    throw error
  }
}