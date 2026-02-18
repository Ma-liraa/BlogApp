"use client";

import Search from "@/ui/Search";
import Link from "next/link";
import { User, Hexagon } from "lucide-react"; // استفاده از آیکون‌های مدرن

function Header() {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      {/* --- Header Mobile --- */}
      <header className="block py-6 md:hidden">
        <nav className="flex items-center gap-x-3">
          {/* User Icon Button */}
          <Link href="/profile">
            <button className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-blue-50 hover:text-blue-600 hover:shadow-md hover:ring-blue-100 active:scale-95">
              <User className="h-6 w-6" />
            </button>
          </Link>

          {/* Search Component - در موبایل تمام عرض باقی‌مانده را می‌گیرد */}
          <div className="flex-1">
            <Search />
          </div>
        </nav>
      </header>

      {/* --- Header Desktop --- */}
      <header className="hidden py-6 md:block">
        <nav className="flex items-center justify-between gap-x-6">
          {/* بخش سمت راست: لوگو */}
          <div className="flex items-center">
            {/* لوگو */}
            <Link href="/">
              <div className="flex items-center justify-center gap-x-3 py-2">
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-blue-50 text-blue-600">
                  <Hexagon className="h-8 w-8 stroke-[2.5]" />
                </div>
                <span className="text-xl font-black tracking-tight text-slate-800">
                  وبلاگینو
                </span>
              </div>
            </Link>
          </div>

          {/* بخش سمت چپ: جستجو و پروفایل */}
          <div className="flex items-center gap-x-4">
            {/* باکس جستجو */}
            <div className="w-[350px]">
              <Search />
            </div>

            {/* خط جداکننده عمودی */}
            <div className="h-8 w-px bg-slate-200"></div>

            {/* دکمه پروفایل کاربر */}
            <Link href="/profile">
              <button className="group flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-blue-50 hover:text-blue-600 hover:shadow-md hover:ring-blue-100 active:scale-95">
                <User className="h-6 w-6 transition-transform group-hover:scale-110" />
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
