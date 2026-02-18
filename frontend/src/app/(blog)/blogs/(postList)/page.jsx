import React from "react";
import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPostsApi } from "@/services/postServices";
import queryString from "query-string";
import { Search } from "lucide-react";
import Pagination from "@/ui/Pagination";

async function Page({ searchParams }) {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const queries = queryString.stringify(searchParams);
  const { posts, totalPages } = await getPostsApi(queries, options);
  const { search } = searchParams;

  return (
    <main className="container mx-auto max-w-7xl">
      {search && (
        <div className="mb-10 flex items-center gap-3 rounded-3xl bg-blue-50 p-6 ring-1 ring-blue-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm">
            <Search className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-blue-900/60">
              نتایج جستجو برای:
            </p>
            <h1 className="text-xl font-black text-blue-900">
              &quot;{search}&quot;
            </h1>
            <p className="mt-1 text-xs text-blue-700/50">
              {posts.length === 0
                ? "متاسفانه پستی یافت نشد."
                : `${posts.length} مورد پیدا شد.`}
            </p>
          </div>
        </div>
      )}

      <div>
        <PostList posts={posts} />

        {/* Pagination */}
        {totalPages < 9 && (
          <section className="mt-8 flex items-center justify-center pb-48 md:pb-8">
            <Pagination totalPages={totalPages} />
          </section>
        )}
      </div>
    </main>
  );
}

export default Page;
