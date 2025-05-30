import { NextResponse } from 'next/server'

import postgres from 'postgres'

import { auth } from '@/auth'
import { Lesson } from '@/lib/definitions'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

const api = {
  lessons: {
    create: async ({ weekday, title, start, finish, master, level, notes }: Omit<Lesson, 'id'>) => {
      // Insert data into the database
      const session = await auth()
      if (!session?.user) {
        throw new Error('Unauthorized: User not logged in')
      }
      try {
        return await sql`
          INSERT INTO lessons (weekday, title, start, finish, master, level, notes)
          VALUES (${weekday}, ${title}, ${start}, ${finish}, ${master}, ${level}, ${notes})
        `
      } catch (error) {
        // If a database error occurs, return a more specific error
        console.error(error)
        return {
          message: 'Database Error: Failed to Create Lesson.',
        }
      } 
    },
    update: async ({ id, weekday, title, start, finish, master, level, notes }: Lesson) => {
      // Update data into the database
      const session = await auth()
      if (!session?.user) {
        throw new Error('Unauthorized: User not logged in')
      }
      try {
        return await sql`
          UPDATE lessons
          SET weekday = ${weekday}, title = ${title}, start = ${start}, finish = ${finish}, master = ${master}, level = ${level}, notes = ${notes}
          WHERE id = ${id}
        `
      } catch (error) {
        // If a database error occurs, return a more specific error
        console.error(error)
        return {
          message: 'Database Error: Failed to Update Lesson.',
        }
      } 
    },
    delete: async (id: string) => {
      // Delete data from the database
      const session = await auth()
      if (!session?.user) {
        throw new Error('Unauthorized: User not logged in')
      }
      try {
        return await sql`
          DELETE FROM lessons
          WHERE id = ${id}    
        `
      } catch (error) {
        // If a database error occurs, return a more specific error
        console.error(error)
        return {
          message: 'Database Error: Failed to Delete Lesson.',
        } 
      }
    },
  },
} 

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

export default api
