"use client";

import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { TagIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

// ایمپورت کامپوننت‌های UI
import RHFTextField from "@/ui/RHFTextField";
import SpinnerMini from "@/ui/SpinnerMini";

// ایمپورت هوک‌ها
import useCreateCategory from "./useCreateCategory";
import useEditCategory from "./useEditCategory";

// 1. اسکیما اعتبارسنجی
const schema = yup
  .object({
    title: yup
      .string()
      .min(3, "حداقل ۳ کاراکتر")
      .required("عنوان فارسی ضروری است"),
    englishTitle: yup
      .string()
      .min(3, "حداقل ۳ کاراکتر")
      .required("عنوان انگلیسی ضروری است"),
    description: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر")
      .required("توضیحات ضروری است"),
  })
  .required();

function CreateCategoryForm({ categoryToEdit = {} }) {
  const { _id: editId } = categoryToEdit;
  const isEditSession = Boolean(editId);

  const { title, englishTitle, description } = categoryToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      englishTitle,
      description,
    };
  }

  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: editValues,
  });

  const { isCreating, createCategory } = useCreateCategory();
  const { editCategory, isEditing } = useEditCategory();
  const router = useRouter();

  const onsubmit = (data) => {
    if (isEditSession) {
      editCategory(
        { categoryId: editId, data },
        { reset, onSuccess: () => router.push("/profile/categories") },
      );
    } else {
      createCategory(data, {
        onSuccess: () => router.push("/profile/categories"),
      });
    }
  };

  const isLoading = isCreating || isEditing;

  return (
    <form className="w-full" onSubmit={handleSubmit(onsubmit)}>
      {/* هدر داخلی فرم (اختیاری برای زیبایی بیشتر) */}
      <div className="mb-8 flex items-center gap-2 border-b border-slate-100 pb-4">
        <TagIcon className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-bold text-slate-800">
          {isEditSession ? "ویرایش اطلاعات" : "اطلاعات پایه"}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {/* فیلد عنوان فارسی */}
        <div className="col-span-1">
          <RHFTextField
            name="title"
            label="عنوان (فارسی)"
            errors={errors}
            register={register}
            isRequired
            placeholder="مثلا: تکنولوژی"
          />
        </div>

        {/* فیلد عنوان انگلیسی */}
        <div className="col-span-1">
          <RHFTextField
            name="englishTitle"
            label="عنوان انگلیسی (Slug)"
            errors={errors}
            register={register}
            isRequired
            dir="ltr"
            placeholder="e.g. Technology"
          />
        </div>

        {/* فیلد توضیحات - تمام عرض */}
        <div className="col-span-1 md:col-span-2">
          <RHFTextField
            name="description"
            label="توضیحات کوتاه"
            errors={errors}
            register={register}
            isRequired
            placeholder="توضیحی در مورد این دسته‌بندی بنویسید..."
          />
        </div>

        {/* دکمه ارسال */}
        <div className="col-span-1 mt-4 md:col-span-2">
          {isLoading ? (
            <div className="flex w-full justify-center rounded-xl bg-slate-50 py-4">
              <SpinnerMini />
            </div>
          ) : (
            <button
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-95"
              type="submit"
            >
              <CheckCircleIcon className="h-6 w-6 transition-transform group-hover:scale-110" />
              <span>{isEditSession ? "ذخیره تغییرات" : "ثبت دسته‌بندی"}</span>
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default CreateCategoryForm;
