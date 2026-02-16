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
      <div className="text-secondary-700 mb-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <h1 className="text-xl font-bold">لیست کامنت‌ها</h1>
        <Search />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <CommentsTable query={query} />
      </Suspense>
      {commentsCount && (
        <div className="mt-8 flex w-full justify-center">
          <Pagination totalPages={commentsCount} />
        </div>
      )}
    </div>
  );
}

export default page;
