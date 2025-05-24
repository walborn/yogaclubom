import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import masters from '../masters'

import { Avatar } from '@/components/Avatar'
import { Container } from '@/components/Container'
import { Title } from '@/components/Title'


 
interface Props {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = (await params).id
 
  const master = masters.get(id)
  if (!master) return {}
  
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: `${master.name} | Yoga Club OM`,
    openGraph: {
      images: [`/images/avatar/${id}.jpg`, ...previousImages],
    },
  }
}
 


const ProductPage = async ({ params }: Props) => {
  const id = (await params).id

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
