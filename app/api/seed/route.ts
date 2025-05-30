import bcryptjs from 'bcryptjs'
import postgres from 'postgres'

import { lessons } from '@/lib/placeholder.lessons'
import { users } from '@/lib/placeholder.users'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' })

async function seedLessons() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await sql`DROP TABLE IF EXISTS lessons`
  await sql`
    CREATE TABLE IF NOT EXISTS lessons (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      weekday INT NOT NULL,
      start INT NOT NULL,
      finish INT NOT NULL,
      title TEXT NOT NULL,
      level VARCHAR(255) NOT NULL,
      master VARCHAR(255) NOT NULL,
      notes VARCHAR(255) NOT NULL
    );
  `

  return await Promise.all(
    lessons.map(({ weekday, start, finish, title, level, master, notes }) => sql`
      INSERT INTO lessons (weekday, start, finish, title, level, master, notes)
      VALUES (${weekday}, ${start}, ${finish}, ${title}, ${level}, ${master}, ${notes})
      ON CONFLICT (id) DO NOTHING;
    `),
  )
}

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await sql`DROP TABLE IF EXISTS users`
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `

  return await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcryptjs.hash(user.password, 10)
      return sql`
        INSERT INTO users (name, email, password)
        VALUES (${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `
    }),
  )
}

export async function GET() {
  try {
    await sql.begin(() => [ seedLessons(), seedUsers() ])

    return Response.json({ message: 'Database seeded successfully' })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
