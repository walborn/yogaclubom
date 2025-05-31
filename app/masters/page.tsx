import type { Metadata } from 'next'
import Link from 'next/link'

import { masters } from './masters'

import { Avatar } from '@/components/Avatar'
import { Container } from '@/components/Container'
import { Title } from '@/components/ui/title'


export const metadata: Metadata = {
  title: 'Инструкторы | Yoga Club OM',
  description: 'Инструкторы, которые преподают в клубе Yoga Club OM',
}


const MastersPage = () => {
  return <Container>
    <ul>
      {
        masters.map(([ key, { name, description }]) => (
          <li key={key} className="m-5 p-5 rounded shadow-light">
            <Link href="/masters/[id]" as={`/masters/${key}`}>
              <Avatar className={'m-auto'} src={`/images/avatar/${key}.jpg`} alt={name} size={48} />
              <Title size="md">{name}</Title>
              <p className="text-center">{description}</p>
            </Link>
          </li>
        ))
      }
    </ul>
  </Container>
}

export default MastersPage
