/* eslint-disable @next/next/no-img-element */
'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Thunder } from '@/assets/thunder';
import { Benefit } from '@/components/layout/benefit';
import { SectionTitle } from '@/components/layout/section-title';
import { SectionDescription } from '@/components/layout/section-description';
import { useBreakpoints } from '@/hooks/use-breakpoints.hook';

export function BenefitsSection() {
  const { isMd } = useBreakpoints();

  return (
    <section className="section flex flex-col justify-between items-center gap-14 z-10 bg-scroll relative">
      <header className="w-full max-w-[1226px] flex items-center justify-start gap-4">
        <div className="flex flex-col gap-3 items-start max-md:items-center">
          <SectionDescription text="THE BENEFIT" />
          <SectionTitle className="text-left">
            Crafting quality <br /> you’ll remember
          </SectionTitle>
        </div>
        <img
          src="/testimonial-separator-right.png"
          alt="separator"
          className="rotate-180 flex-[1] max-md:hidden translate-y-14"
          loading="lazy"
        />
      </header>
      <div className="flex flex-col items-center w-full gap-6">
        <div className="flex items-center gap-7 max-md:flex-col">
          <Benefit
            title="Instant Impact"
            description="From strategizing your optimal UX, to building a flexible back-end that syncs with your internal ops, our goal is beautifully fluid and flawlessly functional websites that solve the right problems—and look really good while they do it."
          >
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-[#6C33C9] -z-10 h-[8rem] w-1/2 rounded-full blur-[10rem] select-none" />
            <div className="absolute left-[62px] max-md:-left-8">
              <img src="/benefits/vertical-line.svg" alt="vertical-line" />
            </div>
            <div className="absolute left-[149px] max-md:left-[49px] max-md:hidden">
              <img src="/benefits/vertical-line.svg" alt="vertical-line" className="max-h-[45.5px]" />
            </div>
            <div className="absolute left-[195px] max-md:hidden">
              <img src="/benefits/vertical-line.svg" alt="vertical-line" />
            </div>
            <div className="absolute bottom-18 left-0 w-full flex justify-center">
              <Image src="/benefits/dots.png" alt="dots" width={220} height={320} />
            </div>
            <div className="absolute bottom-0 left-0 w-full flex justify-center items-center z-10">
              <Thunder />
            </div>
            <div className="absolute right-[196px] max-md:left-[326px] max-md:hidden">
              <img src="/benefits/vertical-line.svg" alt="vertical-line" />
            </div>
            <div className="absolute right-[117px] max-md:left-[333px] max-md:hidden">
              <img src="/benefits/vertical-line.svg" alt="vertical-line" className="max-h-[45px]" />
            </div>
            <div className="absolute right-[63px] max-md:right-3">
              <img src="/benefits/vertical-line.svg" alt="vertical-line" />
            </div>
            <div className="absolute bottom-0 left-0 w-full min-h-[104px]">
              <Image
                src="/benefits/instant-impact-vertical-lines-bg.svg"
                alt="instant-impact-vertical-lines-bg"
                width={785}
                height={104}
                className="select-none"
              />
            </div>
          </Benefit>
          <Benefit
            title="Branding"
            description="From strategizing your optimal UX, to building a flexible back-end that syncs with your internal ops, our goal is beautifully fluid"
            width="small"
          >
            <div className="absolute bottom-0 right-0 -translate-x-1/2 bg-[#6C33C9] -z-10 h-[15.25rem] w-[15rem] rounded-full blur-[10rem] select-none" />
            <img src="/benefits/bottom-lines.png" alt="lines" className="absolute max-w-[192px] right-0" />
            <div className="absolute bottom-[12.194px]">
              <Image src="/benefits/Aa-bg.png" alt="aa-bg" width={328} height={265} />
            </div>
          </Benefit>
        </div>
        <div className="flex items-center gap-7 max-md:flex-col">
          <Benefit
            title="Get from 0 to 1"
            description="From strategizing your optimal UX, to building a flexible back-end that syncs with your internal ops, our goal is beautifully fluid"
            width="small"
          >
            <div className="absolute bottom-0 left-0 bg-[#6C33C9] -z-10 h-[18rem] w-1/2 rounded-full blur-[10rem] select-none" />
            <img
              src="/benefits/three-cards.png"
              alt="Three Cards"
              width={257}
              height={100}
              className="absolute left-1/2 -translate-x-1/2"
            />
            <img src="/benefits/mask-get-0-1-left.png" alt="Three Cards" className="absolute left-0 bottom-0" />
            <img src="/benefits/mask-get-0-1-right.png" alt="Three Cards" className="absolute right-0 bottom-0" />
          </Benefit>
          <Benefit
            title="Stay on Developers Mind"
            description="From strategizing your optimal UX, to building a flexible back-end that syncs with your internal ops, our goal is beautifully fluid and flawlessly functional websites that solve the right problems—and look really good while they do it."
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#6C33C9] -z-10 h-[5rem] w-1/2 rounded-full blur-[10rem] select-none" />
            <img
              src="/benefits/stay-on-developers-mind-image.svg"
              alt="stay-on-developers-mind-image"
              className="absolute left-0 max-h-[186px] w-full"
            />
            <img
              src="/benefits/stay-on-developers-mind-dots.png"
              alt="stay-on-developers-mind-dots"
              className="absolute left-0 bottom-[0] max-h-[111px] w-full"
            />
            <Image
              src="/benefits/stay-on-developers-mind-shadow.png"
              alt="shadow"
              width={494}
              height={244}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 z-20"
            />
          </Benefit>
        </div>
      </div>
    </section>
  );
}
