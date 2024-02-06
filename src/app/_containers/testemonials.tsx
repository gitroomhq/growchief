/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

import { CarouselPrevious, Carousel, CarouselItem, CarouselContent, CarouselNext } from '@/components/ui/carousel';
import { testemonials } from '@/data/testemonials.data';
import { Testemonial } from '@/components/layout/testemonial';
import { SectionTitle } from '@/components/layout/section-title';
import { SectionDescription } from '@/components/layout/section-description';
import { Overlay } from '@/components/layout/overlay';

export function Testemonials() {
  return (
    <section className="section overflow-x-hidden flex flex-col justify-between items-center gap-10 z-10 bg-scroll relative">
      <div className="py-[64px] flex flex-col gap-[86px] items-center w-full">
        <header className="flex justify-center items-center gap-8 w-full">
          <img
            src="/testimonial-separator-left.png"
            alt="testimonial-separator-left"
            className="flex-[1] max-md:hidden"
          />
          <div className="flex gap-3 flex-col items-center">
            <SectionDescription text="TESTIMONIALS" />
            <SectionTitle className="text-center min-w-[333px] max-md:min-w-fit">
              What our <br /> clients say
            </SectionTitle>
          </div>
          <img
            src="/testimonial-separator-right.png"
            alt="testimonial-separator-right"
            className="flex-[1] max-md:hidden"
          />
        </header>
        <Carousel className="flex flex-col w-full flex-[1] relative max-w-[1290px] mx-auto">
          {/* <Overlay className="-left-2" /> */}
          <CarouselContent className="w-full flex-[1] relative">
            {testemonials.map((testemonial, index) => (
              <CarouselItem
                key={index}
                className="basis-[500px] border-none outline-none p-0 m-0 ml-[30px] max-md:basis-[230px] max-md:ml-[55px]"
              >
                <Testemonial {...testemonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <Overlay className="-right-2" /> */}
          <div className="flex items-center gap-3 min-h-[47px] justify-center relative pt-[64px]">
            <CarouselPrevious className="relative inset-auto w-[47px] h-[47px]" />
            <CarouselNext className="relative inset-auto w-[47px] h-[47px]" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
