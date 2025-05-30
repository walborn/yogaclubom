import { Container } from '@/components/Container'
import {ScheduleSkeleton} from '@/components/ui/skeletons'
import { getNowDay } from '@/lib/placeholder.lessons'
 
export default function Loading() {
  return (
    <Container className="text-center">
      <ScheduleSkeleton day={getNowDay()} />
    </Container>
  )
}
