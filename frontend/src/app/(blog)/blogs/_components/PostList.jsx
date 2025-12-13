"use client";
import React from "react";

import Image from "next/image";
import truncateText from "@/utils/trancateText";
import { toLocalDateShort } from "@/utils/dateFormatter";
import Link from "next/link";

function PostList({ posts }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {posts.map((post) => (
        <div className="col-span-1 rounded-[32px] bg-[#3B66FF]/10 p-2 shadow-[0_0_20px_rgba(59,102,255,0.5)]">
          <div className="flex items-center gap-x-4 gap-y-6 rounded-[26px] bg-[#FCFCFF] p-2">
            {/* blog img */}
            <div className="relative h-[200px] w-[160px] overflow-hidden rounded-2xl sm:w-[250px] md:h-[240px]">
              <Image
                src={post.coverImageUrl}
                alt="cover of blog"
                fill
                className="object-cover object-center"
              />
              <div className="absolute right-1 top-1 rounded-full bg-[#C3CDFF]/70 px-3 py-1.5 text-xs font-[1000] text-[#1E2A44] backdrop-blur-sm">
                {post.category.title}
              </div>
              <div className="absolute bottom-1 right-1 flex items-center gap-x-1">
                <div className="rounded-r-[50px] rounded-bl-[50px] rounded-tl-[25px] bg-[#C3CDFF]/90 p-1 backdrop-blur-sm md:p-1">
                  <svg
                    className="h-4 w-4 md:h-7 md:w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_57_980)">
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
                <div className="rounded-l-[50px] rounded-br-[50px] rounded-tr-[25px] bg-[#C3CDFF]/90 p-1 text-[8px] font-[1000] text-[#1E2A44] backdrop-blur-sm md:text-xs">
                  {post.author.name}
                </div>
              </div>
            </div>
            {/* blog desc */}
            <div className="flex flex-col justify-between gap-y-4">
              {/* description */}
              <div className="flex flex-col gap-y-2">
                {/* tags */}
                <div className="mb-1 flex items-center gap-x-1 text-xs font-[1000] text-[#1E2A44]">
                  <span className="rounded-l-[20px] rounded-r-[50px] bg-[#C3CDFF] px-3 py-1">
                    علمی
                  </span>
                  <span className="rounded-l-[50px] rounded-r-[20px] bg-[#C3CDFF] px-3 py-1">
                    تاریخی
                  </span>
                </div>
                {/* title */}
                <Link href={`blogs/${post.slug}`}>
                  <h2 className="text-[15px] font-[1000] text-[#1E2A44] transition-all hover:text-[#3B66FF] sm:text-xl">
                    {truncateText(post.title, 30)}
                  </h2>
                </Link>
                {/* desc */}
                <p className="text-[10px] font-[1000] text-[#3F4C70] sm:text-sm">
                  {truncateText(post.briefText, 70)}.
                </p>
                {/* time */}
                <div className="mb-1 mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 sm:mb-4">
                  <div className="flex items-center gap-x-1">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.87504 1.25C3.87504 1.04289 3.70715 0.875 3.50004 0.875C3.29294 0.875 3.12504 1.04289 3.12504 1.25V2.03963C2.40538 2.09725 1.93293 2.23868 1.58583 2.58578C1.23873 2.93288 1.0973 3.40533 1.03967 4.125H10.9604C10.9028 3.40533 10.7613 2.93288 10.4142 2.58578C10.0671 2.23868 9.59469 2.09725 8.87504 2.03963V1.25C8.87504 1.04289 8.70714 0.875 8.50004 0.875C8.29294 0.875 8.12504 1.04289 8.12504 1.25V2.00645C7.79239 2 7.41954 2 7.00004 2H5.00004C4.58053 2 4.20768 2 3.87504 2.00645V1.25Z"
                          fill="#1E2A44"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 6V7C11 8.8856 11 9.82845 10.4142 10.4142C9.82845 11 8.8856 11 7 11H5C3.11438 11 2.17158 11 1.58579 10.4142C1 9.82845 1 8.8856 1 7V6C1 5.5805 1 5.20765 1.00645 4.875H10.9936C11 5.20765 11 5.5805 11 6ZM8.25 9C8.6642 9 9 8.6642 9 8.25C9 7.8358 8.6642 7.5 8.25 7.5C7.8358 7.5 7.5 7.8358 7.5 8.25C7.5 8.6642 7.8358 9 8.25 9Z"
                          fill="#1E2A44"
                        />
                      </svg>
                    </span>
                    <span className="text-xs font-extrabold text-[#3F4C70]">
                      تاریخ انتشار: {toLocalDateShort(post.createdAt)}
                    </span>
                  </div>
                  <div className="flex items-center gap-x-1">
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
                      زمان مطالعه: {post.readingTime} دقیقه
                    </span>
                  </div>
                </div>
              </div>
              {/* button */}
              <div className="flex items-center gap-x-1">
                <div className="flex items-center gap-x-1">
                  <button className="flex items-center rounded-b-[50px] rounded-r-[50px] rounded-tl-[25px] bg-[#C3CDFF] p-3 text-[#1E2A44]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.75 8.32312V12.0682C15.75 14.3906 15.75 15.5519 15.1994 16.0592C14.9368 16.3013 14.6054 16.4533 14.2523 16.4936C13.512 16.5784 12.6475 15.8137 10.9184 14.2843C10.1541 13.6084 9.7719 13.2703 9.32978 13.1813C9.11205 13.1374 8.88795 13.1374 8.67022 13.1813C8.2281 13.2703 7.8459 13.6084 7.08162 14.2843C5.35255 15.8137 4.48802 16.5784 3.74769 16.4936C3.39461 16.4533 3.06316 16.3013 2.80058 16.0592C2.25 15.5519 2.25 14.3906 2.25 12.0682V8.32312C2.25 5.10668 2.25 3.49845 3.23851 2.49922C4.22703 1.5 5.81802 1.5 9 1.5C12.1819 1.5 13.773 1.5 14.7615 2.49922C15.75 3.49845 15.75 5.10668 15.75 8.32312ZM6.1875 4.5C6.1875 4.18934 6.43934 3.9375 6.75 3.9375H11.25C11.5607 3.9375 11.8125 4.18934 11.8125 4.5C11.8125 4.81066 11.5607 5.0625 11.25 5.0625H6.75C6.43934 5.0625 6.1875 4.81066 6.1875 4.5Z"
                        fill="#1E2A44"
                      />
                    </svg>
                  </button>
                  <button className="flex items-center gap-x-1 rounded-b-[50px] rounded-tl-[25px] rounded-tr-[25px] bg-[#C3CDFF] p-3 text-[#1E2A44]">
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.5 6.85301C1.5 10.5002 4.51457 12.4437 6.7213 14.1834C7.5 14.7972 8.25 15.3752 9 15.3752C9.75 15.3752 10.5 14.7972 11.2787 14.1834C13.4854 12.4437 16.5 10.5002 16.5 6.85301C16.5 3.2058 12.3749 0.619282 9 4.12566C5.62512 0.619282 1.5 3.2058 1.5 6.85301Z"
                          fill="#1E2A44"
                        />
                      </svg>
                    </span>
                    <span className="text-[11px] font-[1000]">
                      {post.likesCount}
                    </span>
                  </button>
                </div>
                <Link
                  className="flex flex-1 items-center justify-center rounded-l-[50px] rounded-br-[50px] rounded-tr-[25px] bg-[#C3CDFF] p-3 text-xs font-[1000] text-[#1E2A44] transition-all hover:text-[#3B66FF] sm:p-2.5 sm:text-sm"
                  href={`blogs/${post.slug}`}
                >
                  <button>ادامه مطالب</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;
