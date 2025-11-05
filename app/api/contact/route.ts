import { NextResponse } from 'next/server'
import { cosmic } from '@/lib/cosmic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    await cosmic.objects.insertOne({
      title: `Contact from ${name}`,
      type: 'contact-submissions',
      metadata: {
        name,
        email,
        phone: phone || '',
        message,
        submitted_at: new Date().toISOString()
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 500 }
    )
  }
}