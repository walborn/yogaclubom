import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'

import masters from '../masters'

interface Props {
  params: { id: string }
}
const ProductPage = async ({ params: { id } }: Props) => {

  const master = masters.get(id)
  if (!master) return notFound()

  return (
    <Container className="flex flex-col my-10">
      {/* <Avatar src={`/images/avatar/${i.id}.jpg`} alt={i.name} /> */}
      <div>{master.name}</div>
      <div>{master.description}</div>
    </Container>
  )
}

export default ProductPage
