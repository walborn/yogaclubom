import { NextResponse } from 'next/server'

import { auth } from '@/auth'

export async function POST(request: Request) {
  const session = await auth()

  if (!session?.user) {
    return new NextResponse(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401 },
    )
  }

  try {
    const body = await request.json()
    const lesson = await api.lessons.create(body)
    return NextResponse.json(lesson)
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error:`Failed to create lesson: ${error}` }),
      { status: 500 },
    )
  }
}

