"use client";

import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  XMarkIcon,
  PhotoIcon,
  PencilSquareIcon,
  Cog6ToothIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

// ایمپورت کامپوننت‌های UI (فرض بر این است که کدهای قبلی را دارید)
import RHFTextField from "@/ui/RHFTextField";
import RHFSelect from "@/ui/RHFSelect";
import FileInput from "@/ui/FileInput";
import SpinnerMini from "@/ui/SpinnerMini";

// هوک‌ها
import { useCategories } from "@/hooks/useCategories";
import useCreatePost from "./useCreatePost";
import useEditPost from "./useEditPost";
import { imageUrlToFile } from "@/utils/fileFormatter";

// 1. اسکیما اعتبارسنجی
const schema = yup
  .object({
    title: yup.string().min(5, "حداقل ۵ کاراکتر").required("عنوان الزامی است"),
    briefText: yup
      .string()
      .min(10, "حداقل ۱۰ کاراکتر")
      .required("توضیحات کوتاه الزامی است"),
    text: yup
      .string()
      .min(10, "حداقل ۱۰ کاراکتر")
      .required("متن اصلی الزامی است"),
    slug: yup.string().required("اسلاگ الزامی است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه الزامی است")
      .typeError("عدد وارد کنید"),
    category: yup.string().required("دسته‌بندی الزامی است"),
  })
  .required();

function CreatePostForm({ postToEdit = {} }) {
  const { _id: postId } = postToEdit;
  const isEditSession = Boolean(postId);

  // استخراج مقادیر اولیه
  const {
    title,
    text,
    slug,
    briefText,
    readingTime,
    category,
    coverImage,
    coverImageUrl: prevCoverImageUrl,
  } = postToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      text,
      slug,
      briefText,
      readingTime,
      category: category?._id,
      coverImage,
    };
  }

  const {
    control,
    reset,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: editValues,
  });

  const { isCreating, createPost } = useCreatePost();
  const { categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImageUrl || null);
  const { editPost, isEditing } = useEditPost();
  const router = useRouter();

  // تبدیل عکس سرور به فایل در حالت ویرایش
  useEffect(() => {
    if (prevCoverImageUrl) {
      async function changeFormatFile() {
        const file = await imageUrlToFile(prevCoverImageUrl);
        setValue("coverImage", file);
      }
      changeFormatFile();
    }
  }, [prevCoverImageUrl, setValue]);

  const onsubmit = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    if (isEditSession) {
      editPost(
        { postId, data: formData },
        { reset, onSuccess: () => router.push("/profile/posts") },
      );
    } else {
      createPost(formData, { onSuccess: () => router.push("/profile/posts") });
    }
  };

  const isLoading = isCreating || isEditing;

  return (
    <form onSubmit={handleSubmit(onsubmit)} className="w-full pb-20">
      {/* --- شبکه بندی اصلی (Layout Grid) --- */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* ================================================= */}
        {/* ستون سمت راست: محتوای اصلی (8 واحد عرض) */}
        {/* ================================================= */}
        <div className="flex flex-col gap-8 lg:col-span-8">
          {/* کارت 1: اطلاعات عمومی */}
          <div className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40 md:p-8">
            <div className="mb-6 flex items-center gap-2 border-b border-slate-100 pb-4 text-slate-800">
              <PencilSquareIcon className="h-6 w-6 text-blue-600" />
              <h2 className="text-lg font-black">محتوای مقاله</h2>
            </div>

            <div className="flex flex-col gap-6">
              <RHFTextField
                name="title"
                label="عنوان مقاله"
                errors={errors}
                register={register}
                isRequired
                placeholder="عنوان جذاب مقاله را بنویسید..."
              />
              <RHFTextField
                name="briefText"
                label="چکیده (متن کوتاه)"
                errors={errors}
                register={register}
                isRequired
                placeholder="یک توضیح کوتاه برای نمایش در لیست پست‌ها..."
                // اگر از textarea استفاده میکنید کلاس height بدهید
              />
            </div>
          </div>

          {/* کارت 2: ادیتور متن اصلی */}
          <div className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40 md:p-8">
            <div className="mb-4">
              <label className="mb-2 block text-sm font-bold text-slate-700">
                متن کامل مقاله
              </label>
              {/* جایگزین: اینجا باید از CKEditor یا Tiptap استفاده کنید. فعلا Textarea استاندارد */}
              <RHFTextField
                name="text"
                errors={errors}
                register={register}
                isRequired
                placeholder="هر چه میخواهید بنویسید..."
                // استایل خاص برای اینکه شبیه ادیتور شود
              />
            </div>
          </div>

          {/* کارت 3: تصویر شاخص (در موبایل اینجا باشد بهتر است) */}
          <div className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40 md:p-8">
            <div className="mb-6 flex items-center gap-2 border-b border-slate-100 pb-4 text-slate-800">
              <PhotoIcon className="h-6 w-6 text-blue-600" />
              <h2 className="text-lg font-black">رسانه</h2>
            </div>

            {!coverImageUrl ? (
              <Controller
                name="coverImage"
                control={control}
                rules={{ required: "کاور پست الزامی است" }}
                render={({ field: { value, onChange, ...rest } }) => (
                  <FileInput
                    label="تصویر شاخص را بارگذاری کنید"
                    name="coverImage"
                    isRequired
                    errors={errors}
                    {...rest}
                    value={value?.fileName}
                    onChange={(event) => {
                      const file = event.target.files[0];
                      onChange(file);
                      setCoverImageUrl(URL.createObjectURL(file));
                      event.target.value = null;
                    }}
                  />
                )}
              />
            ) : (
              <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 transition-all hover:border-blue-400">
                <Image
                  fill
                  alt="cover-image"
                  src={coverImageUrl}
                  className="object-contain p-2" // یا object-cover بسته به سلیقه
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => {
                      setCoverImageUrl(null);
                      setValue("coverImage", null);
                    }}
                    className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-bold text-rose-600 shadow-lg transition-transform hover:scale-105"
                  >
                    <XMarkIcon className="h-5 w-5" />
                    حذف تصویر
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================================================= */}
        {/* ستون سمت چپ: تنظیمات و انتشار (4 واحد عرض) */}
        {/* ================================================= */}
        <div className="flex flex-col gap-8 lg:col-span-4">
          {/* پنل چسبان (Sticky) */}
          <div className="sticky top-6 flex flex-col gap-6">
            {/* کارت انتشار */}
            <div className="rounded-[24px] border border-blue-100 bg-blue-50/50 p-6 shadow-xl shadow-blue-900/5">
              <div className="mb-4 flex items-center gap-2 text-blue-800">
                <PaperAirplaneIcon className="h-6 w-6" />
                <h2 className="text-lg font-black">انتشار</h2>
              </div>
              <p className="mb-6 text-xs leading-relaxed text-blue-600/80">
                پس از بررسی نهایی، پست شما در سایت نمایش داده خواهد شد.
              </p>

              {isLoading ? (
                <div className="flex justify-center rounded-xl bg-white py-4 shadow-sm">
                  <SpinnerMini />
                </div>
              ) : (
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-blue-600/40 active:scale-95"
                  type="submit"
                >
                  {isEditSession ? "ذخیره تغییرات" : "انتشار پست"}
                </button>
              )}
            </div>

            {/* کارت تنظیمات */}
            <div className="rounded-[24px] border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/40">
              <div className="mb-6 flex items-center gap-2 border-b border-slate-100 pb-4 text-slate-800">
                <Cog6ToothIcon className="h-6 w-6 text-slate-500" />
                <h2 className="text-lg font-black">تنظیمات</h2>
              </div>

              <div className="flex flex-col gap-5">
                {/* دسته‌بندی */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-slate-500">
                    دسته‌بندی موضوعی
                  </span>
                  <RHFSelect
                    name="category"
                    // label حذف شد چون بالا تایتل زدیم، یا میتوانید پاس دهید
                    control={control}
                    errors={errors}
                    isRequired
                    options={categories}
                    placeholder="یک مورد را انتخاب کنید"
                  />
                </div>

                {/* زمان مطالعه */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-slate-500">
                    زمان تخمینی مطالعه
                  </span>
                  <RHFTextField
                    name="readingTime"
                    errors={errors}
                    register={register}
                    isRequired
                    type="number"
                    placeholder="مثلا: 5"
                    dir="ltr"
                  />
                </div>

                {/* اسلاگ */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-slate-500">
                    لینک یکتا (Slug)
                  </span>
                  <RHFTextField
                    name="slug"
                    errors={errors}
                    register={register}
                    isRequired
                    dir="ltr"
                    placeholder="my-post-url"
                  />
                  <span className="text-[10px] text-slate-400">
                    فقط حروف انگلیسی و خط تیره (-) مجاز است.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreatePostForm;
