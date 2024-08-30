import { cn } from '@/lib/utils'

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Container: React.FC<Props> = ({ className, children }) => (
  <div className={cn('mx-auto max-w-[780px]', className)}>
    {children}
  </div>
)
