// TODO: Update once server-side API methods are implemented for pages router again
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'
 
import { auth } from '@/auth'
// import { getSession } from "next-auth/react"
 

export async function GET() {
  const session = await auth()

  if (!session?.user) {
    return NextResponse.json(
      { message: 'Not authenticated' },
      { status: 401 },
    )
  }

  return NextResponse.json({ data: 'Protected data' })
}

// export const GET = auth(function GET(req) {
//   if (req.auth) return NextResponse.json(req.auth)
//   return NextResponse.json({ message: 'Not authenticated' }, { status: 401 })
// })


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // const session = await auth(req, res)
  // const session = await getSession(req, res)
  const url = `${req.headers['x-forwarded-proto']}://${req.headers.host}/api/auth/session`
 
  const sessionRes = await fetch(url)
  const session = await sessionRes.json()
 
  if (!session.user) {
    return res.status(401).json({ message: 'Not authenticated' })
  }
 
  return res.json({ data: 'Protected data' })
}
