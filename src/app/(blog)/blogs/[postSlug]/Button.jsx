"use client";
import useBookmark from "@/hooks/useBookmark";
import useLike from "@/hooks/useLike";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";

export function ButtonsMobile({ post }) {
  const { likePost } = useLike();
  const { bookmarkPost } = useBookmark();
  return (
    <>
      <button
        className={` ${post.isLiked ? "fill-rose-500" : "text-slate-400"}`}
      >
        <Heart onClick={() => likePost(post._id)} className="h-6 w-6" />
      </button>
      <div className="h-4 w-px bg-slate-300"></div>
      <button className="text-slate-400 hover:text-blue-600">
        <MessageCircle
          onClick={() => bookmarkPost(post._id)}
          className="h-6 w-6"
        />
      </button>
      <div className="h-4 w-px bg-slate-300"></div>
      <button className="text-slate-400 hover:text-slate-800">
        <Share2
          onClick={() =>
            toast("این ویژگی بعدا اضافه می‌شود", {
              icon: "🔜",
            })
          }
          className="h-6 w-6"
        />
      </button>
    </>
  );
}
export function ButtonsDesctop({ post }) {
  const { likePost } = useLike();
  const { bookmarkPost } = useBookmark();
  return (
    <>
      <FloatingActionBtn
        icon={<Heart />}
        count={post.likesCount}
        activeColor="text-rose-500"
        onClick={() => likePost(post._id)}
      />
      <FloatingActionBtn
        onClick={() => bookmarkPost(post._id)}
        icon={<Bookmark />}
        activeColor="text-blue-600"
      />
      <FloatingActionBtn
        onClick={() =>
          toast("این ویژگی بعدا اضافه می‌شود", {
            icon: "🔜",
          })
        }
        icon={<Share2 />}
      />
      <div className="h-px w-8 bg-slate-200"></div>
      <FloatingActionBtn
        icon={<MessageCircle />}
        count={post.commentsCount || 4}
      />
    </>
  );
}
// کامپوننت دکمه شناور سایدبار (دسکتاپ)
function FloatingActionBtn({
  icon,
  onClick,
  count,
  activeColor = "text-blue-600",
}) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col items-center gap-1"
    >
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
