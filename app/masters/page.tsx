import { Container } from '@/components/Container'
import Link from 'next/link'

import { masters } from './masters'
import { Avatar } from '@/components/Avatar'
import { Title } from '@/components/Title'


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
