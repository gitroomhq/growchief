/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { GradientButton } from './gradient-button';

export function GitroomBox() {
  return (
    <motion.section
      className="w-full px-10 max-md:px-2 flex justify-center items-center pb-16"
      whileInView={{ opacity: [0.65, 1], translateX: [-100, 0] }}
    >
      <div className="overflow-hidden relative w-full max-w-[1287px] min-h-[444px] p-16 rounded-[40px] bg-[#13131A] border border-[#656565]">
        <div className="gap-6 flex flex-col items-start z-50">
          <h2 className="text-4xl bg-clip-text bg-gradient-to-r from-white via-white z-30">
            Ready to build <br /> something? <br />
            Go with us!
          </h2>
          <p className="text-[#D3D3D3] max-w-[515px] z-30">
            We merge tech with marketing. Helping you trend on different
            platforms. Gain genuine clients, effortlessly.
          </p>
          <GradientButton className="max-w-[180px] z-30" />
        </div>
        <img
          className="w-[586.7px] h-[503.9px] absolute my-0 mx-[!important] top-[-231px] left-[332px] object-contain z-[1]"
          alt=""
          src="/blur.svg"
        />
        <Image
          src="/git-room-dots.png"
          alt="Dots"
          width={484}
          height={484}
          className="absolute left-0 -bottom-4 z-0 select-none opacity-55"
        />
        <img
          src="/git-room-bg.svg"
          alt="bg"
          className="w-full max-w-[932px] -z-0 opacity-45 absolute right-0 top-0 select-none h-full object-cover"
          style={{
            boxShadow: '12px 29px 81px 0px rgba(0,0,0,0.75)',
          }}
        />
      </div>
    </motion.section>
  );
}
