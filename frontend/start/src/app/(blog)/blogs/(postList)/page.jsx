import React, { Suspense } from "react";
import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPostsApi } from "@/services/postServices";
import queryString from "query-string";

export const metadata = {
  title: "وبلاگ",
};

async function page({ searchParams }) {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const queries = queryString.stringify(searchParams);
  const {posts} = await getPostsApi(queries, options);
  const { search } = searchParams;
  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات یافت نشد"
            : `نشان دادن ${posts.length} نتیجه برای`}
          <span className="font-bold"> &quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
}

export default page;
