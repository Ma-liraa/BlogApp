import Breadcrumbs from "@/ui/BreadCrumbs";
import React from "react";

import { notFound } from "next/navigation";
import { getCategoriesApi } from "@/services/categoryServie";
import { CreateCategory } from "../../_/components/Buttons";

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
            label: "ایجاد دسته‌بندی",
            href: "/profile/categories/create",
            active: true,
          },
        ]}
      />
      <div className="mx-auto flex max-w-screen-sm justify-center">
        <CreateCategory categoryToEdit={category} />
      </div>
    </div>
  );
}

export default EditPage;
