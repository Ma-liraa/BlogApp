import { getPostBySlug } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comment/PostComment";
import { toLocalDateShort } from "@/utils/dateFormatter";
import {
  Clock,
  CalendarDays,
  UserCircle2,
  Bookmark,
  Heart,
  Share2,
  MessageCircle,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.postSlug);
  return { title: post.title };
}

async function SinglePost({ params }) {
  const post = await getPostBySlug(params.postSlug);
  if (!post) notFound();

  return (
    <div className="container mx-auto max-w-[1440px] px-4 py-8 lg:px-8">
      {/* =========================================================================
          HERO SECTION (SPLIT LAYOUT)
          دسکتاپ: متن راست | عکس چپ
          موبایل: عکس بالا | متن پایین
      ========================================================================= */}
      <header className="mb-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
        {/* --- ستون محتوای متنی (عنوان و ...) --- */}
        <div className="order-2 flex flex-col gap-y-6 lg:order-1 lg:col-span-7">
          {/* Breadcrumb / Category */}
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-sm font-bold text-blue-600">
              {post.category?.title || "دسته بندی"}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-4xl lg:text-5xl lg:leading-[1.2]">
            {post.title}
          </h1>

          {/* Brief Text (Lead Paragraph) */}
          <p className="text-lg font-medium leading-relaxed text-slate-500 md:text-xl">
            {post.briefText}
          </p>

          {/* Author & Meta Data */}
          <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-6">
            {/* Author Profile */}
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md shadow-slate-200">
                {/* اگر عکس نویسنده دارید جایگزین کنید */}
                <div className="flex h-full w-full items-center justify-center bg-blue-50 text-blue-600">
                  <UserCircle2 className="h-8 w-8" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800">
                  {post.author.name}
                </span>
                <span className="text-[10px] text-slate-400">نویسنده ارشد</span>
              </div>
            </div>

            <div className="hidden h-8 w-px bg-slate-200 sm:block"></div>

            {/* Date & Time */}
            <div className="flex items-center gap-4 text-xs font-bold text-slate-500 sm:text-sm">
              <div className="flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                <span>{toLocalDateShort(post.createdAt)}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-blue-50 px-2 py-1 text-blue-700">
                <Clock className="h-3.5 w-3.5" />
                <span>{post.readingTime} دقیقه مطالعه</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- ستون تصویر (Image) --- */}
        <div className="relative order-1 lg:order-2 lg:col-span-5">
          {/* افکت Glow پشت عکس */}
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-70 blur-2xl"></div>

          {/* کانتینر عکس */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] shadow-2xl shadow-blue-900/10 ring-4 ring-white lg:aspect-square">
            <Image
              className="object-cover transition-transform duration-700 hover:scale-105"
              fill
              src={post.coverImageUrl}
              alt={post.title}
              priority
            />
          </div>
        </div>
      </header>

      {/* =========================================================================
          MAIN CONTENT AREA (GRID)
      ========================================================================= */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* --- سایدبار ابزارک‌ها (Sticky Sidebar Left) --- */}
        <div className="hidden lg:col-span-1 lg:block">
          <div className="sticky top-32 flex flex-col items-center gap-6">
            <FloatingActionBtn
              icon={<Heart />}
              count={post.likesCount || 120}
              activeColor="text-rose-500"
            />
            <FloatingActionBtn
              icon={<Bookmark />}
              activeColor="text-blue-600"
            />
            <FloatingActionBtn icon={<Share2 />} />
            <div className="h-px w-8 bg-slate-200"></div>
            <FloatingActionBtn
              icon={<MessageCircle />}
              count={post.commentsCount || 4}
            />
          </div>
        </div>

        {/* --- متن اصلی مقاله --- */}
        <div className="lg:col-span-7">
          <article className="prose prose-lg prose-slate prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-800 prose-p:leading-loose prose-p:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-img:shadow-lg prose-strong:text-slate-800 max-w-none">
            {post.text}
          </article>

          {/* تگ‌ها (نمونه) */}
          <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-100 pt-8">
            {["تکنولوژی", "برنامه‌نویسی", "ری‌اکت"].map((tag) => (
              <span
                key={tag}
                className="cursor-pointer rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* بخش نظرات */}
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <MessageCircle className="h-6 w-6" />
              </span>
              <h3 className="text-2xl font-black text-slate-800">گفتگوها</h3>
            </div>
            <div className="rounded-3xl bg-slate-50/50 p-6 md:p-8">
              <PostComment post={post} />
            </div>
          </div>
        </div>

        {/* --- سایدبار پیشنهادات (Right) --- */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-8">
            {/* پست‌های مرتبط */}
            {post.related && post.related.length > 0 && (
              <div className="rounded-[32px] bg-white p-6 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100">
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="text-lg font-black text-slate-800">
                    مطالب مرتبط
                  </h4>
                  <Link
                    href="/blogs"
                    className="flex items-center text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    مشاهده همه <ChevronLeft className="h-3 w-3" />
                  </Link>
                </div>
                <div className="flex flex-col gap-6">
                  <RelatedPost posts={post.related} />
                </div>
              </div>
            )}

            {/* --- سایدبار (Sticky Sidebar) --- */}
            <div className="lg:col-span-4 mb-48 md:mb-0">
              <div className="sticky top-24 flex flex-col gap-8">
                {/* 1. کارت نویسنده (طراحی جدید) */}
                <div className="group relative overflow-hidden rounded-[32px] bg-slate-900 p-6 text-white shadow-2xl shadow-blue-900/20 transition-all hover:shadow-blue-900/30">
                  {/* پترن پس‌زمینه (برای عمق دادن) */}
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-600 opacity-40 blur-[60px] transition-opacity duration-500 group-hover:opacity-60"></div>
                  <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-indigo-600 opacity-40 blur-[60px] transition-opacity duration-500 group-hover:opacity-60"></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* آواتار با حلقه متحرک */}
                    <div className="relative mb-4">
                      <div className="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-white/20"></div>
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 shadow-lg ring-4 ring-slate-800">
                        {/* اگر عکس واقعی دارید جایگزین کنید */}
                        <UserCircle2 className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center">
                        {/* لایه اول: انیمیشن موج‌دار (Ping) */}
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

                        {/* لایه دوم: نقطه ثابت با رنگ گرادینت و حاشیه */}
                        <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-tr from-emerald-400 to-green-500 shadow-[0_0_10px_rgba(52,211,153,0.6)] ring-2 ring-slate-900"></span>
                      </div>
                    </div>

                    <h3 className="text-xl font-black tracking-tight">
                      {post.author.name}
                    </h3>
                    <p className="mb-4 text-xs font-medium text-blue-200">
                      عضویت:
                      {toLocalDateShort(post.author.createdAt || Date.now())}
                    </p>

                    {/* بیوگرافی کوتاه */}
                    <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-300/90">
                      علاقمند به دنیای وب و تکنولوژی‌های جدید. اشتراک دانش و
                      تجربیات برنامه نویسی هدف اصلی من است.
                    </p>

                    {/* آمار (تعداد پست و ...) */}
                    <div className="mb-6 flex w-full justify-center gap-8 border-y border-white/10 py-4">
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-white">12</span>
                        <span className="text-[10px] text-slate-400">
                          مـقاله
                        </span>
                      </div>
                      <div className="h-full w-px bg-white/10"></div>
                      <div className="flex flex-col items-center">
                        <span className="text-lg font-bold text-white">
                          1.2k
                        </span>
                        <span className="text-[10px] text-slate-400">
                          بازدید
                        </span>
                      </div>
                    </div>

                    {/* دکمه پروفایل */}
                    <button className="w-full rounded-2xl bg-white py-3 text-sm font-bold text-slate-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-blue-50 hover:shadow-blue-500/20 active:scale-95">
                      مشاهده پروفایل کامل
                    </button>
                  </div>
                </div>

                {/* 2. لیست پست‌های مشابه (زیر نویسنده) */}
                {post.related && post.related.length > 0 && (
                  <div className="flex flex-col gap-5">
                    {/* تیتر بخش */}
                    <div className="flex items-center justify-between px-2">
                      <h4 className="flex items-center gap-2 text-lg font-black text-slate-800">
                        <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        پیشنهادهای ویژه
                      </h4>
                      <Link
                        href="/blogs"
                        className="text-xs font-bold text-blue-500 hover:text-blue-700"
                      >
                        مشاهده همه
                      </Link>
                    </div>

                    {/* لیست کارت‌های کوچک */}
                    <div className="flex flex-col gap-4">
                      {post.related.map((item) => (
                        <Link
                          key={item._id}
                          href={`/blogs/${item.slug}`}
                          className="group"
                        >
                          <div className="flex items-center gap-4 rounded-3xl bg-white p-3 shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:bg-blue-50/50 hover:shadow-md hover:ring-blue-100">
                            {/* تصویر بندانگشتی (Thumbnail) */}
                            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl">
                              <Image
                                src={item.coverImageUrl}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>

                            {/* اطلاعات پست */}
                            <div className="flex flex-col justify-center gap-1.5 overflow-hidden">
                              <h5 className="truncate text-sm font-bold text-slate-700 transition-colors group-hover:text-blue-600">
                                {item.title}
                              </h5>

                              <div className="flex items-center gap-2 text-[10px] font-medium text-slate-400">
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {item.readingTime} دقیقه
                                </span>
                                <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                                <span>{toLocalDateShort(item.createdAt)}</span>
                              </div>
                            </div>

                            {/* آیکون فلش (فقط در هاور نمایش داده می‌شود) */}
                            <div className="ml-2 mr-auto text-blue-500 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
                              <ChevronLeft className="h-4 w-4" />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating Action Bar (Mobile Only) */}
      <div className="fixed bottom-28 left-1/2 z-50 flex -translate-x-1/2 items-center gap-6 rounded-full bg-white/80 px-8 py-3 shadow-2xl shadow-blue-900/20 ring-1 ring-slate-200 backdrop-blur-md lg:hidden">
        <button className="text-slate-400 hover:text-rose-500">
          <Heart className="h-6 w-6" />
        </button>
        <div className="h-4 w-px bg-slate-300"></div>
        <button className="text-slate-400 hover:text-blue-600">
          <MessageCircle className="h-6 w-6" />
        </button>
        <div className="h-4 w-px bg-slate-300"></div>
        <button className="text-slate-400 hover:text-slate-800">
          <Share2 className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

// کامپوننت دکمه شناور سایدبار (دسکتاپ)
function FloatingActionBtn({ icon, count, activeColor = "text-blue-600" }) {
  return (
    <button className="group relative flex flex-col items-center gap-1">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-lg shadow-slate-200/50 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-blue-100 group-hover:${activeColor}`}
      >
        {React.cloneElement(icon, {
          className: "w-6 h-6 transition-transform group-hover:scale-110",
        })}
      </div>
      {count !== undefined && (
        <span className="text-[10px] font-bold text-slate-400">{count}</span>
      )}
    </button>
  );
}

export default SinglePost;
