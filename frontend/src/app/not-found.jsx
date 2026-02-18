"use client";

import useMoveBack from "@/hooks/useMoveBack";
import Link from "next/link";
import { ArrowRight, Home, SearchX } from "lucide-react";

export default function NotFound() {
  const moveBack = useMoveBack();

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#e9f0ff] via-[#f5f8ff] to-[#ffffff] px-4 text-center">
      {/* بک گراند نرم شبیه صفحه اصلی */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* عدد 404 پس زمینه */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
        <h1 className="text-[10rem] font-black text-blue-100 sm:text-[14rem]">
          404
        </h1>
      </div>

      {/* محتوای اصلی */}
      <div className="relative z-10 max-w-md">
        {/* آیکون */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-blue-200 opacity-40"></div>
            <div className="relative rounded-2xl bg-white p-4 shadow-lg">
              <SearchX className="h-10 w-10 text-blue-600" />
            </div>
          </div>
        </div>

        <h2 className="mb-3 text-2xl font-extrabold text-slate-800 sm:text-3xl">
          صفحه مورد نظر پیدا نشد!
        </h2>

        <p className="mb-8 text-sm leading-relaxed text-slate-500 sm:text-base">
          ممکن است آدرس تغییر کرده باشد یا صفحه حذف شده باشد.
        </p>

        {/* دکمه ها */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {/* خانه */}
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-700"
          >
            <Home className="h-4 w-4 transition-transform group-hover:scale-110" />
            صفحه اصلی
          </Link>

          {/* بازگشت */}
          <button
            onClick={moveBack}
            className="group flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white px-6 py-3 text-sm font-bold text-blue-600 shadow-sm transition-all hover:bg-blue-50"
          >
            <ArrowRight className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            بازگشت
          </button>
        </div>
      </div>

      {/* فوتر */}
      <div className="absolute bottom-6 text-xs text-slate-400">Error 404</div>
    </div>
  );
}
