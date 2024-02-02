/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';

import { SectionDescription } from '@/components/layout/section-description';
import { SectionTitle } from '@/components/layout/section-title';

export function Product() {
  return (
    <motion.section
      className="section w-full grid place-items-center z-10"
      id="product"
      whileInView={{
        translateY: [-100, 0],
        opacity: [0, 1],
      }}
      transition={{
        duration: 0.75,
      }}
    >
      <img
        src="/product-left-blur.svg"
        alt="product-left-blur"
        className="absolute -top-28 max-md:hidden right-0 -z-10 blur-sm"
      />
      <motion.img
        src="/about-glow.png"
        alt="Glow"
        whileInView={{
          opacity: [0.45, 1],
          scale: [0.25, 1],
        }}
        className="absolute left-0 -z-10 -top-28"
      />
      <div className="absolute top-1/4 right-0 bg-[#6C33C9] -z-10 h-[12.25rem] w-1/4 rounded-full blur-[10rem] select-none" />
      <div className="flex flex-col justify-start w-full max-w-[1050px] gap-[118px]">
        <header className="flex flex-col gap-3 items-start w-full relative">
          <SectionDescription text="WHAT’S GROWCHIEF" />
          <SectionTitle>
            We specialize in human-centered design where technology serves
            humanity, not the other way around.
          </SectionTitle>
        </header>
        <div className="w-full flex justify-between items-center gap-[84px] max-md:justify-center max-md:flex-col">
          <div className="relative">
            <motion.img
              src="/product-image.png"
              alt="product section image"
              className="z-20"
            />
            <div className="-z-10 bg-[#6C33C9] h-[15.25rem] w-full rounded-full blur-[10rem] select-none absolute top-1/2 -translate-y-1/2" />
          </div>
          <motion.p
            className="max-w-[472px] text-[20px] font-normal leading-[30px]"
            whileInView={{ opacity: [0.65, 1] }}
          >
            This not only elevates your brand but also solves real-world
            problems. We see ourselves as your long-term partner – working
            closely with you for true collaboration, from initial concept to
            final product. This way, we’re invested in your success.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
