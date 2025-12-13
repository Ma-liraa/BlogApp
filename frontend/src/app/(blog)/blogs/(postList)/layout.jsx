import React, { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import CategoryList from "../_components/CategoryList";
import Search from "@/ui/Search";
import { Listbox } from "@headlessui/react";
import ListBox from "@/ui/Listbox";

async function layout({ children }) {
  return (
    <div className="container mx-auto mb-10 md:mb-0 xl:max-w-screen-xl">
      <div className="text-secondary-700 mb-12 grid grid-cols-1 items-center gap-8 lg:grid-cols-3"></div>
      <div className="flex flex-col gap-8">
        {/* <div className="text-secondary-500 col-span-12 space-y-2 lg:col-span-4 xl:col-span-3">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div> */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
