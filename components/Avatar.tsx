'use client'

import React from 'react'

import Image from 'next/image'

import { cn } from '@/lib/utils'

interface Props {
  className?: string
  src: string
  alt: string
  size?: number
}

export const Avatar: React.FC<Props> = ({ className, src, alt }) => {
  return (
    <Image priority className={cn('rounded-full', className)} src={src} alt={alt} width={200} height={200}/>
  )
}
