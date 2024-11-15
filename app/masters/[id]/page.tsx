import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { Avatar } from '@/components/Avatar'
import { Title } from '@/components/Title'

import masters from '../masters'

interface Props {
  params: Promise<{ id: string }>
}
const ProductPage = async (props: Props) => {
  const params = await props.params

  const {
    id,
  } = params

  const master = masters.get(id)
  if (!master) return notFound()

  return (
    <Container className="flex flex-col my-10 px-5">
      <Avatar className={`m-auto bg-[url(/images/avatar/short/${id}.jpg)]`} src={`/images/avatar/${id}.jpg`} alt={master.name} size={48} />
      <Title size="md">{master.name}</Title>
      <p>{master.description}</p>
    </Container>
  )
}

export default ProductPage
