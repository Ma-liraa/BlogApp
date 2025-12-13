"use client";
import RHFTextField from "@/ui/RHFTextField";
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RHFSelect from "@/ui/RHFSelect";
import { useCategories } from "@/hooks/useCategories";
import Image from "next/image";
import FileInput from "@/ui/FileInput";
import { HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "@/ui/Button";
import useCreatePost from "./useCreatePost";
import SpinnerMini from "@/ui/SpinnerMini";
import { useRouter } from "next/navigation";
import useEditPost from "./useEditPost";
import { imageUrlToFile } from "@/utils/fileFormatter";
import ButtonIcon from "@/ui/ButtonIcon";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

function CreatePostForm({ postToEdit = {} }) {
  const { _id: postId } = postToEdit;

  const isEditSession = Boolean(postId);
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
      category: category._id,
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

  useEffect(() => {
    if (prevCoverImageUrl) {
      async function changeFormatFile() {
        const file = await imageUrlToFile(prevCoverImageUrl);
        setValue("coverImage", file);
      }
      changeFormatFile();
    }
  }, []);

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

  return (
    <form
      className="mb-4 w-full break-inside-avoid rounded-3xl bg-[#3B66FF]/10 p-2 shadow-[0_0_30px_rgba(59,102,255,0.5)] md:mb-0"
      onSubmit={handleSubmit(onsubmit)}
    >
      <div className="flex flex-col items-center gap-y-6 rounded-2xl bg-[#FCFCFF] p-4">
        <RHFTextField
          name="title"
          label="عنوان"
          errors={errors}
          register={register}
          isRequired
        />
        <RHFTextField
          name="briefText"
          label="متن کوتاه"
          errors={errors}
          register={register}
          isRequired
        />
        <RHFTextField
          name="text"
          label="متن"
          errors={errors}
          register={register}
          isRequired
        />
        <RHFTextField
          name="slug"
          label="اسلاگ"
          errors={errors}
          register={register}
          isRequired
        />
        <RHFTextField
          name="readingTime"
          label="زمان مطالعه"
          errors={errors}
          register={register}
          isRequired
        />
        <div className="w-full">
          <RHFSelect
            name="category"
            label="دسته بندی"
            errors={errors}
            register={register}
            isRequired
            options={categories}
          />
        </div>

        <Controller
          name="coverImage"
          control={control}
          rules={{ required: "کاور پست الزامی است" }}
          render={({ field: { value, onChange, ...rest } }) => {
            return (
              <FileInput
                label="انتخاب کاور پست"
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
            );
          }}
        />

        {coverImageUrl && (
          <div className="relative aspect-video h-[200px] w-full overflow-hidden rounded-xl">
            <Image
              fill
              alt="cover-iamge"
              src={coverImageUrl}
              className="object-cover object-center"
            />
            <button
              onClick={() => {
                setCoverImageUrl(null);
                setValue("coverImage", null);
              }}
              className="absolute left-4 top-4 rounded-md bg-rose-300 px-4 py-1 text-rose-600 transition-all hover:bg-rose-600 hover:text-rose-100"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.25367 18C6.93501 18 6.61635 17.8826 6.36478 17.6312C5.87841 17.145 5.87841 16.3402 6.36478 15.854L15.8574 6.36465C16.3438 5.87845 17.1488 5.87845 17.6352 6.36465C18.1216 6.85086 18.1216 7.65561 17.6352 8.14181L8.14256 17.6312C7.90776 17.8826 7.57233 18 7.25367 18Z"
                  fill="currentColor"
                />
                <path
                  d="M16.7463 18C16.4277 18 16.109 17.8826 15.8574 17.6312L6.36478 8.14181C5.87841 7.65561 5.87841 6.85086 6.36478 6.36465C6.85115 5.87845 7.65618 5.87845 8.14256 6.36465L17.6352 15.854C18.1216 16.3402 18.1216 17.145 17.6352 17.6312C17.3836 17.8826 17.065 18 16.7463 18Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        )}
        <>
          {isCreating || isEditing ? (
            <SpinnerMini />
          ) : (
            <button
              className="w-full rounded-xl bg-[#C3CDFF] p-4 text-base font-[1000] text-[#1E2A44]"
              type="submit"
            >
              تایید
            </button>
          )}
        </>
      </div>
    </form>
  );
}

export default CreatePostForm;
