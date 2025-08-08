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
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center text-secondary-700 gap-8 mb-8">
        <h1 className="text-xl font-bold">لیست پست‌ها</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostsTable query={query} />
      </Suspense>
      <div className="w-full flex justify-center mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default page;
