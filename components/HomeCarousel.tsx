'use client'

import React from 'react'

import Image from 'next/image'

import Autoplay from 'embla-carousel-autoplay'


import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import images from '@/data/homeImages'

interface Props {
  className?: string
}

export const HomeCarousel: React.FC<Props> = ({ className }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className={className}
    >
      <CarouselContent>
        {images.map((imageUrl) => (
          <CarouselItem key={imageUrl}>
            <Card>
              <CardContent className="flex p-0 aspect-auto items-center justify-center">
                <Image
                  priority
                  src={imageUrl} 
                  className="rounded-lg"
                  width={1280}
                  height={624}
                  alt={imageUrl.split('/').at(-1)?.slice(0, -5) || ''}
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
