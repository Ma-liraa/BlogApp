import React from "react";
import Breadcrumbs from "@/ui/BreadCrumbs";
import CreateCategoryForm from "./_/components/CreateCategoryForm";
import { Layers, PlusCircle } from "lucide-react";

function Page() {
  return (
    <div className="px-4 ">
      {/* نوار مسیر */}
      <Breadcrumbs
        breadcrumbs={[
          { label: "داشبورد", href: "/profile" },
          { label: "دسته‌بندی‌ها", href: "/profile/categories" },
          {
            label: "ایجاد دسته‌بندی",
            href: "/profile/categories/create",
            active: true,
          },
        ]}
      />

      <div className="mt-8 flex flex-col gap-8 container mx-auto max-w-3xl">
        {/* --- هدر صفحه --- */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-tr from-blue-50 to-indigo-50 text-blue-600 shadow-xl shadow-blue-100 ring-1 ring-white">
            <Layers className="h-10 w-10" />
            <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-blue-50">
              <PlusCircle className="h-5 w-5 fill-blue-50 text-blue-600" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black tracking-tight text-slate-800 md:text-3xl">
              افزودن دسته‌بندی جدید
            </h1>
        
          </div>
        </div>

        {/* --- کارت فرم --- */}
        <div className="relative">
          {/* افکت نوری پس‌زمینه (Glow Effect) */}
          <div className="absolute inset-0 -z-10 translate-y-4 scale-95 rounded-[40px] bg-gradient-to-tr from-blue-200/40 via-indigo-200/40 to-slate-200/40 blur-3xl transition-all duration-500"></div>

          {/* بدنه اصلی فرم */}
          <div className="overflow-hidden rounded-[32px] bg-white p-6 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 md:p-10">
            <CreateCategoryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
