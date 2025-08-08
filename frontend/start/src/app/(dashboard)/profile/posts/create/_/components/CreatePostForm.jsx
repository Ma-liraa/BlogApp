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
        { reset, onSuccess: () => router.push("/profile/posts") }
      );
    } else {
      createPost(formData, { onSuccess: () => router.push("/profile/posts") });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onsubmit)}>
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
      <RHFSelect
        name="category"
        label="دسته بندی"
        errors={errors}
        register={register}
        isRequired
        options={categories}
      />
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
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            fill
            alt="cover-iamge"
            src={coverImageUrl}
            className="object-cover object-center"
          />
          <ButtonIcon
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
            variant="red"
            className="absolute left-4 top-4"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}
      <>
        {isCreating || isEditing ? (
          <SpinnerMini />
        ) : (
          <Button variant="primary" type="submit">
            تایید
          </Button>
        )}
      </>
    </form>
  );
}

export default CreatePostForm;
