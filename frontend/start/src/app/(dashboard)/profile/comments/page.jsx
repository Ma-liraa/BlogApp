import React, { Suspense } from "react";
import Search from "@/ui/Search";
import queryString from "query-string";
import Spinner from "@/ui/Spinner";
import Pagination from "@/ui/Pagination";
import CommentsTable from "./_/components/CommetsTable";
import { getAllCommentsApi } from "@/services/commentService";

async function page({ searchParams }) {
  const query = queryString.stringify(searchParams);
  const { commentsCount } = await getAllCommentsApi(query);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center text-secondary-700 gap-8 mb-8">
        <h1 className="text-xl font-bold">لیست کامنت‌ها</h1>
        <Search />
      </div>
      <h2 className="text-secondary-500 font-bold mb-6">
        تعداد کامنت‌ها :{commentsCount}
      </h2>
      <Suspense fallback={<Spinner />} key={query}>
        <CommentsTable query={query} />
      </Suspense>
    </div>
  );
}

export default page;
