"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signinApi } from "@/services/authService";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import SpinnerMini from "@/ui/SpinnerMini";

// export const metadata = {
//   title: "ثبت نام",
// };

const schema = yup
  .object({
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup.string().required("رمز عبور الزامی است"),
  })
  .required();

function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(schema), mode: "onTouched" });

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };
  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
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
        <Link href="/signup" className="text-center text-secondary-500 mt-6">
          ثبت‌نام
        </Link>
      </form>
    </div>
  );
}

export default Signin;
