import { Container } from '@/components/Container'
import Link from 'next/link'

import { masters } from './masters'


const MastersPage = () => {
  return <Container className="mt-10">
    <ul>
      {
        masters.map(([ key, { name, description }]) => (
          <li key={key}>
            <Link href="/masters/[id]" as={`/masters/${key}`}>
              {/* <Avatar src={`/images/avatar/${i.id}.jpg`} alt={i.name} /> */}
              <div>{name}</div>
              <div>{description}</div>
              {/* <Description>{i.description}</Description> */}
            </Link>
          </li>
        ))
      }
    </ul>
  </Container>
}

export default MastersPage
