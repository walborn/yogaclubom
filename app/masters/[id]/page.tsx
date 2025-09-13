import type { Metadata } from 'next'

import masters from '../masters'

import { Avatar } from '@/components/Avatar'
import { Container } from '@/components/Container'
import { Title } from '@/components/ui/title'

// Генерируем статические параметры для всех мастеров :cite[3]
export function generateStaticParams() {
  return Array.from(masters.keys()).map((id) => ({ id }))
}

// Определяем тип для параметров :cite[1]:cite[6]
type Params = Promise<{ id: string }>

interface Props {
  params: Params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Ждем разрешения Promise params :cite[6]:cite[8]
  const { id } = await params
  const master = masters.get(id)
  
  if (!master) return {}
  
  return {
    title: `${master.name} | Yoga Club OM`,
    openGraph: {
      images: [`/images/avatar/${id}.webp`],
    },
  }
}

const MasterPage = async ({ params }: Props) => {
  // Ждем разрешения Promise params :cite[1]:cite[6]
  const { id } = await params
  const master = masters.get(id)

  if (!master) {
    return (
      <Container>
        <div>Мастер не найден</div>
      </Container>
    )
  }

  return (
    <Container className="flex flex-col my-10 px-5">
      <Avatar
        className={`m-auto bg-[url(/images/avatar/${id}.webp)]`}
        src={`/images/avatar/${id}.webp`}
        alt={master.name}
        size={48}
      />
      <Title size="md">{master.name}</Title>
      <p>{master.description}</p>
    </Container>
  )
}

export default MasterPage
