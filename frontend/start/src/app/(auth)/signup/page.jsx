"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import SpinnerMini from "@/ui/SpinnerMini";

// export const metadata = {
//   title: "ثبت نام",
// };

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی کمتر از 5 کاراکتر است")
      .max(30, "نام و نام خانوادگی بیشتر از 30 کاراکتر است")
      .required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(schema), mode: "onTouched" });

  const { signup } = useAuth();

  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ثبت‌نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          name="name"
          label="نام و نام خانوادگی"
          register={register}
          errors={errors}
        />
        <RHFTextField
          name="email"
          label="ایمیل"
          register={register}
          dir="ltr"
          errors={errors}
        />
        <RHFTextField
          name="password"
          label="رمز عبور"
          register={register}
          type="password"
          dir="ltr"
          errors={errors}
        />
        {isLoading ? (
          <div className="flex justify-center items-center">
            <SpinnerMini />
          </div>
        ) : (
          <Button type="submit" variant="primary" className="w-full">
            تایید
          </Button>
        )}
        <Link href="/signin" className="text-center text-secondary-500 mt-6">
          ورود
        </Link>
      </form>
    </div>
  );
}

export default Signup;
