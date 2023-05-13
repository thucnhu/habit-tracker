import { Carousel, Embla } from '@mantine/carousel';
import React, { useCallback, useEffect, useState } from 'react'
import { Progress, rem } from '@mantine/core';

export default function MarketplaceCarousel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on('scroll', handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        mx="auto"
        withIndicators
        height={400}
        className='w-86'
        align='center'
        getEmblaApi={setEmbla}
        loop
        slideSize="50%"
        slideGap="md"
      >
        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dw5ii3leu/image/upload/v1683960602/vecteezy_cartoon-chicken-doodle-kawaii-anime-coloring-page-cute_15698912_420_rqmv37.png"
            alt="Cute chicken"
            className='h-full mx-auto cursor-grab'
          />
        </Carousel.Slide>

        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dw5ii3leu/image/upload/v1683960766/Kawaii-Dragon-10_lpz5bb.webp"
            alt="Cute chicken"
            className='h-full mx-auto cursor-grab'
          />
        </Carousel.Slide>

        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dw5ii3leu/image/upload/v1683961882/2111.w023.n001.1462B.p1.1462_divmnm.jpg"
            alt="Cute chicken"
            className='h-full mx-auto cursor-grab'
          />
        </Carousel.Slide>

        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dw5ii3leu/image/upload/v1683962118/2203_w020_n001_1300a_p30_1300_b9khw6.jpg"
            alt="Cute chicken"
            className='h-full mx-auto cursor-grab'
          />
        </Carousel.Slide>

        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dw5ii3leu/image/upload/v1683962550/5307735_ckvo66.jpg"
            alt="Cute chicken"
            className='h-full mx-auto cursor-grab'
          />
        </Carousel.Slide>
      </Carousel>
      <Progress
        value={scrollProgress}
        styles={{ bar: { transitionDuration: '0ms' }, root: { maxWidth: rem(320) } }}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </>
  )
}