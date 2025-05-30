// для тестирования http://localhost:3000/api/query
import postgres from 'postgres'

import { auth } from '@/auth'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

async function getLessons() {
  return await sql`
    SELECT *
    FROM lessons
    ORDER BY weekday, start`
}
async function getUsers() {
  return await sql`
    SELECT *
    FROM users
    ORDER BY name`
}

export const GET = auth(async function(req) {
  try {
    if (req.auth) {
      const [lessons, users] = await Promise.all([getLessons(), getUsers()])
  	  return Response.json({ lessons, users })
    } else {
      return Response.json(await getLessons())
    }
  } catch (error) {
  	return Response.json({ error }, { status: 500 })
  }
})
