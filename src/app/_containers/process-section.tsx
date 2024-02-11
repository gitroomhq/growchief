/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { processes } from '@/data/processes.data';
import { SectionDescription } from '@/components/layout/section-description';
import { SectionTitle } from '@/components/layout/section-title';
import { cn } from '@/lib/utils';

export function ProcessSection() {
  return (
    <section className="section flex flex-col justify-between items-center gap-16 z-10 bg-scroll relative max-sm:gap-8">
      <header className="w-full flex items-center gap-[6px]">
        <img
          src="/testimonial-separator-left.png"
          alt="separator"
          className="transform -scale-y-100 flex-[1] max-md:hidden"
          loading="lazy"
        />
        <div className="flex flex-col gap-3 items-center min-w-[435px] max-md:min-w-full">
          <SectionDescription text="OUR PROCESS" className="" />
          <SectionTitle className="text-center">How We Work</SectionTitle>
        </div>
        <img
          src="/testimonial-separator-right.png"
          alt="separator"
          className="transform -scale-y-100 flex-[1] max-md:hidden"
          loading="lazy"
        />
      </header>
      <div className="w-full pt-16 flex flex-col gap-[179px] items-center relative min-h-[1264px] max-w-[1135px] mx-auto px-[38px] max-md:px-0 max-md:gap-10">
        <Image
          src="/scroll-line.png"
          alt="Scroll Line"
          width={3}
          height={1264}
          className="absolute top-20 left-0 min-h-[92%] max-md:hidden"
        />
        {processes.map((processItem, index) => (
          <div
            className="w-full max-h-[324px] flex justify-between items-center max-md:flex-col max-md:justify-center max-md:max-h-fit max-md:gap-6"
            key={index}
          >
            <div className="flex flex-col gap-6 items-start w-full max-w-[477px] max-md:items-center">
              <h2 className="text-white text-[46px] leading-[100%] font-medium max-md:text-[38px]">
                {processItem.title}
              </h2>
              <p className="text-[#D3D3D3] leading-[150%] text-[18px]">{processItem.description}</p>
            </div>
            <div className="w-full max-w-[420px] grid place-items-center relative h-full min-h-[324px]">
              <Image
                src={processItem.imageUrl}
                alt={processItem.title}
                width={391}
                height={324}
                className={cn('z-20', {
                  'absolute left-20 max-md:relative max-md:left-0':
                    processItem.title === 'Topic Selection and Article Preparation',
                })}
              />
              <img
                src="/processes/dots.png"
                alt="dots"
                className={cn('absolute z-10', {
                  'left-16': processItem.title === 'Topic Selection and Article Preparation',
                })}
              />
              <div className="absolute inset-0 z-10 select-none bg-[#6C33C9] h-full rounded-full blur-[10rem] opacity-80" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
