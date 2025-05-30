import bcryptjs from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
// import GitHub from 'next-auth/providers/github'
import { z } from 'zod'

import api from '@/lib/api'
// import { signInSchema } from '@/lib/zod'
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  // pages: {
  //   signIn: '/signin',
  // },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
  // providers: [GitHub],
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials)
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data
          const user = await api.users.get(email)
          if (!user) return null
          const passwordsMatch = await bcryptjs.compare(password, user.password)
 
          if (passwordsMatch) return user
        }
 
        console.log('Invalid credentials')
        return null
      },

      // async authorize(credentials) {
      //   try {
      //     const { email, password } = await signInSchema.parseAsync(credentials)

      //     const user = await api.users.get(email)
      //     if (!user) throw new Error('Invalid credentials (email)')

      //     console.log(222, password, user.password)
      //     // const passwordsMatch = await bcryptjs.compare(password, user.password)
      //     // if (!passwordsMatch) throw new Error('Invalid credentials (password)')
 
      //     // return user
      //   } catch (error) {
      //     if (error instanceof ZodError) {
      //       console.error('ZodError:', error)
      //       return null
      //     }
      //     // Обработка других ошибок
      //     console.error('Authorization error:', error)
      //     return null
      //   }
      // },
    }),
  ],
})
