"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Calendar,
  Heart,
  Bookmark,
  ChevronLeft,
  User,
  FileSearch,
} from "lucide-react";
import truncateText from "@/utils/trancateText";
import { toLocalDateShort } from "@/utils/dateFormatter";
import useLike from "@/hooks/useLike";
import useBookmark from "@/hooks/useBookmark";

function PostList({ posts }) {
  const { likePost, isLiking } = useLike();
  const { bookmarkPost, isBookmarking } = useBookmark();

  if (posts.length === 0)
    return (
      /* ... کدهای بخش "پیدا نشد" همان قبلی بماند (بسیار عالی بود) ... */
      <div className="animate-in fade-in zoom-in flex min-h-[400px] flex-col items-center justify-center rounded-[40px] border border-dashed border-slate-200 bg-slate-50/50 px-6 py-20 text-center duration-500">
        {/* بخش آیکون که در مرحله قبل طراحی کردیم */}
        <div className="group relative mb-8">
          <div className="absolute inset-0 scale-[1.8] animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-blue-500/20 blur-[40px]"></div>
          <div className="relative flex h-28 w-28 animate-[bounce_5s_ease-in-out_infinite] items-center justify-center rounded-[36px] bg-gradient-to-tr from-white via-blue-50 to-white shadow-2xl shadow-blue-900/10 ring-1 ring-white/80 ring-offset-2 ring-offset-blue-50/50">
            <FileSearch
              className="absolute h-14 w-14 translate-x-1 translate-y-1 text-blue-300/40 blur-[2px]"
              strokeWidth={2}
            />
            <FileSearch
              className="relative h-14 w-14 text-blue-600 drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
              strokeWidth={1.5}
            />
          </div>
        </div>
        <h2 className="mb-3 text-2xl font-black text-slate-800">
          چیزی پیدا نکردیم!
        </h2>
        <p className="max-w-[300px] text-sm font-medium leading-relaxed text-slate-500">
          متأسفانه هیچ مقاله‌ای با این مشخصات یافت نشد.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => (window.location.href = "/blogs")}
            className="rounded-2xl bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 hover:bg-blue-700 active:scale-95"
          >
            پاک کردن فیلترها
          </button>
          <Link
            href="/"
            className="rounded-2xl bg-white px-8 py-3 text-sm font-bold text-slate-600 shadow-sm ring-1 ring-slate-200 transition-all hover:bg-slate-50 active:scale-95"
          >
            بازگشت به خانه
          </Link>
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
      {posts.map((post) => (
        <div
          key={post._id}
          className="group relative flex flex-col overflow-hidden rounded-[32px] bg-white p-3 shadow-xl shadow-slate-200/50 ring-1 ring-slate-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-900/10"
        >
          {/* بخش تصویر */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[26px]">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

            <div className="absolute right-3 top-3 rounded-2xl bg-white/90 px-3 py-1.5 text-[10px] font-black text-blue-600 shadow-sm backdrop-blur-md">
              {post.category?.title}
            </div>

            <div className="absolute bottom-3 right-3 flex items-center gap-2 rounded-2xl bg-black/20 px-3 py-1.5 text-[10px] font-bold text-white backdrop-blur-md">
              <User className="h-3.5 w-3.5" />
              {post.author.name}
            </div>
          </div>

          {/* محتوای کارت */}
          <div className="flex flex-1 flex-col p-4">
            <div className="mb-3 flex items-center gap-4 text-[10px] font-bold text-slate-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {toLocalDateShort(post.createdAt)}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readingTime} دقیقه مطالعه
              </div>
            </div>

            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-3 text-lg font-black leading-tight text-slate-800 transition-colors group-hover:text-blue-600 md:text-xl">
                {truncateText(post.title, 50)}
              </h2>
            </Link>

            <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-slate-500">
              {post.briefText}
            </p>

            {/* فوتر کارت: دکمه‌ها و لایک */}
            <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
              <div className="flex items-center gap-2">
                {/* دکمه لایک هوشمند */}
                <button
                  disabled={isLiking}
                  onClick={() => likePost(post._id)}
                  className={`flex items-center gap-1 rounded-xl bg-rose-50 px-3 py-2 text-rose-600 ${post.isLiked ? "fill-rose-600" : ""} transition-colors hover:bg-rose-100`}
                >
                  <Heart className={`h-4 w-4`} />
                  <span className="text-xs font-black">{post.likesCount}</span>
                </button>

                {/* دکمه بوکمارک هوشمند */}
                <button
                  disabled={isBookmarking}
                  onClick={() => bookmarkPost(post._id)}
                  className={`flex items-center justify-center rounded-xl p-2.5 transition-all duration-300 ${
                    post.isBookmarked
                      ? "bg-blue-100 text-blue-600"
                      : "bg-slate-50 text-slate-400 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  <Bookmark
                    className={`h-4 w-4 ${post.isBookmarked ? "fill-blue-600" : ""}`}
                  />
                </button>
              </div>

              <Link
                href={`/blogs/${post.slug}`}
                className="group/btn flex items-center gap-1 text-sm font-black text-blue-600 transition-all hover:gap-2"
              >
                ادامه مطلب
                <ChevronLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
