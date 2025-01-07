'use client'

import React from 'react'
import Autoplay from 'embla-carousel-autoplay'

import { Card, CardContent } from '@/components/ui/card'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

interface Props {
  className?: string
}

export const HomeCarousel: React.FC<Props> = ({ className}) => {
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
        {[
          // '/images/home/new_year_10.jpeg',
          // '/images/home/cancellation.jpeg',
          // '/images/home/new_year.jpeg',
          '/images/home/virabhadrasana.jpeg',
          '/images/home/healthy_back.jpeg',
          '/images/home/jeet_kune_do.jpeg',
          '/images/home/sarvangasana.jpeg',
          '/images/home/kundalini.jpeg',
          '/images/home/adho_mukha_svanasana.jpeg',
        ].map((imageUrl) => (
          <CarouselItem key={imageUrl}>
            <Card>
              <CardContent className="flex p-0 aspect-auto items-center justify-center">
                <img src={imageUrl} className="w-full rounded-lg" alt={imageUrl} />
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
