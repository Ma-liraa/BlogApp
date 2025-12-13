import HomePagePosts from "@/ui/HomePagePosts";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4">
      {/* mobile screen */}
      <h1 className="mb-[48px] block text-[38px] font-[1000] text-[#1E2A44] md:hidden">
        تمام وبلاگ های امروز در <span className="text-[#3B66FF]">وبلاگینو</span>
      </h1>
      <div className="mx-auto mb-20 flex max-w-screen-sm flex-col gap-y-6 md:hidden">
        <HomePagePosts />
      </div>
      {/* desctop screen */}
      <div className="mb-[55px] hidden flex-col items-center gap-y-6 md:flex">
        <h1 className="block text-[44px] font-[1000] text-[#1E2A44]">
          تمام وبلاگ های امروز در
          <span className="text-[#3B66FF]"> وبلاگینو</span>
        </h1>
        <p className="mb-6 block text-[20px] font-bold text-[#1E2A44]">
          هر آنچه که دنبالشی در وبلاگینو میتونی پیداش کنی
        </p>
        <div className="flex items-center gap-x-4">
          <Link href="/blogs">
            <div className="rounded-2xl bg-[#3B66FF]/20 p-1 shadow-[0_0_20px_rgba(59,102,255,0.4)] transition-all hover:-translate-y-2 hover:scale-105">
              <button className="flex items-center justify-center rounded-xl bg-[#C3CDFF] px-10 py-3 text-base font-[1000] text-[#3B66FF] ring-2 ring-[#C3CDFF]">
                دیدن وبلاگ‌ها
              </button>
            </div>
          </Link>
          <Link href="/profile">
            <button className="flex items-center justify-center rounded-xl px-10 py-3 text-base font-[1000] text-[#3B66FF] ring-2 ring-[#3B66FF] transition-all hover:-translate-y-2 hover:scale-105">
              رفتن به پروفایل
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden flex-col gap-y-6 md:flex">
        <div className="flex items-center gap-x-2">
          <span>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.9999 43.75C34.2047 43.75 41.6666 36.7581 41.6666 28.1333C41.6666 20.3387 37.4278 14.2461 34.5041 11.3424C33.9618 10.8038 33.0589 11.0418 32.7524 11.7352C31.1962 15.256 27.9537 20.3252 23.8095 20.3252C21.2447 20.6685 17.3267 18.4759 20.4891 7.60142C20.7739 6.62226 19.7285 5.83569 18.93 6.4904C14.3845 10.2174 8.33325 17.7322 8.33325 28.1333C8.33325 36.7581 15.7952 43.75 24.9999 43.75Z"
                fill="#3B66FF"
              />
            </svg>
          </span>
          <span className="text-lg font-[1000] text-[#1E2A44]">
            آخرین بلاگ‌ها
          </span>
        </div>
        <HomePagePosts />
      </div>
    </div>
  );
}
