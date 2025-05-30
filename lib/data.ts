import postgres from 'postgres'

import { Lesson } from './definitions'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

export const fetchLessons = async () => {
  try {
    return await sql<Lesson[]>`
      SELECT * FROM lessons
      ORDER BY weekday ASC, start ASC, finish ASC;`
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch lessons data.')
  }
}
