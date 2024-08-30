import React from 'react'

import { cn } from '@/lib/utils'

// import { Size } from '@/types'
// import { tags, classNames } from '@/constants/title'

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
  xs: 'text-[16px]',
  sm: 'text-[22px]',
  md: 'text-[26px]',
  lg: 'text-[32px]',
  xl: 'text-[40px]',
  '2xl': 'text-[48px]',
} as const

interface Props {
  className?: string;
  children?: React.ReactNode;
  size: Size;
}

export const Title: React.FC<Props> = ({ className, children, size }) => {
  const Hn = tags[size]

  return (
    <Hn className={cn(classNames[size], className)}>
      {children}
    </Hn>
  )
}
