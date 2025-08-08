import React, { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import CategoryList from "../_components/CategoryList";
import Search from "@/ui/Search";

function layout({ children }) {
  return (
    <div className="container xl:max-w-screen-xl mx-auto mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="text-lg font-bold">لیست بلاگ ها</h1>
        {/* REASON OF USING SUSPENSE: https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
        {/* <Suspense> */}
        <Search />
        {/* </Suspense> */}
        {/* <Suspense>
          <BlogSort />
        </Suspense> */}
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-4 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
