import Link from 'next/link';
import Image from 'next/image';
import { IoLogoDiscord, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';

export function Footer() {
  return (
    <footer className="w-full flex justify-center items-center py-16 px-3 relative overflow-hidden">
      <Image
        src="/footer-bg.png"
        alt="Footer"
        width={278}
        height={278}
        className="absolute top-0 right-96 z-0 opacity-20 hidden md:block"
      />
      <div className="w-full max-w-[1286px] flex flex-col md:flex-row justify-between items-start z-20">
        <div className="flex mb-8 md:mb-0 flex-row gap-10 md:items-center">
          <div className="flex flex-col">
            <h3 className="text-white text-lg mb-3">Page</h3>
            <Link href="#" className="text-[#A4ACB9] mb-2">
              Home
            </Link>
            <Link href="#" className="text-[#A4ACB9] mb-2">
              Pricing
            </Link>
            <Link href="#" className="text-[#A4ACB9]">
              Blog
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-lg mb-3">Resources</h3>
            <Link href="#" className="text-[#A4ACB9] mb-2">
              Book a Call
            </Link>
            <Link href="#" className="text-[#A4ACB9] mb-2">
              Term of Use
            </Link>
            <Link href="#" className="text-[#A4ACB9]">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="@sdsada" className="text-xl text-[#7919F3]">
            <IoLogoTwitter />
          </Link>
          <Link href="@sdsada" className="text-xl text-[#7919F3]">
            <IoLogoLinkedin />
          </Link>
          <Link href="@sdsada" className="text-xl text-[#7919F3]">
            <IoLogoDiscord />
          </Link>
        </div>
      </div>
    </footer>
  );
}
