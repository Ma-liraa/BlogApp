import React from "react";
import CoverImage from "./CoverImage";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Author from "./Author";
import PostInteraction from "./PostInteraction";

function PostList({ posts }) {
  console.log(posts);

  return (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          className="col-span-12 md:col-span-6 lg:col-span-4 p-2 bg-white shadow-xl rounded-2xl"
          key={post._id}
        >
          <CoverImage {...post} />
          {/* post content */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700 hover:text-primary-900 transition-all ease-out">
                {post.title}
              </h2>
            </Link>

            {/* post author - readingTime */}
            <div className="flex items-center justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1"> خواندن:</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>
          </div>
          <PostInteraction post={post} />
        </div>
      ))}
    </div>
  );
}

export default PostList;
