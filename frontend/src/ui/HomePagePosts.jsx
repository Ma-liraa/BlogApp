import { getPostsApi } from "@/services/postServices";
import { toLocalDateShort } from "@/utils/dateFormatter";
import setCookieOnReq from "@/utils/setCookieOnReq";
import truncateText from "@/utils/trancateText";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Heart } from "lucide-react";
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
    <div className="columns-1 space-x-0.5 space-y-4 lg:columns-3">
      {posts.map((post) => (
        <article key={post.id}>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute bottom-0 h-[90%] w-full bg-gradient-to-t from-50% from-black/80 to-black/0"></div>
            <Image
              src={post.coverImageUrl}
              alt="cover of blog"
              width={500}
              height={500}
              className="block h-auto w-full object-cover"
              loading="lazy"
            />

            <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2">
              <Link href={`blogs/${post.slug}`}>
                <h2 className="text-base font-[1000] text-white">
                  {truncateText(post.title, 60)}
                </h2>
              </Link>

              <div className="w-full gap-x-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-1 items-center gap-x-2">
                    <div className="rounded-full bg-[#C3CDFF]/50 px-3 py-1.5 text-xs font-[1000] text-[#1E2A44] backdrop-blur-lg">
                      {post.category?.title}
                    </div>
                    <div className="rounded-full bg-[#C3CDFF]/50 px-3 py-1.5 text-xs font-[1000] text-[#1E2A44] backdrop-blur-lg">
                      {toLocalDateShort(post.updatedAt)}
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#C3CDFF]/50 px-3 py-1.5 text-xs font-[1000] text-[#1E2A44] backdrop-blur-lg">
                      <HeartIcon className="size-5"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default HomePagePosts;
