import React from 'react'

import { cn } from '@/lib/utils'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const tags = {
  xs: 'h5',
  sm: 'h4',
  md: 'h3',
  lg: 'h2',
  xl: 'h1',
  '2xl': 'h1',
} as const

const classNames = {
  xs: 'text-[16px] leading-tight mb-1',
  sm: 'text-[22px] leading-tight mb-2',
  md: 'text-[26px] leading-tight mb-4',
  lg: 'text-[32px] leading-tight mb-5',
  xl: 'text-[40px] leading-tight mb-6',
  '2xl': 'text-[48px] leading-tight mb-7',
} as const

interface Props {
  className?: string;
  children?: React.ReactNode;
  size: Size;
}

export const Title: React.FC<Props> = ({ className, children, size }) => {
  const Hn = tags[size]

  return (
    <Hn className={cn('text-center text-brand', classNames[size], className)}>
      {children}
    </Hn>
  )
}
