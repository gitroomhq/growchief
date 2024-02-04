'use client';

/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/layout/gradient-button';
import { Navbar } from '@/components/layout/navbar';

export function HeroSection() {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: 'url(/grid-bg.svg)',
      }}
    >
      <Navbar />
      <section
        className="section flex flex-col items-center max-w-[1290px] mx-auto"
        id="#home"
      >
        <div className="flex w-full max-w-[1290px] flex-col items-center gap-[118px]">
          <div className="w-full max-h-[454px] flex items-start justify-between gap-8 max-md:gap-12 max-md:flex-col max-md:justify-center max-md:max-h-fit mt-20 max-md:items-center">
            <motion.div
              className="flex flex-col items-start gap-[50px]"
              transition={{ duration: 0.75 }}
              whileInView={{
                translateX: [-100, 0],
              }}
            >
              <div className="w-full max-w-[695px] flex flex-col items-start gap-4">
                <div className="flex max-md:justify-center max-md:w-full">
                  <button className="border border-[#ffffff0d] grid place-items-center rounded-full bg-[#ffffff0d] p-2 backdrop-blur-sm">
                    <Image
                      src="/hero-watch-icon.svg"
                      alt="watch icon"
                      width={24}
                      height={24}
                    />
                  </button>
                  <button className="text-[#B28DFF] grid place-items-center rounded-full bg-[#ffffff0d] py-2 px-6 backdrop-blur-sm border border-[#ffffff0d]">
                    NO MORE WASTED TIME
                  </button>
                </div>
                <h1 className="text-7xl text-left hero-section-title-purple-gradient text-transparent font-[500] leading-[100%] max-md:text-center">
                  Devtools <br />
                  Launch Weeks
                </h1>
                <p className="max-w-[459px] text-[20px] font-normal text-left max-md:text-center">
                  We do a whole week of launch around your product, including an
                  article, Reddit promotion, influencers posts, and so much more
                </p>
              </div>
              <div className="flex items-center gap-5 flex-wrap max-md:flex-col max-md:w-full max-md:gap-2">
                <GradientButton className="min-h-[58px] max-md:w-full px-7" />
                <Button
                  variant="outline"
                  className="rounded-full py-4 min-h-[58px] max-md:w-full px-7 text-lg max-md:text-sm"
                >
                  Gitroom blog
                </Button>
              </div>
            </motion.div>
            <motion.picture
              className="relative -mr-10 -mt-28 max-md:-mr-0 max-md:-mt-0"
              transition={{ duration: 0.75 }}
              whileInView={{
                translateX: [100, 0],
              }}
            >
              <Image
                src="/hero-section-image.png"
                alt="Hero Image"
                className="-20"
                width={765.28}
                height={755.38}
              />
              <source
                srcSet="/hero-section-image-small.png"
                media="(max-width: 768px)"
              />
            </motion.picture>
          </div>
          <motion.div
            className="flex flex-col items-center justify-center gap-8 max-w-[1162px]"
            transition={{ duration: 0.75 }}
            whileInView={{ translateY: [50, 0], opacity: [0.65, 1] }}
          >
            <span className="text-center text-[20px] text-[#C5C5C5] font-[500]">
              Trusted by
            </span>
            <div className="flex items-center justify-center gap-10 w-full max-w-[1162px] overflow-x-auto max-md:pl-48 max-md:gap-16 no-scrollbar">
              <Image
                src="/trusted-by.svg"
                alt="Trusted by"
                width={1163}
                height={36}
                className="flex-shrink-0 min-w-[1163px] min-h-[36px]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
