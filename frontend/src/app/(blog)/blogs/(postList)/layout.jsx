import React, { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import CategoryList from "../_components/CategoryList";
import { TimeFilter } from "@/ui/TimeFilter";
import { Search, Mail, TrendingUp } from "lucide-react"; // استفاده از آیکون‌ها

async function Layout({ children }) {
  return (
    <div className="container mx-auto max-w-7xl py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* --- بخش سایدبار --- */}
        <aside className="col-span-1 lg:col-span-3">
          <div className="sticky top-24 space-y-8">
            {/* ۲. فیلترها (دسته‌بندی و زمان) */}
            <div className="space-y-4">
              <h3 className="px-2 text-xs font-black uppercase tracking-widest text-slate-400">
                فیلترهای نمایش
              </h3>
              <Suspense
                fallback={
                  <div className="h-10 w-full animate-pulse rounded-xl bg-slate-100"></div>
                }
              >
                <CategoryList />
              </Suspense>
              <TimeFilter />
            </div>

            {/* ۳. بخش محبوب‌ترین‌ها (نمونه استاتیک) */}
            <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-slate-800">
                <TrendingUp className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-black">داغ‌ترین مطالب</span>
              </div>
              <ul className="space-y-4">
                <li className="group cursor-pointer">
                  <p className="line-clamp-2 text-xs font-bold leading-relaxed text-slate-600 transition-colors group-hover:text-blue-600">
                    چگونه با ری‌اکت اپلیکیشن‌های سریع‌تری بسازیم؟
                  </p>
                </li>
                <li className="group cursor-pointer">
                  <p className="line-clamp-2 text-xs font-bold leading-relaxed text-slate-600 transition-colors group-hover:text-blue-600">
                    آینده هوش مصنوعی در توسعه وب
                  </p>
                </li>
              </ul>
            </div>

            {/* ۴. بنر خبرنامه (CTA) */}
            <div className="relative overflow-hidden rounded-[32px] bg-blue-600 p-6 text-white shadow-xl shadow-blue-500/20">
              {/* دایره‌های تزئینی پس‌زمینه */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-2 -left-2 h-10 w-10 rounded-full bg-white/10"></div>

              <Mail className="mb-3 h-8 w-8 text-blue-100" />
              <h4 className="mb-2 text-lg font-black">خبرنامه وبلاگینو</h4>
              <p className="mb-4 text-xs leading-relaxed text-blue-100 opacity-90">
                جدیدترین مقالات و آموزش‌ها را در ایمیل خود دریافت کنید.
              </p>
              <button className="w-full rounded-xl bg-white py-2.5 text-xs font-black text-blue-600 transition-all hover:bg-blue-50 active:scale-95">
                عضویت رایگان
              </button>
            </div>
          </div>
        </aside>

        {/* --- محتوای اصلی --- */}
        <main className="col-span-1 lg:col-span-9">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
