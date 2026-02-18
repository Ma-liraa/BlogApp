"use client";

import React, { useState } from "react";
import SideBar from "./_components/SideBar";
import { Menu, X, Hexagon } from "lucide-react";
import Link from "next/link";

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="relative h-screen overflow-y-auto bg-slate-50">
      {/* --- هدر موبایل --- */}
      <header className="flex items-center justify-between border-b border-slate-100 bg-white p-4 md:hidden">
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
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600"
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>

      <div className="flex h-full gap-x-4 p-0 md:p-4">
        {/* --- Overlay موبایل --- */}
        {isOpen && (
          <div
            className="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm transition-opacity md:hidden"
            onClick={closeSidebar}
          />
        )}

        {/* --- سایدبار اصلی --- */}
        <aside
          className={`fixed inset-y-0 right-0 z-[70] md:p-4  w-[300px] transform bg-white transition-all duration-300 ease-in-out md:static md:z-auto md:w-[320px] md:translate-x-0 md:rounded-[35px] md:shadow-xl md:shadow-slate-200/50 md:ring-1 md:ring-slate-100 ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"} `}
        >
          {/* دکمه بستن موبایل */}
          <button
            onClick={closeSidebar}
            className="absolute left-4 top-4 rounded-full bg-slate-100 p-2 text-slate-400 md:hidden"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="h-full p-2">
            <SideBar onClose={closeSidebar} />
          </div>
        </aside>

        {/* --- محتوای صفحه --- */}
        <main className="flex-1 overflow-y-auto px-4 py-6 md:px-2 md:py-0">
          <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-screen-xl duration-700">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
