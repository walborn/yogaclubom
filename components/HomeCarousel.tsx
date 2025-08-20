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
import images from '@/lib/images'

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
        {images.map((image) => (
          <CarouselItem key={image}>
            <Card>
              <CardContent className="flex p-0 aspect-auto items-center justify-center">
                <Image
                  priority
                  src={`/images/home/${image}.webp`} 
                  className="rounded-lg"
                  width={1280}
                  height={624}
                  alt={image}
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
