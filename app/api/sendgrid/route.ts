import { NextRequest } from 'next/server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

type Unlimited = {
  subject: string
  name: string
  phone: string
}
export async function POST(req: NextRequest) {

  const { subject, name, phone } = await req.json() as Unlimited
  
  const content = {
    to: 'codebor@yandex.ru',
    from: 'yuzhakov.boris@gmail.com',
    subject,
    text: `${name} : ${phone}`,
    html: `<p><b>${name}</b> - <a href="tel:${phone}">${phone}</a></p>`,
  }

  try {
    await sgMail.send(content)
    return Response.json({ type: 'success', message: 'Message sent successfully' })
  } catch (error) {
    return Response.json({ error, type: 'failure', message: 'Something went wrong. Please, write message to +79168765413' }, { status: 500 })
  }
}
