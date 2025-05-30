import postgres from 'postgres'

import { auth } from '@/auth'
import type { User } from '@/lib/definitions'
import { Lesson } from '@/lib/definitions'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

export default {
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
    list: async () => {
      try {
        return await sql<Lesson[]>`
          SELECT * FROM lessons
          ORDER BY weekday ASC, start ASC, finish ASC;`
      } catch (error) {
        console.error('Database Error:', error)
        throw new Error('Failed to fetch lessons data.')
      }
    },
  },
  users: {
    get: async (email: string): Promise<User | undefined> => {
      try {
        const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`
        return user[0]
      } catch (error) {
        console.error('Failed to fetch user:', error)
        throw new Error('Failed to fetch user.')
      }
    },
  },
} 
