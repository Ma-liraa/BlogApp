import Breadcrumbs from "@/ui/BreadCrumbs";
import React from "react";

import { notFound } from "next/navigation";
import { getCategoriesApi } from "@/services/categoryServie";
import CreateCategoryForm from "../../create/_/components/CreateCategoryForm";
import { Edit2, PlusCircle } from "lucide-react";

async function EditPage({ params: { categoryId } }) {
  const { categories } = await getCategoriesApi();
  const category = categories.find((item) => item._id === categoryId);
  if (!category) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "دسته‌بندی ها", href: "/profile/categories" },
          {
            label: "ویرایش دسته‌بندی",
            href: "/profile/categories/create",
            active: true,
          },
        ]}
      />
      <div className="container mx-auto mt-8 flex max-w-3xl flex-col gap-8">
        {/* --- هدر صفحه --- */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-[28px] bg-gradient-to-tr from-blue-50 to-indigo-50 text-blue-600 shadow-xl shadow-blue-100 ring-1 ring-white">
            <Edit2 className="h-10 w-10" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-black tracking-tight text-slate-800 md:text-3xl">
              ویرایش دسته‌بندی
            </h1>
          </div>
        </div>

        {/* --- کارت فرم --- */}
        <div className="relative">
          {/* افکت نوری پس‌زمینه (Glow Effect) */}
          <div className="absolute inset-0 -z-10 translate-y-4 scale-95 rounded-[40px] bg-gradient-to-tr from-blue-200/40 via-indigo-200/40 to-slate-200/40 blur-3xl transition-all duration-500"></div>

          {/* بدنه اصلی فرم */}
          <div className="overflow-hidden rounded-[32px] bg-white p-6 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 md:p-10">
            <CreateCategoryForm categoryToEdit={category} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
