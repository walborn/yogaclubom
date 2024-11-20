interface Props {
  subject: string
  name: string
  phone: string
}

export const UnlimitedTemplate: React.FC<Props> = ({ subject, name, phone }) => (
  <>
    <h1>{subject}</h1>
    <p>
      <b>${name}</b> - <a href="tel:${phone}">+${phone}</a>
    </p>
  </>
)
