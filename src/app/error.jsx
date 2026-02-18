"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // لاگ کردن خطا در کنسول برای دیباگ
    console.error("System Error Captured:", error);
  }, [error]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#e9f0ff] via-[#f5f8ff] to-[#ffffff] px-4 text-center">
      {/* --- پترن پس‌زمینه (مشابه صفحه 404) --- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* --- عدد 500 پس زمینه (تغییر از 404) --- */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
        <h1 className="text-[10rem] font-black text-blue-100/80 sm:text-[14rem]">
          500
        </h1>
      </div>

      {/* --- محتوای اصلی --- */}
      <div className="animate-in fade-in zoom-in-95 relative z-10 max-w-md duration-500">
        {/* آیکون با انیمیشن Ping */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            {/* حلقه انیمیشن پشت آیکون - رنگ کمی گرم‌تر برای ارور */}
            <div className="absolute inset-0 animate-ping rounded-full bg-rose-200 opacity-40"></div>
            <div className="relative rounded-2xl bg-white p-4 shadow-lg ring-1 ring-slate-100">
              <AlertTriangle className="h-10 w-10 text-rose-500" />
            </div>
          </div>
        </div>

        <h2 className="mb-3 text-2xl font-extrabold text-slate-800 sm:text-3xl">
          مشکلی پیش آمده است!
        </h2>

        <p className="mb-6 text-sm leading-relaxed text-slate-500 sm:text-base">
          سیستم با یک خطای غیرمنتظره مواجه شد. لطفا دوباره تلاش کنید.
        </p>

        {/* باکس نمایش متن فنی خطا (شیشه‌ای و مینیمال) */}
        {error?.message && (
          <div className="mx-auto mb-8 max-w-xs overflow-hidden rounded-lg border border-blue-100 bg-white/60 p-3 font-mono text-xs text-slate-400 backdrop-blur-sm">
            <span className="mb-1 block font-bold text-slate-500">
              Error Details:
            </span>
            {error.message}
          </div>
        )}

        {/* دکمه ها */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          {/* تلاش مجدد - دکمه اصلی */}
          <button
            onClick={reset}
            className="group flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <RefreshCw className="h-4 w-4 transition-transform group-hover:rotate-180" />
            تلاش مجدد
          </button>

          {/* صفحه اصلی - دکمه ثانویه */}
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 rounded-xl border border-blue-100 bg-white px-6 py-3 text-sm font-bold text-blue-600 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md"
          >
            <Home className="h-4 w-4 transition-transform group-hover:scale-110" />
            صفحه اصلی
          </Link>
        </div>
      </div>

      {/* فوتر */}
      <div className="absolute bottom-6 text-xs text-slate-400">
        System Error 500
      </div>
    </div>
  );
}
