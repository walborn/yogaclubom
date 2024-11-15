'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface Props {
  className?: string
  src: string
  alt: string
  size?: number
}

export const Avatar: React.FC<Props> = ({ className, src, alt }) => {
  return (
    <Image className={cn('rounded-full', className)} src={src} alt={alt} width={200} height={200}/>
  )
}
