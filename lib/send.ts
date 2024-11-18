import { Resend } from 'resend'

export const sendEmail = async (subject: string, template: React.ReactNode) => {
  console.log(process.env)
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { data, error } = await resend.emails.send({
    from: 'codebor@yandex.ru',
    to: 'yuzhakov.boris@gmail.com',
    subject,
    text: '',
    react: template,
  })

  if (error) {
    throw error
  }

  return data
}
