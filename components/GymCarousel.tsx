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
import images from '@/data/galleryImages'

export const GymCarousel: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((imageUrl) => (
          <CarouselItem key={imageUrl}>
            <Card>
              <CardContent className="flex p-0 aspect-video items-center justify-center">
                <Image src={imageUrl} className="rounded-lg" width={1280} height={854} alt={imageUrl} priority />
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
