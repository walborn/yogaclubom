import React from 'react'

import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const List: React.FC<Props> = ({ className, children }) => {
  return (
    <ul className={cn('list', className)}>
      {children}
    </ul>
  )
}
