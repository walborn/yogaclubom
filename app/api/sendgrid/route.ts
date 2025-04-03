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
    to: process.env.SENDGRID_TO_EMAIL || 'codebor@yandex.ru',
    from: process.env.SENDGRID_FROM_EMAIL || 'yuzhakov.boris@gmail.com',
    subject,
    text: `${name} : ${phone}`,
    html: `<p><b>${name}</b> - <a href="tel:${phone}">${phone}</a></p>`,
  }

  try {
    await sgMail.send(content)
    return Response.json({ type: 'success', message: 'Message sent successfully' })
  } catch (error) {
    console.error('SendGrid error:', error)
    return Response.json(
      { 
        type: 'failure', 
        message: 'Failed to send message. Please try again later or contact us directly at +79168765413' 
      }, 
      { status: 500 }
    )
  }
}
