import { cn } from '@/lib/utils'

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => (
  <div className={cn('mx-auto max-w-4xl', className)}>
    {children}
  </div>
)
