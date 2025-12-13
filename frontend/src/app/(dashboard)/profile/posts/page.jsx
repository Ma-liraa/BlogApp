import React, { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Search from "@/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";
import Spinner from "@/ui/Spinner";
import Pagination from "@/ui/Pagination";
import { getPostsApi } from "@/services/postServices";

async function page({ searchParams }) {
  const query = queryString.stringify(searchParams);
  const { totalPages } = await getPostsApi(query);

  return (
    <div>
      <div className="mb-8 grid grid-cols-1 items-center gap-8 text-[#1E2A44] lg:grid-cols-3">
        <h1 className="text-xl font-[1000]">لیست پست‌ها</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostsTable query={query} />
      </Suspense>
      <div className="mt-8 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default page;
