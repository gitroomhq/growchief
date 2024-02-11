import Link from 'next/link';
import { IoLogoDiscord, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';

export function Footer() {
  return (
    <footer className="w-full flex justify-center items-center py-[49px] px-3 relative overflow-hidden">
      <div className="w-full max-w-[1286px] flex flex-col sm:flex-row justify-between items-start z-20">
        <div className="flex mb-8 md:mb-0 flex-row gap-16 md:items-center">
          <div className="flex flex-col">
            <h3 className="text-white text-[20px] mb-6">Page</h3>
            <Link href="#" className="text-[#A4ACB9] mb-2 text-[16px] ">
              Home
            </Link>
            <Link href="#" className="text-[#A4ACB9] mb-2 text-[16px]">
              Pricing
            </Link>
            <Link href="#" className="text-[#A4ACB9] text-[16px]">
              Blog
            </Link>
          </div>
          <div className="flex flex-col">
            <h3 className="text-white text-[20px] mb-6">Resources</h3>
            <Link href="#" className="text-[#A4ACB9] mb-2 text-[16px]">
              Book a Call
            </Link>
            <Link href="#" className="text-[#A4ACB9] mb-2 text-[16px]">
              Term of Use
            </Link>
            <Link href="#" className="text-[#A4ACB9] text-[16px]">
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
