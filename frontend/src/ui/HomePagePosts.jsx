import { getPostsApi } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import truncateText from "@/utils/trancateText";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function HomePagePosts() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getPostsApi(options);
  console.log(posts);

  return (
    <div className="columns-1 lg:columns-3 space-x-0.5 space-y-4">
      {posts.map((post) => (
        <article
          key={post.id}
          className="mb-4 break-inside-avoid  rounded-3xl bg-[#3B66FF]/10 p-2 shadow-[0_0_20px_rgba(59,102,255,0.5)] md:mb-0"
        >
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={post.coverImageUrl}
              alt="cover of blog"
              width={500}
              height={500}
              className="block h-auto w-full object-cover"
              loading="lazy"
            />

            <div className="absolute right-1 top-1 rounded-full bg-[#C3CDFF]/50 px-3 py-1.5 text-xs font-[1000] text-[#1E2A44] backdrop-blur-lg">
              {post.category?.title}
            </div>

            <Link href={`blogs/${post.slug}`}>
              <h2 className="absolute bottom-14 right-1 rounded-full bg-[#C3CDFF]/50 px-3 py-1.5 text-base font-[1000] text-[#1E2A44] backdrop-blur-lg">
                {truncateText(post.title, 60)}
              </h2>
            </Link>

            <div className="absolute bottom-1 right-1 flex items-center gap-x-1">
              <div className="rounded-r-[50px] rounded-bl-[50px] rounded-tl-[25px] bg-[#C3CDFF]/90 p-1 backdrop-blur-lg">
                {/* توجه: در JSX باید clipPath بنویسی نه clipPath */}
                <svg
                  width="32"
                  height="32"
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

              <div className="rounded-l-[50px] rounded-br-[50px] rounded-tr-[25px] bg-[#C3CDFF]/90 px-3 py-1.5 text-xs font-[1000] text-[#1E2A44] backdrop-blur-lg">
                {post.author?.name}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default HomePagePosts;
