'use client';

/* eslint-disable @next/next/no-img-element */
import { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/components/ui/button';
import { GradientButton } from '@/components/layout/gradient-button';
import { Navbar } from '@/components/layout/navbar';
import { trusts } from '@/data/trust.data';

export function HeroSection() {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: 'url(/grid-bg.svg)',
      }}
    >
      <Navbar />
      <section className="section flex flex-col items-center max-w-[1290px] mx-auto" id="#home">
        <div className="flex w-full max-w-[1290px] flex-col items-center gap-[118px]">
          <div className="w-full flex items-start justify-between gap-8 max-md:gap-12 max-md:flex-col max-md:justify-center max-md:max-h-fit mt-20 max-md:items-center">
            <div className="flex flex-col items-start gap-[50px]">
              <div className="w-full flex flex-col items-start gap-4">
                <div className="flex max-md:justify-center max-md:w-full">
                  <button className="border border-[#ffffff0d] grid place-items-center rounded-full bg-[#ffffff0d] p-2 backdrop-blur-sm">
                    <Image src="/hero-watch-icon.svg" alt="watch icon" width={24} height={24} />
                  </button>
                  <button className="text-[#B28DFF] grid place-items-center rounded-full bg-[#ffffff0d] py-2 px-6 backdrop-blur-sm border border-[#ffffff0d]">
                    NO MORE WASTED TIME
                  </button>
                </div>
                <h1 className="text-[70px] sm:text-[92px] text-left hero-section-title-purple-gradient text-transparent font-[500] leading-[92px] max-md:text-center max-md:w-full">
                  Devtools <br />
                  Launch Weeks
                </h1>
                <p className="max-w-[459px] text-[20px] font-normal text-left max-md:text-center max-md:max-w-full">
                  We do a whole week of launch around your product, including an article, Reddit promotion, influencers
                  posts, and so much more
                </p>
              </div>
              <div className="flex items-center gap-5 flex-wrap max-md:flex-col max-md:w-full max-md:px-5 max-md:gap-2">
                <GradientButton className="min-h-[58px] max-md:w-full px-7" />
                <Button
                  variant="outline"
                  className="rounded-full py-4 min-h-[58px] max-md:w-full px-7 text-lg max-md:text-sm"
                >
                  Gitroom blog
                </Button>
              </div>
            </div>
            <div className="flex relative w-[500px] h-[450px] max-md:hidden">
              <Spline
                scene="/spline/growchief.spline"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 !w-[100%] !h-[100%] scale-[135%]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 w-full mt-10">
            <span className="text-center text-[20px] text-[#C5C5C5] font-[500]">Trusted by</span>
            <div className="z-50 flex items-center justify-center w-full">
              <Swiper
                slidesPerView={1}
                breakpoints={{
                  400: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
              >
                {trusts.map((imgURL: string, index: number) => (
                  <SwiperSlide key={index} className="flex items-center justify-center">
                    <Image src={imgURL} alt={'Trusted by' + index} width={180} height={50} className="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
