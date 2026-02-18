import React, { Suspense } from "react";
import CategoriesTable from "./_/components/CategoriesTable";
import Spinner from "@/ui/Spinner";
import { CreateCategory } from "./_/components/Buttons";

async function page() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4 text-[#1E2A44]">
        <h1 className="flex-1 text-xl font-[1000]">لیست پست‌ها</h1>
        <div className="flex-1">
          <CreateCategory />
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <CategoriesTable />
      </Suspense>
    </div>
  );
}

export default page;
