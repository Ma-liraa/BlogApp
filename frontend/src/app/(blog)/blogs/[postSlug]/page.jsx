import { getPostBySlug } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comment/PostComment";
import { toLocalDateShort } from "@/utils/dateFormatter";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.postSlug);
  return { title: `پست ${post.title}` };
}

async function SinglePost({ params }) {
  const post = await getPostBySlug(params.postSlug);
  if (!post) notFound();
  console.log(new Date(post.createdAt).toLocaleTimeString());

  return (
    <div className="mb-24 flex flex-col gap-y-6 md:mb-0">
      {/* img post */}
      <div className="relative h-[300px] w-full overflow-hidden rounded-b-[20px] md:h-[250px]">
        <Image
          className="object-cover object-center"
          fill
          src={post.coverImageUrl}
          alt={post.briefText}
        />
        <div className="absolute right-4 top-4 rounded-full bg-[#C3CDFF]/70 px-3 py-1.5 text-sm font-[1000] text-[#1E2A44] backdrop-blur-sm">
          {post.category.title}
        </div>
        <div className="absolute left-4 top-4 rounded-full bg-[#C3CDFF]/70 px-3 py-1.5 text-sm font-[1000] text-[#1E2A44] backdrop-blur-sm">
          {post.category.title}
        </div>
        {/* like and save */}
        <div className="absolute bottom-4 left-4 flex items-center gap-x-2">
          <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-[#1E2A44] hover:text-[#3B66FF]">
            <svg
              className="h-5 w-5"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.75 8.32312V12.0682C15.75 14.3906 15.75 15.5519 15.1994 16.0592C14.9368 16.3013 14.6054 16.4533 14.2523 16.4936C13.512 16.5784 12.6475 15.8137 10.9184 14.2843C10.1541 13.6084 9.7719 13.2703 9.32978 13.1813C9.11205 13.1374 8.88795 13.1374 8.67022 13.1813C8.2281 13.2703 7.8459 13.6084 7.08162 14.2843C5.35255 15.8137 4.48802 16.5784 3.74769 16.4936C3.39461 16.4533 3.06316 16.3013 2.80058 16.0592C2.25 15.5519 2.25 14.3906 2.25 12.0682V8.32312C2.25 5.10668 2.25 3.49845 3.23851 2.49922C4.22703 1.5 5.81802 1.5 9 1.5C12.1819 1.5 13.773 1.5 14.7615 2.49922C15.75 3.49845 15.75 5.10668 15.75 8.32312ZM6.1875 4.5C6.1875 4.18934 6.43934 3.9375 6.75 3.9375H11.25C11.5607 3.9375 11.8125 4.18934 11.8125 4.5C11.8125 4.81066 11.5607 5.0625 11.25 5.0625H6.75C6.43934 5.0625 6.1875 4.81066 6.1875 4.5Z"
                fill="currentcolor"
              />
            </svg>
          </button>
          <button className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-[#1E2A44] hover:text-[#3B66FF]">
            <span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6.85301C1.5 10.5002 4.51457 12.4437 6.7213 14.1834C7.5 14.7972 8.25 15.3752 9 15.3752C9.75 15.3752 10.5 14.7972 11.2787 14.1834C13.4854 12.4437 16.5 10.5002 16.5 6.85301C16.5 3.2058 12.3749 0.619282 9 4.12566C5.62512 0.619282 1.5 3.2058 1.5 6.85301Z"
                  fill="currentcolor"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-6 md:flex-row">
        <div className="flex flex-col flex-nowrap gap-y-6 md:flex-1">
          <div className="flex items-center justify-between gap-x-4">
            {/* title */}
            <h1 className="text-[15px] font-[1000] text-[#1E2A44] sm:text-xl">
              {post.title}
            </h1>
            {/* reading time */}
            {/* <div className="flex items-center gap-x-1 md:hidden">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 6C1 3.64298 1 2.46446 1.73223 1.73223C2.46446 1 3.64298 1 6 1C8.357 1 9.53555 1 10.2677 1.73223C11 2.46446 11 3.64298 11 6C11 8.357 11 9.53555 10.2677 10.2677C9.53555 11 8.357 11 6 11C3.64298 11 2.46446 11 1.73223 10.2677C1 9.53555 1 8.357 1 6Z"
                    fill="#1E2A44"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 3.625C6.2071 3.625 6.375 3.79289 6.375 4V5.84465L7.51515 6.98485C7.6616 7.1313 7.6616 7.3687 7.51515 7.51515C7.3687 7.6616 7.1313 7.6616 6.98485 7.51515L5.73485 6.26515C5.6645 6.19485 5.625 6.09945 5.625 6V4C5.625 3.79289 5.7929 3.625 6 3.625Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-xs font-extrabold text-[#3F4C70]">
                زمان مطالعه: 10 دقیقه
              </span>
            </div> */}
          </div>
          <div className="h-[2px] w-[50px] self-center bg-[#2251D1]/20"></div>
          {/* author and date and like and save */}
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-x-1">
                <div className="rounded-full bg-[#C3CDFF]/90 p-1 backdrop-blur-sm">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_57_980)">
                      <path
                        d="M12.2148 15.6669C14.3662 15.6669 16.1102 13.9228 16.1102 11.7714C16.1102 9.62003 14.3662 7.87598 12.2148 7.87598C10.0634 7.87598 8.31934 9.62003 8.31934 11.7714C8.31934 13.9228 10.0634 15.6669 12.2148 15.6669Z"
                        fill="#FFB6B6"
                      />
                      <path
                        d="M9.97847 16.2427L9.80248 14.4638L13.3168 13.8066L15.392 18.8593L11.783 23.0097L9.21155 17.957L9.97847 16.2427Z"
                        fill="#FFB6B6"
                      />
                      <path
                        d="M9.74604 15.3544L10.5144 15.528C10.5144 15.528 9.91039 13.6127 10.1154 13.4299C10.3204 13.247 10.8228 13.5351 10.8228 13.5351L11.3507 14.127L11.9937 13.4723C11.9937 13.4723 12.6918 12.6042 12.9652 12.3604C13.2385 12.1166 12.7995 11.2117 12.7995 11.2117C12.7995 11.2117 16.8547 10.1182 15.3458 8.15127C15.3458 8.15127 14.4611 6.60911 14.1729 7.11147C13.8848 7.61384 13.5413 6.81598 13.5413 6.81598L12.4922 7.01547C12.4922 7.01547 10.4218 5.7947 8.45676 8.40628C6.49169 11.0179 9.74604 15.3544 9.74604 15.3544Z"
                        fill="#2F2E41"
                      />
                      <path
                        d="M19.5411 21.3361C17.4122 23.0621 14.7785 24 12 24C9.46285 24 7.04616 23.2178 5.02466 21.7678C5.02827 21.73 5.03188 21.6925 5.03504 21.6551C5.08872 21.0686 5.13654 20.4984 5.16812 20.0256C5.29037 18.19 9.57293 16.9665 9.57293 16.9665C9.57293 16.9665 9.59233 16.9859 9.63113 17.0197C9.86752 17.2272 10.8271 17.9797 12.5098 18.19C14.0102 18.3776 14.5042 17.4875 14.6535 17.0612C14.6986 16.9313 14.7122 16.8442 14.7122 16.8442L19.117 18.9244C19.4044 19.3349 19.5167 20.2191 19.5388 21.213C19.5397 21.254 19.5406 21.2946 19.5411 21.3361Z"
                        fill="#6C63FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_57_980">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-xs font-[1000] text-[#1E2A44]">
                  {post.author.name}
                </div>
                <div className="h-[4px] w-[4px] rounded-full bg-[#1E293B]"></div>
                {/* date */}
                <span className="text-xs font-extrabold text-[#3F4C70]">
                  {toLocalDateShort(post.createdAt)}
                </span>
                <div className="h-[11px] w-[2px] rounded-full bg-[#1E293B]"></div>
                <span className="text-xs font-extrabold text-[#3F4C70]">
                  {new Date(post.createdAt).toLocaleTimeString()}
                </span>
              </div>
              {/* reading time */}
              <div className="hidden items-center gap-x-1 md:flex">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6C1 3.64298 1 2.46446 1.73223 1.73223C2.46446 1 3.64298 1 6 1C8.357 1 9.53555 1 10.2677 1.73223C11 2.46446 11 3.64298 11 6C11 8.357 11 9.53555 10.2677 10.2677C9.53555 11 8.357 11 6 11C3.64298 11 2.46446 11 1.73223 10.2677C1 9.53555 1 8.357 1 6Z"
                      fill="#1E2A44"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 3.625C6.2071 3.625 6.375 3.79289 6.375 4V5.84465L7.51515 6.98485C7.6616 7.1313 7.6616 7.3687 7.51515 7.51515C7.3687 7.6616 7.1313 7.6616 6.98485 7.51515L5.73485 6.26515C5.6645 6.19485 5.625 6.09945 5.625 6V4C5.625 3.79289 5.7929 3.625 6 3.625Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span className="text-xs font-extrabold text-[#3F4C70]">
                  زمان مطالعه: 10 دقیقه
                </span>
              </div>
            </div>
          </div>
          <div className="h-[2px] w-[50px] self-center bg-[#2251D1]/20"></div>

          {/* description */}
          <h2 className="hidden text-sm font-bold text-[#1E2A44] md:block">
            {post.briefText}
          </h2>
        </div>
        <div className="mb-32 flex flex-col gap-6 md:mb-0 md:flex-row">
          {/* post paragraph */}
          <div className="flex flex-col gap-y-2">
            <h3 className="font-black text-[#1E2A44]">توضیحات</h3>
            <p className="text-xs font-black text-[#1E2A44]">{post.text}</p>
          </div>
          {/* suggestions */}
          {post.related.length > 0 && (
            <div className="rounded-[32px] bg-[#3B66FF]/10 p-2 shadow-[0_0_20px_rgba(59,102,255,0.5)]">
              {post.related.length > 0 && <RelatedPost posts={post.related} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
{
  /* post comment */
}
{
  /* <div>
        <PostComment post={post} />
      </div> */
}
