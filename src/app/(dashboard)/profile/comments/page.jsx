import React from "react";
import CommentsTable from "./_/components/CommetsTable";

async function page() {
  return (
    <div>
      <div className="text-secondary-700 my-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <h1 className="text-xl font-bold">لیست کامنت‌ها</h1>
      </div>
      <CommentsTable />
    </div>
  );
}

export default page;
