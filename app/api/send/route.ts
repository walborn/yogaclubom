import { UnlimitedTemplate } from '@/components/templates/UnlimitedTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Yoga Club Om <yuzhakov.boris@yoga-club-om.ru>',
      to: ['yuzhakov.boris@gmail.com'],
      subject: 'Unlimited Week',
      react: UnlimitedTemplate({ name: 'John', phone: '1234567890', subject: 'Unlimited Week' }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
